import React from "react";
import "./styles.css";
import card from "../assets/card.png";
import Contact from "./Contact";
function First() {
  return (
    <>
      <div style={{ height: "200vh" }}>
        <div style={{ backgroundColor: "lightgray", height: "100vh" }}>
          <div
            style={{
              height: 69,
              display: "flex",

              marginRight: 270,
              marginLeft: 270,
              alignItems: "center",
              justifyContent: "space-between",
              backgroundColor: "whitesmoke",
              opacity: 0.9,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: "white",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginLeft: 20,
                gap: 20,
              }}
            >
              <h1 style={{ fontWeight: "900" }}>Logo</h1>
              <h4 style={{ alignItems: "center" }}>About</h4>
              <h4 style={{ alignItems: "center" }}>Contact Us</h4>
            </div>

            <button className="btn" style={{ marginRight: 20 }}>
              Sign Up
            </button>
          </div>

          <div
            style={{
              // flexDirection: "column",
              marginRight: 270,
              marginLeft: 270,
              // backgroundColor:'red',
              height: 700,
              display: "flex",
              marginTop: 100,
              justifyContent: "space-between",
            }}
          >
            <div>
              <h1 style={{ fontWeight: "900", fontSize: 90 }}>
               <span style={{fontSize:60}}>Welcome to</span> <br /> HealthPredictor<span style={{color:'white',fontSize:100}}>..</span>
              </h1>

              <h2 style={{ fontWeight: "900", color: "dimgray" }}>
                We're here to help you take control of your health.
              </h2>
            </div>
            <img
              src={card}
              style={{ height: 600, width: 500, borderRadius: 20 }}
            />
          </div>
        </div>
        {/* our mission */}

        <div
          style={{
            // marginTop: 10,
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            
          }}
        >
          <div >
            <h1 style={{ fontSize: 90, textAlign: "center",color:'royalblue' }}>Our mission</h1>
            <h2 style={{  textAlign: "center",color:'dimgray' }}>
              Empowering individuals to make informed health decisions, our
              platform utilizes advanced algorithms to predict potential
              diseases based on user input.
            </h2>
          </div>
        </div>
        <div style={{marginTop:20}}>
        <Contact/>

        </div>
      </div>
    </>
  );
}

export default First;
