import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import spider from "../assets/spiderbec.png";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Games", path: "/games" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/40 border-b border-white/10 text-white font-sans">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 sm:px-10 py-4 md:py-5">
        <Link to="/" className="flex items-center space-x-3">
          <img
            src={spider}
            alt="Beck's Logo"
            className="h-12 sm:h-14 w-auto object-contain hover:scale-105 transition-transform duration-200"
          />
          <span className="font-display text-xl tracking-tight">BECK</span>
        </Link>

        <ul className="hidden md:flex items-center space-x-10 text-lg font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className={`relative group ${
                  location.pathname === link.path
                    ? "text-purple-400"
                    : "text-gray-300 hover:text-purple-300"
                } transition-colors`}
              >
                {link.name}
                <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-purple-400 transition-all group-hover:w-full"></span>
              </Link>
            </li>
          ))}
          <li>
          <Link
              to="/contact"
              className="
                text-white 
                px-5 py-2 rounded-lg font-semibold
                bg-purple-600
                transition-colors
                hover:bg-purple-700"
          >
            Contact
          </Link>
          </li>
        </ul>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none text-gray-200 hover:text-purple-400 transition"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center space-y-6 pb-8 pt-4 text-lg font-medium bg-black/80 border-t border-white/10 backdrop-blur-md">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`${
                  location.pathname === link.path
                    ? "text-purple-400"
                    : "text-gray-300 hover:text-purple-300"
                } transition-colors`}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li>
          <Link
              to="/contact"
              className="
                text-white 
                px-5 py-2 rounded-lg font-semibold
                bg-purple-600
                transition-colors
                hover:bg-purple-700"
          >
            Contact
          </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
