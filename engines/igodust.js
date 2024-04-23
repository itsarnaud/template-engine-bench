const igodust = require('igo-dust');

igodust.configure({ cache: true });

module.exports = {
    name: 'igodust',
    ext: 'dust',
    render: function(template, data) {
      return igodust.renderFile(template, data);
    }
};