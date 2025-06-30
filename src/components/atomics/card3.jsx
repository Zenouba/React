import React from 'react'

export default function Card3({ image, title, description, }) {
    return (
        <div className="card3 ">
            <div className=" text-center shadow" id="card3">
                <div className="">
                    <img
                        src={image}
                        alt=""
                        className="mb-3"
                        style={{ width: "100%" }}
                        
                    />
                    <h5 className="">{title}</h5>
                    <button className="btn mb-3"style={{backgroundColor:"#1E285F",color:"white"
                        ,borderRadius:"10px"}} >Book now </button>

                </div>
            </div>
        </div>
    )
}
