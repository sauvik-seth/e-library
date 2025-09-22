import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Download, Heart, BookOpen, ArrowRight, X, AlertCircle, CheckCircle } from "lucide-react";

const categories = [
  "All",
  "Physics", 
  "Chemistry",
  "Mathematics",
  "Computer Science",
  "Biology",
];

const books = [
  {
    id: 1,
    title: "Beginning C++ Programming",
    author: "Richard Grimes",
    category: "Computer Science",
    coverImage: "/images/c++.webp",
    downloadLink: "https://notalentgeek.github.io/note/note/project/project-independent/pi-brp-beginning-c-programming/document/20170807-1504-cet-1-book-and-source-1.pdf",
    description: "Master the fundamentals of C++ programming with practical examples and exercises."
  },
  {
    id: 2,
    title: "Let us C",
    author: "Yashvant Kanetkar",
    category: "Computer Science", 
    coverImage: "/images/letusc.webp",
    downloadLink: "https://www.scribd.com/document/357888203/let-us-c-yashwant-kanetkar-pdf",
    description: "The classic guide to C programming, perfect for beginners and experts alike."
  },
  {
    id: 3,
    title: "Digital Electronics",
    author: "Anil K. Maini",
    category: "Computer Science",
    coverImage: "https://m.media-amazon.com/images/I/71X1jS-9iOL._UF1000,1000_QL80_.jpg",
    downloadLink: "https://www.shahucollegelatur.org.in/Department/Studymaterial/sci/it/BCA/FY/digielec.pdf",
    description: "Comprehensive coverage of digital electronics concepts and applications."
  },
  {
    id: 4,
    title: "Computer System Architecture",
    author: "M. Morris Mano",
    category: "Computer Science",
    coverImage: "https://m.media-amazon.com/images/I/81Ve58ZJLEL.jpg", 
    downloadLink: "https://www.shahucollegelatur.org.in/Department/Studymaterial/sci/it/BCA/FY/digielec.pdf",
    description: "Essential guide to computer architecture and organization principles."
  },
  {
    id: 5,
    title: "Introduction to Programming using Java",
    author: "David J. Eck",
    category: "Computer Science",
    coverImage: "https://m.media-amazon.com/images/I/61Xdjv+7R3L._UF1000,1000_QL80_.jpg",
    downloadLink: "https://www.iitk.ac.in/esc101/share/downloads/javanotes5.pdf",
    description: "Learn Java programming from scratch with hands-on examples and projects."
  },
  {
    id: 6,
    title: "Data Structure and Algorithm in Java",
    author: "Robert Lafore",
    category: "Computer Science",
    coverImage: "/images/java.jpg",
    downloadLink: "https://gnindia.dronacharya.info/CSE/3rdSem/Downloads/DataStructures/Books/DATA-STRUCTURE-BOOK-12.pdf",
    description: "Master data structures and algorithms with clear explanations and Java code examples."
  },
  {
    id: 7,
    title: "The Theory Of Equations Vol I",
    author: "Burnside,William Snow",
    category: "Mathematics",
    coverImage: "https://cdn01.sapnaonline.com/bk_images/788/9781298618788.jpg",
    downloadLink: "The Theory Of Equations Vol I : Burnside,William Snow. : Free Download, Borrow, and Streaming : Internet Archive https://share.google/ILxCsrvF2VKHg7ugC",
    description: "Master data structures and algorithms with clear explanations and Java code examples."
  },
  {
    id: 8,
    title: "The Theory of equations",
    author: "W.S. Burnside and A.W. Panton",
    category: "Mathematics",
    coverImage: "https://m.media-amazon.com/images/I/51D3pEE64xL._UF1000,1000_QL80_.jpg",
    downloadLink: "https://share.google/CvGFAX9H3cgjF9ZE0",
    description: "Master data structures and algorithms with clear explanations and Java code examples."
  },
  {
    id: 9,
    title: "Calculus",
    author: "WStrauss, Monty J",
    category: "Mathematics",
    coverImage: "https://m.media-amazon.com/images/I/31evVVo3eYL._UF1000,1000_QL80_.jpg",
    downloadLink: "https://share.google/HjtzXYL4WAphfykun",
    description: "Master data structures and algorithms with clear explanations and Java code examples."
  },
];

