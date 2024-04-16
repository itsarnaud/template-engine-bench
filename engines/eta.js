const { Eta }  = require('eta');
const path     = require('path');

const eta = new Eta({ views: path.join(__dirname, "..") })

module.exports = {
  name: 'eta',
  ext: 'eta',
  render: function(template, data) {
    return eta.render(template, data);
  }
};