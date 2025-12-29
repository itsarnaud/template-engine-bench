const path = require('path');

// Eta v4 is ESM-only, so we need to load it dynamically
let Eta;
let eta;

module.exports = {
  name: 'eta',
  ext: 'eta',
  async init() {
    if (!Eta) {
      const etaModule = await import('eta');
      Eta = etaModule.Eta;
      eta = new Eta({ views: path.join(__dirname, "..") });
    }
  },
  render: function(template, data) {
    return eta.render(template, data);
  }
};