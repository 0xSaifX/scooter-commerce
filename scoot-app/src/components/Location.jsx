import React from 'react';
import HeroHeader from "./HeroHeader";
import Button from "./Button";
import location from "../assets/location.png";
import map from "../assets/map.png";

function Location() {
  return (
    <div className="overflow-x-hidden font-grotesk">
      <HeroHeader title="Locations" image={location} alt="Locations" />

      {/* Map Section */}
      <main className="container mx-auto px-0 py-12 md:py-20 flex justify-center">
        <img src={map} alt="Map of locations" className="w-full h-auto max-w-4xl lg:max-w-6xl xl:max-w-7xl" />
      </main>

      {/* CTA Section */}
      <div className="container mx-auto px-0 py-12 md:py-20 mb-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-scoot-dark leading-tight max-w-md font-mono">Your City <br /> Not Listed?</h2>
          <p className="text-scoot-grey leading-relaxed max-w-xl text-sm md:text-base lg:text-lg">
            If you'd like to see Scoot in your hometown, be sure to let us know. We track requests and plan launches based on demand. Feel free to message us by clicking the link or messaging us on social.
          </p>
          <Button>Message Us</Button>
        </div>
      </div>
    </div>
  )
}

export default Location;
