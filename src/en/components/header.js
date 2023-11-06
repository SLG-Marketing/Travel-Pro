import logoTravelProAE from '/public/assets/images/logos/travelpro-logo-header.svg';

export default class HeaderEN extends HTMLElement {
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
                              <a href="./index.html" title="logo travelpro and american express global business travel"><img src="${logoTravelProAE}" alt="logo travelpro and american express global business travel"></a>
                            </div>
                            <div class="tp-header__row-1__right">
                              <a href="https://www.slg.lu./career/" target="_blank" class="tp-link d-f-lg">Careers <i class="icon-arrow-up-right-from-square" aria-hidden="true"></i></a>
                              <ul class="tp-nav-langs">
                                <li tabindex="0">
                                  <span class="tp-link"><i class="icon-globe" aria-hidden="true"></i> EN</span>
                                  <ul>
                                    <li><a href="${
                                      this._active === 'home' 
                                      ? '../fr/index.html' 
                                      : this._active === 'business-travel' 
                                      ? '../fr/business-travel.html'
                                      : this._active === 'about-us' 
                                      ? '../fr/about-us.html'
                                      : this._active === 'blog' 
                                      ? '../fr/blog.html'
                                      : this._active === 'contact' 
                                      ? '../fr/contact.html'
                                      : this._active === 'request-demo' 
                                      ? '../fr/request-demo.html' : ''
                                    }" class="tp-link">FR</a></li>
                                    <li><a href="../de/index.html" class="tp-link">DE</a></li>
                                  </ul>
                                </li>
                              </ul>

                              <a href="./request-demo.html" class="tp-button tp-button--primary h-xs d-f-sm h-lg">Request Demo</a>

                              <button class="tp-nav-mobile-trigger h-lg" aria-label="Ouvrir menu" id="triggerNavMobile" aria-expanded="false"><i class="icon-bars" aria-hidden="true"></i></button>
                            </div>
                          </div>
                        </div>

                        <div class="tp-header__row-2">
                          <div class="tp-container">
                            <div class="tp-header__row-2__left">
                              <nav class="tp-nav">
                                <ul>
                                  <li class="tp-nav__item ${this._active === 'home' ? `tp-nav__item--selected` : ''}"><a href="./index.html">Home</a></li>
                                  <li class="tp-nav__item ${this._active === 'business-travel' ? `tp-nav__item--selected` : ''}"><a href="./business-travel.html">Business Travel</a></li>
                                  <li class="tp-nav__item ${this._active === 'about-us' ? `tp-nav__item--selected` : ''}"><a href="./about-us.html">About us</a></li>
                                  <li class="tp-nav__item ${this._active === 'blog' ? `tp-nav__item--selected` : ''}"><a href="./blog.html">Blog</a></li>
                                  <li class="tp-nav__item ${this._active === 'contact' ? `tp-nav__item--selected` : ''}"><a href="./contact.html">Contact us</a></li>
                                </ul>
                              </nav>
                              <div class="tp-sub-nav">
                                <a href="https://www.slg.lu./career/" target="_blank" class="tp-link h-lg">Careers <i class="icon-arrow-up-right-from-square" aria-hidden="true"></i></a>
                                <a href="./request-demo.html" class="tp-button tp-button--primary h-sm">Request Demo</a>
                              </div>
                            </div>
                            <div class="tp-header__row-2__right d-lg">
                              <a href="./request-demo.html" class="tp-button tp-button--primary" id="content">Request Demo</a>
                            </div>
                          </div>
                        </div>
                      </header>`;

    this._header = document.querySelector('.tp-header');
    this._triggerNavMobile = document.querySelector('#triggerNavMobile');
    this._navMobile = document.querySelector('.tp-header__row-2');


    this._triggerNavMobile.addEventListener('click', () => {
      if(this._navMobile.classList.contains('nav-open')) {
        this._navMobile.classList.remove('nav-open');
        this._triggerNavMobile.innerHTML = '<i class="icon-bars" aria-hidden="true"></i>';
      }
      else {
        this._navMobile.classList.add('nav-open');
        this._triggerNavMobile.innerHTML = '<i class="icon-cross" aria-hidden="true"></i>';
      }
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

customElements.define('tp-header-en', HeaderEN);