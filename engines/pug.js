const pug = require('pug');

module.exports = {
  name: 'pug',
  ext: 'pug',
  render: function(template, data) {
    const compiledFunction = pug.compileFile(template);
    return compiledFunction(data);
  }
}