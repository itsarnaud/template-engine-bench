const pug = require('pug');
const fs = require('fs');
const path = require('path');

const CACHE = {};

module.exports = {
  name: 'pug',
  ext: 'pug',
  render: function(templatePath, data) {
    let template = CACHE[templatePath];
    if (!template) {
      // Read file content manually with explicit fd closing
      const fd = fs.openSync(templatePath, 'r');
      try {
        const stats = fs.fstatSync(fd);
        const buffer = Buffer.alloc(stats.size);
        fs.readSync(fd, buffer, 0, stats.size, 0);
        const content = buffer.toString('utf8');
        template = pug.compile(content);
        CACHE[templatePath] = template;
      } finally {
        fs.closeSync(fd); // Explicitly close file descriptor
      }
    }
    return template(data);
  }
}