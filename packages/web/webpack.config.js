
const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const appDirectory = path.resolve(__dirname, './');

// This is needed for webpack to compile JavaScript.
// Many OSS React Native packages are not compiled to ES5 before being
// published. If you depend on uncompiled packages they may cause webpack build
// errors. To fix this webpack can be configured to compile to the necessary
// `node_module`.
const babelLoaderConfiguration = {
  test: /\.(ts|js)x?$/,
  // Add every directory that needs to be compiled by Babel during the build.
  include: [
    path.resolve(appDirectory, 'src'),
    path.resolve(appDirectory, '../components/src'),
    path.resolve(appDirectory, '../../node_modules'),
      path.resolve(appDirectory, './node_modules')
  ],
  use: {
    loader: "babel-loader",
    options: {
      presets: [
        [
          '@babel/preset-env',
          {
            "useBuiltIns": "entry",
            "corejs": 3
          }
        ],
        "@babel/preset-react",
        ['@babel/preset-typescript', {allowNamespaces: true}],
      ],
    },
  },
};

// This is needed for webpack to import static images in JavaScript files.
const imageLoaderConfiguration = {
  test: /\.(gif|jpe?g|png|svg)$/,
  use: {
    loader: 'url-loader',
    options: {
      name: '[name].[ext]'
    }
  }
};

const typescriptLoaderConfiguration = {
  test: /\.tsx?$/,
  use: 'ts-loader',
  exclude: /node_modules/,
};

const cssLoaderConfiguration = {
  test: /\.css$/,
  use:  ['style-loader', 'css-loader']
};

module.exports = {
  
  entry: [path.resolve(appDirectory, 'src/index.tsx')],

  // configures where the build ends up
  output: {
    filename: 'assets/js/[name].[contenthash:8].js',
    path: path.resolve(appDirectory, 'dist'),
    publicPath: ''
  },

  // ...the rest of your config

  module: {
    rules: [
      babelLoaderConfiguration,
      imageLoaderConfiguration,
      typescriptLoaderConfiguration,
      cssLoaderConfiguration
    ]
  },

  resolve: {
    // This will only alias the exact import "react-native"
    alias: {
      'react-native$': 'react-native-web'
    },
    // If you're working on a multi-platform React Native app, web-specific
    // module implementations should be written in files using the extension
    // `.web.js`.
    extensions: [ '.web.js', '.js', '.ts', '.tsx', '.web.ts', '.web.tsx' ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'assets/css/[name].[contenthash:8].css',
      chunkFilename: 'assets/css/[name].[contenthash:8].chunk.css'
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(appDirectory, 'public/index.html'),
      inject: true
    }),
    new CopyPlugin({
      patterns: [
        {
          from: 'public', to: '', filter: (resourcePath) => {
            return !resourcePath.includes('index.html');
          }
        }
      ]
    })
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserWebpackPlugin({
        terserOptions: {
          compress: {
            comparisons: false
          },
          mangle: {
            safari10: true
          },
          output: {
            comments: false,
            ascii_only: false
          },
          warnings: false
        }
      }),
      new OptimizeCssAssetsPlugin()
    ],
    splitChunks: {
      chunks: 'all',
      minSize: 20000,
      maxInitialRequests: 30,
      maxAsyncRequests: 30,
      minRemainingSize: 0,
      minChunks: 1,
      enforceSizeThreshold: 50000,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name(module, chunks, cacheGroupKey) {
            const packageName = module.context.match(
              /[\\/]node_modules[\\/](.*?)([\\/]|$)/
            )[1];
            return `${cacheGroupKey}.${packageName.replace("@", "")}`;
          },
          reuseExistingChunk: true
        },
        common: {
          minChunks: 2,
          priority: -10,
          reuseExistingChunk: true,
          test: /[\\/]components[\\/]src[\\/]/,
          chunks: 'all',
          minSize: 0
        }
      }
    },
    runtimeChunk: 'single'
  }
}