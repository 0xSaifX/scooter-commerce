import React from 'react';
import HeroHeader from "./HeroHeader";
import Values from "./Values";
import Button from "./Button";
import careers from "../assets/careers.png";
import bookguy from "../assets/careers1.png";

function Careers() {
  const jobs = [
    { title: "General Manager", location: "Jakarta, Indonesia" },
    { title: "UI/UX Designer", location: "Yokohama, Japan" },
    { title: "Blog Content Copywriter", location: "New York, United States" },
    { title: "Graphic Designer", location: "New York, United States" },
    { title: "Fleet Supervisor", location: "Jakarta, Indonesia" },
    { title: "UX Analyst", location: "London, United Kingdom" },
  ];

  return (
    <div className="overflow-x-hidden font-grotesk">
      <HeroHeader title="Careers" image={careers} alt="Careers" />

      {/* Mission Section */}
      <section className="container mx-auto px-0 py-12 md:py-20 overflow-hidden">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-32">
          <div className="md:w-1/2 text-center md:text-left order-2 md:order-1">
            <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-5xl font-bold text-scoot-dark mb-6 leading-tight font-mono">Care to join our <br />mission</h2>
            <p className="text-scoot-grey mb-8 leading-relaxed text-sm md:text-base lg:text-lg">
              We're always looking for ambitious individuals to help us on our journey. If you're passionate about our mission to provide clean, accessible transport to improve urban living we want to hear from you!
            </p>
            <Button>Say Hello</Button>
          </div>
          <div className="md:w-1/2 relative order-1 md:order-2">
            <div className="bg-scoot-light rounded-full absolute -right-full top-0 w-[200%] h-full -z-10 rounded-l-full opacity-50"></div>
            <img src={bookguy} alt="Join us" className="rounded-full w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto relative z-10" />
          </div>
        </div>
      </section>

      <Values title="Why join us?" />

      {/* Jobs Section */}
      <section className="container mx-auto px-0 py-12 md:py-20">
        <div className="max-w-4xl mx-auto flex flex-col gap-6">
          {jobs.map((job, index) => (
            <div key={index} className="bg-scoot-snow p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 hover:border-scoot-yellow border-2 border-transparent transition-colors duration-300 group">
              <div className="text-center md:text-left">
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-scoot-dark mb-2 font-mono">{job.title}</h3>
                <p className="text-scoot-dark text-sm md:text-base">{job.location}</p>
              </div>
              <Button className="w-full md:w-auto">Apply</Button>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Careers;
