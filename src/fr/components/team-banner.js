import background from '/public/assets/images/travelpro-background-5.webp';
import illustration from '/public/assets/images/illustrations/travelpro-illustration-2.svg';

export default class TravelProTeamBanner extends HTMLElement {

  connectedCallback() {
    this.innerHTML = `<div class="tp-section pb-0" style="background-image: url('${background}')">
                        <div class="tp-container text-center">
                          <h2 class="tp-heading tp-heading--h2 mb-24 color-white">Contactez les spécialistes de Travel Pro !</h2>
                          <p class="tp-paragraph tp-paragraph--16 color-white">Vous voulez en savoir plus sur nos services ? Parlons-en !</p>
                          <p class="tp-paragraph tp-paragraph--16 color-white mb-40">Nous prendrons le temps de répondre à vos questions et de comprendre vos besoins.</p>
                          
                          <div class="tp-buttons-row">
                            <a href="contact.html" class="tp-button tp-button--primary tp-button--outlined">Contactez-nous</a>
                            <a href="request-demo.html" class="tp-button tp-button--primary">Demander une démo</a>
                          </div>

                          <img src="${illustration}" alt="" class="mt-40" style="display: block;margin: auto;">
                        </div>
                      </div>`;
  }
}

customElements.define('tp-team-banner', TravelProTeamBanner);