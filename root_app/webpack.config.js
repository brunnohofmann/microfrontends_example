const webpackMerge = require('webpack-merge');
const singleSpaDefaults = require('webpack-config-single-spa');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (webpackConfigEnv) => {
  const orgName = 'hofmann';

  const defaultConfig = singleSpaDefaults({
    orgName,
    projectName: 'root-config',
    webpackConfigEnv,
  });

  return webpackMerge.smart(defaultConfig, {
    entry: './src/index.js',
    externals: [...defaultConfig.externals, '@antd', 'react', 'react-dom', '@styled-components'],
    devServer: {
      historyApiFallback: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        inject: false,
        template: 'src/index.ejs',
        templateParameters: {
          isLocal: webpackConfigEnv && webpackConfigEnv.isLocal === 'true',
          orgName,
        },
      }),
    ],
  });
};
