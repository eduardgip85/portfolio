<template>
  <section class="portfolio-section pt-10 pb-10">
    <div class="container">
      <div class="row pb-3">
        <div class="col">
          <h1>
            <!-- {{ $t("SkillsSection") }} -->
            CONTACT FORM
          </h1>
        </div>
      </div>
    </div>

    <div class="container">
      <!-- 
      <div class="row">
        <div class="contact-wrap">
          <h3 class="mb-4 text-center">Get in touch with us</h3>

          <form
            method="POST"
            data-netlify="true"
            id="contactForm"
            name="contactForm"
            class="contactForm"
          >
            <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control text-center"
                    name="name"
                    id="name"
                    placeholder="Name"
                  />
                </div>
              </div>
              <div class="col-md-12">
                <div class="form-group">
                  <input
                    type="email"
                    class="form-control text-center"
                    name="email"
                    id="email"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div class="col-md-12">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control text-center"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                  />
                </div>
              </div>
              <div class="col-md-12">
                <div class="form-group">
                  <textarea
                    name="message"
                    class="form-control text-center"
                    id="message"
                    cols="30"
                    rows="8"
                    placeholder="Message"
                  ></textarea>
                </div>
              </div>

              <div data-netlify-recaptcha="true"></div>

              <div class="col-md-12">
                <div class="form-group text-center">
                  <input
                    type="submit"
                    value="Send Message"
                    class="btn btn-primary"
                  />
                  <div class="submitting"></div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      -->

      <form name="contact" method="POST" data-netlify="true" action='/'>
        <p>
          <label>Name <input type="text" name="form-name"/></label>
        </p>
        <p>
          <label>Email <input type="email" name="form-email"/></label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </div>
  </section>
</template>
