const ejs = require('ejs');
const fs = require('fs');

module.exports = {
  name: 'ejs',
  ext: 'ejs',
  render: function(templatePath, data) {
    const template = fs.readFileSync(templatePath, 'utf-8');
    return ejs.render(template, data);
  }
};