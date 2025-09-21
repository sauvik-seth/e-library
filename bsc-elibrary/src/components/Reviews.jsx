// Reviews.jsx
import React from "react";

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    photo: "https://via.placeholder.com/100",
    review:
      "This e-library has been a game-changer for my studies. All the books I need are easily accessible.",
  },
  {
    id: 2,
    name: "Michael Chen",
    photo: "https://via.placeholder.com/100",
    review:
      "The quality of resources available here is exceptional. It has helped me excel in my coursework.",
  },
  {
    id: 3,
    name: "Emily Brown",
    photo: "https://via.placeholder.com/100",
    review:
      "Having 24/7 access to these books has made my learning journey so much easier.",
  },
  {
    id: 4,
    name: "David Lee",
    photo: "https://via.placeholder.com/100",
    review:
      "The search functionality is excellent, I can always find what I need quickly.",
  },
  {
    id: 5,
    name: "Sophia Garcia",
    photo: "https://via.placeholder.com/100",
    review:
      "A fantastic resource for students, highly recommend it to everyone.",
  },
  {
    id: 6,
    name: "James Rodriguez",
    photo: "https://via.placeholder.com/100",
    review:
      "The interface is clean and user-friendly, making it a pleasure to browse.",
  },
  {
    id: 7,
    name: "Olivia Martinez",
    photo: "https://via.placeholder.com/100",
    review:
      "I love the variety of subjects covered. It's my go-to for academic resources.",
  },
];

export default function Reviews() {
  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          <span className="text-black">Students</span>{" "}
          <span className="text-blue-600">Reviews</span>
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
                <div className="flex items-center mb-4">
                  <img
                    src={review.photo}
                    alt={review.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <h3 className="font-semibold">{review.name}</h3>
                </div>
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
