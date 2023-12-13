import background from '/public/assets/images/travelpro-background-11.webp';
import illustration from '/public/assets/images/travelpro-newsletter.svg';

export default class NewsletterDE extends HTMLElement {

  connectedCallback() {
    this.innerHTML = `<div class="tp-section">
                        <div class="tp-container">
                          <div class="tp-newsletter">
                            <div class="tp-newsletter__left" style="background-image: url('${background}')">
                              <img src="${illustration}" alt="">
                              <p class="tp-heading tp-heading--h2 mt-24 mb-24">Abonnieren Sie den Travel Pro Newsletter!</p>
                              <p class="tp-paragraph tp-paragraph--16">Bleiben Sie auf dem Laufenden mit exklusiven Reiseeinblicken und Trends, indem Sie sich für unseren Newsletter anmelden.</p>
                            </div>
                            <div class="tp-newsletter__right">
                            <getresponse-form form-id="4fdf8ddb-d7f1-4888-a31d-b1d7befd8b61" e="0"></getresponse-form>
                            </div>
                          </div>
                        </div>
                      </div>`;
  }
}

customElements.define('tp-newsletter-de', NewsletterDE);