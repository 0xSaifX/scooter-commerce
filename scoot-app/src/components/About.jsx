import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import HeroHeader from "./HeroHeader";
import Values from "./Values";
import about from "../assets/about.png";
import girlp from "../assets/girlp.png";
import train from "../assets/train.png";

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
          a: "To download the Scoot app, search “Scoot” in the App or Google Play stores. An even simpler way to do it would be to click the relevant link at the top of the bottom of this page and you'll be re-directed to the correct page.",
        },
        {
          q: "Can I find a nearby Scoots?",
          a: "Yes, with just one tab you can track our nearby Scoot store when needed. If you can ride from any destination it will be simply possible for us to give you any type choosen."
        },
        {
          q: "Do I need a license to ride?",
          a: "Partially, it may be required despite the fact of the rules of the city you're riding the Scoot."
        },
      ],
    },
    {
      category: "Safe driving",
      items: [
        {
          q: "Should I wear a helmet?",
          a: "Yes, please do! All cities have different laws. But we strongly strongly recommend always wearing a helmet regardless of the local laws. we like you, and we want you to be as safe as possible while Scooting.",
        },
        {
          q: "How about the rules & regulations?",
          a: "We require you follow all the rules and regulations regarding the Scoot, we ensure to keep you safe while riding."
        },
        {
          q: "What if I damage my Scoot?",
          a: "You can replace it when it has been damaged, if it is an accident we require bringing it to any branch of our scoot store you can find to fix/replace with a new one"
        },
      ],
    },
  ];

  return (
    <div className="overflow-x-hidden font-grotesk">
      <HeroHeader title="About" image={about} alt="About Us" />

      {/* Mobility Section */}
      <section className="container mx-auto px-0 py-12 md:py-20 overflow-hidden">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-32">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-scoot-dark mb-6 leading-tight font-mono">Mobility for the <br /> digital era</h2>
            <p className="text-scoot-grey mb-8 leading-relaxed text-sm md:text-base lg:text-lg">
              Getting around should be simple (and even fun!) for everyone. We embrace
              technology to provide low-cost, smart access to scooters at your fingertips.
            </p>
          </div>
          <div className="md:w-1/2 relative">
            <div className="bg-scoot-light rounded-full absolute -right-full top-0 w-[200%] h-full -z-10 rounded-l-full opacity-50"></div>
            <img src={girlp} alt="Lady holding phone" className="rounded-full w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto relative z-10" />
          </div>
        </div>
      </section>

      {/* Urban Living Section */}
      <section className="container mx-auto px-0 py-12 md:py-20 mb-12 overflow-hidden">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-32">
          <div className="md:w-1/2 order-2 md:order-1 relative">
            <div className="bg-scoot-light rounded-full absolute -left-full top-0 w-[200%] h-full -z-10 rounded-r-full opacity-50"></div>
            <img src={train} alt="Train" className="rounded-full w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto relative z-10" />
          </div>
          <div className="md:w-1/2 order-1 md:order-2 text-center md:text-left">
            <h2 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-scoot-dark mb-6 leading-tight font-mono">Better urban <br /> living</h2>
            <p className="text-scoot-grey mb-8 leading-relaxed text-sm md:text-base lg:text-lg">
              We're helping connect cities and bring people closer together. Our scooters are
              fully electric and we offset the minimal carbon footprint for each ride.
            </p>
          </div>
        </div>
      </section>

      <Values />

      {/* FAQs */}
      <section className="container mx-auto px-0 py-12 md:py-20">
        <h2 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-scoot-dark mb-12 text-center font-mono">FAQs</h2>

        {faqs.map((group, groupIndex) => (
          <div key={groupIndex} className="mb-12">
            <div className="flex flex-col md:flex-row gap-8">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-scoot-dark md:w-1/3 text-center md:text-left font-mono">{group.category}</h3>
              <div className="md:w-2/3 flex flex-col gap-4">
                {group.items.map((item, index) => {
                  const key = `${groupIndex}-${index}`;
                  const isOpen = openIndex === key;
                  return (
                    <div
                      key={index}
                      className="bg-scoot-snow hover:bg-scoot-cream transition-colors duration-300 p-4 md:p-6 lg:p-8 cursor-pointer group"
                      onClick={() => toggle(key)}
                    >
                      <div className="flex justify-between items-center gap-4">
                        <span className="text-base md:text-lg lg:text-xl font-bold text-scoot-dark font-mono">{item.q}</span>
                        <div className="text-scoot-yellow transform transition-transform duration-300">
                          {isOpen ? <ChevronUp /> : <ChevronDown />}
                        </div>
                      </div>
                      <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'}`}>
                        <div className="overflow-hidden">
                          <p className="text-scoot-grey leading-relaxed text-sm md:text-base lg:text-lg">{item.a}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default About;
