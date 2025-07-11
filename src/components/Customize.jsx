import React, { useState } from "react";
import ColorGridCell from "./ColorGridCell";

const Customize = ({ data }) => {
    const [selectedThemeIndex, setSelectedThemeIndex] = useState(null); // 👈
  
    const handleThemeSelect = (index) => {
      setSelectedThemeIndex(index); 
      console.log("Thème sélectionné :", index);
    };
  

  const colors = [
    { topLeft: "#08FFC8", topRight: "#FFF7F7", bottomLeft: "#DADADA", bottomRight: "#204969" },
    { topLeft: "#FFF1AC", topRight: "#F9BCDD", bottomLeft: "#D5A4CF", bottomRight: "#B689B0" },
    { topLeft: "#F2F4F6", topRight: "#1EE3CF", bottomLeft: "#6B48FF", bottomRight: "#0D3F67" },
    { topLeft: "#222831", topRight: "#393E46", bottomLeft: "#FD7013", bottomRight: "#EEEEEE" },
    { topLeft: "#FF7260", topRight: "#9BD7D5", bottomLeft: "#FFF5C3", bottomRight: "#505050" },
  ];

  return (
    <div style={{marginLeft:"-230px",gap:"10px"}}>
      <h1 style={{ color: "#2D343E" }} className="mt-4 mx-5">Customize your Portal</h1>
      <p className="text-muted " style={{marginLeft:"100px"}}>Basic information, You can add more later</p>


      {/* */}
<div className="d-flex">
  <div style={{marginRight:"130px"}}>
    <label className="mt-3 mb-3 " style={{ color: "#696A6F",marginLeft:"-100px" }}>Describe your company</label>
    <textarea
      style={{ width: "700px", height: "300px", resize: "none",marginLeft: "-100px" }} 
      className="form-control rounded-3"
      name="description"
      placeholder="Write your description"
    ></textarea>
  </div>

  {/*  */}
  <div style={{ width: "500px", height: "470px", backgroundColor: "white",marginTop:"30px",borderBlockColor:"#F1F1F1" }} className="border rounded-bottom-4 ">
        <div style={{ height: "60px", backgroundColor: "#3A2D31", display: "flex", alignItems: "center" }}>
      <div
        style={{
          width: "15px",    
          height: "15px",   
          backgroundColor: "#FF564F",  
          borderRadius: "90%",  
          marginLeft: "10px",  
        }}
      />
            <div
        style={{
          width: "15px",    
          height: "15px",   
          backgroundColor: "#FFB72A",  
          borderRadius: "90%",  
          marginLeft: "10px",  
        }}
      />
            <div
        style={{
          width: "15px",    
          height: "15px",   
          backgroundColor: "#25C63A",  
          borderRadius: "90%",  
          marginLeft: "10px",  
        }}
      />
      <input
        type="text"
        value={"wwww.datetric.com/"+data.slug}
        readOnly
        style={{ backgroundColor: "#4B3F42", border: "none", marginTop: "15px", marginLeft: "20px", width: "350px", marginBottom: "15px",marginRight:"20px",color:"white" }}
      />
    </div>
    <div style={{ backgroundColor: "#FAFAFA", height: "115px" }}>
      <img src="./assets/plogo.png" alt="datetric" style={{ marginLeft: "190px", marginTop: "35px" }} />
      <input type="text"
      value={data.companyName}
      readOnly
       style={{ border: "none", marginLeft: "150px", marginTop: "15px", backgroundColor: "#FAFAFA" }} />
    </div>
    <button type="button" className="shad border rounded-5 mt-3 mb-4 py-1 px-2 text-white" style={{ backgroundColor: "#6A747B", marginLeft: "175px" }}>
      Book Now
    </button>
 <div className="" style={{ display: "flex", gap: "5px"}}>
    <div className="mt-5 ms-3" >
       <p style={{color:"#6A747B"}}>Service</p>
       <input type="text" style={{width:"130px" ,height:"60px",backgroundColor:"#F2F2F2"}} className="border-0 rounded-3"/>
       <input type="text" style={{width:"80px" ,height:"15px",backgroundColor:"#F2F2F2"}} className="border-0 rounded-3 mt-2"/>
       <input type="text" style={{width:"110px" ,height:"15px",backgroundColor:"#F2F2F2"}} className="border-0 rounded-3 mt-2"/> 
   </div>
   <div className="mt-5 ms-3" >
       <p style={{color:"#6A747B"}}>Service</p>
       <input type="text" style={{width:"130px" ,height:"60px",backgroundColor:"#F2F2F2"}} className="border-0 rounded-3"/>
       <input type="text" style={{width:"80px" ,height:"15px",backgroundColor:"#F2F2F2"}} className="border-0 rounded-3 mt-2"/>
       <input type="text" style={{width:"110px" ,height:"15px",backgroundColor:"#F2F2F2"}} className="border-0 rounded-3 mt-2"/> 
   </div>
   <div className="mt-5 ms-3" >
       <p style={{color:"#6A747B"}}>Service</p>
       <input type="text" style={{width:"130px" ,height:"60px",backgroundColor:"#F2F2F2"}} className="border-0 rounded-3"/>
       <input type="text" style={{width:"80px" ,height:"15px",backgroundColor:"#F2F2F2"}} className="border-0 rounded-3 mt-2"/>
       <input type="text" style={{width:"110px" ,height:"15px",backgroundColor:"#F2F2F2"}} className="border-0 rounded-3 mt-2"/> 
   </div>
 </div>
  </div>
</div>


      {/* Tableau  */}
      <div  style={{marginLeft:"-100px",marginTop:"-100px"}}>
        <p>Choose a theme</p>
        
          <tbody>
            <tr>
              {colors.map((colorSet, index) => (
                <td key={index} className="px-3 color-grid-cell-container">
                  <ColorGridCell
                    topLeftColor={colorSet.topLeft}
                    topRightColor={colorSet.topRight}
                    bottomLeftColor={colorSet.bottomLeft}
                    bottomRightColor={colorSet.bottomRight}
                    selected={selectedThemeIndex === index}
                    onClick={() => handleThemeSelect(index)} 
                  />
                </td>
              ))}
            </tr>
          </tbody>     
      </div>
    </div>
  );
};

export default Customize;
