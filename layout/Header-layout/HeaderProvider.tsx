import React from 'react'

const _HeaderProvider = () => {
  return (
    <>
      <div className="loader">
        <div className="spinner">
          <div className="double-bounce1"></div>
          <div className="double-bounce2"></div>
        </div>
      </div>

      <div className="click-capture d-lg-none"></div>

      <nav id="scrollspy" className="navbar navbar-desctop">
        <div className="d-flex align-items-center position-relative w-100">
          <a className="navbar-brand" href="#">
            Penbeh.com
          </a>
          <div className="container">
            <ul className="ml-3 navbar-nav navbar-nav-desctop d-none d-lg-block">
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

            {/* <ul className="mr-2 social-icons d-none d-lg-block">
              <li>
                <a href="https://www.github.com/penkong" target="_blank">
                  <ion-icon name="logo-github"></ion-icon>
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/SirMazdak"
                  target="_blank"
                >
                  <ion-icon name="logo-twitter"></ion-icon>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/mazdak-nazemi-5a7950142/" target="_blank">
                  <ion-icon name="logo-linkedin"></ion-icon>
                </a>
              </li>
            </ul> */}
          </div>

          <button className="toggler d-block d-lg-none">
            <span className="toggler-icon"></span>
            <span className="toggler-icon"></span>
            <span className="toggler-icon"></span>
          </button>
        </div>
      </nav>

      <nav className="navbar navbar-mobile d-lg-none">
        {/* <ion-icon className="close" name="close-outline"></ion-icon> */}

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
        <ul className="navbar-nav navbar-nav-mobile">
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
        <div className="navbar-mobile-footer"></div>
      </nav>
    </>
  )
}

export const HeaderProvider = _HeaderProvider
