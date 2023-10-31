import background from '../assets/images/travelpro-background-5.png';
import illustration from '../assets/images/illustrations/travelpro-illustration-2.svg';

export default class TravelProTeamBanner extends HTMLElement {

  connectedCallback() {
    this.innerHTML = `<div class="tp-section pb-0" style="background-image: url('${background}')">
                        <div class="tp-container text-center">
                          <h2 class="tp-heading tp-heading--h2 mb-24 color-white">Talk to the Travel Pro team !</h2>
                          <p class="tp-paragraph tp-paragraph--16 color-white">Want to know more about our services ? Let's talk !</p>
                          <p class="tp-paragraph tp-paragraph--16 color-white mb-40">We'll take the time to answer your questions and understand your needs.</p>
                          
                          <div class="tp-buttons-row">
                            <a href="contact.html" class="tp-button tp-button--primary tp-button--outlined">Get in touch</a>
                            <a href="request-demo.html" class="tp-button tp-button--primary">Request demo</a>
                          </div>

                          <img src="${illustration}" alt="" class="mt-40" style="display: block;margin: auto;">
                        </div>
                      </div>`;
  }
}

customElements.define('tp-team-banner', TravelProTeamBanner);