const { Liquid } = require('liquidjs');
const engine = new Liquid();

module.exports = {
  name: 'liquidjs',
  ext: 'liquid',
  render: function(template, data) {
    return engine.renderFileSync(template, data);
  }
}