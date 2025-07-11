import React from "react";
const Gallery=()=>{
    const images = [
        process.env.PUBLIC_URL + "/assets/Rectangle 11.png",
        process.env.PUBLIC_URL + "/assets/Rectangle 11.png",
        process.env.PUBLIC_URL + "/assets/Rectangle 11.png",
        process.env.PUBLIC_URL + "/assets/Rectangle 11.png",
        process.env.PUBLIC_URL + "/assets/Rectangle 11.png",
        process.env.PUBLIC_URL + "/assets/Rectangle 11.png",
        process.env.PUBLIC_URL + "/assets/Rectangle 11.png",
        process.env.PUBLIC_URL + "/assets/Rectangle 11.png",
      ];
    return(
        <div className="container mt-4 ">
         <h1 className="mt-5 mb-4" style={{marginLeft:"160px"}}>Gallery</h1>
         <div className="row" id="gallery">
          {images.map((img, index) => (
            <div className=" col-lg-3 mb-1" key={index}>
              <div className="gallery">
                <img src={img} className="card-img-top" alt={`img-${index}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};
export default Gallery;