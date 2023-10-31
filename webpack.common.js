const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    main: path.resolve(__dirname, './src/index.js')
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      // JavaScript
      {
        test: /\.js$/, // Tous les fichiers JS
        exclude: /node_modules/, // Sauf ceux qui sont dans node_modules
        use: ['babel-loader'], // Sont transpilés à l'aide de babel-loader (remplacer par typescript-loader si on passe de ts à js)
      },

      /*
        Si le type = 'asset/resource' alors le fichier sera traité comme une ressource et sera placé dans un dossier lors du build.
        Si le type = 'asset/inline' alors le fichier sera intégré directement là où il a été appelé. Par exemple une font de type asset/inline sera encodé dans le fichier css minifié du dossier dist
      */
      {
        test: /\.(woff(2)?|eot|ttf|otf|)$/,
        type: 'asset/resource',
        generator: {
          publicPath: 'assets/fonts/' , // Chemin ajouté devant le nom de la font dans le fichier css
          outputPath: 'assets/fonts', // Nom du dossier dans lequel est stocké la font
        },
      },
      {
        test: /\.svg$/,
        type: 'asset/inline',
      },
      {
        test: /\.(jpg|png|webp)$/,
        type: 'asset/resource',
        generator: {
          publicPath: 'assets/images/', // Chemin ajouté devant le nom de l'image dans le fichier html
          outputPath: 'assets/images', // Nom du dossier dans lequel est stocké l'image
        },
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '',
      description: '',
      template: path.resolve(__dirname, './src/index.html'),
      filename: 'index.html',
    }),
    new HtmlWebpackPlugin({
      title: '',
      description: '',
      template: path.resolve(__dirname, './src/business-travel.html'),
      filename: 'business-travel.html',
    }),
    new HtmlWebpackPlugin({
      title: '',
      description: '',
      template: path.resolve(__dirname, './src/about-us.html'),
      filename: 'about-us.html',
    }),
    new HtmlWebpackPlugin({
      title: '',
      description: '',
      template: path.resolve(__dirname, './src/blog.html'),
      filename: 'blog.html',
    }),
    new HtmlWebpackPlugin({
      title: '',
      description: '',
      template: path.resolve(__dirname, './src/contact.html'),
      filename: 'contact.html',
    }),
    new CleanWebpackPlugin()
  ]
};