const Books = () => {
  const { categoryName } = useParams();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [favorites, setFavorites] = useState(new Set());
  const [hoveredCard, setHoveredCard] = useState(null);
  const [showDownloadModal, setShowDownloadModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const [isDownloading, setIsDownloading] = useState(false);

  useEffect(() => {
    if (categoryName) {
      const decodedCategory = decodeURIComponent(categoryName).replace(/-/g, " ");
      setSelectedCategory(decodedCategory);
    } else {
      setSelectedCategory("All");
    }
  }, [categoryName]);

  const filteredBooks = selectedCategory === "All" 
    ? books 
    : books.filter(book => book.category.toLowerCase() === selectedCategory.toLowerCase());

  const toggleFavorite = (bookId) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(bookId)) {
        newFavorites.delete(bookId);
      } else {
        newFavorites.add(bookId);
      }
      return newFavorites;
    });
  };

  const handleDownloadClick = (book, e) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedBook(book);
    setShowDownloadModal(true);
  };

  const handleConfirmDownload = () => {
    setIsDownloading(true);
    
    // Simulate download process
    setTimeout(() => {
      // Open the download link
      window.open(selectedBook.downloadLink, '_blank', 'noopener,noreferrer');
      setIsDownloading(false);
      setShowDownloadModal(false);
      setSelectedBook(null);
    }, 1500);
  };

  const handleCancelDownload = () => {
    setShowDownloadModal(false);
    setSelectedBook(null);
    setIsDownloading(false);
  };

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && showDownloadModal) {
        handleCancelDownload();
      }
    };
    
    if (showDownloadModal) {
      document.addEventListener('keydown', handleEscape);
    }
    
    return () => document.removeEventListener('keydown', handleEscape);
  }, [showDownloadModal]);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Beautiful Blue Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-50">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-300/20 via-transparent to-indigo-300/20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-200/10 to-transparent"></div>
        
        {/* Animated gradient orbs */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-br from-blue-400/30 to-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-gradient-to-br from-cyan-400/25 to-blue-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-gradient-to-br from-indigo-400/20 to-purple-400/25 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-gray-900">
              {selectedCategory !== "All" ? `${selectedCategory} ` : "All "}
            </span>
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Books
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our curated collection of academic resources designed to enhance your learning journey
          </p>
        </div>

        {/* Enhanced Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                selectedCategory.toLowerCase() === category.toLowerCase()
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/30"
                  : "bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white hover:shadow-lg border border-white/50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Books Grid */}
        {filteredBooks.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredBooks.map((book) => (
              <div
                key={book.id}
                className="book-card group relative"
                onMouseEnter={() => setHoveredCard(book.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Glassmorphism Card */}
                <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl border border-white/50 shadow-2xl overflow-hidden transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-3xl">
                  
                  {/* Book Cover */}
                  <div className="relative overflow-hidden rounded-t-3xl">
                    <img
                      src={book.coverImage}
                      alt={book.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-64 object-cover transition-all duration-700 group-hover:scale-110"
                    />
                    
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Favorite Button */}
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        toggleFavorite(book.id);
                      }}
                      className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center transition-all duration-300 hover:bg-white/40 hover:scale-110"
                    >
                      <Heart 
                        className={`w-5 h-5 transition-colors duration-300 ${
                          favorites.has(book.id) ? 'text-red-500 fill-red-500' : 'text-white'
                        }`} 
                      />
                    </button>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    {/* Title and Author */}
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
                        {book.title}
                      </h3>
                      <p className="text-gray-600 font-medium">{book.author}</p>
                    </div>

                    {/* Description */}
                    <p className="text-gray-500 text-sm mb-8 line-clamp-3">
                      {book.description}
                    </p>

                    {/* Download Button */}
                    <button
                      onClick={(e) => handleDownloadClick(book, e)}
                      className="group/btn relative w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-3"
                    >
                      <Download className="w-5 h-5 group-hover/btn:animate-bounce" />
                      <span>Download Now</span>
                      <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </button>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-white/50 p-12 max-w-md mx-auto shadow-xl">
              <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No Books Found</h3>
              <p className="text-gray-600">
                No books available in the <strong>{selectedCategory}</strong> category yet.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Download Confirmation Modal */}
      {showDownloadModal && selectedBook && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
            onClick={handleCancelDownload}
          ></div>

          {/* Modal Content */}
          <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl border border-white/50 shadow-2xl max-w-md w-full mx-4 overflow-hidden animate-modal-in">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <AlertCircle className="w-6 h-6" />
                  <h3 className="text-xl font-bold">Confirm Download</h3>
                </div>
                <button
                  onClick={handleCancelDownload}
                  className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all duration-200"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="flex gap-4 mb-6">
                <img
                  src={selectedBook.coverImage}
                  alt={selectedBook.title}
                  className="w-16 h-20 object-cover rounded-lg shadow-md"
                />
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900 mb-1 line-clamp-2">
                    {selectedBook.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{selectedBook.author}</p>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 mb-6">
                <p className="text-gray-800 text-sm leading-relaxed">
                  Are you sure you want to download <strong>"{selectedBook.title}"</strong>? 
                  This will open a new tab and begin the download process.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={handleCancelDownload}
                  disabled={isDownloading}
                  className="flex-1 px-6 py-3 bg-gray-200 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed text-gray-700 font-semibold rounded-2xl transition-all duration-200"
                >
                  Cancel
                </button>
                <button
                  onClick={handleConfirmDownload}
                  disabled={isDownloading}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 disabled:opacity-75 text-white font-semibold rounded-2xl transition-all duration-200 flex items-center justify-center gap-2"
                >
                  {isDownloading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Downloading...
                    </>
                  ) : (
                    <>
                      <CheckCircle className="w-4 h-4" />
                      Yes, Download
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Enhanced CSS Styles */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.05);
          }
        }

        @keyframes modal-in {
          0% {
            opacity: 0;
            transform: scale(0.95) translateY(-10px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .animate-modal-in {
          animation: modal-in 0.2s ease-out;
        }

        .book-card:hover .shadow-3xl {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Books;
