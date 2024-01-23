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
      title: 'Travel Pro : Solutions Complètes de Voyages d Affaires | Services 24/7 & Réservation en Ligne',
      description: 'Découvrez Travel Pro pour vos besoins de voyage d affaires. Offrant des réservations via outil en ligne ou agent, service 24/7, systèmes de rapport, paiements virtuels et alertes de voyage. Réservez vols, hôtels, locations de voiture et trains facilement.',
      template: path.resolve(__dirname, './src/fr/index.html'),
      filename: 'fr/index.html'
    }),
    new HtmlWebpackPlugin({
      title: 'Travel Pro: Comprehensive Business Travel Solutions | 24/7 Services & Online Booking',
      description: 'Explore Travel Pro for your business travel needs. Offering both online tool and agent reservations, 24/7 service, reporting systems, virtual payments, and travel alerts. Book flights, hotels, car rentals, and trains with ease.',
      template: path.resolve(__dirname, './src/en/index.html'),
      filename: 'en/index.html'
    }),
    new HtmlWebpackPlugin({
      title: 'Travel Pro: Umfassende Geschäftsreiselösungen | 24/7 Service & Online-Buchung',
      description: 'Entdecken Sie Travel Pro für Ihre Geschäftsreisebedürfnisse. Wir bieten Reservierungen über ein Online-Tool oder einen Agenten, 24/7 Service, Berichtssysteme, virtuelle Zahlungen und Reisealarme. Buchen Sie Flüge, Hotels, Mietwagen und Züge mit Leichtigkeit.',
      template: path.resolve(__dirname, './src/de/index.html'),
      filename: 'de/index.html'
    }),


    // Business travel
    new HtmlWebpackPlugin({
      title: 'Voyage d Affaires avec Travel Pro : Réservation en Ligne Facile & Support 24/7',
      description: 'Découvrez les solutions de voyage d affaires personnalisées avec Travel Pro. Réservations en ligne faciles, assistance d agent, service client 24/7, reporting avancé et systèmes de paiement virtuels pour vos voyages d affaires.',
      template: path.resolve(__dirname, './src/fr/business-travel.html'),
      filename: 'fr/business-travel.html',
    }),
    new HtmlWebpackPlugin({
      title: 'Business Travel with Travel Pro: Easy Online Booking & 24/7 Support',
      description: 'Discover customized business travel solutions with Travel Pro. Easy online bookings, agent assistance, 24/7 customer service, advanced reporting, and virtual payment systems for your business trips.',
      template: path.resolve(__dirname, './src/en/business-travel.html'),
      filename: 'en/business-travel.html',
    }),
    new HtmlWebpackPlugin({
      title: 'Geschäftsreisen mit Travel Pro: Einfache Online-Buchung & 24/7 Unterstützung',
      description: 'Entdecken Sie maßgeschneiderte Geschäftsreiselösungen mit Travel Pro. Einfache Online-Buchungen, Agentenhilfe, 24/7 Kundenservice, fortschrittliches Reporting und virtuelle Zahlungssysteme für Ihre Geschäftsreisen.',
      template: path.resolve(__dirname, './src/de/business-travel.html'),
      filename: 'de/business-travel.html',
    }),


    // About us
    new HtmlWebpackPlugin({
      title: 'À Propos de Travel Pro : Leader des Agences de Voyage d Affaires au Luxembourg Depuis 1993',
      description: 'Apprenez en plus sur Travel Pro, établi en 1993 et maintenant la plus grande agence de voyage d affaires du Luxembourg. Expertise dans la fourniture de services et solutions de voyage de premier plan pour les entreprises. Découvrez notre parcours et nos valeurs.',
      template: path.resolve(__dirname, './src/fr/about-us.html'),
      filename: 'fr/nous.html',
    }),
    new HtmlWebpackPlugin({
      title: 'About Travel Pro: Leading Business Travel Agency in Luxembourg Since 1993',
      description: 'Learn about Travel Pro, established in 1993 and now Luxembourg largest business travel agency. Expertise in providing top-tier travel services and solutions for businesses. Discover our journey and values.',
      template: path.resolve(__dirname, './src/en/about-us.html'),
      filename: 'en/about-us.html',
    }),
    new HtmlWebpackPlugin({
      title: 'Über Travel Pro: Führende Geschäftsreiseagentur in Luxemburg Seit 1993',
      description: 'Erfahren Sie mehr über Travel Pro, gegründet 1993 und jetzt die größte Geschäftsreiseagentur in Luxemburg. Expertise in der Bereitstellung erstklassiger Reisedienstleistungen und -lösungen für Unternehmen. Entdecken Sie unsere Geschichte und Werte.',
      template: path.resolve(__dirname, './src/de/about-us.html'),
      filename: 'de/about-us.html',
    }),


    // Blog
    new HtmlWebpackPlugin({
      title: 'Blog de Travel Pro : Aperçus et Tendances dans l Industrie du Voyage d Affaires',
      description: 'Plongez dans le blog de Travel Pro pour les dernières informations, tendances et rapports dans l industrie du voyage d affaires. Obtenez des conseils précieux pour les voyageurs et restez à jour avec nos aperçus et conseils d experts.',
      template: path.resolve(__dirname, './src/fr/blog.html'),
      filename: 'fr/blog.html',
    }),
    new HtmlWebpackPlugin({
      title: 'Travel Pro Blog: Insights and Trends in Business Travel Industry',
      description: 'Dive into the Travel Pro blog for the latest information, trends, and reports in the business travel industry. Get valuable tips for travelers and stay updated with our expert insights and advice.',
      template: path.resolve(__dirname, './src/en/blog.html'),
      filename: 'en/blog.html',
    }),
    new HtmlWebpackPlugin({
      title: 'Travel Pro Blog: Einblicke und Trends in der Geschäftsreisebranche',
      description: 'Tauchen Sie ein in den Travel Pro Blog für die neuesten Informationen, Trends und Berichte in der Geschäftsreisebranche. Erhalten Sie wertvolle Tipps für Reisende und bleiben Sie mit unseren Experteneinblicken und Ratschlägen auf dem Laufenden.',
      template: path.resolve(__dirname, './src/de/blog.html'),
      filename: 'de/blog.html',
    }),



    // Articles
    new HtmlWebpackPlugin({
      title: 'Business Travel | Travel Pro',
      description: 'Travel Pro American Express GBT provides end-to-end corporate travel management services, meetings, and booking solutions. Explore our programs for business travelers.',
      template: path.resolve(__dirname, './src/fr/articles/article-1.html'),
      filename: 'fr/articles/article-1.html',
    }),
    new HtmlWebpackPlugin({
      title: 'Business Travel | Travel Pro',
      description: 'Travel Pro American Express GBT provides end-to-end corporate travel management services, meetings, and booking solutions. Explore our programs for business travelers.',
      template: path.resolve(__dirname, './src/en/articles/article-1.html'),
      filename: 'en/articles/article-1.html',
    }),
    new HtmlWebpackPlugin({
      title: 'Business Travel | Travel Pro',
      description: 'Travel Pro American Express GBT provides end-to-end corporate travel management services, meetings, and booking solutions. Explore our programs for business travelers.',
      template: path.resolve(__dirname, './src/de/articles/article-1.html'),
      filename: 'de/articles/article-1.html',
    }),



    new HtmlWebpackPlugin({
      title: 'Business Travel | Travel Pro',
      description: 'Travel Pro American Express GBT provides end-to-end corporate travel management services, meetings, and booking solutions. Explore our programs for business travelers.',
      template: path.resolve(__dirname, './src/fr/articles/article-2.html'),
      filename: 'fr/articles/article-2.html',
    }),
    new HtmlWebpackPlugin({
      title: 'Business Travel | Travel Pro',
      description: 'Travel Pro American Express GBT provides end-to-end corporate travel management services, meetings, and booking solutions. Explore our programs for business travelers.',
      template: path.resolve(__dirname, './src/en/articles/article-2.html'),
      filename: 'en/articles/article-2.html',
    }),
    new HtmlWebpackPlugin({
      title: 'Business Travel | Travel Pro',
      description: 'Travel Pro American Express GBT provides end-to-end corporate travel management services, meetings, and booking solutions. Explore our programs for business travelers.',
      template: path.resolve(__dirname, './src/de/articles/article-2.html'),
      filename: 'de/articles/article-2.html',
    }),


    // Article - 28-days-holiday-with-6-days-off.html 
    new HtmlWebpackPlugin({
      title: '28 jours de vacances avec seulement 6 jours de congé',
      description: 'Souvenez-vous, la clé pour profiter pleinement d un long séjour avec seulement six jours de congé est une planification réfléchie et un peu de créativité.',
      template: path.resolve(__dirname, './src/fr/articles/28-days-holiday-with-6-days-off.html'),
      filename: 'fr/articles/28-days-holiday-with-6-days-off.html',
    }),
    new HtmlWebpackPlugin({
      title: '28 days holiday with 6 days off',
      description: 'Remember, the key to enjoying an extended vacation with just 6 days off is thoughtful planning and a bit of creativity.',
      template: path.resolve(__dirname, './src/en/articles/28-days-holiday-with-6-days-off.html'),//+REMOVE ARTICLES AND MOVE TO MAIN FOLDER
      filename: 'en/articles/28-days-holiday-with-6-days-off.html',//+REMOVE ARTICLES AND MOVE TO MAIN FOLDER
    }),
    new HtmlWebpackPlugin({
      title: '28 Urlaubstage mit nur 6 freien Tagen',
      description: 'Denken Sie daran, der Schlüssel, um einen verlängerten Urlaub mit nur 6 freien Tagen zu genießen, ist eine durchdachte Planung und ein bisschen Kreativität.',
      template: path.resolve(__dirname, './src/de/articles/28-days-holiday-with-6-days-off.html'),
      filename: 'de/articles/28-days-holiday-with-6-days-off.html',
    }),

    // Article - 28-days-holiday-with-6-days-off.html
   
    new HtmlWebpackPlugin({
      title: '28 days holiday with 6 days off',
      description: 'Remember, the key to enjoying an extended vacation with just 6 days off is thoughtful planning and a bit of creativity.',
      template: path.resolve(__dirname, './src/en/articles/emirates-get-2000-skywards-miles-instantly.html'),
      filename: 'en/articles/emirates-get-2000-skywards-miles-instantly.html',
    }),


    // Contact
    new HtmlWebpackPlugin({
      title: 'Contactez Travel Pro : Pour Toutes Questions et Support en Voyage d Affaires',
      description: 'Contactez Travel Pro pour toute question ou assistance en voyage d affaires. Notre équipe est prête à fournir des conseils experts et un support pour vos besoins de voyage. Contactez-nous aujourd hui pour des solutions et services personnalisés.',
      template: path.resolve(__dirname, './src/fr/contact.html'),
      filename: 'fr/contact.html',
    }),
    new HtmlWebpackPlugin({
      title: 'Contact Travel Pro: Get in Touch for Business Travel Queries and Support',
      description: 'Reach out to Travel Pro for any business travel questions or assistance. Our team is ready to provide expert advice and support for your travel needs. Contact us today for personalized solutions and services.',
      template: path.resolve(__dirname, './src/en/contact.html'),
      filename: 'en/contact.html',
    }),
    new HtmlWebpackPlugin({
      title: 'Kontaktieren Sie Travel Pro: Ihre Anlaufstelle für Geschäftsreiseanfragen und Unterstützung',
      description: 'Kontaktieren Sie Travel Pro für Fragen oder Unterstützung bei Geschäftsreisen. Unser Team steht bereit, um Ihnen fachkundige Beratung und Unterstützung für Ihre Reisebedürfnisse zu bieten. Kontaktieren Sie uns heute für individuelle Lösungen und Dienstleistungen.',
      template: path.resolve(__dirname, './src/de/contact.html'),
      filename: 'de/contact.html',
    }),

    // Request Demo
    new HtmlWebpackPlugin({
      title: 'Demandez une Démo de Cytric avec Travel Pro : Outil de Voyage d Affaires Sur Mesure',
      description: 'Planifiez une démo avec Travel Pro pour découvrir Cytric, notre outil de réservation en ligne sur mesure pour le voyage d affaires. Découvrez comment Cytric peut être personnalisé pour répondre aux besoins uniques de gestion de voyage de votre entreprise.',
      template: path.resolve(__dirname, './src/fr/request-demo.html'),
      filename: 'fr/request-demo.html',
    }),
    new HtmlWebpackPlugin({
      title: 'Request a Demo of Cytric with Travel Pro: Tailored Business Travel Tool',
      description: 'Schedule a demo with Travel Pro to experience Cytric, our tailored online booking tool for business travel. Discover how Cytric can be customized to fit your company unique travel management needs.',
      template: path.resolve(__dirname, './src/en/request-demo.html'),
      filename: 'en/request-demo.html',
    }),
    new HtmlWebpackPlugin({
      title: 'Demo von Cytric bei Travel Pro Anfordern: Maßgeschneidertes Geschäftsreise-Tool',
      description: 'Vereinbaren Sie eine Demo mit Travel Pro, um Cytric, unser maßgeschneidertes Online-Buchungstool für Geschäftsreisen, kennenzulernen. Entdecken Sie, wie Cytric an die einzigartigen Reisemanagement-Bedürfnisse Ihres Unternehmens angepasst werden kann.',
      template: path.resolve(__dirname, './src/de/request-demo.html'),
      filename: 'de/request-demo.html',
    }),


    // Lead Form Contact us
    new HtmlWebpackPlugin({
      title: 'Merci de nous avoir contactés, nous vous recontacterons dès que possible!',
      description: 'En général, nous répondons dans un délai de 1 à 3 jours ouvrables. Nous vous contacterons soit par téléphone, soit par e-mail, alors restez attentif.',
      template: path.resolve(__dirname, './src/fr/lead-form-contact-us.html'),
      filename: 'fr/lead-form-contact-us.html',
    }),
    new HtmlWebpackPlugin({
      title: 'Thank you for contacting us, we ll be in touch!',
      description: 'We usually reply within 1-3 business days. We ll reach out either by phone or email, so keep an eye out.',
      template: path.resolve(__dirname, './src/en/lead-form-contact-us.html'),
      filename: 'en/lead-form-contact-us.html',
    }),
    new HtmlWebpackPlugin({
      title: 'Vielen Dank, dass Sie sich bei uns gemeldet haben, wir werden uns in Kürze bei Ihnen melden!',
      description: 'Normalerweise antworten wir innerhalb von 1-3 Werktagen. Wir werden entweder telefonisch oder per E-Mail Kontakt aufnehmen, also halten Sie Ausschau.',
      template: path.resolve(__dirname, './src/de/lead-form-contact-us.html'),
      filename: 'de/lead-form-contact-us.html',
    }),


    // Lead Form Request Demo
    new HtmlWebpackPlugin({
      title: 'Merci de nous avoir contactés, nous vous recontacterons dès que possible!',
      description: 'En général, nous répondons dans un délai de 1 à 3 jours ouvrables. Nous vous contacterons soit par téléphone, soit par e-mail, alors restez attentif.',
      template: path.resolve(__dirname, './src/fr/lead-form-request-demo.html'),
      filename: 'fr/lead-form-request-demo.html',
    }),
    new HtmlWebpackPlugin({
      title: 'Thank you for contacting us, we ll be in touch!',
      description: 'We usually reply within 1-3 business days. We ll reach out either by phone or email, so keep an eye out.',
      template: path.resolve(__dirname, './src/en/lead-form-request-demo.html'),
      filename: 'en/lead-form-request-demo.html',
    }),
    new HtmlWebpackPlugin({
      title: 'Vielen Dank, dass Sie sich bei uns gemeldet haben, wir werden uns in Kürze bei Ihnen melden!',
      description: 'Normalerweise antworten wir innerhalb von 1-3 Werktagen. Wir werden entweder telefonisch oder per E-Mail Kontakt aufnehmen, also halten Sie Ausschau.',
      template: path.resolve(__dirname, './src/de/lead-form-request-demo.html'),
      filename: 'de/lead-form-request-demo.html',
    }),


    // Lead Form Newsletter
    new HtmlWebpackPlugin({
      title: 'Merci de vous être abonné(e) !',
      description: 'Vous vous êtes abonné(e) avec succès à notre newsletter.',
      template: path.resolve(__dirname, './src/fr/lead-form-newsletter.html'),
      filename: 'fr/lead-form-newsletter.html',
    }),
    new HtmlWebpackPlugin({
      title: 'Thank you for subscribing!',
      description: 'You have successfully subscribed to our newsletter.',
      template: path.resolve(__dirname, './src/en/lead-form-newsletter.html'),
      filename: 'en/lead-form-newsletter.html',
    }),
    new HtmlWebpackPlugin({
      title: 'Vielen Dank für Ihr Abonnement!',
      description: 'Sie haben sich erfolgreich für unseren Newsletter angemeldet.',
      template: path.resolve(__dirname, './src/de/lead-form-newsletter.html'),
      filename: 'de/lead-form-newsletter.html',
    }),


    // Page 404
    new HtmlWebpackPlugin({
      title: '404 : Page Non Trouvée | Travel Pro',
      description: 'Oups ! La page que vous recherchez est introuvable. Mais ne vous inquiétez pas, vous pouvez retourner à notre page d accueil ou continuer à explorer notre site.',
      template: path.resolve(__dirname, './src/fr/404.html'),
      filename: 'fr/404.html',
    }),
    new HtmlWebpackPlugin({
      title: '404: Page Not Found | Travel Pro',
      description: 'Oops! The page you re looking for can t be found. But don t worry, you can return to our homepage or continue exploring our site.',
      template: path.resolve(__dirname, './src/en/404.html'),
      filename: 'en/404.html',
    }),
    new HtmlWebpackPlugin({
      title: '404: Seite Nicht Gefunden | Travel Pro',
      description: 'Hoppla! Die Seite, die Sie suchen, wurde nicht gefunden. Aber keine Sorge, Sie können zu unserer Startseite zurückkehren oder weiterhin unsere Website erkunden.',
      template: path.resolve(__dirname, './src/de/404.html'),
      filename: 'de/404.html',
    })
  ]
};