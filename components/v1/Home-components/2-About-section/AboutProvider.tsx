import React from "react";

const _AboutProvider = () => {
  return (
    <section id="about" className="pb-0 section">
      <section className="container">
        <div className="mx-0 row align-items-center">
          <div className="px-0 col-md-6 col-lg-4 offset-lg-4">
            <h2 className="pr-6 mt-0 mb-5 mr-6 mb-md-0" data-aos="fade-up">
              I Do <span className="text-info">Web.</span>
              <p className="mt-3">Develop the best</p>
              <span className="mt-0 text-info">Websites - Apps</span>
            </h2>
          </div>
          <div className="px-0 col-md-6 col-lg-4" data-aos="blur">
            <img alt="" className="w-100" src="img/me.7ee939e3.jpg" />
          </div>
        </div>
        <div className="mx-0 row">
          <div className="px-0 mt-5 mb-5 col-lg-4 mt-md-0 mb-lg-0">
            <ul className="my-0 make-font">
              <li data-aos="fade-up">
                <a href="#about" className="text-dark">
                  <span className="media">
                    <span className="media-body">FullStack Web Focus</span>
                  </span>
                </a>
              </li>
              <li data-aos="fade-up" data-aos-delay="100">
                <a href="#" className="text-dark">
                  <span className="media">
                    <span className="media-body">
                      Front : JS TS React vue ...
                    </span>
                  </span>
                </a>
              </li>
              <li data-aos="fade-up" data-aos-delay="100">
                <a href="#" className="text-dark">
                  <span className="media">
                    <span className="media-body">Mobile: React Native</span>
                  </span>
                </a>
              </li>
              <li data-aos="fade-up" data-aos-delay="200">
                <a href="#" className="text-dark">
                  <span className="media">
                    <span className="media-body">Back: Node Nest Express</span>
                  </span>
                </a>
              </li>
              <li data-aos="fade-up" data-aos-delay="300">
                <a href="#" className="text-dark">
                  <span className="media">
                    <span className="media-body">Software Architecture</span>
                  </span>
                </a>
              </li>
              <li data-aos="fade-up" data-aos-delay="400">
                <a href="#" className="text-dark">
                  <span className="media">
                    <span className="media-body">Design Thinker</span>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </section>
  );
};

export const AboutProvider = _AboutProvider;
