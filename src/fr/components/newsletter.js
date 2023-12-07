import background from '/public/assets/images/travelpro-background-11.webp';
import illustration from '/public/assets/images/travelpro-newsletter.svg';

export default class Newsletter extends HTMLElement {

  connectedCallback() {
    this.innerHTML = `<div class="tp-section">
                        <div class="tp-container">
                          <div class="tp-newsletter">
                            <div class="tp-newsletter__left" style="background-image: url('${background}')">
                              <img src="${illustration}" alt="">
                              <p class="tp-heading tp-heading--h2 mt-24 mb-24">Abonnez-vous à la newsletter de Travel Pro pour des mises à jour exclusives !</p>
                              <p class="tp-paragraph tp-paragraph--16">Restez informé des dernières actualités en vous abonnant à notre newsletter.</p>
                            </div>
                            <div class="tp-newsletter__right">
                            <getresponse-form form-id="c576dc01-8258-4bde-94d3-8c01a73c67f2" e="0"></getresponse-form>
                            </div>
                          </div>
                        </div>
                      </div>`;
  }
}

customElements.define('tp-newsletter', Newsletter);