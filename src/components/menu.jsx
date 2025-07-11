import React from "react";
const Menu =()=>{
    return(
     <div className="d-flex flex-column gap-4  py-3 border rounded-3 px-4 mx-5 shadow-lg bg-white pt-5"
     style={{width:"158px",height:"350px",marginTop:"-270px",zIndex:1,position:"relative"}}

     >
       <a href="#Mhead" className="text-decoration-none text-dark mt-2">About </a>
       <a href="#Serv" className="text-decoration-none text-dark mt-2">Services</a>
       <a href="#gallery" className="text-decoration-none text-dark mt-2">Gallery</a>
       <a href="#Mworking" className="text-decoration-none text-dark mt-2">Working Hours</a>
       <a href="#social" className="text-decoration-none text-dark mt-2">Contact</a>
     </div>

    );
};
export default Menu;