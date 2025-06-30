import React from 'react'
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const Mworking = ({workingHours}) => {
  return (
    <div id='Mworking' className='mt-5'style={{marginLeft:"250px"}}>
        <h3 className='mb-5 '>Working Hours</h3>
        <ul className="list-unstyled">
        {workingHours.map((day, index) => (
          <li key={index} className="schedule-item">
            <strong className="day">{days[index].toUpperCase()}  </strong>{" "}
            {day.isOpen
              ? day.slots.map((slot, i) => (
                  <span key={i} className="hours">
                    {slot.from} - {slot.to}
                    {i < day.slots.length - 1 ? " " : ""}
                  </span>
                ))
              : <span className="text-muted "style={{marginLeft:"100px"}}>Closed</span>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Mworking;