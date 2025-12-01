import React, { useState, useEffect, useRef, useCallback, useMemo, memo } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// --- Mock Data ---
const awardsData = [
  {
    id: 1,
    title: "Best Innovation 2024",
    organization: "Tech World Summit",
    image: "https://placehold.co/300x200/f59e0b/ffffff?text=Innovation+Award",
    description: "Awarded for our groundbreaking AI integration that revolutionized workflow efficiency for over 500 enterprise clients globally. We continue to push the boundaries of what is possible in automation.",
    date: "Oct 2024"
  },
  {
    id: 2,
    title: "Top User Experience",
    organization: "Design Matters Global",
    image: "https://placehold.co/200x250/8b5cf6/ffffff?text=UX+Certificate",
    description: "Recognized for achieving the highest customer satisfaction scores in the SaaS sector, focusing on intuitive interfaces and seamless user journeys across all platforms.",
    date: "Aug 2024"
  },
  {
    id: 3,
    title: "Excellence in Security",
    organization: "CyberSafe Alliance",
    image: "https://placehold.co/250x250/3b82f6/ffffff?text=Security+Shield",
    description: "Honored for our military-grade encryption protocols and zero-trust architecture that kept client data secure against evolving threats throughout the fiscal year.",
    date: "June 2024"
  },
  {
    id: 4,
    title: "Fastest Growing Startup",
    organization: "Venture Weekly",
    image: "https://placehold.co/300x150/f43f5e/ffffff?text=Growth+Chart",
    description: "Acknowledged for achieving 300% year-over-year growth while maintaining profitability and a healthy company culture in a competitive market.",
    date: "Dec 2023"
  },
  {
    id: 5,
    title: "Green Tech Initiative",
    organization: "EcoFuture Awards",
    image: "https://placehold.co/200x200/10b981/ffffff?text=Green+Leaf",
    description: "Celebrated for reducing our carbon footprint by 60% through sustainable server management and remote-first work policies.",
    date: "Nov 2023"
  }
];

// --- Memoized Card Component ---
const AwardCard = memo(({ award, isActive, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className={`
        relative flex-shrink-0 flex flex-col
        w-[320px] h-[520px] md:w-[380px] md:h-[550px] 
        rounded-3xl overflow-hidden
        ${isActive 
          ? 'scale-100 opacity-100 bg-gradient-to-b from-slate-800 to-slate-900 shadow-2xl shadow-purple-500/10 border border-slate-700/50 translate-y-0 z-20' 
          : 'scale-90 opacity-50 bg-slate-800/50 border border-slate-700/30 blur-[1px] translate-y-4 z-10 cursor-pointer'
        }
      `}
      style={{
        transform: `translateZ(0) ${isActive ? 'scale(1)' : 'scale(0.9)'} ${isActive ? 'translateY(0)' : 'translateY(16px)'}`,
        transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.5s ease-out',
        willChange: 'transform, opacity',
        backfaceVisibility: 'hidden',
      }}
    >
      {/* Card Header Background */}
      <div 
        className={`absolute top-0 left-0 w-full h-32 z-0 ${
          isActive 
            ? 'bg-gradient-to-b from-purple-900/30 to-transparent' 
            : 'bg-gradient-to-b from-slate-700/20 to-transparent'
        }`}
      />

      {/* Decorative Badge */}
      <div className="absolute top-5 right-5 z-30">
        <span className="bg-slate-800/90 backdrop-blur-sm text-slate-200 text-xs font-bold py-1.5 px-3 rounded-lg border border-slate-600/50 shadow-sm">
          {award.date}
        </span>
      </div>

      <div className="relative z-10 flex flex-col h-full p-6">
        
        {/* Image Container */}
        <div className="mt-2 mb-6 w-full h-48 flex items-center justify-center p-4 bg-slate-800/50 rounded-2xl shadow-inner border border-slate-700/50">
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-lg">
            <img 
              src={award.image} 
              alt={award.title} 
              className="max-w-full max-h-full object-contain"
              loading="lazy"
              decoding="async"
              style={{
                transform: 'translateZ(0)',
                transition: 'transform 0.5s ease',
              }}
              onError={(e) => { e.target.src = 'https://placehold.co/300x200/1e293b/94a3b8?text=Award+Image'; }}
            />
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 flex flex-col text-center">
          
          {/* Organization Tag */}
          <div className="mb-2">
            <span className="inline-block py-1 px-2 rounded-md bg-purple-900/40 text-purple-300 text-[10px] font-bold tracking-widest uppercase border border-purple-700/30">
              {award.organization}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl md:text-2xl font-bold text-white leading-tight mb-3">
            {award.title}
          </h3>

          {/* Separator */}
          <div className="w-12 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-4" />
          
          {/* Description */}
          <div className="flex-grow overflow-hidden">
            <p className="text-slate-400 text-sm leading-relaxed line-clamp-4">
              {award.description}
            </p>
          </div>
        </div>
      </div>

      {/* Glow effect for active card */}
      {isActive && (
        <div 
          className="absolute inset-0 rounded-3xl pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at 50% 0%, rgba(139, 92, 246, 0.1) 0%, transparent 60%)',
          }}
        />
      )}
    </div>
  );
});

