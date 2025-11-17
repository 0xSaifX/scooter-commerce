import React from 'react';
import location from "../assets/location.png";
import circles from "../assets/circles.png";
import map from "../assets/map.png";


function Location () {
  return (
    <div>
      
      <header>
        <img src={location} style={{position:"relative",maxWidth:"100vw",flex:"wrap"}} />
        <h1 style={{fontFamily:'"Space Mono", monospace', position:"absolute",top:"27%",color:"white",marginLeft:"7rem"}}>Locations</h1>
        <img src={circles} style={{position:"absolute"}}/>
      </header>
      <main style={{alignContent:"center",padding:"9rem"}}>
        <img src={map} style={{maxWidth:"90%"}}/>
      </main>

      <div style={{display:"flex",justifyContent:"center"}}>
        <h1 style={{fontFamily:'"Space Mono",monospace',fontWeight:"2rem"}}>Your City <br /> Not Listed?</h1>
        <p style={{maxWidth:"30rem",marginLeft:"5rem",marginRight:"5rem"}}>If you'd like to see Scoot in your hometown, be sure to let us know. We track requests and plan launches based on demand. Feel free to message us by clicking the link or messaging us on social.</p>
        <button className='btn' style={{marginTop:"1rem",padding:"2px 35px"}}>Message Us</button>
      </div>

    </div>
  )
}

export default Location;
