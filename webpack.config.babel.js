import path from 'path'
import eslintFormatter from 'eslint-friendly-formatter'
import webpack from 'webpack'
import merge from 'webpack-merge'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import CleanWebpackPlugin from 'clean-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import WebpackBrowserPlugin from 'webpack-browser-plugin'

// PATHS
const PATH_ROOT = path.resolve(__dirname, '.')
const PATH_SRC = path.resolve(__dirname, './src')
const PATH_DIST = path.resolve(__dirname, './dist')
const PATH_MODULES = path.resolve(__dirname, './node_modules')

// VARIABLES
const ENV = process.env.NODE_ENV
const PROD = ENV === 'production'
const DEV = ENV === 'development'

// FULL CONFIG
let webpackConfig = null

// BASE WEBPACK CONFIGURATION
const baseConfig = {
  context: PATH_SRC,
  entry: './main.jsx',
  output: {
    path: PATH_DIST,
    filename: PROD ? '[name]-[hash].js' : 'bundle.js',
    publicPath: '/',
    chunkFilename: '[name]-[chunkhash].js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json', '.scss', '.css'],
    fallback: [PATH_MODULES]
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: false
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loader: 'eslint',
        include: PATH_ROOT,
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.scss$/,
        loader: 'sass'
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  plugins: [
    // HTML injection
    new HtmlWebpackPlugin({
      filename: '200.html',
      template: './index.html'
    })
  ],
  eslint: {
    formatter: eslintFormatter
  }
}

// PRODUCTION ONLY CONFIG
if (PROD) {
  webpackConfig = merge(baseConfig, {
    devtool: null,
    plugins: [
      // set the env variable
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
      }),
      // clean out dist folder
      new CleanWebpackPlugin([ PATH_DIST ], {
        verbose: true
      }),
      // common chunks
      new webpack.optimize.CommonsChunkPlugin({
        name: 'main',
        children: true,
        minChunks: 2
      }),
      // This plugin looks for similar chunks and files
      // and merges them for better caching by the user
      new webpack.optimize.DedupePlugin(),
      // This plugin prevents Webpack from creating chunks
      // that would be too small to be worth loading separately
      new webpack.optimize.MinChunkSizePlugin({
        minChunkSize: 51200 // ~50kb
      }),
      // minify with dead-code elimination
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      }),
      // optimize module ids by occurence count
      new webpack.optimize.OccurenceOrderPlugin(),
      // extract the css into a separate file
      new ExtractTextPlugin('[name].[contenthash].css')
    ]
  })
// DEV ONLY CONFIG
} else if (DEV) {
  webpackConfig = merge(baseConfig, {
    debug: true,
    devtool: 'eval',
    plugins: [
      // HMR
      new webpack.HotModuleReplacementPlugin(),
      // open browser
      new WebpackBrowserPlugin()
    ],
    devServer: {
      port: 3000,
      stats: { colors: true },
      colors: true,
      inline: true,
      hot: true,
      contentBase: PATH_DIST,
      historyApiFallback: {
        index: '/200.html'
      }
    }
  })
}

export default webpackConfig
