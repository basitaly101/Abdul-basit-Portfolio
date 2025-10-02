import { useState } from "react";
import { motion } from "motion/react";

function Navigation() {
  return (
    <ul className="nav-ul flex flex-col gap-5 sm:flex-row sm:gap-10 font-medium">
      {["Home", "About", "Work", "Contact"].map((item, index) => (
        <li key={index} className="relative group">
          <a
            href={`#${item.toLowerCase()}`}
            className="px-4 py-2 text-neutral-300 transition duration-300 
                       hover:text-white hover:drop-shadow-[0_0_12px_rgba(0,212,255,0.9)]"
          >
            {item}
          </a>
          {/* Underline animation (fixed) */}
          <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-gradient-to-r from-cyan-400 to-purple-500 
                           transition-all duration-300 group-hover:w-full"></span>
        </li>
      ))}
    </ul>
  );
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inset-x-0 z-20 w-full"> {/* fixed removed */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <a
            href="/"
            className="text-2xl font-extrabold tracking-wide 
                       bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 
                       bg-clip-text text-transparent 
                       drop-shadow-[0_0_12px_rgba(0,212,255,0.7)]
                       px-4 py-2 rounded-xl
                       bg-black/30"
          >
            Abdul Basit
          </a>

          {/* Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-300 hover:text-white focus:outline-none sm:hidden"
          >
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden sm:flex">
            <div className="backdrop-blur-xl bg-white/5 border border-cyan-400/30 px-8 py-3 rounded-2xl shadow-lg shadow-cyan-500/10">
              <Navigation />
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <motion.div
          className="block overflow-hidden sm:hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mx-4 mt-2 rounded-2xl backdrop-blur-xl bg-white/5 border border-cyan-400/30 shadow-lg shadow-cyan-500/20">
            <nav className="py-6">
              <Navigation />
            </nav>
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default Navbar;
