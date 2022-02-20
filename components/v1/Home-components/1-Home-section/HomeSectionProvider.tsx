import React from 'react'

const _HomeSectionProvider = () => {
  return (
    <main
      id="home"
      className="masthead jarallax"
      style={{ backgroundImage: "url('img/bg/personal.jpg')" }}
      role="main"
    >
      <div className="lines">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-4"></div>
            <div className="col-md-6 hidden-sm col-lg-4"></div>
            <div className="col-md-6 col-lg-4 hidden-md"></div>
          </div>
        </div>
      </div>
      <div className="opener blur-scroll">
        <div className="container mr-1" style={{ direction: 'rtl' }}>
          <div style={{ width: '45%', direction: 'ltr' }}>
            <div className="row">
              <div className="col-md-12">
                <p
                  className="head-med"
                  style={{
                    color: '#16213e'
                  }}
                >
                  Mazdak Nazemi
                </p>
                <p className="head-med software">Software</p>
                <p className="head-med software">Developer</p>
              </div>
              <div
                className="father-resume"
                style={{ height: '3rem', marginLeft: '1rem' }}
              >
                {/* <a
                  className="resume"
                  href="https://onedrive.live.com/download?cid=2A1F948C6F536C2E&resid=2A1F948C6F536C2E%213806&authkey=AMalZvfMcJyOwKU&em=2"
                >
                  Resume
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export const HomeSectionProvider = _HomeSectionProvider
