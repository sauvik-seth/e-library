import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/all-books", label: "Books" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
    {
      label: "Our Team",
      path: "/our-team",
    },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Header with Single Glass Background - Fixed Text Visibility */}
      <header className="fixed top-2 md:top-4 left-2 md:left-4 right-2 md:right-4 z-50">
        <div className="flex items-center justify-between px-4 md:px-6 py-2 md:py-3 rounded-full border border-white/20 bg-white/30 shadow-lg backdrop-blur-lg transition-all duration-300 hover:bg-white/40">
          {/* Logo - Fixed with better spacing */}
          <Link
            to="/"
            className="flex items-center gap-2 transition-all duration-300 min-w-0 flex-shrink-0"
          >
            <img
              src="/images/logoback.png"
              alt="ReadSphere Logo"
              className="h-6 md:h-8 w-6 md:w-8 object-contain flex-shrink-0"
            />
            <span className="text-lg md:text-xl font-bold text-gray-900 whitespace-nowrap">
              ReadSphere
            </span>
          </Link>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center justify-center w-8 md:w-10 h-8 md:h-10 transition-all duration-300 hover:scale-110 rounded-full flex-shrink-0 ml-4"
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? (
              <X className="h-5 md:h-6 w-5 md:w-6 text-gray-800" />
            ) : (
              <Menu className="h-5 md:h-6 w-5 md:w-6 text-gray-800" />
            )}
          </button>
        </div>
      </header>

      {/* Full Screen Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 flex items-center justify-center">
          {/* Background Overlay */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-md"
            onClick={() => setIsMenuOpen(false)}
          ></div>

          {/* Menu Content */}
          <div className="relative z-50 flex flex-col items-center justify-center space-y-6 md:space-y-8 p-4 md:p-8 w-full h-full">
            {/* Navigation Links with Gradient Effect */}
            <nav className="flex flex-col items-center space-y-6 md:space-y-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`nav-link-gradient relative text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold transition-all duration-300 uppercase tracking-wide cursor-pointer ${
                    isActive(link.path) ? "is-active" : ""
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* Enhanced CSS Styles with Proper Hover */}
      <style jsx>{`
        .nav-link-gradient {
          position: relative;
          transition: all 300ms ease;
          width: fit-content;
          color: white;
        }

        /* Active state - always has gradient */
        .nav-link-gradient.is-active {
          background: linear-gradient(to right, #2563eb, #4f46e5, #7c3aed);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          filter: drop-shadow(0 0 10px rgba(59, 130, 246, 0.3));
        }

        /* Hover state - gradient on hover */
        .nav-link-gradient:hover:not(.is-active) {
          background: linear-gradient(to right, #2563eb, #4f46e5, #7c3aed);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          filter: drop-shadow(0 0 15px rgba(124, 58, 237, 0.4));
        }

        /* Simple skew effect on hover */
        .nav-link-gradient:hover {
          transform: skew(5deg);
        }

        /* Enhanced underline animation with gradient */
        .nav-link-gradient::after {
          content: "";
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 0;
          height: 3px;
          background: linear-gradient(to right, #2563eb, #4f46e5, #7c3aed);
          transition: all 300ms ease;
          border-radius: 2px;
        }

        /* Hover underline effect */
        .nav-link-gradient:hover::after {
          width: 100%;
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.8), 0 0 40px rgba(124, 58, 237, 0.4);
        }

        /* Active state underline always visible */
        .nav-link-gradient.is-active::after {
          width: 100%;
          background: linear-gradient(to right, #2563eb, #4f46e5, #7c3aed);
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.8), 0 0 40px rgba(124, 58, 237, 0.4);
        }

        /* Animation for menu open/close */
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .nav-link-gradient {
          animation: slideIn 0.4s ease-out;
        }

        /* Staggered animation for menu items */
        .nav-link-gradient:nth-child(1) {
          animation-delay: 0.1s;
        }
        .nav-link-gradient:nth-child(2) {
          animation-delay: 0.2s;
        }
        .nav-link-gradient:nth-child(3) {
          animation-delay: 0.3s;
        }
        .nav-link-gradient:nth-child(4) {
          animation-delay: 0.4s;
        }
        .nav-link-gradient:nth-child(5) {
          animation-delay: 0.5s;
        }

        /* Mobile-specific responsive adjustments */
        @media (max-width: 768px) {
          .nav-link-gradient::after {
            bottom: -6px;
            height: 2px;
          }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .nav-link-gradient::after {
            bottom: -8px;
            height: 3px;
          }
        }

        @media (min-width: 1025px) {
          .nav-link-gradient::after {
            bottom: -10px;
            height: 4px;
          }
        }
      `}</style>
    </>
  );
};

export default Navigation;
