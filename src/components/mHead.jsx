import React from "react";
const socialLinks = [
    { name: 'WhatsApp', icon: 'fab fa-whatsapp', url: 'https://wa.me/212600000000'},
    { name: 'Facebook', icon: 'fab fa-facebook', url: 'https://facebook.com' },
    { name: 'Twitter', icon: 'fab fa-twitter', url: 'https://twitter.com' },
    { name: 'LinkedIn', icon: 'fab fa-linkedin', url: 'https://linkedin.com' },
    { name: 'YouTube', icon: 'fab fa-youtube', url: 'https://youtube.com' },
  ];
const Mhead=({companyName})=>{
    const description = "Welcome to "
    return(
    <header id="Mhead" className=" text-white text-center" style={{  backgroundImage: "url('./assets/Rectangle1.png')",backgroundSize: "cover",backgroundPosition: "center" , height:"400px",paddingTop:"100px"}}>
       <h1 className="display-5 mb-3">{description + companyName}</h1>
    <div className="d-flex flex-column"style={{marginLeft: "600px"}}>
       <button type="button" className="shad rounded-5 mt-3 mb-2 py-2 px-3 text-white" style={{ backgroundColor: "#BA2020", marginLeft: "80px",width:"130px" }}>
          Book Now
       </button>
       <button type="button" className="shad rounded-5 mt-0 mb-4 py-2 px-3 " style={{ backgroundColor: "#FFFFFF", marginLeft: "70px",width:"150px" }}>
         Find Location
        </button>
        <div className=" mt-3" style={{marginLeft:"-580px"}}>  
         {socialLinks.map((item) => (
         <button className={`${item.icon} fa-2x ` } style={{ color: getColor(item.name),border:"none", background: "transparent" }}/>))}
         </div>

    </div>
    </header>
    


    );

};
const getColor = (platform) => {
    switch (platform) {
      case 'WhatsApp':
        return '#25D366';
      case 'Facebook':
        return '#1877F2';
      case 'Twitter':
        return '#1DA1F2';
      case 'LinkedIn':
        return '#0077B5';
      case 'YouTube':
        return '#FF0000';
      default:
        return '#000';
    }
  };
export default Mhead;