const fs = require('fs');

const templateDirs  = fs.readdirSync('./templates');
const engineDirs    = fs.readdirSync('./engines');

const bench = (engine, template, data, n) => {
  const start = Date.now();
  for (let i = 0; i < n; i++) {
    engine.render(template, data);
  }
  const end = Date.now();
  return end - start;
};

let results = '# RENDER \n';

for (let dir of templateDirs) { 

  const dataPath = './templates/' + dir + '/data.js';
  let data;

  if (fs.existsSync(dataPath)) {
    data = require(dataPath);
  } else {
    data = {};
  }
  
  const n  = 10000;
  results += `\n ### ${dir} (runned ${n} times) \n`;

  let benchmarks = [];

  for (let engine of engineDirs ) {
    const engineName = engine.split('.').slice(0, -1).toString();
    const enginePath = require('./engines/' + engine);

    const templatePath = './templates/' + dir + '/template.' + enginePath.ext;
    if (!fs.existsSync(templatePath)) {
      continue;
    }
    console.log(`${engineName} working on ${dir}...`);
    const benchmark = bench(enginePath, templatePath, data, n)
    console.log(`${engineName} has finished to work !`)
    benchmarks.push({ engineName, benchmark});
  };

  benchmarks.sort((a, b) => a.benchmark - b.benchmark);

  for (let { engineName, benchmark } of benchmarks) {
    results += `\`${engineName}\` => **${benchmark}ms** <br/> \n`;
  }
  
};

fs.writeFileSync('readme.md', results);