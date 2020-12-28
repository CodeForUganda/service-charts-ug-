import React from 'react';

const Banner = () => {
    return (

        <section className="banner " id="page-section">
        <h2 className="text-center mt-0 choose">Why choose us </h2>
        <div className="separator-secondary"></div>
        <p className="text-center">Wondering why you shoudl trust us while emarking <br /> on your practical skills acquaisition? Let's tell you below.
        </p>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-xs-12 text-center skill">
              <div className="mt-5">
                <h3 className="h4 mb-2">Open</h3>
                <p className="text-center">
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore aperiam dolore placeat possimus natus culpa. Eveniet odit eum inventore optio.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 text-center skill">
              <div className="mt-5">
                <h3 className="h4 mb-2">Verified</h3>
                <p className="text-center">
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore aperiam dolore placeat possimus natus culpa. Eveniet odit eum inventore optio.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 text-center skill">
              <div className="mt-5">
                <h3 className="h4 mb-2">Reliable</h3>
                <p className="text-center">
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore aperiam dolore placeat possimus natus culpa. Eveniet odit eum inventore optio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    
    )
}

export default Banner;