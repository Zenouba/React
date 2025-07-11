import React, { useState } from "react";

const Email = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    setFormData({ fullName: "", email: "", message: "" });
  };

  return (
    <div className="container position-relative" style={{marginTop:"-100px",width:"900px" }}>
      <div className="row justify-content-center">
        <div className="">
          <div className="card shadow-lg"id="mail">
            <div className="card-body ps-4">
              <form onSubmit={handleSubmit}>
                
                   <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="fullName" className="form-label">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Write your name here"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label">
                      Your Email
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
                </div>

                
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Your Message
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-danger text-light rounded-5">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Email;
