import React, { useState } from "react";

const PricingToggle = ({ onSelectPlan }) => {
  const [selected, setSelected] = useState("yearly");

  
  onSelectPlan(selected);
  const planes = [
    { name: "monthly", label: "Monthly" },
    { name: "yearly", label: "Yearly" },
    { name: "lifetime", label: "Lifetime" }
  ];

  return (
    <div className="d-flex justify-content-center mt-4">
      <div className="btn-group" role="group">
        {planes.map((plan) => (
          <button
            key={plan.name}
            className={`btn btn-custom ps-4 pe-4 pt-2 pb-2 ${selected === plan.name ? "active rounded-5 shadow" : ""}`}
            onClick={() => setSelected(plan?.name)}
          >
            {plan.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PricingToggle;
