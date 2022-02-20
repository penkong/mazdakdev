import React from "react";

const _ProjectsProvider = () => {
  return (
    <section id="works" className="pb-0 section">
      <div className="container">
        <h2 className="my-0" data-aos="fade-right">
          Latest works
        </h2>
      </div>
      <section className="pb-0 section-sm section-right" data-aos="blur">
        <div className="works-carousel owl-carousel">
          <div>
            <a href="https://www.zhoon.ir/">
              <figure className="hover">
                <img
                  alt="zhoon.ir"
                  className="img-responsive"
                  src="img/portfolio/zhoon.png"
                />
                <figcaption>
                  <mark className="my-0 text-white h3">www.zhoon.ir</mark>
                  <br />
                  <mark className="mt-2 category">
                    Active Company in Beauty Industry - Under Construct.
                  </mark>
                </figcaption>
              </figure>
            </a>
          </div>
          <div>
            <a href="http://www.lilioomflower.ir">
              <figure className="hover">
                <img
                  alt="lilioomflower.ir"
                  className="img-responsive"
                  src="img/portfolio/lilioom.png"
                />
                <figcaption>
                  <mark className="my-0 text-white h3">
                    www.lilioomflower.ir
                  </mark>
                  <br />
                  <mark className="mt-2 category">florist</mark>
                </figcaption>
              </figure>
            </a>
          </div>
          <div>
            <a href="http://www.sorriso.ir" target="_blank">
              <figure className="hover">
                <img
                  alt="sorriso.ir"
                  className="img-responsive"
                  src="img/portfolio/sorriso.png"
                />
                <figcaption>
                  <mark className="my-0 text-white h3">www.sorriso.ir</mark>
                  <br />
                  <mark className="mt-2 category">Coffe and Cake store.</mark>
                </figcaption>
              </figure>
            </a>
          </div>
          <div>
            <a href="http://www.shahrzadhoney.ir" target="_blank">
              <figure className="hover">
                <img
                  alt="shahrzadhoney.ir"
                  className="img-responsive"
                  src="img/portfolio/shahrzad.png"
                />
                <figcaption>
                  <mark className="my-0 text-white h3">
                    www.shahrzadhoney.ir
                  </mark>
                  <br />
                  <mark className="mt-2 category">beauty.</mark>
                </figcaption>
              </figure>
            </a>
          </div>
          <div>
            <a href="http://www.vivaan.ir" target="_blank">
              <figure className="hover">
                <img
                  alt="vivaan.ir"
                  className="img-responsive"
                  src="img/portfolio/vivaan.png"
                />
                <figcaption>
                  <mark className="my-0 text-white h3">www.vivaan.ir</mark>
                  <br />
                  <mark className="mt-2 category">A colorful company.</mark>
                </figcaption>
              </figure>
            </a>
          </div>
          <div>
            <a href="http://www.noyasnacks.com" target="_blank">
              <figure className="hover">
                <img
                  alt="noyasnacks.com"
                  className="img-responsive"
                  src="img/portfolio/noyasnacks.png"
                />
                <figcaption>
                  <mark className="my-0 text-white h3">www.noyasnacks.com</mark>
                  <br />
                  <mark className="mt-2 category">Nuts Distributer</mark>
                </figcaption>
              </figure>
            </a>
          </div>
          <div>
            <a href="http://www.drshahmard.com" target="_blank">
              <figure className="hover">
                <img
                  alt="drshahmard.com"
                  className="img-responsive"
                  src="img/portfolio/noyasnacks.png"
                />
                <figcaption>
                  <mark className="my-0 text-white h3">www.drshahmard.com</mark>
                  <br />
                  <mark className="mt-2 category">Beauty Clinic</mark>
                </figcaption>
              </figure>
            </a>
          </div>
        </div>
      </section>
    </section>
  );
};

export const ProjectsProvider = _ProjectsProvider;
