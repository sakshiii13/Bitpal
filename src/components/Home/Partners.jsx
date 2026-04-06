import React from "react";

const partners = [
  { id: 1, src: "/c1.png" },
  { id: 2, src: "/c2.png" },
  { id: 3, src: "/c3.png" },
  { id: 4, src: "/c4.png" },
  { id: 5, src: "/c5.png" },
  { id: 6, src: "/c6.png" },
  { id: 7, src: "/c7.png" },
  { id: 8, src: "/c8.png" },
  { id: 9, src: "/c9.png" },
  { id: 10, src: "/c10.png" },
  { id: 11, src: "/c11.png" },
  { id: 12, src: "/c12.png" },
];

const Partners = () => {
  return (
    <section className="relative overflow-hidden">
      
     
      <div
        className="absolute inset-0 h-[1600px] bg-fixed bg-cover bg-center "
        style={{ backgroundImage: "url('/bg2.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

     
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 py-24 md:py-28">
        
        <div className="text-center mb-16">
          <h2 className="text-white text-[40px] md:text-[54px] font-semibold">
            Strategic Partners
          </h2>
          <div className="w-12 h-[3px] bg-lime-400 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-y-14 gap-x-10 justify-items-center">
          {partners.map((item) => (
            <div key={item.id} className="opacity-80 w-50 h-20 hover:opacity-100 transition">
              <img
                src={item.src}
                className="max-h-[150px] object-contain"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Partners;