const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: path.resolve(__dirname, './src/index.js')
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
    assetModuleFilename: "[name][ext]",
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.json$/,
        loader: 'json-loader',
        type: 'javascript/auto'
      },
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
        type: 'asset/inline',
      },
      {
        test: /\.svg$/,
        type: 'asset/inline',
      },
      {
        test: /\.(jpg|png|webp)$/,
        type: 'asset/resource',
      }
    ]
  },
  plugins: [
    // Home
    new HtmlWebpackPlugin({
      title: 'Welcome to TravelPro',
      description: 'Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu`il est prêt ou que la mise en page est achevée.',
      template: path.resolve(__dirname, './src/fr/index.html'),
      filename: 'fr/index.html'
    }),
    new HtmlWebpackPlugin({
      title: 'Welcome to TravelPro',
      description: 'Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu`il est prêt ou que la mise en page est achevée.',
      template: path.resolve(__dirname, './src/en/index.html'),
      filename: 'en/index.html'
    }),

    // Business travel
    new HtmlWebpackPlugin({
      title: 'Welcome to TravelPro',
      description: 'Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu`il est prêt ou que la mise en page est achevée.',
      template: path.resolve(__dirname, './src/fr/business-travel.html'),
      filename: 'fr/business-travel.html',
    }),
    new HtmlWebpackPlugin({
      title: 'Welcome to TravelPro',
      description: 'Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu`il est prêt ou que la mise en page est achevée.',
      template: path.resolve(__dirname, './src/en/business-travel.html'),
      filename: 'en/business-travel.html',
    }),


    // About us
    new HtmlWebpackPlugin({
      title: 'Welcome to TravelPro',
      description: 'Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu`il est prêt ou que la mise en page est achevée.',
      template: path.resolve(__dirname, './src/fr/about-us.html'),
      filename: 'fr/about-us.html',
    }),
    new HtmlWebpackPlugin({
      title: 'Welcome to TravelPro',
      description: 'Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu`il est prêt ou que la mise en page est achevée.',
      template: path.resolve(__dirname, './src/en/about-us.html'),
      filename: 'en/about-us.html',
    }),


    // Blog
    new HtmlWebpackPlugin({
      title: 'Welcome to TravelPro',
      description: 'Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu`il est prêt ou que la mise en page est achevée.',
      template: path.resolve(__dirname, './src/fr/blog.html'),
      filename: 'fr/blog.html',
    }),
    new HtmlWebpackPlugin({
      title: 'Welcome to TravelPro',
      description: 'Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu`il est prêt ou que la mise en page est achevée.',
      template: path.resolve(__dirname, './src/en/blog.html'),
      filename: 'en/blog.html',
    }),

    // Articles
    new HtmlWebpackPlugin({
      title: 'Welcome to TravelPro',
      description: 'Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu`il est prêt ou que la mise en page est achevée.',
      template: path.resolve(__dirname, './src/fr/articles/template.html'),
      filename: 'fr/articles/template.html',
    }),
    new HtmlWebpackPlugin({
      title: 'Welcome to TravelPro',
      description: 'Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu`il est prêt ou que la mise en page est achevée.',
      template: path.resolve(__dirname, './src/en/template.html'),
      filename: 'en/template.html',
    }),


    new HtmlWebpackPlugin({
      title: 'Welcome to TravelPro',
      description: 'Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu`il est prêt ou que la mise en page est achevée.',
      template: path.resolve(__dirname, './src/fr/contact.html'),
      filename: 'fr/contact.html',
    }),
    new HtmlWebpackPlugin({
      title: 'Welcome to TravelPro',
      description: 'Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu`il est prêt ou que la mise en page est achevée.',
      template: path.resolve(__dirname, './src/en/contact.html'),
      filename: 'en/contact.html',
    }),

    new HtmlWebpackPlugin({
      title: 'Welcome to TravelPro',
      description: 'Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu`il est prêt ou que la mise en page est achevée.',
      template: path.resolve(__dirname, './src/fr/request-demo.html'),
      filename: 'fr/request-demo.html',
    }),
    new HtmlWebpackPlugin({
      title: 'Welcome to TravelPro',
      description: 'Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu`il est prêt ou que la mise en page est achevée.',
      template: path.resolve(__dirname, './src/en/request-demo.html'),
      filename: 'en/request-demo.html',
    }),

    new HtmlWebpackPlugin({
      title: 'Welcome to TravelPro',
      description: 'Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu`il est prêt ou que la mise en page est achevée.',
      template: path.resolve(__dirname, './src/fr/404.html'),
      filename: 'fr/404.html',
    }),
    new HtmlWebpackPlugin({
      title: 'Welcome to TravelPro',
      description: 'Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu`il est prêt ou que la mise en page est achevée.',
      template: path.resolve(__dirname, './src/en/404.html'),
      filename: 'en/404.html',
    })
  ]
};