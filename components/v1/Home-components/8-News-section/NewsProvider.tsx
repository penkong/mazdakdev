import React from 'react'
import Image from 'next/image'
const _NewsProvider = () => {
  return (
    <section id="news" className="pb-0 section">
      <div className="container">
        <div className="mx-0 row">
          <div className="px-0 col-lg-4" data-aos="fade-right">
            <h2 className="my-0">Journal</h2>
          </div>
        </div>
        <section className="pb-0 section-sm">
          <div className="mx-0 row align-items-center" data-aos="fade-up">
            <div className="px-0 col-md-6 col-lg-4" data-aos="blur">
              <a href="#">
                <figure className="hover">
                  <Image
                    alt=""
                    className="w-100"
                    src="img/news/370x434-1.jpg"
                  />
                </figure>
              </a>
            </div>
            <div className="mt-5 col-md-6 col-lg-4 mt-md-0 px-sm-0 pl-md-30px pr-lg-30px">
              <h4 className="my-0 mb-2">
                <a href="#">Top 20 Illustrations Winners: Academy</a>
              </h4>
              <p>
                <a href="#" className="text-dark font-weight-bold">
                  Illustration
                </a>{' '}
                / June 06, 2020
              </p>
            </div>
            <div className="px-0 mt-4 col-md-6 col-lg-4 mt-lg-0">
              <p className="mb-0">
                We have experience in implementing projects for many large
                domestic and foreign corporations, enterprises in many elds such
                as nance, banking, F&B, education, communication...{' '}
                <a href="">read more</a>
              </p>
            </div>
          </div>
          <div
            className="mx-0 mt-5 row align-items-center mt-lg-0"
            data-aos="fade-up"
          >
            <div className="order-2 pl-0 mt-5 col-md-6 col-lg-4 mt-md-0 order-md-1 pr-md-30px">
              <h4 className="my-0 mb-2">
                <a href="#">Mapp MTL</a>
              </h4>
              <p>
                <a href="#" className="text-dark font-weight-bold">
                  Branding
                </a>{' '}
                / June 06, 2020
              </p>
            </div>
            <div className="order-3 pl-0 col-md-6 offset-md-6 offset-lg-0 col-lg-4 order-lg-2 pr-md-30px">
              <div className="mt-4 mt-lg-0">
                <p className="mb-0">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour... <a href="">read more</a>
                </p>
              </div>
            </div>
            <div
              className="order-1 px-0 hover col-md-6 col-lg-4 order-md-2 order-lg-3"
              data-aos="blur"
            >
              <a href="#">
                <figure className="hover">
                  <Image
                    alt=""
                    className="w-100"
                    src="img/news/370x434-2.jpg"
                  />
                </figure>
              </a>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}

export const NewsProvider = _NewsProvider
