const dust = require('dustjs-linkedin');
const fs = require('fs');

// Enable caching
dust.config.cache = true;

const CACHE = {};

module.exports = {
  name: 'dustjs',
  ext: 'dustjs',
  render: function(templatePath, data) {
    let templateName = CACHE[templatePath];

    if (!templateName) {
      // Read file content with explicit fd closing
      const fd = fs.openSync(templatePath, 'r');
      try {
        const stats = fs.fstatSync(fd);
        const buffer = Buffer.alloc(stats.size);
        fs.readSync(fd, buffer, 0, stats.size, 0);
        const content = buffer.toString('utf8');

        // Use template path as unique name
        templateName = templatePath;

        // Compile and load template
        const compiled = dust.compile(content, templateName);
        dust.loadSource(compiled);

        CACHE[templatePath] = templateName;
      } finally {
        fs.closeSync(fd);
      }
    }

    // Render synchronously
    let result = '';
    dust.render(templateName, data, function(err, out) {
      if (err) throw err;
      result = out;
    });

    return result;
  }
};
