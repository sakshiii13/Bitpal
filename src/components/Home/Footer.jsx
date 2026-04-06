import React from "react";
import { FaTwitter, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { FaFacebookF, FaVimeoV } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-[#090c10] text-white overflow-hidden">
      
      <div className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-12 lg:px-16 pt-24 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 lg:gap-16">
          <div>
            <img
  src="/logo.png"
  alt="BitPal Logo"
  className="h-[34px] w-auto mb-10"
/>

            <p className="text-white/65 text-[17px] leading-[2] max-w-[260px] mb-14">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo. Aenean massa. Cum sociis natoque penatibus et magnis dis
            </p>

            <div className="flex items-center gap-5 text-white/60">
              <FaFacebookF className="w-4 h-4 hover:text-lime-400 transition-colors duration-300 cursor-pointer" />
              <FaTwitter className="w-4 h-4 hover:text-lime-400 transition-colors duration-300 cursor-pointer" />
              <FaLinkedin className="w-4 h-4 hover:text-lime-400 transition-colors duration-300 cursor-pointer" />
              <FaVimeoV className="w-4 h-4 hover:text-lime-400 transition-colors duration-300 cursor-pointer" />
              <FaInstagram className="w-4 h-4 hover:text-lime-400 transition-colors duration-300 cursor-pointer" />
              <FaGithub className="w-4 h-4 hover:text-lime-400 transition-colors duration-300 cursor-pointer" />
            </div>
          </div>

          <div>
            <h3 className="text-[22px] font-semibold mb-8">Additional Links</h3>

            <ul className="space-y-5 text-white/70 text-[17px]">
              <li className="hover:text-lime-400 transition-colors duration-300 cursor-pointer">
                Tokens Sales
              </li>
              <li className="hover:text-lime-400 transition-colors duration-300 cursor-pointer">
                Roadmap
              </li>
              <li className="hover:text-lime-400 transition-colors duration-300 cursor-pointer">
                What is Edge Token?
              </li>
              <li className="hover:text-lime-400 transition-colors duration-300 cursor-pointer">
                Why / How?
              </li>
              <li className="hover:text-lime-400 transition-colors duration-300 cursor-pointer">
                Edge Wallet
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[22px] font-semibold mb-8">Contact us</h3>

            <p className="text-white/65 text-[17px] leading-[2] max-w-[280px] mb-14">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor aenean
            </p>

            <p className="text-white/65 text-[17px] leading-[2] max-w-[260px]">
              Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu.
            </p>
          </div>

          <div>
            <h3 className="text-[22px] font-semibold mb-8">Subscribe</h3>

            <p className="text-white/65 text-[17px] leading-[2] max-w-[270px] mb-10">
              Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu.
            </p>

            <div className="relative max-w-[320px]">
              <input
                type="email"
                placeholder="Your e-mail..."
                className="w-full h-[54px] bg-transparent border border-white/10 px-5 pr-14 text-white placeholder:text-white/35 outline-none"
              />
              <button className="absolute right-0 top-0 h-[54px] w-[54px] flex items-center justify-center text-white hover:text-lime-400 transition-colors duration-300">
                →
              </button>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-6 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-white/55 text-[16px]">
            © 2018 <span className="text-lime-400">Qode Interactive</span>, All
            Rights Reserved
          </p>

          <div className="flex items-center gap-2 text-white/55 text-[16px]">
            <span className="hover:text-lime-400 transition-colors duration-300 cursor-pointer">
              Privacy Policy
            </span>
            <span>|</span>
            <span className="hover:text-lime-400 transition-colors duration-300 cursor-pointer">
              Terms & Conditions
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;