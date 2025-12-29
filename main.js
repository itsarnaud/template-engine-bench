const fs = require('fs');

const bench = (engine, template, data, n) => {
  const start = Date.now();
  for (let i = 0; i < n; i++) {
    engine.render(template, data);
  }
  const end = Date.now();
  return end - start;
};

(async () => {

let templateDirs  = fs.readdirSync('./templates');
let engineDirs    = fs.readdirSync('./engines');

let enabledGroups  = [];
let enabledEngines = [];

if (enabledGroups && enabledGroups.length > 0) {
  templateDirs = templateDirs.filter(dir => enabledGroups.includes(dir));
}

if (enabledEngines && enabledEngines.length > 0) {
  engineDirs = engineDirs.filter(engine => enabledEngines.includes(engine.split('.').slice(0, -1).toString()));
}

// Load and initialize all engines
const engines = {};
for (let engine of engineDirs) {
  const engineName = engine.split('.').slice(0, -1).toString();
  engines[engineName] = require('./engines/' + engine);
  // Initialize engine if it has an init method (for ESM modules like Eta v4)
  if (engines[engineName].init) {
    await engines[engineName].init();
  }
}

let results = '## RENDER \n';

for (let dir of templateDirs) { 

  const dataPathJs   = './templates/' + dir + '/data.js';
  const dataPathJson = './templates/' + dir + '/data.json';
  let data;

  

  if (fs.existsSync(dataPathJs)) {
    data = require(dataPathJs);
  } else if (fs.existsSync(dataPathJson)) {
    data = require(dataPathJson)
  } else {
    data = {};
  }
  
  const n  = 2000; // Reduced from 5000 due to file descriptor limits in some environments
  results += `\n### ${dir} (runned ${n} times) \n`;

  let benchmarks = [];

  for (let engineName of Object.keys(engines)) {
    const enginePath = engines[engineName];

    const templatePath = './templates/' + dir + '/template.' + enginePath.ext;
    if (!fs.existsSync(templatePath)) {
      continue;
    }
    console.log(`${engineName} working on ${dir}...`);
    const benchmark = bench(enginePath, templatePath, data, n)
    console.log(`${engineName} has finished to work !\n`)
    benchmarks.push({ engineName, benchmark});
  };

  benchmarks.sort((a, b) => a.benchmark - b.benchmark);

  for (let { engineName, benchmark } of benchmarks) {
    results += `\`${engineName}\` => **${benchmark}ms** <br/> \n`;
  }

};

console.log('All good!');
let readmeContent = fs.readFileSync('readme.md', 'utf8');
let [before, between, after] = readmeContent.split(/(<!-- <render performance> -->[\s\S]*<!-- <end> -->)/);
between = '<!-- <render performance> -->\n' + results + '\n<!-- <end> -->';
readmeContent = before + between + after;
fs.writeFileSync('readme.md', readmeContent);

})().catch(err => {
  console.error('Error running benchmark:', err);
  process.exit(1);
});