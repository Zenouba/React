import React, { useState, useEffect } from "react";

export const Services = ({ data, setData, setIsNextDisabled  }) => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    serviceName: "",
    category: "",
    price: "",
    duration: "",
  });
  const services = data.services || [];
  const [image, setImage] = useState(null);

useEffect(() => {
  setIsNextDisabled(services.length === 0);
}, [services, setIsNextDisabled]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    const { serviceName, category, price, duration } = formData;
    if (!serviceName || !category || !price || !duration) {
      alert("Veuillez remplir tous les champs du formulaire.");
      return;
    }

    const newService = {
      id: services.length + 1,
      ...formData,
      status: "Active",
      duration: formData.duration || "",
      image: image,
    };

    setData((prevData) => ({
      ...prevData,
      services: [...(prevData.services || []), newService],
    }));

    setFormData({
      serviceName: "",
      category: "",
      price: "",
      duration: "",
    });
    setImage(null);
    setShowForm(false);
    setShowAlert(true);

  };

  const handleClick = () => {
    document.getElementById("fileInput").click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };
  const [showAlert, setShowAlert] = useState(false);
  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => {
        setShowAlert(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showAlert]);
  

  return (
    <div className="container mt-5 position-relative" style={{ minHeight: "500px" }}>
{showAlert && (
  <div
    className="alert alert-success text-center"
    role="alert"
    style={{
      position: "fixed",
      top: "20px",
      left: "50%",
      transform: "translateX(-50%)",
      zIndex: 1055,
      width: "fit-content",
      padding: "10px 30px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
    }}
  >
    Service ajouté avec succès !
  </div>
)}

      {!showForm && (
        <>
          <h2 className="text-center fw-bold">Services</h2>
          <p className="text-center text-muted">
            Basic information, You can add more later
          </p>
        </>
      )}

      <div
        className="modal fade mt-5"
        id="serviceModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="serviceModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content rounded-4 p-3">
            <div className="modal-body">
              <div className="d-flex justify-content-between">
                <h2>Service</h2>
                <a
                  href="#uploadImage"
                  className="btn btn-link bg-white"
                  style={{ textDecoration: "none", marginRight: "-500px" }}
                  onClick={handleClick}
                >
                  + Upload image
                </a>

                <button
                  type="button"
                  style={{ marginTop: "-20px", marginRight: "-20px" }}
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <input
                type="file"
                id="fileInput"
                className="d-none"
                onChange={handleImageChange}
                accept="image/*"
              />

              <label className="form-label text-muted mt-2">Service Name</label>
              <input
                type="text"
                className="form-control rounded-3"
                name="serviceName"
                value={formData.serviceName}
                onChange={handleChange}
                placeholder="Write your service name"
              />

              <div className="d-flex align-items-center mb-1 gap-5">
                <div className="w-50">
                  <label className="form-label text-muted mt-3">Category</label>
                  <select
                    className="form-select rounded-3 text-muted"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                  >
                    <option value="">Category</option>
                    <option value="Spa">Spa</option>
                    <option value="Nails">Nails</option>
                    <option value="Haircut">Haircut</option>
                  </select>
                </div>

                <div className="w-50">
                  <label className="form-label mt-3 text-muted">Price</label>
                  <div className="input-group">
                    <input
                      type="number"
                      className="form-control"
                      name="price"
                      value={formData.price}
                      onChange={handleChange}
                      placeholder="Price"
                    />
                    <span className="input-group-text" style={{ backgroundColor: "#E9ECEF" }}>
                      د.م.
                    </span>
                  </div>
                </div>
              </div>

              <div className="w-50 mt-3">
                <label className="form-label text-muted">Duration</label>
                <input
                  type="number"
                  className="form-control rounded-3"
                  name="duration"
                  value={formData.duration}
                  onChange={handleChange}
                  placeholder="Duration"
                />
              </div>
            </div>

            <div className="d-flex justify-content-end">
              <button
                type="button"
                className="btn rounded-5 px-4"
                data-bs-dismiss="modal"
                style={{ backgroundColor: "#EDEDED", color: "black" }}
              >
                BACK
              </button>
              <button
                type="button"
                className="btn rounded-5 px-5"
                onClick={handleSave}
                disabled={!formData.serviceName || !formData.category || !formData.price || !formData.duration}
                style={{
                  backgroundColor: "#D8282F",
                  color: "white",
                  opacity: (!formData.serviceName || !formData.category || !formData.price || !formData.duration) ? 0.6 : 1,
                  cursor: (!formData.serviceName || !formData.category || !formData.price || !formData.duration) ? "not-allowed" : "pointer",
                }}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="d-grid justify-content-center">
        {services.length > 0 && (
          <div className="mt-3" style={{ width: "900px" }}>
            <table className="table text-center align-middle shadow-sm border rounded-4 overflow-hidden">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Photo</th>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Staffs</th>
                  <th>Details</th>
                  <th>Price</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {services.map((service, index) => (
                  <tr key={index}>
                    <td>{service.id}</td>
                    <td>
                      {service.image && (
                        <div className="d-flex justify-content-center mt-2 rounded-5">
                          <img
                            src={service.image}
                            alt="Uploaded"
                            style={{
                              width: "80px",
                              height: "80px",
                              objectFit: "cover",
                            }}
                          />
                        </div>
                      )}
                    </td>
                    <td className="text-muted ps-4">{service.serviceName}</td>
                    <td>
                      <span className="badge rounded-2 bg-danger px-3">{service.category}</span>
                    </td>
                    <td>
                      <span className="badge bg-light border text-muted px-3">
                        {service.staff || "Not Assigned"}
                      </span>
                    </td>
                    <td className="text-muted">{service.duration} Minute</td>
                    <td className="text-muted">{service.price} د.م.</td>
                    <td>
                      <span className="text-light p-1 px-3" style={{ background: "#28A745" }}>
                        Active
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {services.length > 0 && (
          <div className="d-flex justify-content-center mb-3" style={{ width: "900px", margin: "0 auto" }}>
            <button
              type="button"
              className="btn btn-lg rounded-5 px-5 p-1 mt-4"
              style={{
                border: "none",
                background: "#3F4C5C",
                color: "white",
              }}
              data-bs-toggle="modal"
              data-bs-target="#serviceModal"
            >
              Add a Service
            </button>
          </div>
        )}

        {services.length === 0 && (
          <div
            className="mt-4 border border-dashed rounded-3 d-flex flex-column align-items-center justify-content-center p-4"
            style={{
              width: "600px",
              minHeight: "400px",
              margin: "0 auto",
              boxShadow: "0 0 20px rgba(0,0,0,0.1)",
            }}
          >
            <button
              type="button"
              className="btn btn-lg rounded-5"
              style={{
                border: "none",
                background: "#3F4C5C",
                color: "white",
              }}
              data-bs-toggle="modal"
              data-bs-target="#serviceModal"
            >
              Add a Service
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;
