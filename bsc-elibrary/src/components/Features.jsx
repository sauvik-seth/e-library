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
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          What We <span className="text-blue-600">Provide</span>
        </h2>

        <div className="relative">
          {/* gradient mask for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>

          {/* scrolling row */}
          <div
            className="flex gap-6 animate-scroll"
            style={{
              animation: "scroll 40s linear infinite",
              minWidth: "calc(200% + 150px)",
            }}
          >
            {[...features, ...features].map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl 
                           transition-shadow duration-300 flex items-center min-w-[300px] flex-shrink-0"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-purple-100 mr-4 flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">
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
      `}</style>
    </section>
  );
}
