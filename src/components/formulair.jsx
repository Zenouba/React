import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = ({ title, description }) => {
    const navigate = useNavigate();

  const [formData, setFormData] = useState({
    Username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with data: ", formData);
    setFormData({ Username: "", password: "" });
  };

  return (
    <div className="" style={{marginLeft:'-15px'}}>
    <div className="container-fluid d-flex">
      <div className="row g-0 w-100 align-items-center justify-content-center">
        {/* left */}
        <div className="col-md-6" style={{ backgroundColor: '#D7282F', color: 'white', height: '100vh' }}>
        <div className="container-fluid d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <div className="circle-container">
        <div className="circle4 "></div>
        <div className="circle5 "></div>
       <div className="circle"></div>
       </div>
         <div className="text-center w-75">
           <img src="./assets/logo3.png" alt="datetric" className="mb-3 w-50" />
           <p
                 className="mt-3"
                 style={{
                   fontFamily: 'Montserrat, sans-serif',
                   fontWeight: 200,
                   fontSize: '16px',
                   lineHeight: '140%',
                   letterSpacing: '-3%',
                 }}

           >
            Simplifies appointment booking, helping you to <br/> manage business in a smart way.
            </p>
         </div>
     </div>
    </div>

        {/* right*/}
        <div className="col-md-6 d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
         {/* Bouton Go back */}
          <button
            onClick={() => navigate("/")}
            className="btn btn-link text-dark d-flex align-items-cente bg-white"
            style={{ position: 'absolute', top: '20px', right: '630px',textDecoration:'none' }}
          >
            <i className=" me-2 "></i> &lt; Go Back
          </button>
          <div className="w-75">
            <h1 className="text-center mb-1 mt-0">{title}</h1>
            <p className="text-muted text-center mb-5">{description}</p>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="Username/Email" className="form-label text-muted mt-3">Email/Username</label>
                <input
                  type="email"
                  className="form-control pb-2 pt-2"
                  id="Username/Email"
                  name="Username"
                  value={formData.Username}
                  onChange={handleChange}
                  placeholder="write your email"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label text-muted mt-3">Password</label>
                <input
                  type="password"
                  className="form-control mb-4 pt-2 pb-2"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Write your password"
                  required
                />
              </div>
              <a href="" style={{color:'#D7282F',textDecoration:'none'}} >Forgot password?</a>
              <button type="submit" className="btn w-100 rounded-5 mt-5 pt-2 pb-2" style={{ backgroundColor:'#D7282F', color:'#FFFFFF'}}>Sign In</button>
              <p className="text-secondary mt-5 d-flex justify-content-center">
                Don't have an account?{""}
                <a href="#" className="text-danger text-decoration-none ms-2">Register</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};


export default Form;