AwardCard.displayName = 'AwardCard';

// --- Memoized Navigation Button ---
const NavButton = memo(({ direction, onClick }) => (
  <button
    onClick={onClick}
    className="p-3 md:p-4 rounded-full bg-slate-800 shadow-lg shadow-black/20 text-slate-300 hover:text-purple-400 hover:bg-slate-700 active:scale-95 focus:outline-none focus:ring-2 focus:ring-purple-500/50 border border-slate-700/50"
    style={{
      transform: 'translateZ(0)',
      transition: 'transform 0.15s ease, background-color 0.2s ease, color 0.2s ease',
    }}
    aria-label={direction === 'prev' ? 'Previous Award' : 'Next Award'}
  >
    {direction === 'prev' ? (
      <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
    ) : (
      <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
    )}
  </button>
));

NavButton.displayName = 'NavButton';

// --- Memoized Pagination Dots ---
const PaginationDots = memo(({ total, activeIndex, onDotClick }) => (
  <div className="flex space-x-2">
    {Array.from({ length: total }).map((_, idx) => (
      <button
        key={idx}
        onClick={() => onDotClick(idx)}
        className={`rounded-full transition-all duration-300 ${
          idx === activeIndex
            ? 'w-6 md:w-8 h-2 bg-gradient-to-r from-purple-500 to-pink-500'
            : 'w-2 h-2 bg-slate-600 hover:bg-slate-500'
        }`}
        style={{ transform: 'translateZ(0)' }}
        aria-label={`Go to slide ${idx + 1}`}
      />
    ))}
  </div>
));

PaginationDots.displayName = 'PaginationDots';

// --- Progress Bar Component ---
const ProgressBar = memo(({ isActive, animationKey }) => {
  if (!isActive) return null;
  
  return (
    <div className="w-48 md:w-64 h-1 bg-slate-700 mx-auto mt-6 md:mt-8 rounded-full overflow-hidden">
      <div 
        key={animationKey} 
        className="h-full rounded-full"
        style={{
          background: 'linear-gradient(90deg, #8b5cf6, #ec4899)',
          animation: 'progress 3.5s linear',
          transformOrigin: 'left',
          willChange: 'transform',
        }}
      />
    </div>
  );
});

ProgressBar.displayName = 'ProgressBar';

