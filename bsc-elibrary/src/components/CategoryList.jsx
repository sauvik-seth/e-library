import React from "react";
import { Link } from "react-router-dom";

const categories = [
  {
    name: "Computer Science",
    image: "/images/cse.png",
    description: "Explore the world of algorithms, programming, and data.",
  },
  {
    name: "Chemistry",
    image: "/images/chem.png",
    description: "Dive into the study of matter and its properties.",
  },
  {
    name: "Physics",
    image: "/images/phy.png",
    description: "Unravel the mysteries of the universe and its forces.",
  },
  {
    name: "Mathematics",
    image: "/images/math.png",
    description: "Discover the beauty of numbers, logic, and patterns.",
  },
  {
    name: "Biology",
    image: "/images/bio1.png",
    description: "Learn about life, organisms, and ecosystems.",
  },
  // Added one more for even grid display
];

const CategoryList = () => {
  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Explore Our <span className="text-blue-600">Categories</span>
        </h2>
        {/*
          - Default: 2 columns for mobile (grid-cols-2)
          - sm (640px and up): 3 columns
          - lg (1024px and up): 4 columns
          - xl (1280px and up): 5 columns
        */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              to={`/category/${category.name.replace(/ /g, "-")}`}
              key={category.name}
              className="group block overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="aspect-w-16 aspect-h-9 w-full overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              {/*
                - Default (mobile): p-3 padding, smaller text
                - md (768px and up): p-4 padding, larger text
              */}
              <div className="p-3 md:p-4">
                <h3 className="text-base font-semibold text-gray-900 mb-1 md:text-lg">
                  {category.name}
                </h3>
                <p className="text-xs text-gray-500 md:text-sm">
                  {category.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
