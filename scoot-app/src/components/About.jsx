import React, { useState } from "react";
import about from "../assets/about.png";
import girlp from "../assets/girlp.png";
import train from "../assets/train.png";
import value1 from "../assets/value1.png";
import value2 from "../assets/value2.png";
import value3 from "../assets/value3.png";
import { ChevronDown, ChevronUp } from "lucide-react";
import "./About.css"; 

function About() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      category: "How it works",
      items: [
        {
          q: "How do I download the app?",
          a: "To download the Scoot app, search “Scoot” in the App or Google Play stores.An even simpler way to do it would be to click the relevant link at the top of the bottom of this page and you'll be re-directed to the correct page.",
        },
        { q: "Can I find a nearby Scoots?", 
          a: "Yes, with just one tab you can track our nearby Scoot store when needed. If you can ride from any destination it will be simply possible for us to give you any type choosen." },
        { q: "Do I need a license to ride?", 
          a: "Partially, it may be required despite the fact of the rules of the city you're riding the Scoot." },
      ],
    },
    {
      category: "Safe driving",
      items: [
        {
          q: "Should I wear a helmet?",
          a: "Yes, please do! All cities have different laws. But we strongly strongly recommend always wearing a helmet regardless of the local laws. we like you, and we want you to be as safe as possible while Scooting.",
        },
        { q: "How about the rules & regulations?", 
          a: "We require you follow all the rules and regulations regarding the Scoot, we ensure to keep you safe while riding." },
        { q: "What if I damage my Scoot?", 
          a: "You can replace it when it has been damaged, if it is an accident we require bringing it to any branch of our scoot store you can find to fix/replace with a new one" },
      ],
    },
  ];

  return (
    <div className="about-container">
      <div className="hero-section">
        <img src={about} alt="About" className="hero-image" />
        <div className="hero-text">
          <h1>About</h1>
        </div>
      </div>

      <section className="info-section">
        <div className="info-text">
          <h2>Mobility for the <br /> digital era</h2>
          <p>
            Getting around should be simple (and even fun!) for everyone. We embrace
            technology to provide low-cost, smart access to scooters at your fingertips.
          </p>
        </div>
        <div className="info-img">
          <img src={girlp} alt="Lady holding phone" />
        </div>
      </section>

      <section className="info-section reverse">
        <div className="info-img2">
          <img src={train} alt="Street with a long bus on a road" />
        </div>
        <div className="info-text2">
          <h2>Better urban <br /> living</h2>
          <p>
            We're helping connect cities and bring people closer together. Our scooters are
            fully electric and we offset the minimal carbon footprint for each ride.
          </p>
        </div>
      </section>

      <section className="values-section">
        <h2>Our values</h2>
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

    <section className="faq-section">
  <h1 className="faq-title">FAQs</h1>

  {faqs.map((group, groupIndex) => (
    <div key={groupIndex} className="faq-row">
      <div className="faq-category">
        <h2>{group.category}</h2>
      </div>

      <div className="faq-content">
        {group.items.map((item, index) => {
          const isOpen = openIndex === `${groupIndex}-${index}`;
          return (
            <div
              key={index}
              className={`faq-item ${isOpen ? "open" : ""}`}
              onClick={() => toggle(`${groupIndex}-${index}`)}
            >
              <div className="faq-question">
                <span>{item.q}</span>
                {isOpen ? <ChevronUp color="#fcb72b" /> : <ChevronDown color="#fcb72b" />}
              </div>
              {isOpen && item.a && <p className="faq-answer">{item.a}</p>}
            </div>
          );
        })}
      </div>
    </div>
  ))}
</section>
      
    </div>
  );
}

export default About;
