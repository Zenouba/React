import React from "react";

export default function Card2({ Image, title, content ,link}) {
  console.log(Image)
  return (
    // <div className="container">
    //   <div className="row" style={{ paddingLeft: "50px", paddingRight: "50px" }}>
        <div className="col-md-4">
          <div className="card text-center rounded-4">
            <div className="card-body" style={{ padding: "0", textAlign: "left"}}>
              <img
                src={Image}
                alt="beauty"
                className="mb-3"
                style={{ width: "100%" }}
              />
              <h5 style={{ paddingLeft: "20px" }}>{title}</h5>
              
                <div className="">
                {content.map((item, index) => (
                    <div className="mb-2 ms-3">
                      <a key={index} href={item.url} className="s">{item.title}  </a>
                      
                    </div>
                      
                  ))}
                </div>
                  
                
              
            </div>
          </div>
        </div>
    //   </div>
    // </div>
  );
}
