import React from 'react'

export default function Card({ image, title, description, }) {
    return (
        <div className="col-md-4 ">
            <div className="card h-100 text-center shadow" id="card1">
                <div className="card-body">
                    <img
                        src={image}
                        alt="Booking Website"
                        className="mb-3"
                        style={{ width: "20%", }}
                    />
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text" dangerouslySetInnerHTML={{__html : description}}/>
                    {/* rah hiya */}
                </div>
            </div>
        </div>
    )
}
