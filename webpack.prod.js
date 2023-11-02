const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { PurgeCSSPlugin } = require('purgecss-webpack-plugin');
const glob = require('glob');

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new PurgeCSSPlugin({
      paths: glob.sync(`dist/**/*`,  { nodir: true }),
    })
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: "styles",
          test: /\.css$/,
          chunks: "all",
          enforce: true,
        },
      },
    },
  },
  module: {
    rules: [
      // CSS, PostCSS, Sass
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader, // Permet d'extraire le CSS qui a été importé dans le dist/main.bundle.js et de le mettre dans un fichier à part
          'css-loader', // Permet d'interpréter les urls() qui sont dans les fichiers CSS/SCSS
          'sass-loader' // Compile Sass en CSS,
        ],
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|)$/,
        type: 'asset/resource',
        generator: {
          publicPath: '//assets/fonts/' , // Chemin ajouté devant le nom de la font dans le fichier css
          outputPath: 'assets/fonts', // Nom du dossier dans lequel est stocké la font
        },
      }
    ]
  }
});