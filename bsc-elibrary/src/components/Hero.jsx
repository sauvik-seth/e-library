import React from "react";
import { BookDown, Atom, FlaskConical, Dna, Laptop, Sigma } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gray-900 text-white">
      {/* Mesh Gradient Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,150,0.15),rgba(255,255,255,0))]"></div>
        <div className="absolute bottom-[-10%] right-[-20%] top-0 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(0,150,255,0.15),rgba(255,255,255,0))]"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 py-20 md:py-28">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          {/* Left Section: Content */}
          <div className="max-w-xl text-center md:text-left">
            <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
              Your Gateway to{" "}
              <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                B.Sc. Knowledge
              </span>
            </h1>
            <p className="mt-6 text-lg text-gray-300 md:text-xl">
              Instantly access a vast collection of books for Physics,
              Chemistry, Math, Computer Science, and Biology—all for free.
            </p>

            {/* CTA Button */}
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row md:justify-start">
              <button className="group inline-flex items-center justify-center gap-3 rounded-full bg-blue-600 px-8 py-3 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:bg-blue-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900">
                Start Exploring
                <BookDown className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>

            {/* Social Proof / Subject Icons */}
            <div className="mt-12">
              <p className="text-sm font-medium text-gray-400">
                Covering all major subjects:
              </p>
              <div className="mt-4 flex items-center justify-center gap-4 md:justify-start">
                <div className="flex -space-x-2">
                  <span className="grid h-8 w-8 place-items-center rounded-full border-2 border-gray-700 bg-gray-800 text-blue-400">
                    <Laptop size={16} />
                  </span>
                  <span className="grid h-8 w-8 place-items-center rounded-full border-2 border-gray-700 bg-gray-800 text-emerald-400">
                    <FlaskConical size={16} />
                  </span>
                  <span className="grid h-8 w-8 place-items-center rounded-full border-2 border-gray-700 bg-gray-800 text-indigo-400">
                    <Atom size={16} />
                  </span>
                  <span className="grid h-8 w-8 place-items-center rounded-full border-2 border-gray-700 bg-gray-800 text-rose-400">
                    <Sigma size={16} />
                  </span>
                  <span className="grid h-8 w-8 place-items-center rounded-full border-2 border-gray-700 bg-gray-800 text-amber-400">
                    <Dna size={16} />
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section: Image */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-md">
              <img
                src="/images/Gemini_Generated_Image_vs1bscvs1bscvs1b.png"
                alt="E-Library books and resources"
                className="relative z-10 w-full rounded-2xl shadow-2xl"
              />
              {/* Decorative glow behind the image */}
              <div className="absolute inset-0 z-0 -m-4 rounded-2xl bg-gradient-to-tr from-blue-500/30 to-emerald-500/30 opacity-50 blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
