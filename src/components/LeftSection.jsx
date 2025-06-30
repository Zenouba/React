import React from "react";

const LeftSection = () => {
  return (
    <div className="d-flex align-items-center justify-content-center position-relative bg-danger text-white h-100">
      {/*circle*/}
      <div
        className="position-absolute bg-white rounded-circle"
        style={{ width: "100px", height: "100px", top: "10%", left: "20%", opacity: 0.3 }}
      ></div>
      <div
        className="position-absolute bg-white rounded-circle"
        style={{ width: "80px", height: "80px", bottom: "15%", right: "25%", opacity: 0.2 }}
      ></div>

      <h2 className="text-center">Bienvenue sur notre plateforme</h2>
    </div>
  );
};

export default LeftSection;
