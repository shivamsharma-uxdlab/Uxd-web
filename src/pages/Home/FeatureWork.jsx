import React, { useState, useEffect, useCallback, useRef, useMemo, memo } from 'react';
import { ChevronLeft, ChevronRight, ArrowUpRight, Sparkles, ArrowLeft, ArrowRight } from 'lucide-react';
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
  <span className="text-[8px] xs:text-[9px] sm:text-[10px] md:text-xs 
    font-bold uppercase tracking-wider 
    px-2 xs:px-2.5 sm:px-3 py-0.5 xs:py-1 
    bg-white/5 border border-white/10 rounded-full text-gray-300">
    {tag}
  </span>
));
Tag.displayName = 'Tag';

const Stat = memo(({ stat }) => (
  <div className="text-center">
    <div className="text-base xs:text-lg sm:text-xl md:text-2xl font-bold">{stat.value}</div>
    <div className="text-[8px] xs:text-[9px] sm:text-[10px] uppercase text-gray-500 tracking-wider">{stat.label}</div>
  </div>
));
Stat.displayName = 'Stat';

const NavButton = memo(({ direction, onClick, disabled }) => (
  <button 
    onClick={onClick}
    disabled={disabled}
    className="w-10 h-10 xs:w-11 xs:h-11 sm:w-12 sm:h-12 md:w-14 md:h-14
      rounded-full border border-white/10 bg-white backdrop-blur-sm
      flex items-center justify-center text-black
      hover:bg-black/20 hover:text-white
      disabled:opacity-50 active:scale-95
      transition-all duration-200"
    style={{
      transform: 'translateZ(0)',
    }}
    aria-label={direction === 'prev' ? 'Previous Project' : 'Next Project'}
  >
    {direction === 'prev' ?
      <ArrowLeft className="w-4 h-4 xs:w-5 xs:h-5 sm:w-5 sm:h-5 md:w-6 md:h-6" /> :
      <ArrowRight className="w-4 h-4 xs:w-5 xs:h-5 sm:w-5 sm:h-5 md:w-6 md:h-6" />
    }
  </button>
));
NavButton.displayName = 'NavButton';

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
      className="relative min-h-full lg:min-h-screen bg-[#111] text-white overflow-hidden font-sans selection:bg-white/20"
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

      {/* ============ RESPONSIVE NAVBAR ============ */}
      <nav className="absolute top-0 left-0 right-0 z-50 
        px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 
        py-4 xs:py-5 sm:py-6 
        pointer-events-none">
        
        <div className="pointer-events-auto flex flex-col items-center text-center gap-2 xs:gap-2.5 sm:gap-3 mx-auto max-w-4xl">

          {/* BADGE */}
          <span className="inline-flex items-center gap-1.5 xs:gap-2 
            py-1 xs:py-1.5 px-2.5 xs:px-3 sm:px-4 
            rounded-full bg-white/5 border border-white/10 
            text-gray-300 
            text-[9px] xs:text-[10px] sm:text-xs 
            font-semibold tracking-wider">
           
            FEATURED WORK
          </span>

          {/* MAIN HEADING */}
          <h2 className="flex flex-wrap items-center justify-center gap-1.5 xs:gap-2 
            text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl 
            font-bold tracking-tight uppercase">
            <div
              className={`w-2 h-2 xs:w-2.5 xs:h-2.5 sm:w-3 sm:h-3 
                rounded-full bg-gradient-to-r ${currentProject.accent} 
                flex-shrink-0`}
              style={{ transition: "background 0.5s ease" }}
            />
            <span>Showcase of</span>
            <span className="text-gray-500">Excellence</span>
          </h2>

          {/* SUBTITLE */}
          <p className="text-[10px] xs:text-xs sm:text-sm md:text-base 
            text-gray-400 leading-relaxed 
            max-w-[280px] xs:max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl
            px-2 xs:px-0">
            <span className="hidden xs:inline">
              See how we turn bold ideas into powerful digital solutions that drive measurable impact.
            </span>
            <span className="xs:hidden">
              Bold ideas into powerful digital solutions.
            </span>
          </p>

          {/* Slide Counter - Visible on all screens */}
          <div className="flex items-center gap-2 mt-1 xs:mt-2">
            <div className="text-[10px] xs:text-xs sm:text-sm font-mono text-gray-500">
              <span className="text-white font-bold">0{currentIndex + 1}</span>
              <span className="mx-1">/</span>
              <span>0{PROJECT_LENGTH}</span>
            </div>
          </div>

        </div>
      </nav>

      {/* Main Carousel Area */}
      <div className="relative z-10 container mx-auto 
        px-4 xs:px-5 sm:px-6 md:px-8 
        lg:h-screen 
