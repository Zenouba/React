import React from "react";
import { features1 } from "../data/features1";
import Card3 from "./atomics/card3";
const Serv =()=>{
    return(
        <div id="Serv" className="mt-5"style={{marginLeft:"250px"}}>
             <h4 className="fw-bold mb-4">Services</h4>
         <div
             className="d-flex overflow-auto"style={{ gap: "10px", whiteSpace: "nowrap" }}>
               {features1.map((feature, index) => (
            <div key={index} style={{ flex: "0 0 auto",borderRadius:"20px",padding: "25px"}}>
              <Card3
                 image={feature.image}
                 title={feature.title}
                 description={feature.description}
             />
            </div>
    ))}
        </div>
       </div>

    );
};
export default Serv;