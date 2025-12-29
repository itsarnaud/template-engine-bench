var Handlebars = require('handlebars');
var fs         = require('fs');

const CACHE = {};

module.exports = {
    name: 'handlebars',
    ext: 'handlebars',
    render: function(templatePath, data) {
        let template = CACHE[templatePath];
        if (!template) {
          // Read with explicit fd closing
          const fd = fs.openSync(templatePath, 'r');
          try {
            const stats = fs.fstatSync(fd);
            const buffer = Buffer.alloc(stats.size);
            fs.readSync(fd, buffer, 0, stats.size, 0);
            const content = buffer.toString('utf8');
            template = Handlebars.compile(content);
            CACHE[templatePath] = template;
          } finally {
            fs.closeSync(fd);
          }
        }
        return template(data);
    }
};