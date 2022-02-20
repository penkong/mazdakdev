import React from 'react'

const _FooterProvider = () => {
  return (
    <footer className="section bg-gray">
      <div className="container">
        <div className="lines">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-4"></div>
              <div className="col-md-6 hidden-sm col-lg-4"></div>
              <div className="col-md-6 col-lg-4 hidden-md"></div>
            </div>
          </div>
        </div>
        <div className="mx-0 row">
          <div className="pl-0 col-md-6 col-lg-4 pr-md-30px">
            <a className="brand" href="#">
              Mazdak Nazemi
            </a>
            <p className="size-sm">Personal</p>
            <p className="mt-4">
              <strong className="text-uppercase text-dark">Address:</strong>
              <br />
              Right now in Heidelberg!
            </p>
            <p className="mt-4">
              <strong className="text-uppercase text-dark">Email:</strong>
              <br />
              <a href="/">nazemi.works@gmail.com</a>
            </p>
          </div>
          <div className="pl-0 mt-5 col-md-6 col-lg-4 order-md-3 order-lg-2 pr-md-30px mt-md-0">
            <strong className="text-uppercase text-dark">Menu:</strong>
            <br />
            <ul className="mt-4 navbar-nav menu">
              <li>
                <a className="nav-link" href="#home">
                  Home
                </a>
              </li>
              <li>
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="nav-link" href="#specialization">
                  Specialization
                </a>
              </li>
              <li>
                <a className="nav-link" href="#works">
                  Projects
                </a>
              </li>
              <li>
                <a className="nav-link" href="#experience">
                  Experience
                </a>
              </li>
              <li>
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="px-0 mt-5 col-md-6 col-lg-4 order-md-2 order-lg-3 mt-lg-0">
            {/*
            <strong className="text-uppercase text-dark">Subscribe:</strong>
            <br />
            <p className="mt-4">
              Subscribe to our newsletter and we will inform you about newset
              projects and promotions
            </p>
            <div className="mt-4">
              <form className="js-subscribe-form">
              <div className="input-group">
              <input
                    id="mc-email"
                    type="email"
                    className="form-control"
                    placeholder="Email"
                  />
                  <div className="input-group-append">
                  <button className="btn" type="submit">
                      Go
                    </button>
                  </div>
                </div>
                <label
                className="mc-label"
                  htmlFor="mc-email"
                  id="mc-notification"
                ></label>
              </form>
            
              </div>
            */}
          </div>
        </div>
        <section className="pb-0 section-sm">
          <div className="mx-0 row">
            <div className="pl-0 col-md-6 col-lg-4 pr-md-30px">
              <p className="mb-0"></p>
            </div>
            <div className="pl-0 mt-5 col-md-6 col-lg-4 pr-md-30px mt-md-0">
              {/* <ul className="social-icons d-none d-sm-block">
                <li>
                  <a href="https://www.github.com/penkong" target="_blank">
                    <ion-icon name="logo-github"></ion-icon>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/SirMazdak" target="_blank">
                    <ion-icon name="logo-twitter"></ion-icon>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/mazdak-nazemi-5a7950142/">
                    <ion-icon name="logo-linkedin"></ion-icon>
                  </a>
                </li>
              </ul> */}
            </div>
            {/*
          <div className="pl-0 mt-5 col-md-6 col-lg-4 mt-lg-0">
          <ul className="language">
          <li className="active">
          <a href="#">Eng</a>
          </li>
          <li>
          <a href="#">Fra</a>
          </li>
          <li>
          <a href="#">Ger</a>
          </li>
          </ul>
            </div>
          */}
          </div>
        </section>
      </div>
    </footer>
  )
}

export const FooterProvider = _FooterProvider
