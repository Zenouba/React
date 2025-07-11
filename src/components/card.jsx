import React from "react";
import { Card, Button } from "react-bootstrap";

const ChoiceCards = ({ selectedPlan }) => {
  const plans = [
    {
      name: "basic",
      label: "Basic",
      subtitle: "",
      prices: {
        monthly: 0,
        yearly: 0,
        lifetime: 0
      },
      includes: [
        { label: "10 Customers", isInclude: true },
        { label: "1 Staff", isInclude: true },
        { label: "1 Service", isInclude: true },
        { label: "50 Appointments", isInclude: true },
        { label: "Gallery", isInclude: true },
        { label: "Virtual Meetings", isInclude: true },
        { label: "Google Calendar Syn", isInclude: true },
        { label: "Get Online Payments", isInclude: false }
      ]
    },
    {
      name: "professional",
      label: "Professional",
      subtitle: "per month, paid yearly ($89)",
      prices: {
        monthly: 0,
        yearly: 89,
        lifetime: 599
      },
      includes: [
        { label: "10 Customers", isInclude: true },
        { label: "1 Staff", isInclude: true },
        { label: "∞ Service", isInclude: true },
        { label: "∞ Appointments", isInclude: true },
        { label: "Gallery", isInclude: true },
        { label: "Virtual Meetings", isInclude: true },
        { label: "Google Calendar Syn", isInclude: true },
        { label: "Get Online Payments", isInclude: true }
      ]
    },
    {
      name: "business",
      label: "Business",
      subtitle: "per month, paid yearly ($349)",
      prices: {
        monthly: 0,
        yearly:599,
        lifetime: 1499
      },
      includes: [
        { label: "∞ Customers", isInclude: true },
        { label: "∞ Staff", isInclude: true },
        { label: "∞ Service", isInclude: true },
        { label: "∞ Appointments", isInclude: true },
        { label: "Gallery", isInclude: true },
        { label: "Virtual Meetings", isInclude: true },
        { label: "Google Calendar Syn", isInclude: true },
        { label: "Get Online Payments", isInclude: true }
      ]
    }
  ];

  return (
    <div className="d-flex justify-content-around mt-5">
      {plans.map((plan) => (
        <Card key={plan.name} style={{ width: "20rem" }}>
          <Card.Body className="shadow rounded-4 card-hover">
            <div className="c">
              <Card.Title className="text-center">{plan.label}</Card.Title>
              <h1 className="text-center">${plan.prices[selectedPlan]}</h1> {/*  Affiche le bon prix */}
              <p className="text-center">{plan.subtitle}</p>
            </div>
            <h6 className="m">What it includes:</h6>
            <ul className="list-item-hover">
              {plan.includes.map((item, i) => (
                <li
                  key={i}
                  style={{
                    color: item.isInclude ? "" : "gray",
                    listStyleType: "none",
                    border: "none"
                  }}
                >
                  <img
                    src="./assets/Frame.png"
                    alt="Icon"
                    className="me-3"
                    style={{
                      opacity: item.isInclude ? 1 : 0.5,
                      filter: item.isInclude ? "none" : "grayscale(100%)"
                    }}
                  />
                  {item.label}
                </li>
              ))}
            </ul>
            <Button className="btn bg-white text-danger rounded-5 border-danger w-100 mt-3 btn-hover">
              Start for free
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default ChoiceCards;
