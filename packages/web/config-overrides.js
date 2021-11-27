const { removeModuleScopePlugin, override, babelInclude, addBabelPlugins } = require("customize-cra");
const path = require("path");

module.exports = override(
  removeModuleScopePlugin(),        // (1)
  babelInclude([
    path.resolve("src"),
    path.resolve("../components/src"),  // (2)
    path.resolve('../../node_modules'),
    path.resolve('node_modules')
  ]),
  addBabelPlugins([require.resolve('babel-plugin-react-native-web')])
);