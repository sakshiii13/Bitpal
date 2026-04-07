import React from "react";

const HomeSection = () => {
  return (
    <section className="relative min-h-screen bg-[#0b0f14] text-white overflow-hidden">
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

      <div className="absolute -top-32 -left-32 w-[420px] h-[420px] bg-lime-400/10 blur-[130px] rounded-full" />
      <div className="absolute -bottom-32 -right-32 w-[420px] h-[420px] bg-lime-400/10 blur-[130px] rounded-full" />

      <div className="relative z-10 max-w-[1380px] mx-auto px-6 md:px-10 lg:px-16 pt-28 md:pt-36 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-10 items-center">
          <div className="max-w-[700px]">
            <h1 className="text-[42px] sm:text-[56px] md:text-[74px] lg:text-[82px] leading-[1.03] font-semibold tracking-[-1px] mb-7">
              First Mining ICO <br /> Token StartUp
            </h1>

            <p className="text-[#8f959d] text-[17px] md:text-[19px] leading-8 max-w-[560px] mb-10">
              Regarded as a synonym to cryptocurrency, blockchain is much more
              than a payment option.
            </p>

            <div className="flex flex-wrap gap-4 md:gap-6">
              <button className="px-8 md:px-10 h-[56px] rounded-full border border-lime-400 text-white text-[13px] md:text-[14px] font-semibold tracking-[1.5px] hover:bg-lime-400 hover:text-black transition duration-300">
                FIND OUT MORE
              </button>

              <button className="px-8 md:px-10 h-[56px] rounded-full border border-lime-400 text-white text-[13px] md:text-[14px] font-semibold tracking-[1.5px] hover:bg-lime-400 hover:text-black transition duration-300">
                WHITE PAPER
              </button>
            </div>
          </div>

          <div className="w-full flex lg:justify-end">
            <div className="w-full max-w-[460px] bg-[#11161c]/95 backdrop-blur-md border border-white/5 px-7 md:px-10 py-8 md:py-10 rounded-[8px] shadow-[0_0_50px_rgba(0,0,0,0.45)]">
              <p className="text-lime-400 text-[20px] md:text-[22px] font-medium mb-7">
                Edge ICO Ends in
              </p>

              <div className="grid grid-cols-4 gap-3 md:gap-4 mb-4">
                {["00", "00", "00", "00"].map((item, i) => (
                  <div
                    key={i}
                    className="h-[78px] md:h-[86px] bg-white text-black rounded-[4px] flex items-center justify-center text-[30px] md:text-[36px] font-semibold"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-4 gap-3 md:gap-4 text-center text-[12px] md:text-[13px] text-[#8f959d] mb-8">
                <span>Days</span>
                <span>Hours</span>
                <span>Minutes</span>
                <span>Seconds</span>
              </div>

              <button className="w-full h-[56px] rounded-full border border-lime-400 text-white text-[13px] md:text-[14px] font-semibold tracking-[1.5px] hover:bg-lime-400 hover:text-black transition duration-300 mb-7">
                BUY EDGE TOKENS
              </button>

              <div className="flex justify-between items-center text-[13px] md:text-[14px] text-[#8f959d] mb-3">
                <span>Reached: $19,550,000</span>
                <span>$70,000,000</span>
              </div>

              <div className="w-full h-[8px] bg-[#050709] rounded-full overflow-hidden mb-3">
                <div className="h-full w-[28%] bg-lime-400 rounded-full" />
              </div>

              <div className="flex justify-between items-center text-[12px] md:text-[13px] text-[#5f666f]">
                <span>Softcap</span>
                <span>Hardcap</span>
              </div>
            </div>
          </div>
        </div>
      </div>

     
    </section>
  );
};

export default HomeSection;