import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
      <div className="row align-items-center">
        <div className="col-md-6  justify-content-center align-items-center">
          <img 
            src="./assets/office.png" 
            alt="" 
            className="img-fluid" 
            style={{ width: "100%", height: "530px" }} 
          />
        </div>
        

        <div className="col-md-6 justify-content-center align-items-center ">
          <div 
            className="text-light p-5 " 
            style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center"}}
          >
            <h1 id="why">Why Choose Us?</h1>
            <p class="mb-4"  style={{ letterSpacing: "-3%" }}> 
              Our online booking SAAS provides easy and convenient <br /> appointment booking for your customers.
            </p>
            <p class="mb-4" style={{ letterSpacing: "-3%" }}>
              It's available 24/7, customizable to your brand, and sends <br /> automated reminders to reduce no-shows.
            </p>
            <p class="mb-4" style={{ letterSpacing: "-3%" }}>
              Our platform is secure and reliable, and integrates seamlessly <br />with other software you may already be using.
            </p>
            <div className="text-left">
              <button className="btn btn-danger rounded-5 mt-4" type="button">
                Learn more
              </button>
            </div>
          </div>   
        </div>
      </div>   
    </section>
  );
};


export default WhyChooseUs;
