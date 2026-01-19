import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import About from './components/About';
import Location from './components/Location';
import Careers from './components/Careers';
import Button from './components/Button';

import manscoot from "./assets/manscoot.jpg";
import circles from "./assets/circles.png";
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

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative z-50 bg-white">
      <div className="container mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-12">
          {/* Hamburger (Mobile) */}
          <button
            className="md:hidden text-scoot-yellow"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>

          {/* Logo */}
          <Link to="/" className="text-2xl md:text-3xl lg:text-4xl font-bold text-scoot-dark font-mono tracking-tighter">
            scoot
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-8 font-mono font-bold text-scoot-grey text-sm md:text-base">
            <Link to="/about" className="hover:text-scoot-yellow transition-colors">About</Link>
            <Link to="/location" className="hover:text-scoot-yellow transition-colors">Location</Link>
            <Link to="/careers" className="hover:text-scoot-yellow transition-colors">Careers</Link>
          </div>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button>Get Scootin</Button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-scoot-dark p-6 flex flex-col gap-6 md:hidden shadow-lg h-[calc(100vh-80px)] z-40">
          <div className="flex flex-col gap-6 text-white font-mono font-bold text-lg">
            <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
            <Link to="/location" onClick={() => setIsOpen(false)}>Location</Link>
            <Link to="/careers" onClick={() => setIsOpen(false)}>Careers</Link>
          </div>
          <Button className="w-full mt-auto mb-6">Get Scootin</Button>
        </div>
      )}
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="font-mono">
      {/* Call to Action Banner */}
      <div className="bg-scoot-dark text-white py-16 px-6 overflow-hidden relative">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight text-center md:text-left max-w-md font-mono">
            Sign up and <br /> Scoot off today
          </h2>
          <div className="flex gap-4">
            <a href='#'><img src={appstore} alt="App Store" className="h-10 md:h-12 lg:h-14 w-auto hover:opacity-80 transition-opacity" /></a>
            <a href='#'><img src={google} alt="Google Play" className="h-10 md:h-12 lg:h-14 w-auto hover:opacity-80 transition-opacity" /></a>
          </div>
        </div>
        <img src={circles} className="absolute -right-24 bottom-0 opacity-20 hidden md:block" alt="" />
      </div>

      {/* Bottom Footer */}
      <div className="bg-scoot-night text-white py-12 px-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8">

          <div className="flex flex-col md:flex-row items-center gap-12">
            <Link to="/" className="text-2xl md:text-3xl lg:text-4xl font-bold text-white font-mono tracking-tighter">
              scoot
            </Link>
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 font-bold text-scoot-grey text-sm md:text-base text-center">
              <Link to="/about" className="hover:text-scoot-yellow transition-colors">About</Link>
              <Link to="/location" className="hover:text-scoot-yellow transition-colors">Location</Link>
              <Link to="/careers" className="hover:text-scoot-yellow transition-colors">Careers</Link>
            </div>
          </div>

          <div className="flex gap-6">
            <a href="#" className="hover:opacity-75"><img src={facebook} alt="Facebook" className="w-6 h-6 md:w-8 md:h-8 invert" /></a>
            <a href="#" className="hover:opacity-75"><img src={twitter} alt="Twitter" className="w-6 h-6 md:w-8 md:h-8 invert" /></a>
            <a href="#" className="hover:opacity-75"><img src={instagram} alt="Instagram" className="w-6 h-6 md:w-8 md:h-8 invert" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Home = () => {
  return (
    <div className="overflow-x-hidden font-mono">
      {/* Hero Section */}
      <section className="relative h-[650px] md:h-[700px] lg:h-[750px] xl:h-[800px] w-full">
        <div className="absolute inset-0">
          <img src={manscoot} alt="Background" className="w-full h-full object-cover object-right-bottom" />
          <div className="absolute inset-0 bg-black/40 md:hidden"></div>
        </div>

        <div className="container mx-auto px-6 h-full flex items-center relative z-10">
          <div className="max-w-xl text-white text-center md:text-left mx-auto md:mx-0 pt-20 md:pt-0">
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-8 leading-tight font-mono">
              Scooter sharing <br /> made simple
            </h1>

            <div className="flex flex-col md:flex-row items-center gap-8 md:pl-12 relative">
              <div className="md:pl-12">
                <p className="text-sm md:text-base lg:text-lg mb-8 max-w-sm mx-auto md:mx-0 font-light font-grotesk">
                  Scoot takes the hassle out of urban mobility. Our bikes are placed in convenient locations in each of our cities.
                  Use our app to locate the nearest bike, unlock it with a tap, and you're away!
                </p>
                <Button>Get Scootin</Button>
              </div>

            </div>
          </div>
        </div>

        <img src={circles} className="absolute right-[-30px] bottom-[100px] hidden md:block" alt="" />
      </section>

      {/* Steps Section */}
      <section className="container mx-auto px-6 py-20 md:py-32">
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-[45px] left-0 w-full h-4 bg-scoot-light -z-10"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-12">
            {/* Step 1 */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="bg-scoot-yellow rounded-full p-6 mb-8 w-24 h-24 flex items-center justify-center">
                <img src={icon1} alt="Locate" className="w-10" />
              </div>
              <h4 className="text-xl md:text-2xl lg:text-3xl font-bold text-scoot-dark mb-4 font-mono">Locate with app</h4>
              <p className="text-scoot-grey font-grotesk text-sm md:text-base">Use the app to find the nearest scooter to you. We are continuously placing scooters in the areas with the most demand.</p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="bg-scoot-yellow rounded-full p-6 mb-8 w-24 h-24 flex items-center justify-center">
                <img src={icon2} alt="Pick" className="w-10" />
              </div>
              <h4 className="text-xl md:text-2xl lg:text-3xl font-bold text-scoot-dark mb-4 font-mono">Pick your scooter</h4>
              <p className="text-scoot-grey font-grotesk text-sm md:text-base">We show the most important info for the scooter closest to you. So you know how much charge they have left.</p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="bg-scoot-yellow rounded-full p-6 mb-8 w-24 h-24 flex items-center justify-center">
                <img src={icon3} alt="Ride" className="w-10" />
              </div>
              <h4 className="text-xl md:text-2xl lg:text-3xl font-bold text-scoot-dark mb-4 font-mono">Enjoy the ride</h4>
              <p className="text-scoot-grey font-grotesk text-sm md:text-base">Scan the QR code and the bike will unlock. Retract the cable lock, put on a helmet, and you're off!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Telemetry Feature */}
      <section className="container mx-auto px-6 py-12 md:py-20 overflow-hidden">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-32">
          <div className="md:w-1/2 p-10 order-2 md:order-1 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-scoot-dark mb-6 leading-tight font-mono">Easy to use <br /> riding telemetry</h2>
            <p className="text-scoot-grey mb-8 leading-relaxed font-grotesk text-sm md:text-base lg:text-lg">
              The Scoot app is available with riding telemetry. This means it can show you your average speed, how long you've been using the scooter, your traveling distance, and many more things all in an easy to use app.
            </p>
            <Button>Learn More</Button>
          </div>
          <div className="md:w-1/2 order-1 md:order-2 relative">
            {/* Circle Background: Right aligned */}
            <div className="bg-scoot-light rounded-full absolute -right-full top-0 w-[200%] h-full -z-10 rounded-l-full opacity-50"></div>
            <img src={ladyp} alt="Telemetry" className="rounded-full w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto relative z-10" />
          </div>
        </div>
      </section>

      {/* City Feature */}
      <section className="container mx-auto px-6 py-12 md:py-20 overflow-hidden">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-32">
          <div className="md:w-1/2 relative">
            {/* Circle Background: Left aligned */}
            <div className="bg-scoot-light rounded-full absolute -left-full top-0 w-[200%] h-full -z-10 rounded-r-full opacity-50"></div>
            <img src={buildings} alt="City" className="rounded-full w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto relative z-10" />
          </div>
          <div className="md:w-1/2 p-10 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-scoot-dark mb-6 leading-tight font-mono">Coming to a city <br /> near you</h2>
            <p className="text-scoot-grey mb-8 leading-relaxed font-grotesk text-sm md:text-base lg:text-lg">
              Scoot is available in 4 major cities so far. We're expanding rapidly, so be sure to let us know if you want to see us in your hometown. We're aiming to let our scooters loose on 23 cities over the coming year.
            </p>
            <Button>Learn More</Button>
          </div>
        </div>
      </section>

      {/* Payment Feature */}
      <section className="container mx-auto px-6 py-12 md:py-20 mb-20 overflow-hidden">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-32">
          <div className="md:w-1/2 p-10 order-2 md:order-1 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-scoot-dark mb-6 leading-tight font-mono">Zero hassle <br /> payments</h2>
            <p className="text-scoot-grey mb-8 leading-relaxed font-grotesk text-sm md:text-base lg:text-lg">
              Our payment is as easy as one two three. We accept most credit cards and debit cards. You can also link your paypal account inside the app. Need to pay later? No worries! You can defer payment for up to a month.
            </p>
            <Button>Learn More</Button>
          </div>
          <div className="md:w-1/2 order-1 md:order-2 relative">
            {/* Circle Background: Right aligned */}
            <div className="bg-scoot-light rounded-full absolute -right-full top-0 w-[200%] h-full -z-10 rounded-l-full opacity-50"></div>
            <img src={wallet} alt="Wallet" className="rounded-full w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto relative z-10" />
          </div>
        </div>
      </section>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col overflow-x-hidden w-full font-grotesk text-scoot-dark">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/location" element={<Location />} />
            <Route path="/careers" element={<Careers />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;