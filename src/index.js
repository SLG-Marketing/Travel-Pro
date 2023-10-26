import './styles/main.scss';

import './components/header';
import './components/footer';

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';

import TabsAutomatic from './scripts/tabs';
import expands from './scripts/expand';

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

  
  window.addEventListener('load', function () {
    var tablists = document.querySelectorAll('[role=tablist].tp-tabs');
    for (var i = 0; i < tablists.length; i++) {
      new TabsAutomatic(tablists[i]);
    }
  });

  expands.init();
});