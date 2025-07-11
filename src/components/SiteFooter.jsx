import React from "react";



const SiteFooter = () => {
    return(

        <div className="e"  style={{padding:"0", textAlign: "left" }}>
        <div>
        <img src="./assets/logo.png" alt="datetric" className=""/>
        <p className="p mt-4">Datetric is a complete online appointements booking solution for small to medium businesses, coaches,<br /> consultants, tutors, practicians and you name it! Datetric gives you the ability to create and manage your <br /> bookings, staffs, services, customers, etc.</p>
        <img src="./assets/social.png" alt="social media" 
         className="mt-3"
        />
        </div>
        <div className="services">
        <ul style={{ listStyle: "none", color: "#3F4C5C", paddingLeft: "20px" }}>
          <h3 className="mb-4 text-black ">Services</h3>
          <li><a href="#pricing" className="footer-link">Pricing</a></li>
          <li><a href="#blogs" className="footer-link">Blogs</a></li>
          <li><a href="#faqs" className="footer-link">FAQs</a></li>
          <li><a href="#contact" className="footer-link">Contact</a></li>
        </ul>
      </div>
      <div className="pages">
        <ul style={{ listStyle: "none", color: "#3F4C5C", paddingLeft: "10px"}}>
          <h3 className="mb-1 text-black">Pages</h3>
          <li><a href="#about" className="footer-link">About</a></li>
          <li><a href="#contact-us" className="footer-link">Contact us</a></li>
          <li><a href="#careers" className="footer-link">Careers</a></li>
          <li><a href="#culture" className="footer-link">Culture</a></li>
          <li><a href="#blog" className="footer-link">Blog</a></li>
        </ul>
      </div>
    </div>
    );
};
export default SiteFooter;