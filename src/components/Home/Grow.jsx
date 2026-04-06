import React from "react";
import { Shield, Coins, Beef } from "lucide-react";

const stats = [
  {
    id: 1,
    value: "75%",
    label: "Security",
    icon: <Shield size={56} strokeWidth={1.7} />,
  },
  {
    id: 2,
    value: "150%",
    label: "Transparency",
    icon: <Coins size={56} strokeWidth={1.7} />,
  },
  {
    id: 3,
    value: "220%",
    label: "Professional",
    icon: <Beef size={56} strokeWidth={1.7} />,
  },
];

const Grow = () => {
  return (
    <section
      className="relative min-h-[640px] md:min-h-[720px] bg-fixed bg-center bg-cover text-white overflow-hidden"
      style={{ backgroundImage: "url('/back11.jpg')" }}
    >
      
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      
      <div className="absolute inset-0 pointer-events-none z-[1]">
        <div className="absolute inset-y-0 left-[8%] w-px bg-white/10" />
        <div className="absolute inset-y-0 left-[24%] w-px bg-white/10" />
        <div className="absolute inset-y-0 left-[40%] w-px bg-white/10" />
        <div className="absolute inset-y-0 left-[56%] w-px bg-white/10" />
        <div className="absolute inset-y-0 left-[72%] w-px bg-white/10" />
        <div className="absolute inset-y-0 left-[88%] w-px bg-white/10" />
      </div>

      
      <div className="relative z-10 max-w-[1380px] mx-auto px-6 md:px-10 lg:px-16 min-h-[640px] md:min-h-[720px] flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center w-full">
          
          <div className="max-w-[600px] pt-16 lg:pt-0">
            <h1 className="text-[40px] md:text-[68px] lg:text-[70px] leading-[1.05] mb-8">
              Grow Your Capital
            </h1>

            <p className="text-white/80 text-[17px] md:text-[20px] leading-9 mb-10 max-w-[600px]">
              Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
              Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
              Aenean imperdiet. Etiam ultricies nisi vel augue.
            </p>

            <button className="inline-flex items-center justify-center h-14 px-10 rounded-full border border-white/80 text-white text-sm md:text-base font-semibold uppercase tracking-wide hover:bg-lime-400 hover:border-lime-400 hover:text-black transition-all duration-300">
              White Paper
            </button>
          </div>

          
          <div className="flex justify-center lg:justify-end">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-7 md:gap-10 lg:gap-12 text-center w-full max-w-[700px]">
              {stats.map((item) => (
                <div key={item.id} className="flex flex-col items-center">
                  <div className="text-lime-400 mb-5">{item.icon}</div>

                  <h3 className="text-[52px] md:text-[70px] font-semibold leading-none mb-3">
                    {item.value}
                  </h3>

                  <p className="text-[22px] md:text-[28px] font-medium text-white">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      
      <div className="absolute bottom-0 left-0 w-full h-14 bg-black/30 z-[2]" />
    </section>
  );
};

export default Grow;