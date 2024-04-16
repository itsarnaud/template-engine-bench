const { Liquid } = require('liquidjs');
const engine = new Liquid();

module.exports = {
  name: 'liquidjs',
  ext: 'liquid',
  render: async function(template, data) {
    return result = await engine.renderFileSync(template, data);
  }
}