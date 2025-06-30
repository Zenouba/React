import React from "react";
import { features } from "../data/features";
import Card from "./atomics/card";

//this is the right one 
const FeaturesSection = () => {

  return (
    <section className="container my-5 mt-5">
      <h1 className="text-center mb-3">Discover Our Features</h1>
      <p className="text-center text-secondary mb-5">
        The best solution to start your online business with powerful features
      </p>
      <div className="row g-3">
        {
          features.map((feature) => <Card image={feature.image} title={feature.title} description={feature.description} />
          )
        }
      </div>
    </section>
  );
};

export default FeaturesSection;
