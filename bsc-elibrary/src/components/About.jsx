import React from "react";
import { BookOpen, Globe, Zap } from "lucide-react";

// Helper component for the mission items
const MissionItem = ({ icon, title, description }) => (
  <div className="flex items-start gap-4">
    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-blue-100 text-blue-600">
      {icon}
    </div>
    <div>
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mt-1 text-gray-600">{description}</p>
    </div>
  </div>
);

// Main About Us Component
const AboutUs = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: Image Section */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative w-full max-w-sm rounded-2xl bg-white p-4 shadow-2xl">
              <div className="aspect-w-4 aspect-h-4 overflow-hidden rounded-xl">
                <img
                  src="/images/Aboutus.webp" // Replace with your image path
                  alt="A person reading in a modern library setting"
                  className="h-full w-full object-cover"
                />
              </div>
              {/* Decorative accent element */}
              <div className="absolute -bottom-4 -right-4 -z-10 h-32 w-32 rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-200"></div>
            </div>
          </div>

          {/* Right Column: Content Section */}
          <div>
            <span className="text-lg font-semibold uppercase tracking-wider text-blue-800">
              Our Story
            </span>
            <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-gray-900">
              Knowledge for a World on the Move.
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Welcome to <strong>B.Sc. e-Library</strong>, where we believe that
              knowledge should be limitless and accessible to everyone. We
              started with a simple idea: to create a digital space where the
              joy of reading and the pursuit of knowledge are just a click away.
            </p>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              In a world that's always on the move, we wanted to build a library
              that moves with you. Whether you’re on your daily commute,
              relaxing at a coffee shop, or in the comfort of your home, our
              vast collection is always within reach.
            </p>

            {/* Mission Section */}
            <div className="mt-10 space-y-8 border-t border-gray-200 pt-8">
              <MissionItem
                icon={<BookOpen size={24} />}
                title="Curated Collection"
                description="A diverse range of e-books, audiobooks, and digital resources."
              />
              <MissionItem
                icon={<Globe size={24} />}
                title="Accessible Anywhere"
                description="Your library, available on any device, wherever you go."
              />
              <MissionItem
                icon={<Zap size={24} />}
                title="Instant Access"
                description="No waiting, no queues. Just a click away from your next great read."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
