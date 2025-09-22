import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, Phone, Instagram, Youtube, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* Blue gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-50">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-300/20 via-transparent to-indigo-300/20"></div>
        
        {/* Subtle blue abstract shapes */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-blue-400/30 to-indigo-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-cyan-400/25 to-blue-500/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-32 bg-gradient-to-r from-blue-300/20 to-indigo-400/20 rounded-full blur-2xl rotate-45"></div>
      </div>

      {/* Large Background Text "READ" */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <div className="text-background-letters select-none">
          READ
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Side - Large Navigation */}
          <div className="space-y-8">
            {/* Navigation Links with Large Typography */}
            <div className="space-y-4">
              <Link 
                to="/" 
                className="group flex items-center text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 hover:text-blue-600 transition-all duration-300"
              >
                Home
                <ArrowRight className="ml-4 w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 transform group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
              
              <Link 
                to="/all-books" 
                className="group flex items-center text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 hover:text-blue-600 transition-all duration-300"
              >
                Books
                <ArrowRight className="ml-4 w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 transform group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
              
              <Link 
                to="/about" 
                className="group flex items-center text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 hover:text-blue-600 transition-all duration-300"
              >
                About
                <ArrowRight className="ml-4 w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 transform group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
              
              <Link 
                to="/contact" 
                className="group flex items-center text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 hover:text-blue-600 transition-all duration-300"
              >
                Contact
                <ArrowRight className="ml-4 w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 transform group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </div>
          </div>

          {/* Right Side - Contact and Social */}
          <div className="space-y-12 flex flex-col justify-center">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-2xl text-gray-800">
                <Mail className="w-8 h-8 text-blue-600" />
                <span className="font-mono">info@bscelibrary.com</span>
              </div>
              
              <div className="flex items-center gap-4 text-2xl text-gray-800">
                <Phone className="w-8 h-8 text-blue-600" />
                <span className="font-mono">(123) 456-7890</span>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Connect With Us</h3>
              <div className="flex items-center gap-6">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/50 hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg text-gray-700 hover:text-blue-600 font-semibold"
                >
                  FB
                </a>
                
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/50 hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg"
                >
                  <Twitter className="w-6 h-6 text-gray-700 hover:text-blue-600" />
                </a>
                
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/50 hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg"
                >
                  <Instagram className="w-6 h-6 text-gray-700 hover:text-blue-600" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-16 pt-8 border-t border-gray-300/50 text-center">
          <p className="text-gray-600 text-lg">
            &copy; {new Date().getFullYear()} B.Sc. e-Library. All rights reserved.
          </p>
        </div>
      </div>

      {/* Enhanced Styling with Background Text */}
      <style jsx>{`
        /* Large Background Text Styling */
        .text-background-letters {
          font-size: clamp(15rem, 25vw, 35rem);
          font-weight: 900;
          color: rgba(59, 130, 246, 0.08);
          font-family: 'Arial Black', Arial, sans-serif;
          letter-spacing: 0.2em;
          line-height: 0.8;
          transform: rotate(-15deg);
          z-index: 1;
        }

        /* Responsive text scaling for navigation */
        @media (max-width: 768px) {
          .text-8xl {
            font-size: 4rem;
            line-height: 1;
          }
          
          .text-7xl {
            font-size: 3.5rem;
            line-height: 1;
          }
          
          .text-6xl {
            font-size: 3rem;
            line-height: 1;
          }

          /* Adjust background text for mobile */
          .text-background-letters {
            font-size: clamp(8rem, 20vw, 15rem);
            transform: rotate(-10deg);
          }
        }
        
        @media (max-width: 640px) {
          .text-8xl {
            font-size: 2.5rem;
            line-height: 1.1;
          }
          
          .text-7xl {
            font-size: 2.25rem;
            line-height: 1.1;
          }
          
          .text-6xl {
            font-size: 2rem;
            line-height: 1.1;
          }

          /* Further adjust background text for small mobile */
          .text-background-letters {
            font-size: clamp(6rem, 18vw, 12rem);
            transform: rotate(-8deg);
          }
        }

        /* Ensure the background text doesn't interfere with interactions */
        .text-background-letters {
          user-select: none;
          pointer-events: none;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
