import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const categories = [
  "All",
  "Physics",
  "Chemistry",
  "Math",
  "Computer Science",
  "Biology",
];

const books = [
  {
    id: 1,
    title: "Begining C++ programing",
    author: "Richard Grimes",
    category: "Computer Science",
    coverImage: "/images/cs.png", // ✅ from public folder
    downloadLink:
      "https://notalentgeek.github.io/note/note/project/project-independent/pi-brp-beginning-c-programming/document/20170807-1504-cet-1-book-and-source-1.pdf", // you can also put PDFs here
  },
  {
    id: 2,
    title: "Let us C",
    author: "Yashvant Kanetkar",
    category: "Computer Science",
    coverImage: "/images/image1.png",
    downloadLink:
      "https://www.scribd.com/document/357888203/let-us-c-yashwant-kanetkar-pdf",
  },
  {
    id: 3,
    title: "Digital Electronics",
    author: "Anil k.Maini",
    category: "Computer Science",
    coverImage: "https://m.media-amazon.com/images/I/71X1jS-9iOL._UF1000,1000_QL80_.jpg",
    downloadLink:
      "https://drive.google.com/file/d/EXAMPLE_LINK/view?usp=sharinghttps://www.shahucollegelatur.org.in/Department/Studymaterial/sci/it/BCA/FY/digielec.pdf",
  },
   {
    id: 4,
    title:"Computer System Architecture",
    author: "M. Morris Mano",
    category: "Computer Science",
    coverImage: "https://m.media-amazon.com/images/I/81Ve58ZJLEL.jpg",
    downloadLink:
      "https://drive.google.com/file/d/EXAMPLE_LINK/view?usp=sharinghttps://www.shahucollegelatur.org.in/Department/Studymaterial/sci/it/BCA/FY/digielec.pdf",
  },
   {
    id: 5,
    title:"Introduction to programming using Java",
    author: "David J.Eck Hobert and William Smith Colleges",
    category: "Computer Science",
    coverImage: "https://m.media-amazon.com/images/I/61Xdjv+7R3L._UF1000,1000_QL80_.jpg",
    downloadLink:
      "https://www.iitk.ac.in/esc101/share/downloads/javanotes5.pdf",
  },
  // Add more books here
];

const Books = () => {
  const { categoryName } = useParams();
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    if (categoryName) {
      const decodedCategory = decodeURIComponent(categoryName).replace(/-/g, ' ');
      setSelectedCategory(decodedCategory);
    } else {
      setSelectedCategory("All");
    }
  }, [categoryName]);

  const filteredBooks =
    selectedCategory === "All"
      ? books
      : books.filter((book) => book.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <div className="py-16 bg-white min-h-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          <span className="text-black">{selectedCategory !== "All" ? `${selectedCategory} ` : 'All'}</span>{" "}
          <span className="text-blue-600">Books</span>
        </h2>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full ${
                selectedCategory.toLowerCase() === category.toLowerCase()
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              } transition duration-300`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Books Grid */}
        {filteredBooks.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredBooks.map((book) => (
              <div
                key={book.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300"
              >
                <img
                  src={book.coverImage}
                  alt={book.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{book.title}</h3>
                  <p className="text-gray-600 mb-4">{book.author}</p>
                  <a
                    href={book.downloadLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded transition duration-300"
                  >
                    Download
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600 text-xl">No books found for this category.</p>
        )}
      </div>
    </div>
  );
};

export default Books;
