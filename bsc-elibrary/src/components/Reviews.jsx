// Reviews.jsx
import React from "react";

const reviews = [
  {
    id: 1,
    name: "Aarav Sharma",
    rating: 5,
    review:
      "This e-library has been a game-changer for my studies. All the books I need are easily accessible.",
  },
  {
    id: 2,
    name: "Ishita Mukherjee",
    rating: 4,
    review:
      "The quality of resources available here is exceptional. It has helped me excel in my coursework.",
  },
  {
    id: 3,
    name: "Vikram Iyer",
    rating: 5,
    review:
      "Having 24/7 access to these books has made my learning journey so much easier.",
  },
  {
    id: 4,
    name: "Neha Verma",
    rating: 4,
    review:
      "The search functionality is excellent, I can always find what I need quickly.",
  },
  {
    id: 5,
    name: "Rohan Banerjee",
    rating: 5,
    review:
      "A fantastic resource for students, highly recommend it to everyone.",
  },
  {
    id: 6,
    name: "Sanya Gupta",
    rating: 4,
    review:
      "The interface is clean and user-friendly, making it a pleasure to browse.",
  },
];

// Utility: render stars by rating (out of 5)
const Stars = ({ rating = 0 }) => {
  const total = 5;
  return (
    <div
      className="flex items-center gap-1"
      aria-label={`Rating: ${rating} out of 5`}
    >
      {Array.from({ length: total }).map((_, idx) => {
        const filled = idx < rating;
        return (
          <svg
            key={idx}
            viewBox="0 0 20 20"
            className={`w-4 h-4 ${
              filled ? "text-yellow-400" : "text-gray-300"
            }`}
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.01 3.108a1 1 0 00.95.69h3.263c.969 0 1.371 1.24.588 1.81l-2.642 1.92a1 1 0 00-.364 1.118l1.01 3.108c.3.921-.755 1.688-1.54 1.118l-2.642-1.92a1 1 0 00-1.176 0l-2.642 1.92c-.785.57-1.84-.197-1.54-1.118l1.01-3.108a1 1 0 00-.364-1.118l-2.642-1.92c-.783-.57-.38-1.81.588-1.81h3.263a1 1 0 00.95-.69l1.01-3.108z" />
          </svg>
        );
      })}
    </div>
  );
};

export default function Reviews() {
  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
          <h2
            className="text-4xl font-bold text-center mb-12 text-gray-800"
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: "3rem",
              color: "#1f2937",
              margin: "0 0 3rem 0",
            }}
          >
            Student{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Reviews
            </span>
          </h2>

        <div className="relative">
          {/* edge fades to match FeaturesTicker look */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10" />

          {/* continuous loop with responsive animation speed */}
          <div
            className="flex gap-6 animate-reviews-scroll"
            style={{
              minWidth: "calc(200% + 150px)",
            }}
          >
            {[...reviews, ...reviews].map((review, i) => (
              <div
                key={`${review.id}-${i}`}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 flex-shrink-0 w-80"
              >
                {/* Name + Rating */}
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-gray-900">{review.name}</h3>
                  <Stars rating={review.rating} />
                </div>

                {/* Review text */}
                <p className="text-gray-600 italic">"{review.review}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Responsive keyframes with faster mobile animation */}
      <style>{`
        @keyframes reviews-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        /* Default animation speed for desktop */
        .animate-reviews-scroll {
          animation: reviews-scroll 40s linear infinite;
        }
        
        /* Faster animation for tablets */
        @media (max-width: 1024px) {
          .animate-reviews-scroll {
            animation: reviews-scroll 25s linear infinite;
          }
        }
        
        /* Even faster animation for mobile devices */
        @media (max-width: 768px) {
          .animate-reviews-scroll {
            animation: reviews-scroll 15s linear infinite;
          }
        }
        
        /* Fastest animation for small mobile devices */
        @media (max-width: 480px) {
          .animate-reviews-scroll {
            animation: reviews-scroll 12s linear infinite;
          }
        }
        
        /* Respects reduced motion preferences */
        @media (prefers-reduced-motion: reduce) {
          .animate-reviews-scroll { 
            animation: none !important; 
          }
        }
      `}</style>
    </section>
  );
}
