import React from "react";

const roadmapData = [
  {
    id: 1,
    quarter: "Q3 2017",
    title: "London Office",
    desc: "Aliquam lorem ante, dapi bus in, viverra quis, feugi at a, tel lus. Phaselus vive",
    position: "top",
    left: "12%",
    width: "320px",
  },
  {
    id: 2,
    quarter: "Q4 2017",
    title: "New Startup",
    desc: "Lorem ipsum dolor sitam et consectetuer adipisc elit lorem ipsum",
    position: "bottom",
    left: "30%",
    width: "340px",
  },
  {
    id: 3,
    quarter: "Q1 2018",
    title: "Move Forward",
    desc: "Aliquam lorem ante dapi busin, viverra quis feugia ta tellus. Phaselus viverra nulla ut metus us. Aenea imperdiet quisque rut",
    position: "top",
    left: "49%",
    width: "310px",
  },
  {
    id: 4,
    quarter: "Q2 2018",
    title: "Indian Market",
    desc: "Aliquam lorem ante, dapibus in, viverra qui, feugit a, telus pha sel.",
    position: "bottom",
    left: "67%",
    width: "305px",
  },
  {
    id: 5,
    quarter: "Q1 2019",
    title: "Future is Now",
    desc: "Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phaselu viverra nulla ut metus us.",
    position: "top",
    left: "85%",
    width: "305px",
  },
];

const Roadmap = () => {
  return (
    <section className="relative bg-[#0c0f14] text-white overflow-hidden py-24">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-y-0 left-[12%] w-px bg-white/10" />
        <div className="absolute inset-y-0 left-[24%] w-px bg-white/10" />
        <div className="absolute inset-y-0 left-[36%] w-px bg-white/10" />
        <div className="absolute inset-y-0 left-[48%] w-px bg-white/10" />
        <div className="absolute inset-y-0 left-[60%] w-px bg-white/10" />
        <div className="absolute inset-y-0 left-[72%] w-px bg-white/10" />
        <div className="absolute inset-y-0 left-[84%] w-px bg-white/10" />
      </div>

      <div className="absolute inset-0 flex items-start justify-center pointer-events-none z-0">
        <h1 className="text-[220px] md:text-[280px] lg:text-[320px] font-bold text-white/[0.03] leading-none uppercase mt-8 select-none">
          roadmap
        </h1>
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-8">
        <div className="text-center mb-20">
          <h2 className="text-[44px] md:text-[54px] font-semibold">Roadmap</h2>
          <div className="w-12 h-[3px] bg-lime-400 mx-auto mt-4" />
        </div>

        <div className="relative h-[620px]">
          <div className="absolute top-1/2 left-[3%] right-[3%] -translate-y-1/2">
            <div className="relative h-[4px] bg-white/20">
              <div className="absolute inset-y-0 left-0 right-0 bg-lime-400" />
              <div className="absolute left-[-2px] top-1/2 -translate-y-1/2 w-5 h-5 border-l-[3px] border-b-[3px] border-lime-400 rotate-45" />
              <div className="absolute right-[-2px] top-1/2 -translate-y-1/2 w-5 h-5 border-r-[3px] border-t-[3px] border-lime-400 rotate-45" />
            </div>
          </div>

          {roadmapData.map((item) => (
            <div
              key={item.id}
              className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{ left: item.left }}
            >
              <div className="relative flex flex-col items-center">
                {item.position === "top" && (
                  <>
                    <div
                      className="mb-14 rounded-xl bg-white/[0.06] backdrop-blur-[2px] border border-white/5 p-8"
                      style={{ width: item.width }}
                    >
                      <h3 className="text-[22px] font-semibold mb-4">{item.title}</h3>
                      <p className="text-white/80 text-[14px] leading-8">{item.desc}</p>
                    </div>

                    <div className="w-px h-14 bg-white/20" />
                  </>
                )}

                <div className="relative z-10 w-7 h-7 rounded-full border-[4px] border-lime-400 bg-[#0c0f14]" />

                {item.position === "bottom" && (
                  <>
                    <div className="w-px h-14 bg-white/20" />

                    <div
                      className="mt-14 rounded-xl bg-white/[0.06] backdrop-blur-[2px] border border-white/5 p-8"
                      style={{ width: item.width }}
                    >
                      <h3 className="text-[22px] font-semibold mb-4">{item.title}</h3>
                      <p className="text-white/80 text-[14px] leading-8">{item.desc}</p>
                    </div>
                  </>
                )}

                <p
                  className={`absolute text-[18px] md:text-[20px] font-semibold whitespace-nowrap ${
                    item.position === "top" ? "top-[56%] mt-8" : "bottom-[56%] mb-8"
                  }`}
                >
                  {item.quarter}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;