// --- Main Section Component ---
const AwardsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoPlayRef = useRef(null);
  const containerRef = useRef(null);
  const isVisibleRef = useRef(true);
  const length = awardsData.length;

  // Memoized index calculations
  const prevIndex = useMemo(() => (activeIndex - 1 + length) % length, [activeIndex, length]);
  const nextIndex = useMemo(() => (activeIndex + 1) % length, [activeIndex, length]);

  const nextCard = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % length);
  }, [length]);

  const prevCard = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + length) % length);
  }, [length]);

  const goToSlide = useCallback((idx) => {
    setActiveIndex(idx);
  }, []);

  const handleMouseEnter = useCallback(() => setIsPaused(true), []);
  const handleMouseLeave = useCallback(() => setIsPaused(false), []);

  // Intersection Observer for visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-play logic with visibility check
  useEffect(() => {
    if (!isPaused && isVisibleRef.current) {
      autoPlayRef.current = setInterval(() => {
        if (isVisibleRef.current) {
          nextCard();
        }
      }, 3500);
    }
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isPaused, nextCard]);

  return (
    <section 
      ref={containerRef}
      className="relative w-full min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden flex flex-col justify-center py-12 md:py-20"
      style={{
        contain: 'layout style paint',
        isolation: 'isolate',
      }}
    >
      
      {/* Background Decorative Blobs - GPU Optimized */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div 
          className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-purple-600/20 rounded-full mix-blend-screen filter blur-3xl"
          style={{
            transform: 'translateZ(0)',
            animation: 'blob 7s infinite',
            willChange: 'transform',
          }}
        />
        <div 
          className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-blue-600/20 rounded-full mix-blend-screen filter blur-3xl"
          style={{
            transform: 'translateZ(0)',
            animation: 'blob 7s infinite 2s',
            willChange: 'transform',
          }}
        />
        <div 
          className="absolute bottom-[-20%] left-[20%] w-96 h-96 bg-pink-600/20 rounded-full mix-blend-screen filter blur-3xl"
          style={{
            transform: 'translateZ(0)',
            animation: 'blob 7s infinite 4s',
            willChange: 'transform',
          }}
        />
        
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-bold tracking-wide uppercase text-sm mb-3">
            Our Achievements
          </h2>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Recognized for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400">
              Excellence
            </span>
          </h1>
          <p className="text-base md:text-lg text-slate-400 px-4">
            Over the past decade, we've pioneered innovation across industries. 
            Here are a few milestones that mark our journey.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-7xl mx-auto">

          {/* Hover-sensitive area for pausing */}
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >

            {/* Main Slider Area */}
            <div className="flex justify-center items-center h-[600px] md:h-[650px]">
              <div className="relative w-full flex justify-center items-center">

                {/* Previous Card (Left) */}
                <div className="hidden lg:block absolute left-0 xl:left-12 z-10">
                  <AwardCard
                    award={awardsData[prevIndex]}
                    isActive={false}
                    onClick={prevCard}
                  />
                </div>

                {/* Active Card (Center) */}
                <div className="z-20 px-4">
                  <AwardCard
                    award={awardsData[activeIndex]}
                    isActive={true}
                  />
                </div>

                {/* Next Card (Right) */}
                <div className="hidden lg:block absolute right-0 xl:right-12 z-10">
                  <AwardCard
                    award={awardsData[nextIndex]}
                    isActive={false}
                    onClick={nextCard}
                  />
                </div>

              </div>
            </div>

            {/* Controls */}
            <div className="flex justify-center items-center -mt-8 md:-mt-4 space-x-6 relative z-30">
              <NavButton direction="prev" onClick={prevCard} />
              <PaginationDots 
                total={length} 
                activeIndex={activeIndex} 
                onDotClick={goToSlide} 
              />
              <NavButton direction="next" onClick={nextCard} />
            </div>

          </div>

          {/* Progress Bar */}
          <ProgressBar isActive={!isPaused} animationKey={activeIndex} />

          {/* CSS Keyframes */}
          <style>
          {`
            @keyframes blob {
              0%, 100% { transform: translate(0px, 0px) scale(1) translateZ(0); }
              33% { transform: translate(30px, -50px) scale(1.1) translateZ(0); }
              66% { transform: translate(-20px, 20px) scale(0.9) translateZ(0); }
            }
            @keyframes progress {
              0% { transform: scaleX(0) translateZ(0); }
              100% { transform: scaleX(1) translateZ(0); }
            }
          `}
          </style>

        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none" />
    </section>
  );
};

export default AwardsSection;