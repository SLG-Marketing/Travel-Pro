import './styles/main.scss';

import './components/header';
import './components/footer';

import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';

import TabsAutomatic from './scripts/tabs';
import expands from './scripts/expand';
import expands2 from './scripts/expand-2';

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
        spaceBetween: 30,
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
});