import React from 'react'
import Image from 'next/image'

const _SpecializationProvider = () => {
  return (
    <section id="specialization" className="py-0 section">
      <div className="container">
        <div className="mx-0 row align-items-center">
          <div className="px-0 col-md-6 order-md-2 order-lg-1 col-lg-4">
            <h2
              className="my-0 mb-5 wide-lg float-md-right float-lg-none offset-lg-5 mb-md-0"
              data-aos="fade-right"
            >
              <span className="text-primary">Bias</span> toward clean code and
              structure.
            </h2>
          </div>
          <div
            className="px-0 col-md-6 order-md-1 order-lg-2 col-lg-4"
            data-aos="blur"
          >
            <Image alt="ss" className="w-100" src="img/exprience.jpg" />
          </div>
          <div
            className="pl-0 mt-5 col-md-6 offset-md-6 offset-lg-0 order-md-3 order-lg-3 col-lg-4 pl-md-30 mt-md-0"
            data-aos="fade-up"
          >
            <p
              className="mb-0 pl-md-30px"
              style={{ fontSize: '1.4rem', color: 'black' }}
            >
              I have experience in implementing projects for small and large
              domestic, enterprises in many different stacks and different kind,
              SPA, SSR, SSG.
            </p>
          </div>
        </div>
        <section className="pb-0 section-sm">
          <div className="mx-0 row">
            <div className="px-0 mb-5 col-md-12 col-lg-4 pr-lg-30px mb-lg-0">
              <div className="d-flex justify-content-between">
                <h6 className="mt-0 d-flex">JavaScript - Typescript</h6>
                <h6 className="mt-0 d-flex">80%</h6>
              </div>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: '80%' }}
                  aria-valuenow={80}
                  aria-valuemin={0}
                  aria-valuemax={80}
                >
                  <div className="progress-bar-line" data-aos="width"></div>
                </div>
              </div>
            </div>
            <div className="px-0 mb-5 col-md-12 col-lg-4 pr-lg-30px mb-lg-0">
              <div className="d-flex justify-content-between">
                <h6 className="mt-0 d-flex">mobile - reactnative</h6>
                <h6 className="mt-0 d-flex">70%</h6>
              </div>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: '70%' }}
                  aria-valuenow={70}
                  aria-valuemin={0}
                  aria-valuemax={70}
                >
                  <div
                    className="progress-bar-line"
                    data-aos-delay="200"
                    data-aos="width"
                  ></div>
                </div>
              </div>
            </div>
            <div className="pl-0 col-md-12 col-lg-4 pr-lg-30px">
              <div className="d-flex justify-content-between">
                <h6 className="mt-0 d-flex">Node - dbs - Structure</h6>
                <h6 className="mt-0 d-flex">80%</h6>
              </div>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: '90%' }}
                  aria-valuenow={90}
                  aria-valuemin={0}
                  aria-valuemax={90}
                >
                  <div
                    className="progress-bar-line"
                    data-aos-delay="400"
                    data-aos="width"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}

export const SpecializationProvider = _SpecializationProvider
