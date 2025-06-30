import React from "react";
import { business } from "../data/business";
import Card2 from "./atomics/card2";


const Businesses = () => {
  return (
    <section className="container4 text-center mt-5">
      <h1 className="">The businesses we serve</h1>
      <p className="p2">The best solution to start your online business with powerful features</p>
      
      <div className="row ">

        {
            business.map((businesse) => <Card2 Image={businesse.Image} title={businesse.title} content={businesse.content} />
        )
        }

      </div>

    </section>
  );
};

export default Businesses;
