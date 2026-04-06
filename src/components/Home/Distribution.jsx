import React, { useState } from "react";
import {
  BarChart3,
  Globe,
  HandCoins,
  ClipboardList,
  Shield,
  Coins,
  Presentation,
} from "lucide-react";

const items = [
  {
    id: 1,
    title: "Trust your intuition",
    label: "Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.",
    icon: <BarChart3 size={34} strokeWidth={1.8} />,
  },
  {
    id: 2,
    title: "Global Access",
    label: "Development",
    description:
      "Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.",
    icon: <Globe size={34} strokeWidth={1.8} />,
  },
  {
    id: 3,
    title: "Smart Support",
    label: "Development",
    description:
      "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
    icon: <HandCoins size={34} strokeWidth={1.8} />,
  },
  {
    id: 4,
    title: "Market Analysis",
    label: "Development",
    description:
      "Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper.",
    icon: <ClipboardList size={34} strokeWidth={1.8} />,
  },
  {
    id: 5,
    title: "High Security",
    label: "Development",
    description:
      "Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero.",
    icon: <Shield size={34} strokeWidth={1.8} />,
  },
  {
    id: 6,
    title: "Fast Transactions",
    label: "Development",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo.",
    icon: <Coins size={34} strokeWidth={1.8} />,
  },
  {
    id: 7,
    title: "Presentation Tools",
    label: "Development",
    description:
      "Cum sociis natoque penatibus et magnis dis parturient montes.",
    icon: <Presentation size={34} strokeWidth={1.8} />,
  },
];

const Distribution = () => {
  const [activeIndex, setActiveIndex] = useState(2);

  const activeItem = items[activeIndex];

  const orbitSize = 470;
  const iconSize = 96;
  const radius = 190;

  return (
    <section className="relative bg-black text-white py-20 md:py-28 overflow-hidden">
      
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-y-0 left-[8%] w-px bg-white/10" />
        <div className="absolute inset-y-0 left-[24%] w-px bg-white/10" />
        <div className="absolute inset-y-0 left-[40%] w-px bg-white/10" />
        <div className="absolute inset-y-0 left-[56%] w-px bg-white/10" />
        <div className="absolute inset-y-0 left-[72%] w-px bg-white/10" />
        <div className="absolute inset-y-0 left-[88%] w-px bg-white/10" />
      </div>

      <div className="relative z-10 max-w-[1380px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
         
          <div className="flex justify-center">
            <div className="relative w-[560px] h-[560px] max-w-full">
             
              <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/35"
                style={{
                  width: `${orbitSize}px`,
                  height: `${orbitSize}px`,
                }}
              />

             
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[230px] text-center z-10">
                <p className="text-lime-400 text-sm md:text-base mb-3">
                  {activeItem.label}
                </p>

                <h3 className="text-[24px] md:text-[30px] font-semibold leading-tight mb-4">
                  {activeItem.title}
                </h3>

                <p className="text-white/70 text-sm md:text-base leading-7 transition-all duration-300">
                  {activeItem.description}
                </p>
              </div>

              {items.map((item, index) => {
                const angle = (index / items.length) * Math.PI * 2 - Math.PI / 2;

                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                const isActive = activeIndex === index;

                return (
                  <button
                    key={item.id}
                    onMouseEnter={() => setActiveIndex(index)}
                    onClick={() => setActiveIndex(index)}
                    className={`absolute left-1/2 top-1/2 rounded-full flex items-center justify-center transition-all duration-300 border z-20 ${
                      isActive
                        ? "bg-lime-400 text-black border-lime-400 scale-105 shadow-[0_0_35px_rgba(163,230,53,0.18)]"
                        : "bg-white/10 text-white border-white/5 hover:bg-white/15"
                    }`}
                    style={{
                      width: `${iconSize}px`,
                      height: `${iconSize}px`,
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                    }}
                  >
                    {item.icon}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="max-w-[620px]">
            <h2 className="text-[44px] md:text-[68px] font-semibold leading-none mb-6">
              Token Distribution
            </h2>

            <p className="text-[22px] md:text-[30px] italic text-white/90 leading-[1.5] mb-8">
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim
            </p>

            <p className="text-white/45 text-[17px] md:text-[19px] leading-9 mb-10">
              Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
              Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
              Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur
              ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.
            </p>

            <button className="inline-flex items-center justify-center px-10 h-14 rounded-full border border-lime-400 text-white font-semibold uppercase tracking-wide hover:bg-lime-400 hover:text-black transition-all duration-300">
              Purchase
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Distribution;