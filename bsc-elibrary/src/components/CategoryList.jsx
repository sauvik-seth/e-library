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
];

const CategoryList = () => {
  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Explore Our <span className="text-blue-600">Categories</span>
        </h2>
        {/* Grid columns are increased to make each card narrower, and the gap is reduced */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {categories.map((category) => (
            <Link
              to={`/category/${category.name.replace(/ /g, "-")}`}
              key={category.name}
              className="group block overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Image container with a fixed aspect ratio */}
              <div className="aspect-w-16 aspect-h-9 w-full overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              {/* Padding and text sizes are reduced for a more compact card */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {category.name}
                </h3>
                <p className="text-gray-500 text-sm">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
