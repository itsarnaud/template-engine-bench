const igodust = require('igo-dust');

module.exports = {
    name: 'igodust',
    ext: 'dust',
    render: function(template, data) {
      return igodust.renderFile(template, data);
    }
};