const igodust = require('igo-dust');

module.exports = {
    name: 'igodust',
    ext: 'dust',
    render: function(template, data) {
      igodust.renderFile(template, data);
      return
    }
};