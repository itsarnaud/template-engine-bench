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

  const data = require('./templates/' + dir + '/data.js');
  results += `\n ### ${dir} \n`;

  let benchmarks = [];

  for (let engine of engineDirs ) {
    const engineName = engine.split('.').slice(0, -1).toString();
    const enginePath = require('./engines/' + engineName);

    const templatePath = './templates/' + dir + '/template.' + enginePath.ext;
    const n            = 5000;

    const benchmark = bench(enginePath, templatePath, data, n)
    benchmarks.push({ engineName, benchmark });
  };

  benchmarks.sort((a, b) => a.benchmark - b.benchmark);

  for (let { engineName, benchmark } of benchmarks) {
    results += `\`${engineName}\` => **${benchmark}ms** <br/> \n`;
  }
  
};

fs.writeFileSync('readme.md', results);