h-full  
        flex flex-col lg:flex-row 
        items-center justify-center 
        pt-32 xs:pt-36 sm:pt-40 md:pt-44 lg:pt-24
        pb-24 xs:pb-28 sm:pb-24 lg:pb-16
        gap-4 xs:gap-5 sm:gap-6 lg:gap-0">
        
        {/* ============ LEFT SIDE: CONTENT CARD ============ */}
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
          <div 
            className="relative bg-black/40 border border-white/10 
              p-4 xs:p-5 sm:p-6 md:p-8 lg:p-10 
              rounded-2xl xs:rounded-2xl sm:rounded-3xl 
              shadow-2xl lg:mr-[-80px] 
              h-[300px] xs:h-[320px] sm:h-[380px] md:h-[420px] lg:h-[460px] xl:h-[500px]
              flex flex-col"
            style={{
              backdropFilter: 'blur(1px)',
              WebkitBackdropFilter: 'blur(1px)',
              transform: 'translateZ(0)',
              contain: 'layout style paint',
            }}
          >
            {/* Top Section - Tags */}
            <div className="flex-shrink-0">
              <div className="flex flex-wrap gap-1.5 xs:gap-2 mb-3 xs:mb-4">
                {currentProject.tags.slice(0, 3).map((tag, idx) => (
                  <Tag key={idx} tag={tag} />
                ))}
                {currentProject.tags.length > 3 && (
                  <span className="text-[8px] xs:text-[9px] sm:text-[10px] text-gray-500 self-center">
                    +{currentProject.tags.length - 3}
                  </span>
                )}
              </div>
            </div>

            {/* Middle Section - Title & Description */}
            <div className="flex-1 flex flex-col justify-center min-h-0 overflow-hidden">
              <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
                font-bold leading-tight mb-2 xs:mb-3 line-clamp-2">
                {currentProject.title}
              </h2>
              <p className="text-xs xs:text-sm sm:text-sm md:text-base 
                text-gray-400 max-w-md leading-relaxed 
                line-clamp-2 xs:line-clamp-3 sm:line-clamp-3 md:line-clamp-4">
                {currentProject.description}
              </p>
            </div>

            {/* Bottom Section - Stats & CTA */}
            <div className="flex-shrink-0 mt-auto">
              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-2 xs:gap-3 sm:gap-4 md:gap-6 
                border-t border-white/10 
                pt-3 xs:pt-4 sm:pt-5 md:pt-6 
                mb-3 xs:mb-4 sm:mb-5 md:mb-6">
                {currentProject.stats.map((stat, idx) => (
                  <Stat key={idx} stat={stat} />
                ))}
              </div>

              {/* CTA Button */}
              <button 
                className={`group flex items-center justify-center gap-2 xs:gap-3 
                  w-full sm:w-auto 
                  px-4 xs:px-5 sm:px-6 md:px-8 
                  py-2.5 xs:py-3 sm:py-3.5 md:py-4 
                  bg-gradient-to-r ${currentProject.accent} 
                  rounded-lg xs:rounded-xl 
                  font-bold text-xs xs:text-sm tracking-wide active:scale-95`}
                style={{
                  transform: 'translateZ(0)',
                  transition: 'transform 0.15s ease',
                }}
              >
                <span>View Case Study</span>
                <ArrowUpRight className="w-3 h-3 xs:w-4 xs:h-4 group-hover:rotate-45 transition-transform duration-200" />
              </button>
            </div>
          </div>
        </div>

        {/* ============ RIGHT SIDE: IMAGE CONTAINER ============ */}
        <div className="w-full lg:w-3/5 
          h-[180px] xs:h-[200px] sm:h-[280px] md:h-[350px] lg:h-[460px] xl:h-[500px] 
          relative">
          
          {/* Image Wrapper with Animation */}
          <div 
            className="relative w-full h-full 
              rounded-xl xs:rounded-2xl sm:rounded-[1.5rem] md:rounded-[2rem] 
              overflow-hidden shadow-2xl border border-white/5"
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

            {/* Project Name Badge on Image */}
            <div className="absolute bottom-3 left-3 xs:bottom-4 xs:left-4 sm:bottom-5 sm:left-5
              bg-black/60 backdrop-blur-xs 
              px-2 xs:px-3 sm:px-4 py-1 xs:py-1.5 sm:py-2 
              rounded-full border border-white/10">
              <span className="text-[9px] xs:text-[10px] sm:text-xs font-bold uppercase tracking-wider text-gray-300">
                {currentProject.client}
              </span>
            </div>
          </div>

          {/* Decorative Glow */}
          <div 
            className={`absolute -inset-2 xs:-inset-3 sm:-inset-4 -z-10 
              bg-gradient-to-r ${currentProject.accent} 
              rounded-2xl xs:rounded-[2rem] sm:rounded-[2.5rem] 
              opacity-15 pointer-events-none`}
            style={{
              filter: 'blur(30px)',
              transform: 'translateZ(0)',
              transition: 'background 0.8s ease',
            }}
            aria-hidden="true"
          />
        </div>

      </div>

      {/* ============ NAVIGATION CONTROLS ============ */}
      <div className="absolute 
        bottom-6 xs:bottom-8 sm:bottom-10 md:bottom-12 
        left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:right-24 
        flex items-center gap-3 xs:gap-4 z-30">
        
        {/* Previous Button */}
        <NavButton direction="prev" onClick={handlePrev} disabled={isAnimating} />
        
        {/* Current Slide Indicator - Mobile Only */}
        <div className="flex lg:hidden items-center gap-1.5">
          {PROJECT_DATA.map((_, idx) => (
            <div 
              key={idx}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === currentIndex 
                  ? `w-6 bg-gradient-to-r ${currentProject.accent}` 
                  : 'w-1.5 bg-white/20'
              }`}
            />
          ))}
        </div>
        
        {/* Next Button */}
        <NavButton direction="next" onClick={handleNext} disabled={isAnimating} />
      </div>


    </div>
  );
};

export default FeatureWork;