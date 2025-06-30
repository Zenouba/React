import React from 'react';

const ColorGridCell = ({ topLeftColor, topRightColor, bottomLeftColor, bottomRightColor, onClick,selected , }) => {
  return (
 <div>
   <div
      className={`color-grid ${selected ? 'selected' : ''}`}
      onClick={onClick}
    >
      <div className="color-box top-left " style={{ backgroundColor: topLeftColor }}></div>
      <div className="color-box top-right" style={{ backgroundColor: topRightColor }}></div>
      <div className="color-box bottom-left" style={{ backgroundColor: bottomLeftColor }}></div>
      <div className="color-box bottom-right" style={{ backgroundColor: bottomRightColor }}></div>
    </div>
    

 </div>

  );
};

export default ColorGridCell;
