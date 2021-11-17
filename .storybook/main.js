const path = require('path')

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "webpackFinal": async (config) => {
    config.resolve.alias["@components"] = path.resolve(__dirname, "../src/components");
    config.resolve.alias["@hooks"] = path.resolve(__dirname, "../src/hooks");
    return config;
    
  },
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app"
  ]
}