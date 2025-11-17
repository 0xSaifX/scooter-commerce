import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import About from './components/About';
import Location from './components/Location';
import Careers from './components/Careers';

import manscoot from "./assets/manscoot.jpg";
import slash from "./assets/slash.png";
import toparrow from "./assets/toparrow.png";
import circles from "./assets/circles.png";
import line from "./assets/line1.png";
import icon1 from "./assets/icon1.png";
import icon2 from "./assets/icon2.png";
import icon3 from "./assets/icon3.png";
import ladyp from "./assets/ladyp.png";
import buildings from "./assets/buildings.png";
import wallet from "./assets/wallet.png";
import appstore from "./assets/appstore.png";
import google from "./assets/google.png";
import facebook from "./assets/facebook.png";
import twitter from "./assets/twitter.png";
import instagram from "./assets/instagram.png";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div style={{flexWrap:"wrap", width:"100dvw"}}>
        <div className='nav-bar'>
          <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 20px" }}>
           <Link to="/" style={{textDecoration:"none", color:"#495567"}}><h1 className="text-3xl font-extrabold text-darkBlue tracking-tight" style={{fontSize:"2rem", fontWeight:"800"}}>
          scoot
           </h1></Link>

            <div className='nav-link'>
              <Link to="/about" className='s1' style={{ margin: "0 10px", textDecoration: "none", color: "#495567" }}>About</Link>
              <Link to="/location" className='s2' style={{ margin: "0 10px", textDecoration: "none", color: "#495567" }}>Location</Link>
              <Link to="/careers" style={{ margin: "0 10px", textDecoration: "none", color: "#495567" }}>Careers</Link>
            </div>

            <button className='btn'><b>Get Scootin</b></button>
          </nav>
        </div>

        <Routes>
          <Route
            path="/"
            element={
              <section style={{ fontFamily: "'Space Mono', monospace",width:"100dvw"}}>
              <div className='image-content'>
                <img src={manscoot} className="manscoot" alt="Man riding scooter" />
                <div className='text-1'>
                  <h1 style={{ width: "350px",fontSize:"2rem" }}>Scooter sharing <br /> made simple</h1>
                </div>
                <div className='text-2'>
                  <img src={slash} style={{ height: "15px", marginTop: "50px" }} alt="slash" />
                  <p style={{ width: "30rem", marginRight: "10px", marginLeft: "20px", color: "#ffffff" }}>
                    Scoot takes the hassle out of urban mobility. Our bikes are placed in convenient locations in each of our cities.
                    Use our app to locate the nearest bike, unlock it with a tap, and you're away!
                  </p>
                  <img src={toparrow} style={{ marginTop: "50px",width:"30%" }} alt="arrow" />
                </div>
                <button className='img-btn'><b>Get Scootin</b></button>
                <img src={circles} style={{padding:"8rem", top:"75%",float:"right", position:"absolute",right:"1%",left:"63%"}}/>
              </div>

              <div style={{display:"flex", marginTop:"6rem",width:"100dvw"}}>
                <img src={line} style={{position:"relative", marginTop:"90px", marginLeft:"2rem"}} />
                <img src={icon1} style={{position:"absolute",float:"left",marginLeft:"250px", marginRight:"120px", marginTop:"50px"}} />
                <img src={icon2} style={{position:"absolute",float:"left",marginLeft:"36rem", marginTop:"50px"}} />
                <img src={icon3} style={{position:"absolute",float:"left",marginLeft:"57rem",marginTop:"50px"}} />
              </div>
              <div style={{display:"flex", gap:"30px", marginTop:"3rem",width:"100dvw",marginLeft:"250px"}}>
                <div style={{width:"300px"}}>
                  <h4 style={{color:"#495567",marginBottom:"20px",marginTop:"20px"}}>Locate with app</h4>
                  <p style={{color:"#495567"}}>Use the app to find the nearest scooter to you. We are continuosly placing scooters in the areas with the most demand, so one should never be too far away.</p>
                </div>
                <div style={{width:"300px"}}>
                  <h4 style={{color:"#495567",marginBottom:"20px",marginTop:"20px"}}>Pick your scooter</h4>
                  <p style={{color:"#495567"}}>We show the most important info for the scooter closest to you. So you know how much charge they have left and can see roughly how much it will cost.</p>
                </div>
                <div style={{width:"300px"}}>
                  <h4 style={{color:"#495567",marginBottom:"20px",marginTop:"20px"}}>Enjoy the ride </h4>
                  <p style={{color:"#495567"}}>Scan the QR code and the bike will unlock. Retract the cable lock, put on a helmet, and you're off! Always lock bikes away from walkaways and accessibility ramps. </p>
                </div>
              </div>

              <div style={{display:"flex", width:"100dvw", marginTop:"8rem",marginLeft:"5rem"}}>
                <span style={{width:"420px",marginRight:"10rem"}}>
                <h2 style={{color:"#495567",marginBottom:"20px",marginTop:"20px"}}><b>Easy to use <br /> riding telemetry</b></h2>
                  <p style={{color:"#495567"}}>The Scoot app is available with riding telemetry. This means it can show you your average speed, how long you've been using the scooter, your traveling distance, and many more things all in an easy to use app.</p>
                  <button className='btn' style={{marginTop:"3rem"}}>Learn More</button>
                </span>
                <div>
                  <img src={ladyp} alt="" />
                </div>
              </div>

              <div style={{display:"flex", width:"100dvw", marginTop:"8rem"}}>
                <div>
                  <img src={buildings} alt="" />
                </div>
                <span style={{width:"420px",marginRight:"5rem",marginLeft:"15rem"}}>
                  <h2 style={{color:"#495567",marginBottom:"20px",marginTop:"20px"}}>Coming to a city <br /> near you </h2>
                  <p style={{color:"#495567"}}>Scoot is available in 4 major cities so far. We're expanding rapidly, so be sure to let us know if you want to see us in your hometown. We're aiming to let our scooters loose on 23 cities over the coming year.</p>
                  <button className='btn' style={{marginTop:"3rem"}}>Learn More</button>
                </span>
              </div>

              <div style={{display:"flex",width:"100dvw", marginLeft:"5rem",marginTop:"8rem"}}>
                <span style={{width:"420px",marginRight:"10rem"}}>
                  <h2 style={{color:"#495567",marginBottom:"20px",marginTop:"20px"}}>Zero hassle <br /> payments</h2>
                  <p style={{color:"#495567"}}>Our payment is as easy as one two three. We accept most credit cards and debit cards. You can also link your paypal account inside the app. Need to pay later? No worries! You can defer payment for up to a month. </p>
                  <button className='btn' style={{marginTop:"3rem"}}>Learn More</button>
                </span>
                <div style={{float:"right", marginLeft:"12rem"}}>
                  <img src={wallet} style={{float:"right"}} />
                </div>
              </div>

              </section>
            } />

          <Route path="/about" element={<About />} />
          <Route path="/location" element={<Location />} />
          <Route path="/careers" element={<Careers />} />
        </Routes>
        
        <footer style={{ fontFamily: "'Space Mono', monospace",width:"100dvw",marginTop:"10rem" }}>
          <div style={{backgroundColor: "#495567",color: "#fff",display: "flex",justifyContent:"space-between",alignItems: "center",padding: "60px 120px",flexWrap: "wrap",
        }}>
        <div>
          <h2 style={{ fontSize: "36px", fontWeight: "700", lineHeight: "1.2" }}>
            Sign up and <br /> Scoot off today
          </h2>
        </div>

        <div style={{ display: "flex", gap: "20px" }}>
          <a href='www.appStore.com'><img src={appstore} alt="App Store"style={{width: "160px", height: "50px",cursor: "pointer",objectFit: "contain",}}/></a>
          <a href='www.googleplay.com'><img src={google} alt="Google Play"style={{width: "160px",height: "50px",cursor: "pointer",objectFit: "contain",}}/></a>
        </div>
      </div>

      <div
        style={{
          backgroundColor: "#333A44",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 120px",
          flexWrap: "wrap",}}>
        <div style={{ display: "flex", alignItems: "center", gap: "30px" }}>

          <h2 style={{
              fontWeight: "700",
              fontSize: "28px",
              color: "#FFFFFF",
              letterSpacing: "1px",}}>scoot</h2>

          <nav style={{ display: "flex", gap: "20px" }}>
            <a
              href="/about"
              style={{
                color: "#939CAA",
                textDecoration: "none",
                fontSize: "16px",
                fontWeight: "500",}}>
              About
            </a>
            <a
              href="/location"
              style={{
                color: "#939CAA",
                textDecoration: "none",
                fontSize: "16px",
                fontWeight: "500",}}>
              Location
            </a>
            <a
              href="/careers"
              style={{
                color: "#939CAA",
                textDecoration: "none",
                fontSize: "16px",
                fontWeight: "500",}}>
              Careers
            </a>
          </nav>
        </div>

        <div style={{ display: "flex",flexWrap:"wrap", gap: "20px" }}>
         <a href="https:/facebook.com">
           <img
            src={facebook}
            alt="Facebook"
            style={{ width: "24px", cursor: "pointer" }}
            />
         </a>
          <a href="https:/twitter.com">
           <img
            src={twitter}
            alt="Twitter"
            style={{ width: "24px", cursor: "pointer" }}
            />
          </a>
          <a href="https:/instagram.com">
           <img
            src={instagram}
            alt="Instagram"
            style={{ width: "24px", cursor: "pointer" }}
            />
          </a>
        </div>
      </div>
    </footer>

      </div>
    </BrowserRouter>
  );
}

export default App;