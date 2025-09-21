import React, { useState } from "react";

const ELibraryServices = () => {
  const services = [
    {
      title: "24/7 Access",
      description: "Enjoy unlimited access to our library anytime, anywhere. Browse through thousands of books, journals, and digital resources whenever inspiration strikes.",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop&auto=format",
      bgColor: "rgba(163, 230, 53, 0.7)",
    },
    {
      title: "Expert Recommendations", 
      description: "Get curated book suggestions from subject matter experts. Our librarians and specialists handpick content tailored to your interests and academic needs.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&auto=format",
      bgColor: "rgba(251, 191, 36, 0.7)",
    },
    {
      title: "Interactive Learning",
      description: "Engage with interactive content to enhance your knowledge. Access multimedia resources, quizzes, and collaborative tools for a richer learning experience.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop&auto=format",
      bgColor: "rgba(249, 168, 212, 0.7)",
    },
    {
      title: "Multi-Device Support",
      description: "Access our library seamlessly across all your devices. Whether on desktop, tablet, or mobile, your reading progress syncs perfectly across platforms.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop&auto=format",
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
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      zIndex,
      transform: `translateY(${translateY}px) scale(${scale})`,
      opacity,
      transition: 'all 0.5s ease-in-out',
      cursor: 'pointer',
      backgroundColor: 'white',
      borderRadius: '12px',
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
      overflow: 'hidden',
      isolation: 'isolate',
    };
  };

  const getHeaderStyles = (bgColor) => ({
    padding: '1rem 1.5rem',
    background: bgColor,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: '12px 12px 0 0',
    transition: 'background-color 0.3s ease',
  });

  const getNavButtonStyles = (isSelected) => ({
    background: 'none',
    border: 'none',
    fontSize: '1.2rem',
    color: '#333',
    cursor: isSelected ? 'pointer' : 'default',
    padding: '0.5rem',
    borderRadius: '50%',
    transition: 'all 0.3s ease',
    opacity: isSelected ? 1 : 0.5,
    pointerEvents: isSelected ? 'auto' : 'none',
  });

  return (
    <div style={{
      padding: '4rem 0',
      background: 'linear-gradient(to right, rgb(238, 242, 255), rgb(219, 234, 254))',
      minHeight: '100vh',
      fontFamily: 'system-ui, -apple-system, sans-serif',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1rem',
      }}>
        <h2 style={{
          fontSize: '2rem',
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: '3rem',
          color: '#1f2937',
          margin: '0 0 3rem 0',
        }}>
          Our <span style={{ color: '#2563eb' }}>Services</span>
        </h2>
        
        <div style={{
          position: 'relative',
          width: 'min(calc(100% - 2rem), 40rem)',
          margin: '0 auto',
          height: '500px',
          display: 'grid',
          gridTemplateAreas: '"stack"',
        }}>
          {services.map((service, index) => (
            <div
              key={index}
              style={{
                ...getCardStyles(index),
                gridArea: 'stack',
              }}
              onClick={() => handleCardClick(index)}
            >
              {/* Dotted background pseudo-element replacement */}
              <div style={{
                position: 'absolute',
                inset: '-20px',
                backgroundImage: `radial-gradient(${service.bgColor} 1px, transparent 0px)`,
                backgroundRepeat: 'repeat',
                backgroundSize: '5px 5px',
                backgroundPosition: 'center',
                borderRadius: '32px',
                zIndex: -2,
              }} />
              
              {/* White background pseudo-element replacement */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'white',
                borderRadius: '12px',
                zIndex: -1,
              }} />
              
              <div style={getHeaderStyles(service.bgColor)}>
                <h3 style={{
                  margin: 0,
                  fontWeight: '600',
                  fontSize: '1.25rem',
                  color: '#111827',
                  transition: 'all 0.3s ease',
                }}>
                  {service.title}
                </h3>
                <button 
                  style={getNavButtonStyles(index === selectedCard)}
                  onClick={(e) => handleNextCard(e, index)}
                  onMouseEnter={(e) => {
                    if (index === selectedCard) {
                      e.target.style.transform = 'rotate(90deg)';
                      e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (index === selectedCard) {
                      e.target.style.transform = 'rotate(0deg)';
                      e.target.style.backgroundColor = 'transparent';
                    }
                  }}
                >
                  ⤫
                </button>
              </div>
              
              <div style={{
                padding: '2rem 1.5rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1.5rem',
                minHeight: '350px',
                justifyContent: 'flex-start',
              }}>
                <div style={{
                  width: '100%',
                  maxWidth: '300px',
                  height: '180px',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.3s ease',
                  opacity: index === selectedCard ? 1 : 0.7,
                  transform: index === selectedCard ? 'scale(1)' : 'scale(0.95)',
                }}>
                  <img
                    src={service.image}
                    alt={service.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      if (index === selectedCard) {
                        e.target.style.transform = 'scale(1.05)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (index === selectedCard) {
                        e.target.style.transform = 'scale(1)';
                      }
                    }}
                  />
                </div>
                
                <p style={{
                  margin: 0,
                  fontSize: '0.95rem',
                  lineHeight: '1.6',
                  color: '#6b7280',
                  transition: 'all 0.3s ease',
                  opacity: index === selectedCard ? 1 : 0.8,
                  maxWidth: '320px',
                  textAlign: 'center',
                }}>
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation dots */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '0.5rem',
          marginTop: '2rem',
        }}>
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => setSelectedCard(index)}
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                border: 'none',
                backgroundColor: index === selectedCard ? '#2563eb' : '#d1d5db',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                transform: index === selectedCard ? 'scale(1.2)' : 'scale(1)',
              }}
              onMouseEnter={(e) => {
                if (index !== selectedCard) {
                  e.target.style.backgroundColor = '#9ca3af';
                }
              }}
              onMouseLeave={(e) => {
                if (index !== selectedCard) {
                  e.target.style.backgroundColor = '#d1d5db';
                }
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ELibraryServices;
