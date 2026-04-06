import React from "react";

const features = [
  {
    id: 1,
    image: "/db.png",
    title: "Virtual Database",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa cum",
  },
  {
    id: 2,
    image: "/mon.png",
    title: "Secured Money",
    text: "Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.",
  },
  {
    id: 3,
    image: "/leg.png",
    title: "Secured Money",
    text: "Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.",
  },
];

const Services = () => {
  return (
    <section className="relative bg-[#0b0f14] text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/70" />

        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 25%, rgba(163,230,53,0.08) 0%, transparent 35%), radial-gradient(circle at 75% 75%, rgba(163,230,53,0.06) 0%, transparent 35%)",
          }}
        />

        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(120deg, rgba(163,230,53,0.08) 0px, rgba(163,230,53,0.08) 2px, transparent 2px, transparent 80px)",
          }}
        />

        <div className="absolute inset-0 max-w-[1380px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="h-full grid grid-cols-4">
            <div className="border-r border-white/10 h-full"></div>
            <div className="border-r border-white/10 h-full"></div>
            <div className="border-r border-white/10 h-full"></div>
            <div className="h-full"></div>
          </div>
        </div>
      </div>

      <div className="absolute -top-24 -left-24 w-[300px] h-[300px] bg-lime-400/5 blur-[120px] rounded-full" />
      <div className="absolute -bottom-24 -right-24 w-[300px] h-[300px] bg-lime-400/5 blur-[120px] rounded-full" />

      <div className="relative z-10 max-w-[1380px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {features.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center text-center px-6 md:px-8 lg:px-10 py-20 md:py-24"
            >
              <div className="mb-8 flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-[120px] md:w-[140px] h-[120px] md:h-[140px] object-contain"
                />
              </div>

              <h2 className="text-[34px] md:text-[42px] lg:text-[52px] font-semibold leading-tight mb-7 tracking-[-0.5px]">
                {item.title}
              </h2>

              <p className="text-[#8f959d] text-[17px] md:text-[18px] leading-9 max-w-[360px]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;