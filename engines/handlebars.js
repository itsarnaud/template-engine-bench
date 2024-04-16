var Handlebars = require('handlebars');
var fs         = require('fs');

module.exports = {
    name: 'handlebars',
    ext: 'handlebars',
    render: function(templatePath, data) {
        var template = Handlebars.compile(fs.readFileSync(templatePath, 'utf8'));
        return template(data);
    }
};