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
                <h3 className="h4 mb-2">We care</h3>
                <p className="text-center">Our goal is to see that we empower the youth nd communities to see that they achieve their full potential as well as improve their lives.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 text-center skill">
              <div className="mt-5">
                <h3 className="h4 mb-2">Professional</h3>
                <p className="text-center">Our team is comprised of multi-talented folks that are deeply skilled and qualified to equip the students with the required skills.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 text-center skill">
              <div className="mt-5">
                <h3 className="h4 mb-2">Innovative</h3>
                <p className="text-center">Innovation is at the heart of our organization and imparting ito our students is a misssion that we deeply care about.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    
    )
}

export default Banner;