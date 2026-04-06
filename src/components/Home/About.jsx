import React from "react";
import { Play } from "lucide-react";

const leftList = [
  "Blockchain Strategy",
  "ICO Progress",
  "Financial Services",
];

const rightList = [
  "Financial Services",
  "Blockchain Strategy",
  "ICO Progress",
];

const About = () => {
  return (
    <section className="relative bg-[#0b0f14] text-white overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-black/65" />

        <div className="absolute inset-y-0 left-[8%] w-px bg-white/10" />
        <div className="absolute inset-y-0 left-[24%] w-px bg-white/10" />
        <div className="absolute inset-y-0 left-[40%] w-px bg-white/10" />
        <div className="absolute inset-y-0 left-[56%] w-px bg-white/10" />
        <div className="absolute inset-y-0 left-[72%] w-px bg-white/10" />
        <div className="absolute inset-y-0 left-[88%] w-px bg-white/10" />

        <div className="absolute top-10 left-8 md:left-20 text-[120px] md:text-[220px] lg:text-[280px] font-bold text-white/[0.03] leading-none select-none">
          about
        </div>
      </div>

      <div className="relative z-10 max-w-[1380px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-10 items-center">
          <div>
            <h2 className="text-[52px] md:text-[72px] font-semibold leading-none mb-8">
              About
            </h2>

            <p className="text-[26px] md:text-[32px] italic text-white/90 leading-[1.5] mb-10 max-w-[620px]">
              Aliquam lorem ante, dapibus in, viverra quis, feugiat tellus.
              Phasellus viverra nulla ut metus varius laore.
            </p>

            <p className="text-[#8f959d] text-[18px] md:text-[20px] leading-10 max-w-[620px] mb-10">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis Theme natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Lorem ipsum dolor sit consectetuer adipiscing sociis theme
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-10">
              <div className="space-y-5">
                {leftList.map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <span className="w-2 h-2 bg-lime-400 inline-block" />
                    <span className="text-[18px] md:text-[20px] text-white">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="space-y-5">
                {rightList.map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <span className="w-2 h-2 bg-lime-400 inline-block" />
                    <span className="text-[18px] md:text-[20px] text-white">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[820px]">
              <div className="relative rounded-[28px] border border-white/40 bg-[#10141b] p-4 md:p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.05)]">
                <div className="rounded-[18px] border border-white/15 bg-black p-3 md:p-4">
                  <div className="relative overflow-hidden rounded-[10px] bg-black aspect-[16/9]">
                    <img
                      src="/ICO.jpg"
                      alt="About Screen"
                      className="w-full h-full object-cover"
                    />

                    <button className="absolute inset-0 m-auto w-20 h-20 md:w-24 md:h-24 rounded-full bg-lime-400 flex items-center justify-center shadow-[0_0_40px_rgba(163,230,53,0.35)] hover:scale-105 transition duration-300">
                      <Play
                        size={34}
                        className="text-black fill-black ml-1 md:w-10 md:h-10"
                      />
                    </button>
                  </div>
                </div>
              </div>

              <div className="mx-auto -mt-[2px] h-4 md:h-5 w-[88%] rounded-b-[40px] bg-[#d8d8d8]" />
              <div className="mx-auto -mt-2 h-[3px] w-[18%] rounded-full bg-[#bdbdbd]" />
              <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 md:-bottom-5 w-[112%] h-4 md:h-5 rounded-full bg-[#0f1319]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;