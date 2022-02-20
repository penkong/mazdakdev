import React from 'react'
import Image from 'next/image'
const _TestimonialsProvider = () => {
  return (
    <section id="testimonials" className="pb-0 section">
      <div className="container">
        <div className="mx-0 row align-items-center">
          <div className="px-0 mb-5 col-md-6 col-lg-4 col-xl-3 z-index-2 mb-md-0">
            <div className="px-0 offset-lg-5 offset-xl-0">
              <h2
                className="my-0 testimonials-title wide-lg"
                data-aos="fade-right"
              >
                Testimonials{' '}
                <span className="text-primary">
                  from
                  <br /> my best
                </span>{' '}
                Clients
              </h2>
            </div>
          </div>
          <div className="px-0 col-md-6 col-lg-8 col-xl-9">
            <div className="testimonials-carousel owl-carousel">
              <div>
                <div className="mx-0 row align-items-center">
                  <div
                    className="px-0 col-lg-6 col-xl-auto mr-xl-4"
                    data-aos="blur"
                  >
                    <Image
                      alt="ss"
                      className="w-100"
                      src="img/testimonials/370x434-1.jpg"
                    />
                  </div>
                  <div className="px-0 mt-5 col-lg-6 col-xl-5 offset-xl-1 pl-lg-30px pl-xl-0 mt-lg-0">
                    <div className="mb-5 quote">
                      <Image alt="ss" src="img/quote.png" />
                    </div>
                    <p className="mb-0">
                      "I will give you a complete account of the system, and
                      expound the actual teachings of the great explorer of the
                      truth, the master-builder of human happiness."
                    </p>
                    <h5 className="mt-4 mb-0">
                      Hayley
                      <br />{' '}
                      <span className="text-body font-weight-normal">
                        Apple inc.
                      </span>
                    </h5>
                  </div>
                </div>
              </div>
              <div>
                <div className="mx-0 row align-items-center">
                  <div
                    className="px-0 col-lg-6 col-xl-auto mr-xl-4"
                    data-aos="blur"
                  >
                    <Image
                      alt="ss"
                      className="w-100"
                      src="img/testimonials/370x434-2.jpg"
                    />
                  </div>
                  <div className="px-0 mt-5 col-lg-6 col-xl-5 offset-xl-1 pl-lg-30px pl-xl-0 mt-lg-0">
                    <div className="mb-5 quote">
                      <Image alt="" src="img/quote.png" />
                    </div>
                    <p className="mb-0">
                      "I will give you a complete account of the system, and
                      expound the actual teachings of the great explorer of the
                      truth, the master-builder of human happiness."
                    </p>
                    <h5 className="mt-4 mb-0">
                      Richard
                      <br />{' '}
                      <span className="text-body font-weight-normal">
                        Envato
                      </span>
                    </h5>
                  </div>
                </div>
              </div>
              <div>
                <div className="mx-0 row align-items-center">
                  <div
                    className="px-0 col-lg-6 col-xl-auto mr-xl-4"
                    data-aos="blur"
                  >
                    <Image
                      alt="ss"
                      className="w-100"
                      src="img/testimonials/370x434-3.jpg"
                    />
                  </div>
                  <div className="px-0 mt-5 col-lg-6 col-xl-5 offset-xl-1 pl-lg-30px pl-xl-0 mt-lg-0">
                    <div className="mb-5 quote">
                      <Image alt="ss" src="img/quote.png" />
                    </div>
                    <p className="mb-0">
                      "I will give you a complete account of the system, and
                      expound the actual teachings of the great explorer of the
                      truth, the master-builder of human happiness."
                    </p>
                    <h5 className="mt-4 mb-0">
                      Amanda
                      <br />{' '}
                      <span className="text-body font-weight-normal">
                        Google inc.
                      </span>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export const TestimonialsProvider = _TestimonialsProvider
