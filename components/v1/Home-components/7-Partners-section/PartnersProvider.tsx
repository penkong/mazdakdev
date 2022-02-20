import React from "react";

const _PartnersProvider = () => {
  return (
    <section id="partners" className="pb-0 section">
      <div className="container">
        <div className="text-center row align-items-center justify-content-between">
          <div className="my-4 col-sm-auto my-lg-0" data-aos="fade-up">
            <img alt="" src="img/partners/1.png" />
          </div>
          <div
            className="my-4 col-sm-auto my-lg-0"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <img alt="" src="img/partners/2.png" />
          </div>
          <div
            className="my-4 col-sm-auto my-lg-0"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <img alt="" src="img/partners/3.png" />
          </div>
          <div
            className="my-4 col-sm-auto my-lg-0"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <img alt="" src="img/partners/4.png" />
          </div>
        </div>
      </div>
    </section>
  );
};

export const PartnersProvider = _PartnersProvider;