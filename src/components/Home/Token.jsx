import React, { useState } from "react";
import { Play } from "lucide-react";

const Token = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative bg-[#0b0f14] overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 max-w-[1380px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="h-full grid grid-cols-4">
          <div className="absolute inset-y-0 left-[25%] w-px bg-white/10"></div>
          <div className="absolute inset-y-0 left-[50%] w-px bg-white/10"></div>
          <div className="absolute inset-y-0 left-[75%] w-px bg-white/10"></div>
          <div className="h-full"></div>
        </div>
      </div>
      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg
          className="absolute inset-0 w-full h-full opacity-20"
          viewBox="0 0 1600 700"
          fill="none"
        >
          <path
            d="M0 520 L120 470 L250 410 L390 455 L520 330 L680 360 L840 250 L980 265 L1120 180 L1240 190 L1380 120 L1520 120 L1600 60"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="2"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <div className="relative">
            <div className="relative overflow-hidden">
              <img
                src="/laptop.jpg"
                alt="Token Sale"
                className="w-full h-auto object-cover"
              />

              <button
                onClick={() => setOpen(true)}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 md:w-24 md:h-24 bg-lime-400 hover:bg-lime-300 transition flex items-center justify-center rounded-full"
              >
                <Play className="w-10 h-10 md:w-12 md:h-12 text-black fill-black ml-1" />

                <span className="absolute w-full h-full rounded-full border border-lime-400 animate-ping"></span>
              </button>
            </div>
          </div>

          <div className="max-w-[620px]">
            <h2 className="text-white text-[42px] md:text-[56px] font-semibold mb-6">
              Edge Token Sale
            </h2>

            <p className="text-white text-[20px] md:text-[24px] italic mb-8">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            </p>

            <p className="text-white/45 text-[17px] md:text-[18px] leading-[2] mb-10">
              Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
            </p>

            <div className="flex gap-6">
              <img src="/gplay.png" className="h-[56px]" />
              <img src="/appstore.png" className="h-[56px]" />
            </div>
          </div>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black/80"
          ></div>

          <div className="relative w-[90%] md:w-[800px]">
            <button
              onClick={() => setOpen(false)}
              className="absolute -top-10 right-0 text-white text-2xl"
            >
              ✕
            </button>

            <iframe
              className="w-full h-[450px] rounded-lg"
              src="https://www.youtube.com/embed/ysz5S6PUM-U"
              title="video"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default Token;
