import background from '/public/assets/images/travelpro-background-11.webp';
import illustration from '/public/assets/images/travelpro-newsletter.svg';

export default class NewsletterDE extends HTMLElement {

  connectedCallback() {
    this.innerHTML = `<div class="tp-section">
                        <div class="tp-container">
                          <div class="tp-newsletter">
                            <div class="tp-newsletter__left" style="background-image: url('${background}')">
                              <img src="${illustration}" alt="">
                              <p class="tp-heading tp-heading--h2 mt-24 mb-24">Subscribe to the Travel Pro Newsletter for exclusive updates!</p>
                              <p class="tp-paragraph tp-paragraph--16">Stay in the loop with the latest news by subscribing to our newsletter.</p>
                            </div>
                            <div class="tp-newsletter__right">
                              <getresponse-form form-id="ad9db41b-a353-4019-a7ba-772acede3fcc" e="0"></getresponse-form>
                            </div>
                          </div>
                        </div>
                      </div>`;
  }
}

customElements.define('tp-newsletter-de', NewsletterDE);