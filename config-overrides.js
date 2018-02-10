/*
Overiding webpack config for create-react-app, to run our custom
helpers and also force the dev server to save the served files to
disk, so that Chrome can serve them.

Related: https://github.com/facebook/create-react-app/issues/1070
         https://github.com/gajus/write-file-webpack-plugin
*/
const path = require("path");
const WriteFilePlugin = require("write-file-webpack-plugin");
const fs = require("fs-extra");

const helpers = require("./scripts/helpers");

module.exports = function override(config, env) {
  // Add plugin to write files to disk from webpack dev server
  config.output.path = path.join(__dirname, "./build");
  config.plugins.push(new WriteFilePlugin());

  // Copy public folder to build folder
  fs.removeSync("./build/"); // to clear the asset-manifest.json file
  fs.copySync("./public/", "./build/");

  // Run helper scripts
  helpers.updateBackground();
  helpers.updateManifestKey();

  // All config manipulation is complete
  return config;
};