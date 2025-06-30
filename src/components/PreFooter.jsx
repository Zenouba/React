import React from "react";

const HowItWorks = () => {
  return (
    <section className="container1 text-center py-5 ">
      <h1 className="how text-white">How It Works</h1>
      <p className="look text-white mb-4">Look at a glance how our system works</p>

      <div className="container3 d-flex justify-content-around align-items-center">
        
        <div className="col text-center mb-4 mt-4">
          <img src="./assets/1.png" alt="Customize Schedule" width="62px" />
          <p className="p1 text-white mt-3">
            Customize your appointment <br /> schedule and booking page.
          </p>
        </div>

       
        <div className="col text-center mb-3 mt-4">
          <img src="./assets/2.png" alt="Share Booking Page" width="62px" />
          <p className="p1 text-white mt-3">
            Share your personal booking page <br />with your customers and <br/> prospects.
          </p>
        </div>

       
        <div className="col text-center mb-3 mt-4">
          <img src="./assets/3.png" alt="Customer Booking" width="62px" />
          <p className="p1 text-white mt-3">
            Your customers and prospects book<br/> an available time with you.
          </p>
        </div>
      </div>

      
      <div className="mt-5">
        <img src="./assets/youtub.png" alt="Video Preview" className="main-img" />
        {/* <img src="./assets/logo y.png" alt="Customer Booking"  className="logoy" /> */}
      </div>
    </section>
  );
};

export default HowItWorks;
