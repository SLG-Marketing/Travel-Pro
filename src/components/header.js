import logoTravelProAE from '../assets/images/travelpro-logo-header.svg';

export default class Header extends HTMLElement {
  constructor() {
    super();

    this._header = "";
    this._triggerNavMobile = "";
    this._navMobile = "";
    this._active = "";
  }

  connectedCallback() {
    this._active = this.getAttribute('active');
    
    this.innerHTML = `<header role="banner" class="tp-header">
                        <div class="tp-header__row-1">
                          <div class="tp-container">
                            <div class="tp-header__row-1__left">
                              <a href="#"><img src="${logoTravelProAE}" alt=""></a>
                            </div>
                            <div class="tp-header__row-1__right">
                              <a href="#" class="tp-link d-f-lg">Careers <i class="icon-arrow-up-right-from-square" aria-hidden="true"></i></a>
                              <a href="#" class="tp-link"><i class="icon-globe" aria-hidden="true"></i> EN</a>

                              <a href="#" class="tp-button tp-button--primary h-xs d-f-sm h-lg">Request Demo</a>

                              <button class="tp-nav-mobile-trigger h-lg" aria-label="Ouvrir menu" id="triggerNavMobile" aria-expanded="false"><i class="icon-bars" aria-hidden="true"></i></button>
                            </div>
                          </div>
                        </div>

                        <div class="tp-header__row-2">
                          <div class="tp-container">
                            <div class="tp-header__row-2__left">
                              <nav class="tp-nav">
                                <ul>
                                  <li class="tp-nav__item ${this._active === 'home' ? `tp-nav__item--selected` : ''}"><a href="index.html">Home</a></li>
                                  <li class="tp-nav__item ${this._active === 'business-travel' ? `tp-nav__item--selected` : ''}"><a href="business-travel.html">Business Travel</a></li>
                                  <li class="tp-nav__item ${this._active === 'about-us' ? `tp-nav__item--selected` : ''}"><a href="about-us.html">About us</a></li>
                                  <li class="tp-nav__item ${this._active === 'blog' ? `tp-nav__item--selected` : ''}"><a href="blog.html">Blog</a></li>
                                  <li class="tp-nav__item ${this._active === 'contact' ? `tp-nav__item--selected` : ''}"><a href="contact.html">Contact us</a></li>
                                </ul>
                              </nav>
                              <a href="#" class="tp-link h-lg">Careers <i class="icon-arrow-up-right-from-square" aria-hidden="true"></i></a>
                            </div>
                            <div class="tp-header__row-2__right d-lg">
                              <a href="#" class="tp-button tp-button--primary">Request Demo</a>
                            </div>
                          </div>
                        </div>
                      </header>`;

    this._header = document.querySelector('.tp-header');
    this._triggerNavMobile = document.querySelector('#triggerNavMobile');
    this._navMobile = document.querySelector('.tp-header__row-2');


    this._triggerNavMobile.addEventListener('click', () => {
      this._navMobile.classList.toggle('nav-open');
    });

    window.addEventListener('scroll', () => {
      if(window.scrollY > 0) {
        this._header.classList.add('tp-header--scroll');
      }
      else {
        this._header.classList.remove('tp-header--scroll');
      }
    })
  }
}

customElements.define('tp-header', Header);