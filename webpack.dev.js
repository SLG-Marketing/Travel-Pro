const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true, // Permet de rediriger les 404 vers la page index.html
    static: path.resolve(__dirname, './public'), // Permet de se baser sur les fichiers du dossier dist
    watchFiles: ['src/*'], // Surveille les fichiers à hot reload
    open: true, // Ouvre le navigateur lorsque webpack est prêt
    hot: true, // Active le système de rechargement à chaud (rechargement automatique à la sauvegarde)
    port: 8081,
  },
  module: {
    rules: [
      {
        test: /\.json$/,
        loader: 'json-loader',
        type: 'javascript/auto'
      },
      {
        test: /\.(scss|css)$/,
        use: [
          'style-loader', // Permet de charger des fichiers CSS/SCSS dans le JS (import ./styles.css)
          'css-loader', // Permet d'interpréter les urls() qui sont dans les fichiers CSS/SCSS
          'sass-loader' // Compiles Sass to CSS,
        ]
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|)$/,
        type: 'asset/resource',
        generator: {
          publicPath: 'assets/fonts/' , // Chemin ajouté devant le nom de la font dans le fichier css
          outputPath: 'assets/fonts', // Nom du dossier dans lequel est stocké la font
        },
      }
    ]
  }
});