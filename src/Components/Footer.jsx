import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="mt-16 bg-[#1a1a1a] text-gray-300 py-6 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">

        <div className="hidden md:block">
            <h1 className="text-xl font-medium">Kumar Anand</h1>
            <p className="text-sm">Portfolio Website</p>
        </div>

        <nav className="flex space-x-6 text-sm md:text-base">
          <a href="#about" className="hover:text-[#BB86FC] transition-all">About</a>
          <a href="#skills" className="hover:text-[#BB86FC] transition-all">Skills</a>
          <a href="#project" className="hover:text-[#BB86FC] transition-all">Projects</a>
        </nav>

        <div className="flex space-x-6 text-2xl mt-4 md:mt-0">
          <a href="https://github.com/kranand06" target="_blank" rel="noopener noreferrer" className="hover:text-[#BB86FC] transition-all">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/kranand6/" target="_blank" rel="noopener noreferrer" className="hover:text-[#BB86FC] transition-all">
            <FaLinkedin />
          </a>
          <a href="https://instagram.com/kranand6/" target="_blank" rel="noopener noreferrer" className="hover:text-[#BB86FC] transition-all">
            <FaInstagram />
          </a>
        </div>
      </div>

      <div className="text-center text-xs mt-6  pt-4">
        © {new Date().getFullYear()} | Kumar Anand. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;