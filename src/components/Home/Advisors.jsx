import React from "react";

const team = [
  {
    name: "Steven Gonzalez",
    role: "Founder & CEO",
    img: "/team1.jpg",
  },
  {
    name: "Paul Ward",
    role: "Chief Operational Officer",
    img: "/team2.jpg",
  },
  {
    name: "Walter Perry",
    role: "Lead Software Developer",
    img: "/team3.jpg",
  },
  {
    name: "Gregory Silva",
    role: "Software Architect",
    img: "/team4.jpg",
  },
];

const Advisors = () => {
  return (
    <section className="bg-[#0b0f14] text-white py-24 relative overflow-hidden">
      
      <h2 className="text-center text-4xl font-semibold mb-4">Advisors Board</h2>
      <div className="w-10 h-[2px] bg-lime-400 mx-auto mb-16"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 px-6">
        
        {team.map((member, index) => (
          <div key={index} className="text-center group relative">
            
            <div className="relative w-56 h-56 mx-auto mb-6 rounded-full overflow-hidden">
              
              <img
                src={member.img}
                alt=""
                className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <div className="flex gap-4 text-white text-lg">
                  <span className="hover:text-lime-400 cursor-pointer">f</span>
                  <span className="hover:text-lime-400 cursor-pointer">t</span>
                  <span className="hover:text-lime-400 cursor-pointer">in</span>
                </div>
              </div>

            </div>

            <h3 className="text-lg font-semibold">{member.name}</h3>
            <p className="text-lime-400 text-sm mb-4">{member.role}</p>

            <p className="text-gray-400 text-sm px-4">
              Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
            </p>

          </div>
        ))}
      </div>

      <div className="absolute inset-y-0 left-[25%] w-px bg-white/10"></div>
      <div className="absolute inset-y-0 left-[50%] w-px bg-white/10"></div>
      <div className="absolute inset-y-0 left-[75%] w-px bg-white/10"></div>

    </section>
  );
};

export default Advisors;