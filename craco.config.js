const CracoAlias = require('craco-alias');

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        baseUrl: '.',
        tsConfigPath: './tsconfig.path.json'
      }
    }
  ],
  babel: {
    presets: ['@emotion/babel-preset-css-prop']
  }
};
