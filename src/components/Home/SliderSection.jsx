import React, { useState } from "react";

const slides = [
  {
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
    name: "Alice Adams",
    role: "Engineer",
    avatar: "/alice.png",
    bg: "/bg1.jpg",
  },
  {
    text: "Cum sociis Theme natoque penatibus et magnis dis parturient montes.",
    name: "John Doe",
    role: "Developer",
    avatar: "/boy.png",
    bg: "/bg1.jpg",
  },
];

const SliderSection = () => {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex(index === 0 ? slides.length - 1 : index - 1);
  };

  const next = () => {
    setIndex(index === slides.length - 1 ? 0 : index + 1);
  };

  return (
    <div
      className="relative h-[700px] w-full overflow-hidden bg-fixed bg-center bg-cover"
      style={{ backgroundImage: `url(${slides[index].bg})` }}
    >

      <div className="absolute inset-0 bg-black/70"></div>

      <div className="absolute inset-0">
        <div className="w-full h-full bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:160px_100%]"></div>
      </div>

      <div className="relative z-10 h-full flex items-center justify-center">
        
        <div className="flex items-center gap-15">

          <button
            onClick={prev}
            className="text-white text-3xl hover:text-lime-400 transition"
          >
            ←
          </button>

          <div className="flex flex-col items-center text-center px-6 max-w-2xl">
            
            <img
              src={slides[index].avatar}
              alt=""
              className="w-16 h-16 rounded-full mb-4 border-2 border-white"
            />

            <p className="text-gray-300 mb-4 text-2xl leading-relaxed">
              {slides[index].text}
            </p>

            <h3 className="text-white font-semibold text-lg mb-1">
              {slides[index].name}
            </h3>

            <span className="text-lime-400 text-sm text-shadow-lg">
              {slides[index].role}
            </span>
          </div>

          <button
            onClick={next}
            className="text-white text-3xl hover:text-lime-400 transition"
          >
            →
          </button>

        </div>
      </div>

    </div>
  );
};

export default SliderSection;