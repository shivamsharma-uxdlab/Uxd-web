import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Award, Zap, ChevronLeft, ChevronRight, Activity, Medal } from 'lucide-react';

const AwardsSection = () => {
  const awards = [
    {
      id: 1,
      title: "Top Machine Learning",
      subtitle: "Los Angeles",
      desc: "Recognized as the most reviewed partner for ML solutions.",
      icon: <Zap size={28} className="text-white" />,
      source: "The Manifest",
    },
    {
      id: 2,
      title: "Leading AI Agency",
      subtitle: "California",
      desc: "Awarded for excellence in Artificial Intelligence development.",
      icon: <Star size={28} className="text-white" />,
      source: "The Manifest",
    },
    {
      id: 3,
      title: "Most Reviewed AI Firm",
      subtitle: "India Market",
      desc: "Ranked #1 for delivering scalable AI architectures.",
      icon: <Award size={28} className="text-white" />,
      source: "The Manifest",
    },
    {
      id: 4,
      title: "Top App Developers",
      subtitle: "Global 2025",
      desc: "Honored by Clutch as an industry leader in mobile dev.",
      icon: <Trophy size={28} className="text-white" />,
      source: "Clutch",
    },
    {
      id: 5,
      title: "Best IoT Innovators",
      subtitle: "San Francisco",
      desc: "Breakthrough connectivity solutions and smart infrastructure.",
      icon: <Activity size={28} className="text-white" />,
      source: "TechReview",
    }
  ];

  const containerRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(340);
  const [gap, setGap] = useState(32);
  const [isInView, setIsInView] = useState(false);

  const totalItems = awards.length;
  
  // Create extended array for infinite loop (only one set of clones on each side)
  const displayAwards = [...awards, ...awards, ...awards];

  const [currentIndex, setCurrentIndex] = useState(totalItems);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Check if section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Responsive dimensions
  useEffect(() => {
    const updateDimensions = () => {
      const width = window.innerWidth;
      if (width < 480) {
        setCardWidth(width - 48);
        setGap(16);
      } else if (width < 640) {
        setCardWidth(Math.min(width - 48, 320));
        setGap(20);
      } else if (width < 768) {
        setCardWidth(300);
        setGap(24);
      } else if (width < 1024) {
        setCardWidth(320);
        setGap(28);
      } else {
        setCardWidth(340);
        setGap(32);
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const totalMove = cardWidth + gap;

  // Auto-play only when in view
  useEffect(() => {
    if (!isInView) return;
    
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentIndex, isInView]);

  // Handle seamless loop
  const handleTransitionEnd = useCallback(() => {
    setIsTransitioning(false);
    
    if (currentIndex >= totalItems * 2) {
      setCurrentIndex(totalItems);
    } else if (currentIndex < totalItems) {
      setCurrentIndex(totalItems + (currentIndex % totalItems));
    }
  }, [currentIndex, totalItems]);

  const handleNext = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(prev => prev + 1);
  }, [isTransitioning]);

  const handlePrev = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(prev => prev - 1);
  }, [isTransitioning]);

  // Touch handling
  const [touchStart, setTouchStart] = useState(null);

  const onTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchEnd = (e) => {
    if (!touchStart) return;
    const touchEnd = e.changedTouches[0].clientX;
    const distance = touchStart - touchEnd;
    
    if (Math.abs(distance) > 50) {
      if (distance > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    setTouchStart(null);
  };

  // Get current dot index
  const currentDotIndex = ((currentIndex % totalItems) + totalItems) % totalItems;

  return (
    <section 
      ref={containerRef}
      className="bg-gradient-to-br from-slate-50 via-white to-slate-100 py-4 sm:py-9 md:py-13 lg:py-18 px-4 relative overflow-hidden font-sans"
    >
      {/* Simplified Background */}
      <div className="absolute inset-0 pointer-events-none opacity-50">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-r from-blue-50 to-purple-50 rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1460px] mx-auto relative z-10">

        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 sm:mb-14 md:mb-16 lg:mb-20 px-2 sm:px-4 gap-6">
          <div className="max-w-2xl">
            <h3 className="text-slate-600 font-bold tracking-[0.15em] sm:tracking-[0.2em] uppercase text-xs sm:text-sm mb-3 sm:mb-4">
              World Class Recognition
            </h3>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-black text-slate-900 leading-tight">
              Pioneering <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]">Innovation</span>
              <br />
              <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl text-slate-700 font-medium">
                Since 2009
              </span>
            </h2>
          </div>
          
          <div className="flex gap-3 sm:gap-4">
            <button
              onClick={handlePrev}
              disabled={isTransitioning}
              className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full border-2 border-slate-300 bg-white/80 text-slate-700 hover:bg-white hover:border-slate-400 hover:text-slate-900 transition-all duration-200 flex items-center justify-center active:scale-95 disabled:opacity-50"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={handleNext}
              disabled={isTransitioning}
              className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full border-2 border-slate-300 bg-white/80 text-slate-700 hover:bg-white hover:border-slate-400 hover:text-slate-900 transition-all duration-200 flex items-center justify-center active:scale-95 disabled:opacity-50"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* CAROUSEL TRACK */}
        <div
          className="relative w-full overflow-hidden"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div
            className="flex will-change-transform"
            style={{ 
              transform: `translateX(-${currentIndex * totalMove}px)`,
              gap: `${gap}px`,
              transition: isTransitioning ? 'transform 0.5s ease-out' : 'none'
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {displayAwards.map((award, index) => (
              <div
                key={`${award.id}-${index}`}
                className="relative flex-shrink-0 rounded-2xl sm:rounded-3xl bg-white border border-slate-200/50 p-5 sm:p-6 md:p-7 lg:p-8 flex flex-col hover:border-slate-300 hover:shadow-xl transition-shadow duration-300 group overflow-hidden"
                style={{ 
                  width: `${cardWidth}px`,
                  minHeight: '400px'
                }}
              >
                {/* Top Gradient Border */}
                <div className="absolute top-0 left-0 w-full h-1.5 sm:h-2 bg-gradient-to-r from-[var(--primary)] via-[var(--secondary)] to-[var(--primary)] rounded-t-2xl sm:rounded-t-3xl" />

                {/* Content Container */}
                <div className="h-full flex flex-col relative z-10">

                  {/* Icon Badge */}
                  <div className="mb-5 sm:mb-6 md:mb-7 lg:mb-8 relative">
                    <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
                      {award.icon}
                    </div>
                    {/* Decorative Badge */}
                    <div className="absolute -bottom-3 -right-2 sm:-bottom-4 sm:-right-4 bg-gradient-to-r from-yellow-400 to-orange-500 border-2 border-white text-[10px] sm:text-xs font-bold text-white px-2 sm:px-3 py-1 sm:py-1.5 rounded-full flex items-center gap-1 sm:gap-1.5 shadow-md">
                      <Medal size={12} className="text-white" />
                      AWARDED
                    </div>
                  </div>

                  {/* Text Content */}
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 mb-2 sm:mb-3 leading-tight">
                    {award.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-slate-600 uppercase tracking-wider mb-4 sm:mb-5 md:mb-6 bg-slate-100/50 px-2 sm:px-3 py-1 rounded-full inline-block w-fit">
                    {award.subtitle}
                  </p>

                  <div className="flex-grow">
                    <p className="text-slate-700 text-xs sm:text-sm leading-relaxed border-l-4 border-[var(--primary)]/30 pl-3 sm:pl-4 md:pl-5 italic">
                      "{award.desc}"
                    </p>
                  </div>

                  {/* Footer */}
                  <div className="pt-4 sm:pt-5 md:pt-6 border-t border-slate-200/50 flex justify-between items-center mt-auto">
                    <span className="text-[10px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wider">Awarded By</span>
                    <span className="text-xs sm:text-sm font-bold bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent">
                      {award.source}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dot Indicators */}
     

      </div>
    </section>
  );
};

export default AwardsSection;