import React, { useState, useEffect, useCallback, useRef, useMemo, memo } from 'react';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import image from '../../assets/images/sven-kucinic-Z0KjmjxUsKs-unsplash 1 (1).png';

// Constant Data
const PROJECT_DATA = [
  {
    id: 1,
    title: "Criiio Cup",
    client: "International Cricket Council",
    description: "We partnered with the ICC to revolutionize a 500-year-old game. Transforming cricket to engage 460 million fans through a digital-first approach.",
    tags: ["Product Strategy", "UX/UI Design", "Mobile App", "GDPR"],
    stats: [
      { label: "Fans Engaged", value: "460M" },
      { label: "History", value: "500Y" },
      { label: "Impact", value: "Global" }
    ],
    videoUrl: image,
    accent: "from-purple-500 to-indigo-600",
  },
  {
    id: 2,
    title: "FinTech Vault",
    client: "Global Bank",
    description: "A secure, biometric-enabled banking experience designed for the next generation of investors. Redefining trust in the digital age.",
    tags: ["FinTech", "Security", "React Native"],
    stats: [
      { label: "Transactions", value: "2.5B" },
      { label: "Uptime", value: "99.9%" },
      { label: "Users", value: "12M" }
    ],
    videoUrl: image,
    accent: "from-emerald-500 to-teal-600",
  },
  {
    id: 3,
    title: "Urban Pulse",
    client: "Smart City Initiative",
    description: "Real-time traffic and utility monitoring dashboard for smart cities, utilizing IoT sensors to reduce carbon footprints.",
    tags: ["IoT", "Dashboard", "Web App"],
    stats: [
      { label: "Sensors", value: "50k+" },
      { label: "Cities", value: "14" },
      { label: "Efficiency", value: "+30%" }
    ],
    videoUrl: image,
    accent: "from-blue-500 to-cyan-600",
  }
];

const PROJECT_LENGTH = PROJECT_DATA.length;

// ============ MEMOIZED SUB-COMPONENTS ============

const Tag = memo(({ tag }) => (
  <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider px-3 py-1 bg-white/5 border border-white/10 rounded-full text-gray-300">
    {tag}
  </span>
));
Tag.displayName = 'Tag';

const Stat = memo(({ stat }) => (
  <div className="text-center">
    <div className="text-xl md:text-2xl font-bold">{stat.value}</div>
    <div className="text-[10px] uppercase text-gray-500 tracking-wider">{stat.label}</div>
  </div>
));
Stat.displayName = 'Stat';

