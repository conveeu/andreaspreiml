//import React, { useState } from "react";
//import Modal from "react-modal";
//import Index from "../../components/about/index";

const heroContent = {
  heroImage: "img/hero/dark.jpg",
  heroMobileImage: "img-mobile",
  heroTitleName: "Andreas Preiml",
  heroDesignation: "Dein Digi-Coach",
  heroDescriptions: `Wer heute bestehen will, muss wissen was er tut. Nicht nur auf dem eigenen Fachgebiet. Alles wird mehr und mehr digital. Es braucht jemanden von außen. Einen Sparringpartner und Coach auf dem Weg zum digitalen Erfolg. Das bin ich.`,
  heroBtn: "Kostenloses E-Mail-Coaching abonnieren",
};

const Hero = () => {
  return (
    <>
      <div className="row home-details-container align-items-center">
        <div
          className="col-lg-4 bg position-fixed d-none d-lg-block"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + heroContent.heroImage
            })`,
          }}
        ></div>
        <div className="col-12 col-lg-8 offset-lg-4 home-details  text-center text-lg-start">
          <div>
            <img
              src={`img/hero/${heroContent.heroMobileImage}.jpg`}
              className="img-fluid main-img-mobile d-sm-block d-lg-none"
              alt="hero man"
            />
            <h1 className="text-uppercase poppins-font">
              {heroContent.heroTitleName}
              <span>{heroContent.heroDesignation}.</span>
            </h1>
            <p className="open-sans-font">{heroContent.heroDescriptions}</p>
            <button className="button" data-token="c180b556c22dd5c4c66fe3607c61b225" onclick="mjOpenPopin(event, this)">
              <span className="button-text">{heroContent.heroBtn}</span>
              <span className="button-icon fa fa-arrow-right"></span>
            </button>
          </div>
        </div>
      </div>
      {/* End home-details-container */}
    </>
  );
};

export default Hero;
