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
    // Add padding to the parent to see the floating effect
    <header className="relative z-50 p-4">
      <div className="container mx-auto">
        {/* --- Desktop Pill Navigation (Glassmorphism Effect) --- */}
        <div
          className="hidden md:flex items-center justify-between rounded-full border border-white/20 
                     bg-white/30 p-2 shadow-lg backdrop-blur-lg"
        >
          {/* Logo */}
          <Link
            to="/"
            className="pl-4 flex items-center gap-2 text-2xl font-bold text-gray-900"
          >
            <img
              src="/images/logoback.png"
              alt="B.Sc. e-Library Logo"
              className="h-8 w-8 object-contain"
            />
            ReadSphere
          </Link>

          {/* Nav Links */}
          <div className="flex items-center justify-center flex-1 space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 relative
                  ${
                    isActive(link.path)
                      ? "bg-white/80 text-blue-800 shadow-sm"
                      : "text-gray-800 hover:bg-white/50"
                  }
                group`}
              >
                {link.label}
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </Link>
            ))}
          </div>
        </div>

        {/* --- Mobile Navigation --- */}
        <div className="md:hidden">
          {/* Mobile Header Bar (Glassmorphism Effect) */}
          <div
            className="flex items-center justify-between rounded-xl border border-white/20 
                       bg-white/30 p-3 shadow-lg backdrop-blur-lg"
          >
            <Link
              to="/"
              className="flex items-center gap-2 text-xl font-bold text-gray-900"
            >
              <img
                src="/images/logo.png"
                alt="B.Sc. e-Library Logo"
                className="h-7 w-7 object-contain"
              />
              B.Sc. e-Library
            </Link>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-800" />
              ) : (
                <Menu className="h-6 w-6 text-gray-800" />
              )}
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          {isMenuOpen && (
            <div
              className="mt-2 rounded-xl border border-white/20 bg-white/50 
                         p-4 shadow-lg backdrop-blur-lg"
            >
              <div className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`rounded-lg px-4 py-2 text-base font-medium transition-colors duration-300 relative
                      ${
                        isActive(link.path)
                          ? "bg-white/80 text-blue-800 shadow-sm"
                          : "text-gray-800 hover:bg-white/50"
                      }
                    group`}
                  >
                    {link.label}
                    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navigation;