const NavButton = memo(({ direction, onClick, disabled }) => (
  <button 
    onClick={onClick}
    disabled={disabled}
    className="w-14 h-14 rounded-full border border-white/10 bg-black/20 backdrop-blur-sm flex items-center justify-center hover:bg-white hover:text-black disabled:opacity-50 active:scale-95"
    style={{
      transition: 'background-color 0.2s ease, color 0.2s ease, transform 0.1s ease',
      transform: 'translateZ(0)',
    }}
    aria-label={direction === 'prev' ? 'Previous Project' : 'Next Project'}
  >
    {direction === 'prev' ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
  </button>
));
NavButton.displayName = 'NavButton';

const LiveBadge = memo(() => (
  <div className="absolute top-6 right-6 bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2 border border-white/10 z-10">
    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
    <span className="text-xs font-bold uppercase tracking-wider">Live Preview</span>
  </div>
));
LiveBadge.displayName = 'LiveBadge';

// ============ MAIN COMPONENT ============

const FeatureWork = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState('next');
  
  const timerRef = useRef(null);
  const isAnimatingRef = useRef(false);

  const currentProject = useMemo(() => PROJECT_DATA[currentIndex], [currentIndex]);
  
  // Preload next image
  const nextIndex = (currentIndex + 1) % PROJECT_LENGTH;
  const nextProject = PROJECT_DATA[nextIndex];

  useEffect(() => {
    isAnimatingRef.current = isAnimating;
  }, [isAnimating]);

  const handleNext = useCallback(() => {
    if (isAnimatingRef.current) return;
    setIsAnimating(true);
    setDirection('next');
    setCurrentIndex((prev) => (prev + 1) % PROJECT_LENGTH);
  }, []);

  const handlePrev = useCallback(() => {
    if (isAnimatingRef.current) return;
    setIsAnimating(true);
    setDirection('prev');
    setCurrentIndex((prev) => (prev - 1 + PROJECT_LENGTH) % PROJECT_LENGTH);
  }, []);

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => setIsAnimating(false), 600);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, isAnimating]);

  useEffect(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    
    timerRef.current = setInterval(() => {
      if (!isAnimatingRef.current) {
        handleNext();
      }
    }, 5000);

    return () => clearInterval(timerRef.current);
  }, [handleNext, currentIndex]);

  return (
    <div 
      className="relative min-h-screen bg-[#111] text-white overflow-hidden font-sans selection:bg-white/20"
      style={{
        contain: 'layout style paint',
        isolation: 'isolate',
      }}
    >
      
      {/* Preload next image */}
      <div className="hidden" aria-hidden="true">
        <img src={nextProject.videoUrl} alt="" loading="eager" />
      </div>

      {/* Background Ambience */}
      <div 
        className={`absolute inset-0 bg-gradient-to-br ${currentProject.accent} opacity-10 pointer-events-none`}
        style={{
          transition: 'background 0.8s ease',
          transform: 'translateZ(0)',
        }}
        aria-hidden="true"
      />
      <div 
        className="absolute top-0 right-0 w-2/3 h-full bg-[#161616] skew-x-12 translate-x-32 hidden lg:block pointer-events-none" 
        aria-hidden="true"
      />

      {/* Navbar */}
      <nav className="absolute top-0 left-0 right-0 z-50 px-6 py-6 md:px-12 flex justify-between items-center pointer-events-none">
        <div className="text-xl font-bold tracking-tighter uppercase flex items-center gap-2 pointer-events-auto">
          <div 
            className={`w-3 h-3 rounded-full bg-gradient-to-r ${currentProject.accent}`}
            style={{ transition: 'background 0.5s ease' }}
          />
          Agency<span className="text-gray-500">Portfolio</span>
        </div>
        <div className="text-xs font-mono text-gray-400">
          0{currentIndex + 1} / 0{PROJECT_LENGTH}
        </div>
      </nav>

      {/* Main Carousel Area */}
      <div className="relative z-10 container mx-auto px-4 md:px-8 h-screen flex flex-col lg:flex-row items-center justify-center pt-20 lg:pt-0 gap-6 lg:gap-0">
        
        {/* ============ LEFT SIDE: CONTENT CARD (FIXED HEIGHT) ============ */}
        <div 
          className="w-full lg:w-1/2 z-20"
          style={{
            transform: isAnimating 
              ? `translate3d(${direction === 'next' ? '-40px' : '40px'}, 0, 0)` 
              : 'translate3d(0, 0, 0)',
            opacity: isAnimating ? 0 : 1,
            transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.6s ease-out',
            willChange: isAnimating ? 'transform, opacity' : 'auto',
            backfaceVisibility: 'hidden',
          }}
        >
          {/* 
            FIXED HEIGHT CARD
            - Mobile: h-[420px] 
            - Desktop: h-[480px]
            - Uses flex column with justify-between to distribute content
          */}
          <div 
            className="relative bg-black/40 border border-white/10 p-6 md:p-8 lg:p-10 rounded-3xl shadow-2xl lg:mr-[-80px] h-[420px] md:h-[460px] lg:h-[500px] flex flex-col"
            style={{
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              transform: 'translateZ(0)',
              contain: 'layout style paint',
            }}
          >
            {/* Top Section - Tags */}
            <div className="flex-shrink-0">
              <div className="flex flex-wrap gap-2 mb-4">
                {currentProject.tags.map((tag, idx) => (
                  <Tag key={idx} tag={tag} />
                ))}
              </div>
            </div>

            {/* Middle Section - Title & Description (Flexible with overflow handling) */}
            <div className="flex-1 flex flex-col justify-center min-h-0 overflow-hidden">
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight mb-3 line-clamp-2">
                {currentProject.title}
              </h1>
              <p className="text-sm md:text-base text-gray-400 max-w-md leading-relaxed line-clamp-3 md:line-clamp-4">
                {currentProject.description}
              </p>
            </div>

            {/* Bottom Section - Stats & CTA (Fixed at bottom) */}
            <div className="flex-shrink-0 mt-auto">
              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-4 md:gap-6 border-t border-white/10 pt-4 md:pt-6 mb-4 md:mb-6">
                {currentProject.stats.map((stat, idx) => (
                  <Stat key={idx} stat={stat} />
                ))}
              </div>

              {/* CTA Button */}
              <button 
                className={`group flex items-center justify-center gap-3 w-full md:w-auto px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r ${currentProject.accent} rounded-xl font-bold text-sm tracking-wide active:scale-95`}
                style={{
                  transform: 'translateZ(0)',
                  transition: 'transform 0.15s ease',
                }}
              >
                <span>View Case Study</span>
                <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-200" />
              </button>
            </div>
          </div>
        </div>

        {/* ============ RIGHT SIDE: IMAGE CONTAINER (MATCHING HEIGHT) ============ */}
        <div className="w-full lg:w-3/5 h-[300px] md:h-[400px] lg:h-[500px] relative">
          
          {/* Image Wrapper with Animation */}
          <div 
            className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-2xl border border-white/5"
            style={{
              transform: isAnimating ? 'scale3d(0.95, 0.95, 1)' : 'scale3d(1, 1, 1)',
              opacity: isAnimating ? 0.5 : 1,
              filter: isAnimating ? 'grayscale(100%)' : 'grayscale(0%)',
              transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.6s ease, filter 0.6s ease',
              willChange: isAnimating ? 'transform, opacity, filter' : 'auto',
              backfaceVisibility: 'hidden',
              contain: 'strict',
            }}
          >
            {/* Main Image */}
            <img
              className="absolute inset-0 w-full h-full object-cover"
              src={currentProject.videoUrl}
              alt={`${currentProject.title} preview`}
              loading="eager"
              decoding="sync"
              style={{
                transform: 'translateZ(0)',
              }}
            />
            
            {/* Overlay Gradient */}
            <div 
              className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 pointer-events-none" 
              aria-hidden="true"
            />

            {/* Live Badge */}
            <LiveBadge />
          </div>

          {/* Decorative Glow */}
          <div 
            className={`absolute -inset-4 -z-10 bg-gradient-to-r ${currentProject.accent} rounded-[2.5rem] opacity-15 pointer-events-none`}
            style={{
              filter: 'blur(40px)',
              transform: 'translateZ(0)',
              transition: 'background 0.8s ease',
            }}
            aria-hidden="true"
          />
        </div>

      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 right-8 lg:bottom-12 lg:right-24 flex gap-4 z-30">
        <NavButton direction="prev" onClick={handlePrev} disabled={isAnimating} />
        <NavButton direction="next" onClick={handleNext} disabled={isAnimating} />
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10">
        <div 
          className={`h-full bg-gradient-to-r ${currentProject.accent} origin-left`}
          style={{ 
            transform: `scaleX(${(currentIndex + 1) / PROJECT_LENGTH})`,
            transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
            willChange: 'transform',
          }}
        />
      </div>

    </div>
  );
};

export default FeatureWork;