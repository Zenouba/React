import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Formulaire = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [isChecked, setIsChecked] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    if (!isChecked) {
      setErrorMessage("You must accept the terms.");
      return;
    }

    try {
      const response = await fetch("http://159.203.179.214:1337/api/auth/local/register",{
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: formData.email.split("@")[0],
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("user", JSON.stringify(data)); // ✅ stocke user + jwt
        setFormData({ email: "", password: "", confirmPassword: "" });
        setErrorMessage("");
        navigate("/step");
      } else {
        setErrorMessage(data.error?.message || "Registration failed.");
      }
    } catch (error) {
      console.error("Registration error:", error);
      setErrorMessage("An error occurred during registration.");
    }
  };

  return (
    <div style={{ marginLeft: "-15px" }}>
      <div className="container-fluid d-flex">
        <div className="row g-0 w-100 align-items-center justify-content-center">
          {/* left */}
          <div className="col-md-6" style={{ backgroundColor: "#D7282F", color: "white", height: "100vh" }}>
            <div className="container-fluid d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
              <div className="circle-container">
                <div className="circle4"></div>
                <div className="circle5"></div>
                <div className="circle"></div>
              </div>
              <div className="text-center w-75">
                <img src="./assets/logo3.png" alt="datetric" className="mb-3 w-50" />
                <p
                  className="mt-3"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 200,
                    fontSize: "16px",
                    lineHeight: "140%",
                    letterSpacing: "-3%",
                  }}
                >
                  Simplifies appointment booking, helping you to <br /> manage business in a smart way.
                </p>
              </div>
            </div>
          </div>

          {/* right */}
          <div className="col-md-6 d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
            <button
              onClick={() => navigate("/")}
              className="btn btn-link text-dark d-flex align-items-center bg-white"
              style={{ position: "absolute", top: "20px", right: "630px", textDecoration: "none" }}
            >
              &lt; Go Back
            </button>
            <div className="w-75">
              <h1 className="text-center mb-1 mt-0">Sign up</h1>
              <p className="text-muted text-center mb-4">Sign up to your Datetric account</p>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label text-muted">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Write your email"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label text-muted">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Write your password"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="confirmPassword" className="form-label text-muted">
                    Reconfirm Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Reconfirm your password"
                    required
                  />
                </div>

                {errorMessage && (
                  <div className="alert alert-danger mt-3" role="alert">
                    {errorMessage}
                  </div>
                )}

                <div className="form-check mt-4">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="termsCheckbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                    required
                  />
                  <label className="form-check-label" htmlFor="termsCheckbox">
                    I have read and understood{" "}
                    <a href="#" className="text-danger text-decoration-none">
                      the Terms and Conditions
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-danger text-decoration-none">
                      the Privacy Policy
                    </a>{" "}
                    of this site.
                  </label>
                </div>

                <button
                  type="submit"
                  className="btn w-100 rounded-5 mt-4"
                  style={{ backgroundColor: "#D7282F", color: "#FFFFFF" }}
                  disabled={!isChecked}
                >
                  Register
                </button>

                <p className="text-secondary mt-4 text-center">
                  Have an account already?{" "}
                  <a href="#" className="text-danger text-decoration-none">
                    Sign in
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Formulaire;
