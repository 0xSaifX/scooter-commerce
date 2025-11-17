import careers from "../assets/careers.png";
import bookguy from "../assets/careers1.png"
import React from 'react';
import value1 from "../assets/value1.png";
import value2 from "../assets/value2.png";
import value3 from "../assets/value3.png";


function Careers () {
  return (
    <div>
      
      <img src={careers} />

      <section style={{display:"flex",marginTop:"8rem",width:"vw"}} >
        <div className="info-text" style={{maxWidth:"25rem",marginLeft:"5rem",marginRight:"10rem"}}>
          <h2 style={{fontFamily:'"Space Mono", monospace'}}>Care to join our <br />mission</h2>
          <p style={{marginBottom:"3rem"}}>We're always looking for ambitious individuals to help us on our journey. If you're passionate about our mission to provide clean, accessible transport to improve urban living we want to hear from you!</p>
          <button className='btn'>Say Hello</button>
        </div>
        <div className='info-img'>
          <img src={bookguy} alt="A guy standing and explaining something" />
        </div>
      </section>

      <section className="values-section">
        <h2 style={{fontFamily:'"Space Mono", monospace',marginTop:"8rem"}}>Why join us?</h2>
        <div className="values-imgs">
          <img src={value1} alt="Our tech" />
          <img src={value2} alt="Our integrity" />
          <img src={value3} alt="Our community" />
        </div>

        <div className="values-text">
          <div>
            <h3>Our tech</h3>
            <p>
              We’re using cutting-edge technology to drive accessible urban transportation
              forward. Our fully electric scooters are a joy to ride!
            </p>
          </div>
          <div>
            <h3>Our integrity</h3>
            <p>
              We're fully committed to delivering a great yet safe, sustainable
              micro-mobility experience in every city we serve.
            </p>
          </div>
          <div>
            <h3>Our community</h3>
            <p>
              We support every community we serve. All workers are paid a living wage based on
              their location and are Scoot employees.
            </p>
          </div>
        </div>
      </section> 

      <div style={{width:"90%",maxWidth:"1000px",margin:"auto",marginRight:"10rem"}}>
        <span style={{padding:"1.5rem", background:"#f2f5f9",margin:"1.5rem 2rem",display:"flex",width:"100%"}}>
          <div style={{marginRight:"34.7rem"}}>
          <h3>General Manager</h3>
          <p>Jakarta, Indonesia</p>
          </div>
            <div>
                <button className="btn" style={{float:"right"}}>Apply</button>
            </div>
        </span>
        <span style={{padding:"1.5rem", background:"#f2f5f9",margin:"1.5rem 2rem",display:"flex",width:"100%"}}>
          <div style={{marginRight:"35.9rem"}}>
          <h3>UI/UX Designer</h3>
          <p>Yokohama, Japan</p>
          </div>
            <div>
                <button className="btn" style={{float:"right"}}>Apply</button>
            </div>
        </span>
        <span style={{padding:"1.5rem", background:"#f2f5f9",margin:"1.5rem 2rem",display:"flex",width:"100%"}}>
          <div style={{marginRight:"30rem"}}>
          <h3>Blog Content Copywriter</h3>
          <p>New York, United States</p>
          </div>
            <div>
                <button className="btn" style={{float:"right"}}>Apply</button>
            </div>
        </span>
        <span style={{padding:"1.5rem", background:"#f2f5f9",margin:"1.5rem 2rem",display:"flex",width:"100%"}}>
          <div style={{marginRight:"33rem"}}>
          <h3>Graphic Designer</h3>
          <p>New York, United States</p>
          </div>
            <div>
                <button className="btn" style={{float:"right"}}>Apply</button>
            </div>
        </span>
        <span style={{padding:"1.5rem", background:"#f2f5f9",margin:"1.5rem 2rem",display:"flex",width:"100%"}}>
          <div style={{marginRight:"35.3rem"}}>
          <h3>Fleet Supervisor</h3>
          <p>Jakarta, Indonesia</p>
          </div>
            <div>
                <button className="btn" style={{float:"right"}}>Apply</button>
            </div>
        </span>
        <span style={{padding:"1.5rem", background:"#f2f5f9",margin:"1.5rem 2rem",display:"flex",width:"100%"}}>
          <div style={{marginRight:"33rem"}}>
          <h3>UX Analyst</h3>
          <p>London, United Kingdom</p>
          </div>
            <div>
                <button className="btn" style={{float:"right"}}>Apply</button>
            </div>
        </span>
      </div>
      
      
    </div>
  )
}

export default Careers
