import React from 'react';
import circles from "../assets/circles.png";

const HeroHeader = ({ title, image, alt }) => {
    return (
        <div className="relative h-[200px] md:h-[250px] lg:h-[300px] xl:h-[350px] w-full overflow-hidden mb-12 md:mb-20">
            <img src={image} alt={alt} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40 md:bg-transparent flex items-center">
                <div className="container mx-auto px-0 relative z-10">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white font-mono tracking-tighter">
                        {title}
                    </h1>
                </div>
            </div>
            <img src={circles} alt="" className="absolute right-[-30px] top-1/2 transform -translate-y-1/2 hidden md:block" />
        </div>
    );
};

export default HeroHeader;
