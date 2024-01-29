import React from "react";
import diabetes from "../assets/diabetes.jpg";
import heart from "../assets/heart.jpg";
import asthama from "../assets/asthama.jpg";
import liver from "../assets/liver.jpg";
function ImageGalery() {
  return (
    <div>
      <h1 style={{fontSize:50}}>Common Disease</h1>
      <div style={{ gap: 20, display: "flex", justifyContent: "space-evenly" }}>
        <a href="https://www.mayoclinic.org/diseases-conditions/heart-disease/symptoms-causes/syc-20353118">
          <img className="img" src={heart} />
        </a>

        <a href="https://www.mayoclinic.org/diseases-conditions/diabetes/symptoms-causes/syc-20371444">
          <img className="img" src={diabetes} />
        </a>

        <a href="https://www.mayoclinic.org/diseases-conditions/asthma/symptoms-causes/syc-20369653">
          <img className="img" src={asthama} />
        </a>
        
      </div>
      <div style={{ gap: 20, display: "flex", justifyContent: "space-evenly" ,marginTop:20}}>
        <a href="https://www.mayoclinic.org/diseases-conditions/heart-disease/symptoms-causes/syc-20353118">
          <img className="img" src={liver} />
        </a>

        <a href="https://www.mayoclinic.org/diseases-conditions/diabetes/symptoms-causes/syc-20371444">
          <img className="img" src={diabetes} />
        </a>

        <a href="https://www.mayoclinic.org/diseases-conditions/asthma/symptoms-causes/syc-20369653">
          <img className="img" src={asthama} />
        </a>

      </div>
    </div>
  );
}

export default ImageGalery;
