import React from 'react'
import Image from 'next/image'
const _ExprienceProvider = () => {
  return (
    <section id="experience" className="pb-0 section" data-aos="fade-up">
      <div className="container">
        <div className="mx-0 row">
          <div className="px-0 col-lg-4 offset-lg-4">
            <h2 className="my-0">Experience</h2>
          </div>
        </div>
      </div>
      <section className="pb-0 section-sm">
        <div className="container">
          <div className="experience-carousel owl-carousel">
            <div>
              <div className="mx-0 row" data-aos="fade-in">
                <div className="px-0 mb-2 text-right col-lg-4 text-dark text-lg-left mb-lg-0">
                  2020
                </div>
                <div className="pl-0 mb-4 col-lg-4 mb-lg-0">
                  <div className="media align-items-center">
                    <Image
                      alt="ss"
                      className="mr-4"
                      src="img/zhoon.png"
                      width={'25%'}
                    />
                    <div className="media-body">
                      <h5 className="my-0">
                        Full Stack Developer
                        <br />
                        <span className="text-body font-weight-normal">
                          zhoon.ir
                        </span>
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="px-0 col-lg-4">
                  <p className="mb-0">
                    We are developing web site builder and ERP app for our
                    customers that are active in beauty industry.
                  </p>
                </div>
              </div>
              <div className="section-sm" data-aos="fade-in">
                <div className="position-relative section-sm bg-gray">
                  <div className="lines">
                    <div className="container px-0">
                      <div className="row">
                        <div className="col-md-6 col-lg-4"></div>
                        <div className="col-md-6 hidden-sm col-lg-4"></div>
                        <div className="col-md-6 col-lg-4 hidden-md"></div>
                      </div>
                    </div>
                  </div>
                  <section className="mx-0 row">
                    <div className="order-2 pl-0 mb-4 col-lg-4 mb-lg-0">
                      <div className="media align-items-center">
                        <Image
                          alt="ss"
                          className="mr-4"
                          src="img/shekarestan.jpg"
                        />
                        <div className="media-body">
                          <h5 className="my-0">
                            Mobile Developer Frontend
                            <br />
                            <span className="text-body font-weight-normal"></span>
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="order-3 pl-0 col-lg-4">
                      <p className="mb-0">
                        We developed mobile apps and provide base boiler plates
                        for develop for fully animated application in
                        shekarestan company acive in entertainment industry and
                        also other customers.
                      </p>
                    </div>
                    <div className="order-1 px-0 mb-2 text-right col-lg-4 order-lg-3 text-dark mb-lg-0">
                      2019
                    </div>
                  </section>
                </div>
              </div>
              <div className="mx-0 row" data-aos="fade-in">
                <div className="pl-0 mb-2 text-right col-lg-4 text-dark text-lg-left mb-lg-0">
                  2018
                </div>
                <div className="pl-0 mb-4 col-lg-4 mb-lg-0">
                  <div className="media align-items-center">
                    <Image alt="ss" className="mr-4" src="img/free.png" />
                    <div className="media-body">
                      <h5 className="my-0">
                        Dive Dev - Freelancer
                        <br />
                        <span className="text-body font-weight-normal">
                          local customers
                        </span>
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="px-0 col-lg-4">
                  <p className="mb-0">
                    I go for my big leap move from flow designer toward develop
                    softwares tried local market.
                  </p>
                </div>
              </div>
            </div>

            {/*
            
            <div>
              <div className="mx-0 row" data-aos="fade-in">
                <div className="px-0 mb-2 text-right col-lg-4 text-dark text-lg-left mb-lg-0">
                  2019-2020
                </div>
                <div className="pl-0 mb-4 col-lg-4 mb-lg-0">
                  <div className="media align-items-center">
                    <img alt="" className="mr-4" src="img/behance.png" />
                    <div className="media-body">
                      <h5 className="my-0">
                        UI/UX Designer,
                        <br />{" "}
                        <span className="text-body font-weight-normal">
                          Behance.
                        </span>
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="px-0 col-lg-4">
                  <p className="mb-0">
                    We have experience in implementing projects for many large
                    domestic and foreign corporations, enterprises in many elds
                    such as nance, banking, F&B, education, communication.
                  </p>
                </div>
              </div>
              <div className="section-sm" data-aos="fade-in">
                <div className="position-relative section-sm bg-gray">
                  <div className="lines">
                    <div className="container px-0">
                      <div className="row">
                        <div className="col-md-6 col-lg-4"></div>
                        <div className="col-md-6 hidden-sm col-lg-4"></div>
                        <div className="col-md-6 col-lg-4 hidden-md"></div>
                      </div>
                    </div>
                  </div>
                  <section className="mx-0 row">
                    <div className="order-2 pl-0 mb-4 col-lg-4 mb-lg-0">
                      <div className="media align-items-center">
                        <img
                          alt=""
                          className="mr-4"
                          src="img/cssdesignawards.png"
                        />
                        <div className="media-body">
                          <h5 className="my-0">
                            Product Designer,
                            <br />{" "}
                            <span className="text-body font-weight-normal">
                              Cssdesignawards
                            </span>
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="order-3 pl-0 col-lg-4">
                      <p className="mb-0">
                        We have experience in implementing projects for many
                        large domestic and foreign corporations, enterprises in
                        many elds such as nance, banking, F&B, education,
                        communication.
                      </p>
                    </div>
                    <div className="order-1 px-0 mb-2 text-right col-lg-4 order-lg-3 text-dark mb-lg-0">
                      2018-2019
                    </div>
                  </section>
                </div>
              </div>
              <div className="mx-0 row" data-aos="fade-in">
                <div className="pl-0 mb-2 text-right col-lg-4 text-dark text-lg-left mb-lg-0">
                  2019-2020
                </div>
                <div className="pl-0 mb-4 col-lg-4 mb-lg-0">
                  <div className="media align-items-center">
                    <img alt="" className="mr-4" src="img/envato.png" />
                    <div className="media-body">
                      <h5 className="my-0">
                        Frontend Developer,
                        <br />{" "}
                        <span className="text-body font-weight-normal">
                          Envato.
                        </span>
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="px-0 col-lg-4">
                  <p className="mb-0">
                    We have experience in implementing projects for many large
                    domestic and foreign corporations, enterprises in many elds
                    such as nance, banking, F&B, education, communication.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="mx-0 row" data-aos="fade-in">
                <div className="px-0 mb-2 text-right col-lg-4 text-dark text-lg-left mb-lg-0">
                  2019-2020
                </div>
                <div className="pl-0 mb-4 col-lg-4 mb-lg-0">
                  <div className="media align-items-center">
                    <img alt="" className="mr-4" src="img/behance.png" />
                    <div className="media-body">
                      <h5 className="my-0">
                        UI/UX Designer,
                        <br />{" "}
                        <span className="text-body font-weight-normal">
                          Behance.
                        </span>
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="px-0 col-lg-4">
                  <p className="mb-0">
                    We have experience in implementing projects for many large
                    domestic and foreign corporations, enterprises in many elds
                    such as nance, banking, F&B, education, communication.
                  </p>
                </div>
              </div>
              <div className="section-sm" data-aos="fade-in">
                <div className="position-relative section-sm bg-gray">
                  <div className="lines">
                    <div className="container px-0">
                      <div className="row">
                        <div className="col-md-6 col-lg-4"></div>
                        <div className="col-md-6 hidden-sm col-lg-4"></div>
                        <div className="col-md-6 col-lg-4 hidden-md"></div>
                      </div>
                    </div>
                  </div>
                  <section className="mx-0 row">
                    <div className="order-2 pl-0 mb-4 col-lg-4 mb-lg-0">
                      <div className="media align-items-center">
                        <img
                          alt=""
                          className="mr-4"
                          src="img/cssdesignawards.png"
                        />
                        <div className="media-body">
                          <h5 className="my-0">
                            Product Designer,
                            <br />{" "}
                            <span className="text-body font-weight-normal">
                              Cssdesignawards
                            </span>
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="order-3 pl-0 col-lg-4">
                      <p className="mb-0">
                        We have experience in implementing projects for many
                        large domestic and foreign corporations, enterprises in
                        many elds such as nance, banking, F&B, education,
                        communication.
                      </p>
                    </div>
                    <div className="order-1 px-0 mb-2 text-right col-lg-4 order-lg-3 text-dark mb-lg-0">
                      2018-2019
                    </div>
                  </section>
                </div>
              </div>
              <div className="mx-0 row" data-aos="fade-in">
                <div className="pl-0 mb-2 text-right col-lg-4 text-dark text-lg-left mb-lg-0">
                  2019-2020
                </div>
                <div className="pl-0 mb-4 col-lg-4 mb-lg-0">
                  <div className="media align-items-center">
                    <img alt="" className="mr-4" src="img/envato.png" />
                    <div className="media-body">
                      <h5 className="my-0">
                        Frontend Developer,
                        <br />{" "}
                        <span className="text-body font-weight-normal">
                          Envato.
                        </span>
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="px-0 col-lg-4">
                  <p className="mb-0">
                    We have experience in implementing projects for many large
                    domestic and foreign corporations, enterprises in many elds
                    such as nance, banking, F&B, education, communication.
                  </p>
                </div>
              </div>
            </div>
          
            */}
          </div>
        </div>
      </section>
    </section>
  )
}

export const ExprienceProvider = _ExprienceProvider
