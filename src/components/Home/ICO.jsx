import React from "react";
import { ShieldCheck, Smartphone, CreditCard, Globe } from "lucide-react";

const featuresLeft = [
  {
    icon: <ShieldCheck size={28} />,
    title: "Secure Wallet",
    desc: "Your crypto assets are fully protected with advanced security systems.",
  },
  {
    icon: <Smartphone size={28} />,
    title: "Mobile App",
    desc: "Access your wallet anytime with our smooth mobile application.",
  },
];

const featuresRight = [
  {
    icon: <CreditCard size={28} />,
    title: "Easy Payments",
    desc: "Make instant transactions with fast and secure payment methods.",
  },
  {
    icon: <Globe size={28} />,
    title: "Global Access",
    desc: "Use your wallet anywhere in the world without limitations.",
  },
];

const ICO = () => {
  return (
    <section className="bg-[#0b0f14] text-white py-24 relative overflow-hidden">
      
      <div className="text-center mb-16">
        <h2 className="text-4xl font-semibold">ICO Wallet Features</h2>
        <div className="w-12 h-[2px] bg-lime-400 mx-auto mt-4"></div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 items-center gap-7 px-6">
        
        <div className="space-y-10">
          {featuresLeft.map((item, i) => (
            <div key={i} className="flex gap-4">
              <div className="text-lime-400">{item.icon}</div>
              <div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <img
            src="/ICOwallet.png"
            alt="phone"
            className="w-[280px] md:w-[320px]"
          />
        </div>

        <div className="space-y-10">
          {featuresRight.map((item, i) => (
            <div key={i} className="flex gap-4">
              <div className="text-lime-400">{item.icon}</div>
              <div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>

<div className="absolute inset-y-0 left-[25%] w-px bg-white/10"></div>
      <div className="absolute inset-y-0 left-[50%] w-px bg-white/10"></div>
      <div className="absolute inset-y-0 left-[75%] w-px bg-white/10"></div>

    </section>
  );
};

export default ICO;