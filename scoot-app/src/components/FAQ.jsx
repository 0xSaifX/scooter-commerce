import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQ = () => {
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
          a: "To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page.",
        },
        {
          q: "Can I find a nearby Scoots?",
          a: "",
        },
        {
          q: "Do I need a license to ride?",
          a: "",
        },
      ],
    },
    {
      category: "Safe driving",
      items: [
        {
          q: "Should I wear a helmet?",
          a: "Yes, please do! All cities have different laws. But we strongly strongly strongly recommend always wearing a helmet regardless of the local laws. We like you and want you to be as safe as possible while Scooting.",
        },
        {
          q: "How about the rules & regulations?",
          a: "",
        },
        {
          q: "What if I damage my Scoot?",
          a: "",
        },
      ],
    },
  ];

  return (
    <section className="w-full max-w-5xl mx-auto py-16 px-6 font-['Space_Grotesk']">
      <h2 className="text-center text-4xl font-bold text-[#495567] mb-14">FAQs</h2>

      {faqs.map((group, groupIndex) => (
        <div key={groupIndex} className="mb-14">
          <h3 className="text-2xl font-bold text-[#495567] mb-6">{group.category}</h3>
          <div className="space-y-3">
            {group.items.map((item, index) => {
              const isOpen = openIndex === `${groupIndex}-${index}`;
              return (
                <div
                  key={index}
                  onClick={() => toggle(`${groupIndex}-${index}`)}
                  className={`cursor-pointer border-b-4 border-black transition-all duration-300 ${
                    isOpen ? "bg-[#F2F5F9]" : "bg-[#F2F5F9]"
                  } hover:bg-[#FFF4DF]`}
                >
                  <div className="flex justify-between items-center p-6">
                    <span className="text-lg font-bold text-[#495567]">
                      {item.q}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="text-[#fcb72b]" />
                    ) : (
                      <ChevronDown className="text-[#fcb72b]" />
                    )}
                  </div>

                  {isOpen && item.a && (
                    <p className="text-[#939CAA] text-sm leading-relaxed px-6 pb-6">
                      {item.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </section>
  );
};

export default FAQ;
