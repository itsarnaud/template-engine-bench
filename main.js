const fs      = require('fs');
const data    = require('./templates/friends/data');

const templateDirs  = fs.readdirSync('./templates');
const engineDirs    = fs.readdirSync('./engines');

const bench = (engine, template, data, n) => {
  const start = Date.now();
  for (let i = 0; i < n; i++) {
    engine.render(template, data);
  }
  const end = Date.now();
  return end - start;
}

for (let dir of templateDirs) { 

  const data = './templates/' + dir + '/data.js';

  for (let engine of engineDirs ) {
    const engineName = engine.split('.').slice(0, -1).toString();
    const enginePath = require('./engines/' + engineName);

    const templatePath = './templates/' + dir + '/template.' + enginePath.ext;
    const n            = 5000;

    const benchmark = bench(enginePath, templatePath, data, n)
    console.log(`Le moteur ${engineName} à mis ${benchmark}ms à rendre ${n} fois le template ${dir}`);
  };
  
};