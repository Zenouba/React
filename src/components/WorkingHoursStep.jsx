import React, { useEffect,useState } from 'react';
import { Form } from 'react-bootstrap';
import { LuTrash2, LuPlus } from "react-icons/lu"; 

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const WorkingHoursStep = ({ data, setData, setIsNextDisabled }) => {
  const workingHours = data.workingHours || days.map((day, index) => ({
    isOpen: !(index === 0 || index === 6),
    slots: [{ from: '09:00', to: '18:00' }],
  }));

  useEffect(() => {
    const isValid = data.workingHours?.some((day) =>
      day.isOpen && day.slots.some(slot => slot.from && slot.to)
    );
    setIsNextDisabled(!isValid);
  }, [data]);
  

  const toggleDay = (index) => {
    const updated = [...workingHours];
    updated[index].isOpen = !updated[index].isOpen;
    setData((prev) => ({
      ...prev,
      workingHours: updated,
    }));
  };
  

  const addSlot = (index) => {
    const updated = [...workingHours];
    updated[index].slots.push({ from: '09:00', to: '18:00' });  
    setData((prev) => ({
      ...prev,
      workingHours: updated,
    }));
  };

  const deleteSlot = (index, slotIndex) => {
    const updated = [...workingHours];
    if (updated[index].slots.length > 1) {
      updated[index].slots.splice(slotIndex, 1); 
      setData((prev) => ({
        ...prev,
        workingHours: updated,
      }));
    }
  };

  const handleTimeChange = (index, slotIndex, type, value) => {
    const updated = [...workingHours];
    updated[index].slots[slotIndex][type] = value;
    setData((prev) => ({
      ...prev,
      workingHours: updated,
    }));
  };

  return (
    <div className='container mt-5 'style={{width:"800px"}}>
      <h2 className='text-center fw-bold'style={{marginLeft:"-250px"}}>Working Hours</h2>
      <p className='text-center text-muted'style={{marginLeft:"-250px"}}>Set your working hours, you can modify them later.</p>

      <div className="d-flex gap-5 mt-4 ">
        {/* LEFT */}
        <div className="border rounded-4 p-4 shadow bg-white" style={{ minWidth: '600px',marginLeft:"-200px",width:"900px" }}>
          {days.map((day, index) => (
            <div key={index} className="mb-3 d-flex justify-content-between">
              <div className="d-flex align-items-center mb-1 gap-5">
                <strong className="me-3" style={{ width: '80px' }}>{day}</strong>
                <Form.Check
                  type="switch"
                  id={`custom-switch-${index}`}
                  className={workingHours[index].isOpen ? 'switch-red' : ''}
                  label={workingHours[index].isOpen ? 'Open' : 'Closed'}
                  checked={workingHours[index].isOpen}
                  onChange={() => toggleDay(index)}
                />
              </div>

              {workingHours[index].isOpen && (
                <div className="d-flex flex-column gap-2">
                  {workingHours[index].slots.map((slot, slotIndex) => (
                    <div key={slotIndex} className="d-flex align-items-center gap-2 mb-2">
                      <input
                        type="time"
                        value={slot.from}
                        onChange={(e) => handleTimeChange(index, slotIndex, 'from', e.target.value)}
                        className="form-control"
                      />
                      <span className="mx-1">TO</span>
                      <input
                        type="time"
                        value={slot.to}
                        onChange={(e) => handleTimeChange(index, slotIndex, 'to', e.target.value)}
                        className="form-control"
                      />

                      {/* Afficher le bouton '+' uniquement sur la première ligne */}
                      {slotIndex === 0 && (
                        <button className="btn btn-link bg-white text-dark p-1" onClick={() => addSlot(index)}>
                          <LuPlus size={18} />
                        </button>
                      )}

                      {/* Afficher la poubelle uniquement sur les lignes ajoutées */}
                      {slotIndex > 0 && (
                        <button className="btn btn-link text-dark bg-white p-1" onClick={() => deleteSlot(index, slotIndex)}>
                          <LuTrash2 size={18} />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* RIGHT */}
        <div className="border rounded-4 p-4 shadow bg-white" style={{ flex: '0 0 300px', height: '300px',marginRight:"-100px" }}>
          <div className="mb-4">
            <label className="form-label fw-bold">Time Zone</label>
            <input type="text" className="form-control" defaultValue="Europe/Andorra" />
          </div>

          <div className="mb-4">
            <label className="form-label fw-bold">Time Format</label>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="timeFormat" id="ampm" defaultChecked />
              <label className="form-check-label" htmlFor="ampm">AM/PM</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="timeFormat" id="24h" />
              <label className="form-check-label" htmlFor="24h">24H</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkingHoursStep;
