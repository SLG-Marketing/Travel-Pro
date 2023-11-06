// Import du fichier SCSS global
import './styles/main.scss';

// Import des web components FR
import './fr/components/header';
import './fr/components/footer';
import './fr/components/team-banner';
import './fr/components/newsletter';

// Import des web components DE
import './en/components/header';
import './en/components/footer';
import './en/components/team-banner';
import './en/components/newsletter';

// Import SwiperJS
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';

// Import du javascript des différents composants
import TabsAutomatic from './scripts/tabs';
import expands from './scripts/expand';
import expands2 from './scripts/expand-2';

// Import des fichiers de traductions JSON
import ENarticlesJSON from '/public/articles-en.json';
import FRarticlesJSON from '/public/articles-fr.json';
import DEarticlesJSON from '/public/articles-de.json';


// Lorsque le Document a fini de charger
document.addEventListener('DOMContentLoaded', () => {

  // Initialisation de SwiperJS
  const swiper = new Swiper('.tp-swiper', {
    loop: true, // Le swiper/carousel va boucler à l'infini
    spaceBetween: 8, // Espacement entre les slides
    slidesPerView: 1.2, // Affichage de 1.2 slides
    modules: [Navigation, Pagination], // Import des modules qui sont utilisés dans notre swiper/carousel
    navigation: { // Class des boutons pren/next
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: { // Pagination
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: { // Responsive
      576: { // à partir de 576px de large
        spaceBetween: 24, // On passe à 24px d'espacement entre les slides
        slidesPerView: 2.5 // On affiche 2.5 slides à la fois
      },
    }
  });

  // Initilisation de SwiperJS pour le carousel automatic des clients
  const automaticSwiper = new Swiper('.tp-automatic-swiper', {
    modules: [Autoplay],
    spaceBetween: 10,
    speed: 10000,
    loop: true,
    autoplay: {
      delay: 0.5,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
      },
      360: {
        slidesPerView: 3
      },
      768: {
        slidesPerView: 4
      },
      992: {
        slidesPerView: 6,
      }
    }
  });


  // Si l'on détecte la <div id="toggle-ally-animation">
  if(document.querySelector('#toggle-ally-animation')) {
    const triggerAllyMotion = document.querySelector('#toggle-ally-animation');

    // Au clic sur <div id="toggle-ally-animation">
    triggerAllyMotion.addEventListener('click', () => {
      if(automaticSwiper.autoplay.paused) { // Si au moment du clic le swiper est en mode pause
        swiper.params.speed = 10000; // On set une speed
        automaticSwiper.autoplay.resume(); // On relance le swiper

        // A l'interieur de <div id="toggle-ally-animation"> on remplace l'icone ainsi que le texte
        triggerAllyMotion.innerHTML = `<i class="${triggerAllyMotion.dataset.pauseIcon}"></i> ${triggerAllyMotion.dataset.pauseText}`;
      }
      else {
        swiper.params.speed = 1000;
        automaticSwiper.autoplay.pause();
        triggerAllyMotion.innerHTML = `<i class="${triggerAllyMotion.dataset.startIcon}"></i> ${triggerAllyMotion.dataset.startText}`
      }
    });
  }


  // Initialisation des tabs
  window.addEventListener('load', function () {
    var tablists = document.querySelectorAll('[role=tablist].tp-tabs');
    for (var i = 0; i < tablists.length; i++) {
      new TabsAutomatic(tablists[i]);
    }
  });

  // Initilisation des expands
  expands.init();
  expands2.init();



  // S'il y a une <div id="articles-list"> dans la page
  if(document.querySelector('#articles-list')) {
    let articles = "";
    let defaultLoadedArticles = "";
    let articlesJSON = "";
    let loadMoreButton = "";
    let filterButtons = "";
    let filters = "";

    const articlesList = document.querySelector('#articles-list');
    const lang = articlesList.dataset.lang;
    const urlFile = articlesList.dataset.url;
    const limit = articlesList.dataset.limit;
    
    if(document.querySelector('#filters')) { filters = document.querySelector('#filters'); }
    if(document.querySelector('#load-more')) { loadMoreButton = document.querySelector('#load-more'); }
    if(document.querySelector('[data-filter]')) { filterButtons = document.querySelectorAll('[data-filter]'); }

    switch(lang) {
      case 'en': articlesJSON = ENarticlesJSON; break; // articlesJSON contient les articles en EN
      case 'fr': articlesJSON = FRarticlesJSON; break; // articlesJSON contient les articles en FR
      case 'de': articlesJSON = DEarticlesJSON; break; // articlesJSON contient les articles en DE
      default: articlesJSON = ENarticlesJSON
    }

    // Affiche les articles
    function renderArticles() {
      articlesList.innerHTML = ''; // On vide la <div id="articles-list">

      for (const article of articles) {
        let category = "";
        const col = document.createElement('div'); // On créé une nouvelle <div>
        col.classList.add('tp-flex__col'); // On lui ajoute la class .tp-flex__col
        col.classList.add('tp-flex__col-md-4'); // On lui ajoute la class .tp-flex__col-md-4
        col.classList.add('tp-flex__col-sm-6'); // On lui ajoute la class .tp-flex__col-sm-6

        // Si l'article contient une catégorie
        if(article.category != "") {
          category = `<div class="tp-badge tp-badge--primary-100">${article.category}</div>`;
        }

        // Template HTML de l'article
        col.innerHTML = `
          <article class="tp-article-card">
            <a href="${article.url}">
              <div class="tp-article-card__image">
                ${category}
                <img src="${article.image.url}" alt="${article.image.alt}">
                <div class="tp-article-card__blur">
                  <i class="icon-time" aria-hidden="true"></i>
                  <p>${article['time-reading']}</p>
                </div>
              </div>
              <div class="tp-article-card__content">
                <h3 class="tp-heading tp-heading--h4 mb-16">${article.title}</h3>
                <p class="tp-paragraph tp-paragraph--16">${article.description}</p>
              </div>
            </a>
          </article>
        `;
        articlesList.appendChild(col);
      }
    }

    // Affiche plus d'articles
    if(loadMoreButton) {
      loadMoreButton.addEventListener('click', () => {
        // Récupère les articles suivants
        fetch(`../articles-${lang}.json`).then(response => response.json()).then(data => {
          // Filtre les articles déjà affichés
          const articlesNonAffichees = data.slice(defaultLoadedArticles.length, data.length);
  
          // Ajoute les articles supplémentaires à la liste
          defaultLoadedArticles.push(...articlesNonAffichees);
  
          renderArticles();
          loadMoreButton.style.display = "none"
        });
      });
    }
    
    // Met à jour la liste d'articles en fonction des filtres
    if(filters) {
      filters.querySelector('select').addEventListener('change', () => {
        const category = filters.querySelector('select').value;
  
        // Réinitialise la liste d'articles
        articles = [];
  
          // Ajoute les articles correspondant au filtre
          if (category === 'all') {
            for (const article of articlesJSON) {
              articles.push(article);
            }
          }
          else {
            for (const article of articlesJSON) {
              if (article.category === category) {
                articles.push(article);
              }
            }
          }
  
        // Affiche les articles
        renderArticles();
      });
    }

    if(filterButtons) {
      filterButtons.forEach(filterButton => {
        filterButton.addEventListener('click', () => {
          const filterValue = filterButton.dataset.filter;
  
          filterButtons.forEach(filterButton => {
            filterButton.classList.remove('tp-button--primary-900');
            filterButton.classList.add('tp-button--neutral-100');
          });
  
  
          filterButton.classList.add('tp-button--primary-900');
          filterButton.classList.remove('tp-button--neutral-100');
  
          // Réinitialise la liste d'articles
          articles = [];
  
          // Ajoute les articles correspondant au filtre
          if (filterValue === 'all') {
            for (const article of articlesJSON) {
              articles.push(article);
            }
          }
          else {
            for (const article of articlesJSON) {
              if (article.category === filterValue) {
                articles.push(article);
              }
            }
          }
  
          // Affiche les articles
          renderArticles();
        })
      })
    }

    // Charge les articles
    fetch(`${urlFile}articles-${lang}.json`).then(response => response.json()).then(data => {
      defaultLoadedArticles = data.slice(0, limit);

      articles = defaultLoadedArticles;
      renderArticles();
    });
  }
});