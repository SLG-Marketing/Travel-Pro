import background from '/public/assets/images/travelpro-background-5.webp';
import illustration from '/public/assets/images/illustrations/travelpro-illustration-2.svg';

export default class TravelProTeamBannerDE extends HTMLElement {

  connectedCallback() {
    this.innerHTML = `<div class="tp-section pb-0" style="background-image: url('${background}')">
                        <div class="tp-container text-center">
                          <h2 class="tp-heading tp-heading--h2 mb-24 color-white">Kontaktieren Sie die Travel Pro Experten!</h2>
                          <p class="tp-paragraph tp-paragraph--16 color-white">Sie wollen mehr über unsere Dienstleistungen erfahren? Lassen Sie uns miteinander reden!</p>
                          <p class="tp-paragraph tp-paragraph--16 color-white mb-40">Wir beantworten gerne Ihre Fragen und nehmen uns die Zeit, Ihre Bedürfnisse zu verstehen.</p>
                          
                          <div class="tp-buttons-row">
                            <a href="contact.html" class="tp-button tp-button--primary tp-button--outlined">Kontaktieren Sie uns</a>
                            <a href="request-demo.html" class="tp-button tp-button--primary">Demo anfordern</a>
                          </div>

                          <img src="${illustration}" alt="" class="mt-40" style="display: block;margin: auto;">
                        </div>
                      </div>`;
  }
}

customElements.define('tp-team-banner-de', TravelProTeamBannerDE);