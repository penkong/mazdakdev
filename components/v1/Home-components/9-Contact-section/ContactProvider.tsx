import React from 'react'

const _ContactProvider = () => {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="mx-0 row">
          <div className="px-0 col-lg-4">
            <div data-aos="fade-up">
              <h2 className="my-0">Contact</h2>
              <p className="mt-5 mb-0 text-dark" style={{ fontSize: '2rem' }}>
                NAZEMI.WORKS@GMAIL.COM
              </p>
            </div>
            <div data-aos="fade-up">
              <section className="pb-0 section-sm">
                <h3 className="my-0">
                  Heidelberg , Baden-Württemberg , Germany
                </h3>
              </section>
            </div>
            <div data-aos="fade-up">
              <h3 className="mt-5 mb-0">+49 151 451 527 78</h3>
            </div>
          </div>
          <div className="px-0 mt-5 col-lg-6 offset-lg-2 mt-lg-0">
            <h3 className="my-0" data-aos="fade-up">
              Message me .Email me. follow me on github or other social network.
              we will be fine.
            </h3>
            {/*   <section className="pb-0 section-sm" data-aos="fade-up">
            <span className="text-primary">chat with me.</span>
              <form className="js-ajax-form">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    required={true}
                    placeholder="Email *"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    rows={3}
                    name="message"
                    className="form-control"
                    placeholder="Message"
                  ></textarea>
                </div>
                <div className="message" id="success-message">
                  Your message is successfully sent...
                </div>
                <div className="message" id="error-message">
                  Sorry something went wrong
                </div>
                <div className="mb-0 form-group">
                  <button type="submit" className="btn">
                    Contact me
                  </button>
                </div>
              </form>
  </section> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export const ContactProvider = _ContactProvider
