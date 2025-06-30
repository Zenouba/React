import React from "react";
const MiniNav =()=>{
    return(     
<nav className="navbar navbar-expand-lg" id="nv" >
<h5 className="text-white ms-3">Logo</h5>
  <div className="collapse navbar-collapse" id="n">
    <ul className="navbar-nav gap-5 ">
      <li className="nav-item active">
        <a class="nav-link text-light" href="#">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-light" href="#">Services</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-light" href="#">Gallery</a>
      </li>
    </ul>
  </div>
</nav>

    );

};
export default  MiniNav;