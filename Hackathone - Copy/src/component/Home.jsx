import React from "react";
import VideoComponent from "./VideoComponent";
import next from "../assets/next.png";
import ImageGalery from "./ImageGalery";
import Contact from "./Contact";

function Home() {
  return (
    <div style={{ height: "280vh" }}>
      {/* first page */}
      <div
        style={{
          backgroundColor: "white",
          height: "100vh",
          marginLeft: 100,
          marginRight: 100,
        }}
      >
        {/* navbar */}
        <div
          style={{
            height: 100,
            // backgroundColor: "lightgray",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <h1>Logo</h1>
          </div>
          <div style={{ display: "flex", gap: 30 ,alignItems:'center'}}>
            <a href="#">
              <h4>Heart CheckUp</h4>
            </a>
            <a href="#">
              <h4>Diabetes CheckUp</h4>
            </a>
            <a href="#">
              <h4>Cancer CheckUp</h4>
            </a>
            <a href="#">
              <h4>Liver CheckUp</h4>
            </a>
            <a href="#">
              <h4>Kidney CheckUp</h4>
            </a>
            <button className="btn"> Log Out</button>
          </div>
        </div>
        {/* video */}
        <VideoComponent />

        {/* predict with AI */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              marginTop: 100,
              height: 75,
              width: 580,
              backgroundColor: "lightgray",
              borderRadius: 50,
              position:'absolute',
              bottom:20,
              
            }}
          >
            <div
              style={{
                justifyContent: "space-evenly",
                display: "flex",
                alignItems: "center",
              }}
            >
              <h1 >Predict Your Health With AI</h1>
              <a href="#">
                <img className="next" src={next} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* second screen */}
      <div
        style={{
          backgroundColor: "lightgray",
          height: "100vh",

        }}
      >
        <div
          style={{ marginLeft: 100, marginRight: 100,paddingTop:10 }}
        >
        <ImageGalery/>

        </div>
      
      </div>
        {/* contact */}
        <div style={{height:'80vh',backgroundColor:'whitesmoke',display:'flex',justifyContent:'center',alignItems:"center"}}>

        <Contact style={{marginTop:20}}/>
        </div>

    </div>
  );
}

export default Home;
