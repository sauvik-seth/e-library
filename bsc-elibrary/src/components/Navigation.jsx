import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [tappedLink, setTappedLink] = useState(null); // for mobile feedback
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/all-books", label: "Books" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
    { label: "Our Team", path: "/our-team" },
  ];

  const isActive = (path) => location.pathname === path;

  const handleLinkTap = (path) => {
    // Show gradient briefly on tap for mobile
    setTappedLink(path);
    // Clear after short delay to feel responsive
    setTimeout(() => setTappedLink(null), 500);
  };

  return (
    <>
      {/* Header with Single Glass Background - Reduced Padding */}
      <header className="fixed top-1 md:top-3 left-2 md:left-4 right-2 md:right-4 z-50">
        <div className="flex items-center justify-between px-2 md:px-3 py-1.5 md:py-2 rounded-full border border-white/20 bg-white/30 shadow-lg backdrop-blur-lg transition-all duration-300 hover:bg-white/40">
          {/* Logo */}
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
            className="flex items-center justify-center w-8 md:w-10 h-8 md:h-10 transition-all duration-300 hover:scale-110 rounded-full flex-shrink-0 ml-3"
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
          <div className="relative z-50 flex flex-col items-center justify-center space-y-7 md:space-y-8 p-4 md:p-8 w-full h-full">
            <nav className="flex flex-col items-center space-y-7 md:space-y-8">
              {navLinks.map((link) => {
                const active = isActive(link.path);
                const tapped = tappedLink === link.path;

                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    tabIndex={0}
                    onMouseDown={() => handleLinkTap(link.path)} // desktop press
                    onTouchStart={() => handleLinkTap(link.path)} // mobile tap
                    onClick={() => setIsMenuOpen(false)}
                    className={`nav-link-gradient relative text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold transition-all duration-300 uppercase tracking-wide cursor-pointer ${
                      active ? "is-active" : tapped ? "is-tapped" : ""
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      )}

      {/* Enhanced CSS Styles with Mobile Tap/Focus Color Change */}
      <style jsx>{`
        .nav-link-gradient {
          position: relative;
          transition: all 300ms ease;
          width: fit-content;
          color: white;
          animation: slideIn 0.4s ease-out;
          -webkit-tap-highlight-color: transparent;
        }

        /* Active route - always gradient */
        .nav-link-gradient.is-active {
          background: linear-gradient(to right, #2563eb, #4f46e5, #7c3aed);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          filter: drop-shadow(0 0 10px rgba(59, 130, 246, 0.3));
        }

        /* Tapped state - programmatic feedback for mobile */
        .nav-link-gradient.is-tapped {
          background: linear-gradient(to right, #2563eb, #4f46e5, #7c3aed);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          filter: drop-shadow(0 0 15px rgba(124, 58, 237, 0.4));
          transform: skew(5deg);
        }

        /* Interactive states: hover (desktop), focus-visible (keyboard/tap), active (press) */
        .nav-link-gradient:hover:not(.is-active),
        .nav-link-gradient:focus-visible:not(.is-active),
        .nav-link-gradient:active:not(.is-active) {
          background: linear-gradient(to right, #2563eb, #4f46e5, #7c3aed);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          filter: drop-shadow(0 0 15px rgba(124, 58, 237, 0.4));
          transform: skew(5deg);
          outline: none;
        }

        /* Underline animation */
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

        /* Show underline on all interactive states and active route */
        .nav-link-gradient:hover::after,
        .nav-link-gradient:focus-visible::after,
        .nav-link-gradient:active::after,
        .nav-link-gradient.is-active::after,
        .nav-link-gradient.is-tapped::after {
          width: 100%;
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.8),
            0 0 40px rgba(124, 58, 237, 0.4);
        }

        /* Staggered animation */
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

        /* Responsive underline thickness */
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
