const pug = require('pug');

const CACHE = {};

module.exports = {
  name: 'pug',
  ext: 'pug',
  render: function(templatePath, data) {
    let template = CACHE[templatePath];
    if (!template) {
      template = pug.compileFile(templatePath);
      CACHE[templatePath] = template;
    }
    return template(data);
  }
}