import logoTravelProAEWhite from '../assets/images/travelpro-american-expresso-logo-white.svg';
import logoTravelProPartSLG from '../assets/images/travelpro-part-of-slg.svg';

export default class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `<footer class="tp-footer">
              <div class="tp-container">
                <div class="tp-flex">
                  <div class="tp-flex__col tp-flex__col-6 tp-flex__col-sm-4 tp-flex__col-lg-3">
                    <p class="tp-paragraph tp-paragraph--14 mb-24 color-primary-100">Links</p>
                    <nav class="tp-nav-footer">
                      <ul>
                        <li><a href="#" class="tp-link">Home</a></li>
                        <li><a href="#" class="tp-link">Business Travel</a></li>
                        <li><a href="#" class="tp-link">About us</a></li>
                        <li><a href="#" class="tp-link">Blog</a></li>
                        <li><a href="#" class="tp-link">Contact us</a></li>
                        <li><a href="#" class="tp-link">Request demo</a></li>
                        <li><a href="#" class="tp-link">Careers <i class="icon-arrow-up-right-from-square" aria-hidden="true"></i></a></li>
                      </ul>
                    </nav>
                  </div>
                  <div class="tp-flex__col tp-flex__col-6 tp-flex__col-sm-4 tp-flex__col-lg-3">
                    <p class="tp-paragraph tp-paragraph--14 mb-24 color-primary-100">Legal</p>
                    <nav class="tp-nav-footer">
                      <ul>
                        <li><a href="#" class="tp-link">Terms of use <i class="icon-arrow-up-right-from-square" aria-hidden="true"></i></a></li>
                        <li><a href="#" class="tp-link">Privacy policy <i class="icon-arrow-up-right-from-square" aria-hidden="true"></i></a></li>
                        <li><a href="#" class="tp-link">Cookies</a></li>
                        <li><a href="#" class="tp-link">Sitemap</a></li>
                        <li><a href="#" class="tp-link">Accessibility</a></li>
                      </ul>
                    </nav>
                  </div>
                  <div class="tp-flex__col tp-flex__col-12 tp-flex__col-sm-4 tp-flex__col-lg-3 mt-40 mt-sm-0">
                    <p class="tp-paragraph tp-paragraph--14 mb-24 color-primary-100">Contact Travel Pro</p>
                    <nav class="tp-nav-footer">
                      <ul>
                        <li><a href="tel:003524695451" class="tp-link"><i class="icon-phone" aria-hidden="true"></i> +352 46 95 45 - 1</a></li>
                        <li><a href="#" class="tp-link"><i class="icon-location" aria-hidden="true"></i> 430-434, route de Longwy L-1940 Luxembourg</a></li>
                      </ul>
                    </nav>
                  </div>
                </div>

                <div class="tp-footer__row">
                  <div class="tp-flex align-items-center">
                    <div class="tp-flex__col tp-flex__col-12 tp-flex__col-sm-3">
                      <p class="tp-paragraph tp-paragraph--14 mb-24 color-primary-100">Follow us</p>
                      <nav class="tp-nav-social">
                        <ul>
                          <li><a href="#" class="tp-link"><i class="icon-media_facebook" aria-hidden="true"></i></a></li>
                          <li><a href="#" class="tp-link"><i class="icon-media_insta" aria-hidden="true"></i></a></li>
                          <li><a href="#" class="tp-link"><i class="icon-media_linkedin" aria-hidden="true"></i></a></li>
                        </ul>
                      </nav>
                    </div>
                    <div class="tp-flex__col tp-flex__col-12 tp-flex__col-sm-6 tp-flex__col-lg-4 mt-40 mt-sm-0">
                      <p class="tp-paragraph tp-paragraph--16 weight-600 mb-8">Subscribe to the Travel Pro newsletter</p>
                      <p class="tp-paragraph tp-paragraph--14">
                        Stay in the loop with the latest news, trends, and insights by subscribing to our newsletter.
                      </p>
                    </div>
                    <div class="tp-flex__col tp-flex__col-4 tp-flex__col-sm-3 tp-flex__col-lg-4 mt-16 mt-sm-0">
                      <a href="#" class="tp-button tp-button--primary tp-button--outlined">Subscribe</a>
                    </div>
                  </div>
                </div>

                <div class="tp-flex align-items-center">
                  <div class="tp-flex__col tp-flex__col-6 tp-flex__col-sm-3">
                    <img src="${logoTravelProAEWhite}" alt="">
                  </div>
                  <div class="tp-flex__col tp-flex__col-6 tp-flex__col-sm-3">
                    <img src="${logoTravelProPartSLG}" alt="">
                  </div>
                  <div class="tp-flex__col tp-flex__col-12 tp-flex__col-sm-4  mt-16 mt-sm-0">
                    <p class="tp-paragraph tp-paragraph--14">© 2023 Travel Pro S.A. | All rights reserved</p>
                  </div>
                  <div class="tp-flex__col tp-flex__col-12 tp-flex__col-sm-2 text-sm-right mt-40 mt-sm-0">
                    <a href="#" class="tp-link"><i class="icon-globe" aria-hidden="true"></i> EN</a>
                  </div>
                </div>

                <p class="tp-paragraph tp-paragraph--14 mt-40">
                  GBT Travel Services UK Limited (GBT UK) and its authorized sublicensees use certain trademarks and service marks 
                  of American Express Company or its subsidiaries (American Express) in the “American Express Global Business Travel” 
                  brand and in connection with its business for permitted uses only under a limited license from American 
                  Express (Licensed Marks). The Licensed Marks are trademarks or service marks of, and the property of, 
                  American Express. GBT UK is a subsidiary of Global Business Travel Group, Inc. (NYSE: GBTG). 
                  American Express holds a minority interest in GBTG, which operates as a separate company from American Express. 
                  Travel Pro S.A. is an authorized sublicensee of, and operates as a separate company from, GBT UK.
                </p>
              </div>
            </footer>`
  }
}

customElements.define('tp-footer', Footer);