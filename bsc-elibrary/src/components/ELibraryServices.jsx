import React, { useState } from "react";

const ELibraryServices = () => {
  const services = [
    {
      title: "24/7 Access",
      description:
        "Enjoy unlimited access to our library anytime, anywhere. Browse through thousands of books, journals, and digital resources whenever inspiration strikes.",
      image:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop&auto=format",
      bgColor: "rgba(163, 230, 53, 0.7)",
    },
    {
      title: "All Your BSc Books Here",
      description:
        "Didn’t find your BSc book? Don’t worry! Explore and access a wide collection of academic books tailored for BSc students—all in one place.",
      image:
        "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=300&fit=crop&auto=format",
      bgColor: "rgba(251, 191, 36, 0.7)",
    },

    {
      title: "Interactive Learning",
      description:
        "Engage with interactive content to enhance your knowledge. Access multimedia resources, quizzes, and collaborative tools for a richer learning experience.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop&auto=format",
      bgColor: "rgba(249, 168, 212, 0.7)",
    },
    {
      title: "Multi-Device Support",
      description:
        "Access our library seamlessly across all your devices. Whether on desktop, tablet, or mobile, your reading progress syncs perfectly across platforms.",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop&auto=format",
      bgColor: "rgba(168, 162, 251, 0.7)",
    },
  ];

  const [selectedCard, setSelectedCard] = useState(0);

  const handleCardClick = (index) => {
    setSelectedCard(index);
  };

  const handleNextCard = (e, currentIndex) => {
    e.stopPropagation();
    const nextIndex = (currentIndex + 1) % services.length;
    setSelectedCard(nextIndex);
  };

  const getCardStyles = (index) => {
    const isSelected = index === selectedCard;
    const isSecond = index === (selectedCard + 1) % services.length;
    const isThird = index === (selectedCard + 2) % services.length;

    let zIndex, scale, opacity, translateY;

    if (isSelected) {
      zIndex = 4;
      scale = 1;
      opacity = 1;
      translateY = 0;
    } else if (isSecond) {
      zIndex = 3;
      scale = 0.95;
      opacity = 0.8;
      translateY = -30;
    } else if (isThird) {
      zIndex = 2;
      scale = 0.9;
      opacity = 0.6;
      translateY = -60;
    } else {
      zIndex = 1;
      scale = 0.85;
      opacity = 0.4;
      translateY = -90;
    }

    return {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      zIndex,
      transform: `translateY(${translateY}px) scale(${scale})`,
      opacity,
      transition: "all 0.5s ease-in-out",
      cursor: "pointer",
      backgroundColor: "white",
      borderRadius: "12px",
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
      overflow: "hidden",
      isolation: "isolate",
    };
  };

  const getHeaderStyles = (bgColor) => ({
    padding: "1rem 1.5rem",
    background: bgColor,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: "12px 12px 0 0",
    transition: "background-color 0.3s ease",
  });

  const getNavButtonStyles = (isSelected) => ({
    background: "none",
    border: "none",
    fontSize: "1.2rem",
    color: "#333",
    cursor: isSelected ? "pointer" : "default",
    padding: "0.5rem",
    borderRadius: "50%",
    transition: "all 0.3s ease",
    opacity: isSelected ? 1 : 0.5,
    pointerEvents: isSelected ? "auto" : "none",
  });

  return (
    <>
      <div
        className="services-section relative overflow-hidden"
        style={{
          padding: "4rem 0",
          minHeight: "100vh",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        {/* Beautiful Blue Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-50">
          {/* Layered gradients for depth */}
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-300/20 via-transparent to-indigo-300/20"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-200/15 to-transparent"></div>

          {/* Animated floating gradient orbs */}
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-br from-blue-400/30 to-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute -bottom-24 -right-24 w-80 h-80 bg-gradient-to-br from-cyan-400/25 to-blue-500/30 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/4 w-72 h-72 bg-gradient-to-br from-indigo-400/20 to-purple-400/25 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "4s" }}
          ></div>
          <div
            className="absolute top-20 right-1/3 w-64 h-64 bg-gradient-to-br from-purple-300/20 to-pink-400/25 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "6s" }}
          ></div>

          {/* Subtle pattern overlay */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.8) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.8) 1px, transparent 1px)
            `,
              backgroundSize: "25px 25px",
            }}
          ></div>
        </div>

        <div
          className="relative z-10"
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 1rem",
          }}
        >
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
            Our{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Services
            </span>
          </h2>

          <div
            className="card-stack"
            style={{
              position: "relative",
              width: "min(calc(100% - 2rem), 40rem)",
              margin: "0 auto",
              height: "500px",
              display: "grid",
              gridTemplateAreas: '"stack"',
            }}
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="service-card"
                style={{
                  ...getCardStyles(index),
                  gridArea: "stack",
                  backgroundColor: "rgba(255, 255, 255, 0.95)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                }}
                onClick={() => handleCardClick(index)}
              >
                {/* Enhanced dotted background with gradient blend */}
                <div
                  style={{
                    position: "absolute",
                    inset: "-20px",
                    backgroundImage: `radial-gradient(${service.bgColor} 1px, transparent 0px)`,
                    backgroundRepeat: "repeat",
                    backgroundSize: "5px 5px",
                    backgroundPosition: "center",
                    borderRadius: "32px",
                    zIndex: -2,
                    opacity: 0.8,
                  }}
                />

                {/* Enhanced white background with gradient */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.98) 100%)",
                    borderRadius: "12px",
                    zIndex: -1,
                  }}
                />

                <div style={getHeaderStyles(service.bgColor)}>
                  <h3
                    style={{
                      margin: 0,
                      fontWeight: "600",
                      fontSize: "1.25rem",
                      color: "#111827",
                      transition: "all 0.3s ease",
                    }}
                  >
                    {service.title}
                  </h3>
                  <button
                    style={getNavButtonStyles(index === selectedCard)}
                    onClick={(e) => handleNextCard(e, index)}
                    onMouseEnter={(e) => {
                      if (index === selectedCard) {
                        e.target.style.transform = "rotate(90deg)";
                        e.target.style.backgroundColor =
                          "rgba(255, 255, 255, 0.2)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (index === selectedCard) {
                        e.target.style.transform = "rotate(0deg)";
                        e.target.style.backgroundColor = "transparent";
                      }
                    }}
                  >
                    ⤫
                  </button>
                </div>

                <div
                  className="card-content"
                  style={{
                    padding: "2rem 1.5rem",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "1.5rem",
                    minHeight: "350px",
                    justifyContent: "flex-start",
                  }}
                >
                  <div
                    className="text-section"
                    style={{
                      order: 2,
                      textAlign: "center",
                      flex: 1,
                    }}
                  >
                    <p
                      style={{
                        margin: 0,
                        fontSize: "0.95rem",
                        lineHeight: "1.6",
                        color: "#4b5563",
                        transition: "all 0.3s ease",
                        opacity: index === selectedCard ? 1 : 0.8,
                        maxWidth: "320px",
                      }}
                    >
                      {service.description}
                    </p>
                  </div>

                  <div
                    className="image-section"
                    style={{
                      order: 1,
                      width: "100%",
                      maxWidth: "300px",
                      height: "180px",
                      borderRadius: "8px",
                      overflow: "hidden",
                      boxShadow: "0 8px 25px rgba(0, 0, 0, 0.15)",
                      transition: "all 0.3s ease",
                      opacity: index === selectedCard ? 1 : 0.7,
                      transform:
                        index === selectedCard ? "scale(1)" : "scale(0.95)",
                    }}
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "transform 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        if (index === selectedCard) {
                          e.target.style.transform = "scale(1.05)";
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (index === selectedCard) {
                          e.target.style.transform = "scale(1)";
                        }
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced navigation dots */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "0.5rem",
              marginTop: "2rem",
            }}
          >
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => setSelectedCard(index)}
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  border: "none",
                  backgroundColor:
                    index === selectedCard
                      ? "#3b82f6"
                      : "rgba(255, 255, 255, 0.6)",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  transform: index === selectedCard ? "scale(1.3)" : "scale(1)",
                  boxShadow:
                    index === selectedCard
                      ? "0 2px 8px rgba(59, 130, 246, 0.4)"
                      : "0 1px 3px rgba(0, 0, 0, 0.1)",
                }}
                onMouseEnter={(e) => {
                  if (index !== selectedCard) {
                    e.target.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
                    e.target.style.transform = "scale(1.1)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (index !== selectedCard) {
                    e.target.style.backgroundColor = "rgba(255, 255, 255, 0.6)";
                    e.target.style.transform = "scale(1)";
                  }
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced CSS Styles */}
      <style>{`
        /* Enhanced animations */
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

        /* Mobile First - Default Styles */
        .card-stack {
          width: min(calc(100% - 2rem), 40rem);
        }
        
        .card-content {
          padding: 2rem 1.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
          min-height: 350px;
          justify-content: flex-start;
        }
        
        .text-section {
          order: 2;
          text-align: center;
          flex: 1;
        }
        
        .text-section p {
          margin: 0;
          font-size: 0.95rem;
          line-height: 1.6;
          color: #4b5563;
          transition: all 0.3s ease;
          max-width: 320px;
        }
        
        .image-section {
          order: 1;
          width: 100%;
          max-width: 300px;
          height: 180px;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
          transition: all 0.3s ease;
        }

        /* Tablet Layout (768px - 1023px) */
        @media (min-width: 768px) and (max-width: 1023px) {
          .card-stack {
            width: min(calc(100% - 2rem), 50rem) !important;
          }
          
          .card-content {
            padding: 2.5rem 2rem !important;
            gap: 2rem !important;
          }
          
          .image-section {
            height: 220px !important;
            max-width: 400px !important;
          }
          
          .text-section p {
            font-size: 1rem !important;
            max-width: 400px !important;
          }
        }

        /* Desktop Layout (1024px+) - Image Right, Text Left */
        @media (min-width: 1024px) {
          .card-stack {
            width: min(calc(100% - 2rem), 65rem) !important;
            height: 550px !important;
          }
          
          .card-content {
            flex-direction: row !important;
            align-items: center !important;
            gap: 3rem !important;
            padding: 2.5rem 3rem !important;
            min-height: 400px !important;
          }
          
          .text-section {
            order: 1 !important;
            text-align: left !important;
            flex: 1 !important;
            padding-right: 2rem;
          }
          
          .text-section p {
            font-size: 1.1rem !important;
            max-width: none !important;
            line-height: 1.7 !important;
            color: #374151 !important;
          }
          
          .image-section {
            order: 2 !important;
            flex: 0 0 45% !important;
            max-width: none !important;
            height: 300px !important;
            margin: 0 !important;
          }
        }

        /* Large Desktop (1440px+) */
        @media (min-width: 1440px) {
          .card-stack {
            width: min(calc(100% - 2rem), 70rem) !important;
            height: 600px !important;
          }
          
          .card-content {
            padding: 3rem 4rem !important;
            gap: 4rem !important;
            min-height: 450px !important;
          }
          
          .text-section p {
            font-size: 1.2rem !important;
            line-height: 1.8 !important;
          }
          
          .image-section {
            height: 350px !important;
          }
        }

        /* Enhanced interaction effects */
        .service-card {
          will-change: transform, opacity;
        }
        
        .service-card:hover {
          transform: translateY(-2px) !important;
        }
        
        .service-card:hover .image-section {
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2) !important;
        }
        
        .service-card:hover .image-section img {
          transform: scale(1.02);
        }

        /* Accessibility and Focus States */
        .service-card:focus-visible {
          outline: 2px solid #3b82f6;
          outline-offset: 4px;
        }
        
        button:focus-visible {
          outline: 2px solid #3b82f6;
          outline-offset: 2px;
        }
      `}</style>
    </>
  );
};

export default ELibraryServices;
