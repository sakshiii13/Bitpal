import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [active, setActive] = useState("HOME");
  const [open, setOpen] = useState(null);

  const navigate = useNavigate(); // 👈 add this

  const menu = [
    { name: "HOME", items: ["Home 1", "Home 2", "Home 3"] },
    { name: "PAGES", items: ["About", "Team", "FAQ", "Pricing"] },
    { name: "CURRENCIES", items: ["Bitcoin", "Ethereum", "Litecoin"] },
    { name: "PORTFOLIO", items: ["Grid", "Masonry", "Details"] },
    { name: "BLOG", items: ["Standard", "List", "Single Post"] },
    { name: "SHOP", items: ["Products", "Cart", "Checkout"] },
    { name: "ELEMENTS", items: ["Buttons", "Cards", "Typography"] },
  ];

  return (
    <>
      <nav className="w-full bg-black text-white fixed top-0 left-0 z-20">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
          
          {/* Logo */}
          <div className="w-32">
            <img src="/logo.png" alt="logo" />
          </div>

          {/* Menu */}
          <ul className="hidden md:flex items-center gap-10 text-lg tracking-wide">
            {menu.map((menuItem) => (
              <li
                key={menuItem.name}
                className="relative group"
                onMouseEnter={() => setOpen(menuItem.name)}
                onMouseLeave={() => setOpen(null)}
              >
                <span
                  onClick={() => setActive(menuItem.name)}
                  className={`cursor-pointer ${
                    active === menuItem.name
                      ? "text-lime-400"
                      : "hover:text-lime-400"
                  }`}
                >
                  {menuItem.name}
                </span>

                {/* underline */}
                <span
                  className={`absolute left-0 -bottom-2 h-[2px] bg-lime-400 transition-all duration-300 ${
                    active === menuItem.name
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                ></span>

                {/* dropdown */}
                <ul
                  className={`absolute top-10 left-0 bg-black border border-gray-800 w-56 py-3 space-y-2 transition-all duration-300 ${
                    open === menuItem.name
                      ? "opacity-100 visible"
                      : "opacity-0 invisible"
                  }`}
                >
                  {menuItem.items.map((sub, i) => (
                    <li
                      key={i}
                      className="px-5 flex items-center gap-2 hover:text-lime-400 cursor-pointer"
                    >
                      <span className="w-2 h-2 bg-lime-400 rounded-full"></span>
                      {sub}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>

          {/* LOGIN BUTTON */}
          <button
            onClick={() => navigate("/login")} // 👈 redirect here
            className="border border-lime-400 px-6 py-2 rounded-full hover:bg-lime-400 hover:text-black transition"
          >
            LOGIN
          </button>
        </div>
      </nav>
    </>
  );
}