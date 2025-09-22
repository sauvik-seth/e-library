import React from "react";
import {
  BookOpen,
  Lightbulb,
  Users,
  Clock,
  Globe,
  Shield,
  Download,
  Sparkles,
} from "lucide-react";

const features = [
  {
    title: "Free Book Downloads",
    description: "Access all academic books without any cost.",
    icon: <Download size={28} style={{ color: "#2563EB" }} />,
  },
  {
    title: "Easy Access",
    description: "Simple and intuitive interface for quick downloads.",
    icon: <Lightbulb size={28} style={{ color: "#FACC15" }} />,
  },
  {
    title: "Student-Friendly Resources",
    description: "Curated content specifically for B.Sc. students.",
    icon: <Users size={28} style={{ color: "#EC4899" }} />,
  },
  {
    title: "24/7 Availability",
    description: "Access your study materials anytime, anywhere.",
    icon: <Clock size={28} style={{ color: "#22C55E" }} />,
  },
  {
    title: "Global Reach",
    description: "Download resources from anywhere in the world.",
    icon: <Globe size={28} style={{ color: "#0EA5E9" }} />,
  },
  {
    title: "Secure & Reliable",
    description: "Safe downloads with zero hidden charges.",
    icon: <Shield size={28} style={{ color: "#9333EA" }} />,
  },
  {
    title: "Wide Subject Coverage",
    description: "Physics, Chemistry, Math, CS, Biology.",
    icon: <BookOpen size={28} style={{ color: "#F97316" }} />,
  },
  {
    title: "Regular Updates",
    description: "Stay updated with the latest study materials.",
    icon: <Sparkles size={28} style={{ color: "#EF4444" }} />,
  },
];

export default function FeaturesTicker() {
  return (
    <section className="py-20 overflow-hidden relative">
      {/* Beautiful Blue Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-50">
        {/* Additional gradient layers for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 via-transparent to-indigo-400/10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-200/20 to-transparent"></div>
        
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-300/30 to-indigo-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-indigo-300/20 to-purple-400/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-cyan-300/20 to-blue-400/25 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          What We <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Provide</span>
        </h2>

        <div className="relative">
          {/* Updated gradient masks to match new background */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-blue-50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-blue-50 to-transparent z-10"></div>

          {/* scrolling row */}
          <div
            className="flex gap-6 animate-scroll"
            style={{
              animation: "scroll 30s linear infinite",
              minWidth: "calc(200% + 150px)",
            }}
          >
            {[...features, ...features].map((feature, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl hover:bg-white/90
                           transition-all duration-300 flex items-center min-w-[300px] flex-shrink-0 border border-white/50"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-100/80 to-indigo-200/80 mr-4 flex-shrink-0 backdrop-blur-sm">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1 text-gray-800">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* keyframes for scrolling */}
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        /* Enhanced pulse animation for gradient orbs */
        @keyframes pulse {
          0%, 100% {
            opacity: 0.4;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05);
          }
        }
      `}</style>
    </section>
  );
}
