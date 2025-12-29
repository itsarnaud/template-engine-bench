const ejs = require('ejs');
const fs = require('fs');

const CACHE = {};

module.exports = {
  name: 'ejs',
  ext: 'ejs',
  render: function(templatePath, data) {
    let template = CACHE[templatePath];
    if (!template) {
      // Read with explicit fd closing
      const fd = fs.openSync(templatePath, 'r');
      try {
        const stats = fs.fstatSync(fd);
        const buffer = Buffer.alloc(stats.size);
        fs.readSync(fd, buffer, 0, stats.size, 0);
        template = buffer.toString('utf-8');
        CACHE[templatePath] = template;
      } finally {
        fs.closeSync(fd);
      }
    }
    return ejs.render(template, data);
  }
};