import React from "react";
import {
  FiFolder,
  FiCheckSquare,
  FiClock,
  FiCheckCircle,
} from "react-icons/fi";

const cardData = [
  {
    title: "Total Projects",
    value: "12",
    change: "+5 vs last month",
    icon: <FiFolder />,
  },
  {
    title: "Total Task",
    value: "08",
    change: "+2 vs last month",
    icon: <FiCheckSquare />,
  },
  {
    title: "In Reviews",
    value: "23",
    change: "+12 vs last month",
    icon: <FiClock />,
  },
  {
    title: "Completed Tasks",
    value: "50",
    change: "+15 vs last month",
    icon: <FiCheckCircle />,
  },
];

const Cards = () => {
  return (
    <div className="mb-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#171a22] via-[#11131a] to-[#0d1016] p-5 shadow-[0_18px_35px_rgba(0,0,0,0.28)] transition-all duration-300 hover:-translate-y-1 hover:border-lime-400/20 hover:shadow-[0_22px_45px_rgba(0,0,0,0.38)]"
        >
          <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-lime-400/10 blur-2xl transition-all duration-300 group-hover:bg-lime-400/15"></div>
          <div className="absolute inset-0 rounded-2xl ring-1 ring-white/5"></div>

          <div className="relative z-10 flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-gray-400">{card.title}</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white">
                {card.value}
              </h2>
              <p className="mt-2 text-xs text-lime-400/90">{card.change}</p>
            </div>

            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-xl text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_10px_20px_rgba(0,0,0,0.22)] backdrop-blur-md transition-all duration-300 group-hover:scale-105 group-hover:border-lime-400/20 group-hover:text-lime-300">
              {card.icon}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;