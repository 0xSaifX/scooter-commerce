import React from 'react';
import value1 from "../assets/value1.png";
import value2 from "../assets/value2.png";
import value3 from "../assets/value3.png";

const Values = ({ title = "Our values" }) => {
    const values = [
        {
            img: value1,
            title: "Our tech",
            desc: "We're using cutting-edge technology to drive accessible urban transportation forward. Our fully electric scooters are a joy to ride!"
        },
        {
            img: value2,
            title: "Our integrity",
            desc: "We're fully committed to delivering a great yet safe, sustainable micro-mobility experience in every city we serve."
        },
        {
            img: value3,
            title: "Our community",
            desc: "We support every community we serve. All workers are paid a living wage based on their location and are Scoot employees."
        }
    ];

    return (
        <section className="container justify-center mx-auto px-0 py-12 md:py-20 mb-12">
            <h2 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-scoot-dark mb-12 md:mb-20 text-center md:text-left font-mono">
                {title}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {values.map((item, index) => (
                    <div key={index} className="flex flex-col items-center text-center">
                        <div className="mb-8 relative">
                            <img src={item.img} alt={item.title} className="rounded-full w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-cover" />
                            <div className="absolute -bottom-4 bg-scoot-yellow text-scoot-dark font-mono font-bold w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full flex items-center justify-center text-lg md:text-xl lg:text-2xl mx-auto left-0 right-0 border-[3px] border-white">
                                {String(index + 1).padStart(2, '0')}
                            </div>
                        </div>
                        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-scoot-dark mb-6 pt-6 font-mono">{item.title}</h3>
                        <p className="text-scoot-grey leading-relaxed max-w-sm text-sm md:text-base lg:text-lg font-grotesk">
                            {item.desc}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Values;
