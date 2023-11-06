const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true, // Permet de rediriger les 404 vers la page index.html
    static: path.resolve(__dirname, './public'), // Permet de se baser sur les fichiers du dossier dist
    watchFiles: ['src/**'], // Surveille les fichiers à hot reload
    hot: true, // Active le système de rechargement à chaud (rechargement automatique à la sauvegarde)
    port: 8081
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          'style-loader', // Permet de charger des fichiers CSS/SCSS dans le JS (import ./styles.css)
          'css-loader', // Permet d'interpréter les urls() qui sont dans les fichiers CSS/SCSS
          'sass-loader' // Compiles Sass to CSS,
        ]
      }
    ]
  }
});