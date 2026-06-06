import React from "react";
import { FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#244D3F] text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="flex flex-col items-center text-center">

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            KeenKeeper
          </h1>

          <p className="mt-6 max-w-3xl text-sm md:text-base text-white/80 leading-relaxed">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-5">Social Links</h2>

            <div className="flex items-center justify-center gap-4">
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white text-[#244D3F] flex items-center justify-center hover:scale-105 transition"
              >
                <FaInstagram size={20} />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white text-[#244D3F] flex items-center justify-center hover:scale-105 transition"
              >
                <FaFacebookF size={18} />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white text-[#244D3F] flex items-center justify-center hover:scale-105 transition"
              >
                <FaXTwitter size={18} />
              </a>
            </div>
          </div>

         
        </div>

        <div className="border-t border-white/10 mt-10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
          <p>© 2026 KeenKeeper. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;