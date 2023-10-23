import './styles/main.scss';



document.addEventListener('DOMContentLoaded', () => {
 
  const header = document.querySelector('.tp-header');
  const triggerNavMobile = document.querySelector('#triggerNavMobile');
  const navMobile = document.querySelector('.tp-header__row-2');

  triggerNavMobile.addEventListener('click', () => {
    navMobile.classList.toggle('nav-open');
  });

  window.addEventListener('scroll', () => {
    if(window.scrollY > 0) {
      header.classList.add('tp-header--scroll');
    }
    else {
      header.classList.remove('tp-header--scroll');
    }
  })
});