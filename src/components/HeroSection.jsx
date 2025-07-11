import React from 'react';
const HeroSection = () => {
  return (
    
    <section className="hero-section text-center py-5 mt-5 position-relative overflow-hidden">
      <div className="circle1"></div>
      <div className="circle2"></div>
      <div className="container">
        <p className="subtitle">One platform for any business</p>
        <h1 className="main-title display-4" >
          smart <span className="text-danger">booking</span> tool to
          <span className="text-danger"> grow <br /> </span> your <span className="text-danger">online</span> business.
        </h1>
        <p className="description">
            Simplifies appointment booking, helping you to manage business <br /> in a smart way.
        </p>
        <div className="d-flex justify-content-center align-items-center gap-3 mt-5">
          <button className="btn btn-danger btn-lg rounded-5">Start 14 days trial</button>
          
          <div className="d-flex align-items-center ms-4 cursor-pointer">
            <img src="./assets/start.png" alt="How it works logo" width="45" />
            <span className="ms-2">How it works</span>
          </div>
        </div>
      </div>
      <section className="img2 my-5 justify-content-center">
        <img
          src="./assets/image1.png"
          className="d-block mx-auto rounded-4"
          alt=""
          width="900px"
        />
      </section>
    </section>
  );
};

export default HeroSection;
