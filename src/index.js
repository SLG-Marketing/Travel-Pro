import './styles/main.scss';

import './components/header';
import './components/footer';
import './components/team-banner';
import './components/newsletter';

import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';

import TabsAutomatic from './scripts/tabs';
import expands from './scripts/expand';
import expands2 from './scripts/expand-2';

import articlesJSON from '/public/articles.json';

document.addEventListener('DOMContentLoaded', () => {
  // init Swiper:
  const swiper = new Swiper('.tp-swiper', {
    loop: true,
    spaceBetween: 8,
    slidesPerView: 1.2,
    modules: [Navigation, Pagination],
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      576: {
        spaceBetween: 24,
        slidesPerView: 2.5
      },
    }
  });

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


  if(document.querySelector('#toggle-ally-animation')) {
    const triggerAllyMotion = document.querySelector('#toggle-ally-animation');

    triggerAllyMotion.addEventListener('click', () => {
      if(automaticSwiper.autoplay.paused) {
        swiper.params.speed = 10000;
        automaticSwiper.autoplay.resume();
        triggerAllyMotion.innerHTML = `<i class="${triggerAllyMotion.dataset.pauseIcon}"></i> ${triggerAllyMotion.dataset.pauseText}`
        console.log('start');
      }
      else {
        swiper.params.speed = 1000;
        automaticSwiper.autoplay.pause();
        triggerAllyMotion.innerHTML = `<i class="${triggerAllyMotion.dataset.startIcon}"></i> ${triggerAllyMotion.dataset.startText}`
        console.log('pause');
      }
    });
  }
  

  window.addEventListener('load', function () {
    var tablists = document.querySelectorAll('[role=tablist].tp-tabs');
    for (var i = 0; i < tablists.length; i++) {
      new TabsAutomatic(tablists[i]);
    }
  });

  expands.init();
  expands2.init();


  let articles = "";
  let defaultLoadedArticles = "";

  const articlesList = document.querySelector('#articles-list');
  const loadMoreButton = document.querySelector('#load-more');
  const filterButtons = document.querySelectorAll('[data-filter]');

  // Affiche les articles
  function renderArticles() {
    articlesList.innerHTML = '';

    for (const article of articles) {

      let category = "";
      const col = document.createElement('div');
      col.classList.add('tp-flex__col');
      col.classList.add('tp-flex__col-md-4');
      col.classList.add('tp-flex__col-sm-6');

      if(article.category != "") {
        category = `<div class="tp-badge tp-badge--primary-100">${article.category}</div>`;
      }

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
  loadMoreButton.addEventListener('click', () => {
    // Récupère les articles suivants
    fetch('articles.json').then(response => response.json()).then(data => {
      // Filtre les articles déjà affichés
      const articlesNonAffichees = data.slice(defaultLoadedArticles.length, data.length);

      // Ajoute les articles supplémentaires à la liste
      defaultLoadedArticles.push(...articlesNonAffichees);

      console.log(defaultLoadedArticles)
      renderArticles();
      loadMoreButton.style.display = "none"
    });
  });

  // Met à jour la liste d'articles en fonction des filtres
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

  // Charge les articles
  fetch('articles.json').then(response => response.json()).then(data => {
    defaultLoadedArticles = data.slice(0, 6);

    articles = defaultLoadedArticles;
    renderArticles();
  });
});