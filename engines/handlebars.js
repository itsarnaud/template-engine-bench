var Handlebars = require('handlebars');
var fs         = require('fs');

const CACHE = {};

module.exports = {
    name: 'handlebars',
    ext: 'handlebars',
    render: function(templatePath, data) {
        let template = CACHE[templatePath];
        if (!template) {
          template = Handlebars.compile(fs.readFileSync(templatePath, 'utf8'));
          CACHE[templatePath] = template;
        }
        return template(data);
    }
};