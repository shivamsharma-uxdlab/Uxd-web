import { useState, useEffect, useRef, useCallback, useMemo, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, Pause, PlayCircle, PauseCircle, ArrowLeft, ArrowRight } from "lucide-react";

const testimonial = [
  {
    id: 1,
    name: "ANIA MORGAN",
    role: "Fashion Director",
    project: "E-Commerce Fashion Shoot",
    review:
      "Working with this team was an incredible experience. The final output exceeded every expectation!",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: 2,
    name: "OAKES WILLIAMS",
    role: "Product Designer",
    project: "UI/UX Mobile App Design",
    review:
      "Amazing work. Clean, modern, and extremely user-friendly designs. Highly recommended.",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: 3,
    name: "KAITY JOHNSON",
    role: "Interior Artist",
    project: "Interior 3D Rendering",
    review:
      "The visuals were stunning and captured the ambiance perfectly. Fantastic attention to detail.",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: 4,
    name: "LAUREN SMITH",
    role: "Creative Lead",
    project: "Brand Identity Design",
    review:
      "Created a brand style that perfectly aligned with our target audience. Brilliant execution!",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: 5,
    name: "ANIA Price",
    role: "Fashion Director",
    project: "E-Commerce Fashion Shoot",
    review:
      "Working with this team was an incredible experience. The final output exceeded every expectation!",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: 6,
    name: "OAKES Brown",
    role: "Product Designer",
    project: "UI/UX Mobile App Design",
    review:
      "Amazing work. Clean, modern, and extremely user-friendly designs. Highly recommended.",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: 7,
    name: "KAITY Davis",
    role: "Interior Artist",
    project: "Interior 3D Rendering",
    review:
      "The visuals were stunning and captured the ambiance perfectly. Fantastic attention to detail.",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: 8,
    name: "LAURENc Wilson",
    role: "Creative Lead",
    project: "Brand Identity Design",
    review:
      "Created a brand style that perfectly aligned with our target audience. Brilliant execution!",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
];

// GPU-accelerated variants with optimized easing
const cardVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 80 : -80,
    opacity: 0,
    scale: 0.98,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
  exit: (direction) => ({
    x: direction < 0 ? 80 : -80,
    opacity: 0,
    scale: 0.98,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

// Memoized Side Card Component
const SideCard = memo(({ testimonial, height, marginTop, side, showButton, onPaginate, sideCardWidth }) => (
  <div
    className="bg-gradient-to-br from-black to-[#320b47] text-white flex items-center justify-center relative shadow-lg gpu-accelerated"
    style={{
      width: `${sideCardWidth}px`,
      height: `${height}px`,
      marginTop: `${marginTop}px`,
      writingMode: "vertical-rl",
      borderRadius: side === 'left' ? '8px 0 0 8px' : '0 8px 8px 0',
      transform: 'translateZ(0)',
      willChange: 'transform',
    }}
  >
    <span className="opacity-60 rotate-180 tracking-[0.4em] font-semibold text-xs xl:text-sm 2xl:text-base">
      {testimonial.name}
    </span>
    {showButton && (
      <button
        onClick={onPaginate}
        className={`absolute top-2 ${side === 'left' ? 'left-1 xl:left-2' : 'right-1 xl:right-2'} bg-white shadow-md hover:scale-110 active:scale-95 w-8 h-8 xl:w-10 xl:h-10 flex items-center justify-center rounded-full text-black z-20 transition-transform duration-150`}
        style={{ transform: 'translateZ(0)' }}
      >
        {side === 'left' ? <ChevronLeft className="w-4 h-4 xl:w-5 xl:h-5" /> : <ChevronRight className="w-4 h-4 xl:w-5 xl:h-5" />}
      </button>
    )}
  </div>
));

SideCard.displayName = 'SideCard';

// Memoized Progress Bar
const ProgressBar = memo(({ progress, isVisible }) => {
  if (!isVisible) return null;
  
  return (
    <div
      className="ml-3 sm:ml-4 xl:ml-5 h-1.5 sm:h-2 bg-gray-700 rounded-full overflow-hidden"
      style={{ width: '100px', maxWidth: '130px', opacity: 1 }}
    >
      <div
        className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
        style={{ 
          width: `${progress}%`,
          transform: 'translateZ(0)',
          transition: 'width 0.1s linear',
        }}
      />
    </div>
  );
});

ProgressBar.displayName = 'ProgressBar';

// Navigation Buttons Component
const NavigationButtons = memo(({ onPrev, onNext, size = "default" }) => {
  const sizeClasses = {
    small: "w-10 h-10",
    default: "w-12 h-12",
    large: "w-14 h-14"
  };

  const iconSizes = {
    small: 18,
    default: 22,
    large: 24
  };

  return (
    <div className="flex gap-3 sm:gap-4">
      <button
        onClick={onPrev}
        className={`${sizeClasses[size]} bg-white shadow-lg hover:shadow-xl active:scale-95 flex items-center justify-center rounded-full text-gray-800 hover:bg-gray-50 transition-all duration-200 border border-gray-100`}
        style={{ transform: 'translateZ(0)' }}
      >
        <ArrowLeft size={iconSizes[size]} />
      </button>
      <button
        onClick={onNext}
        className={`${sizeClasses[size]} bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg hover:shadow-xl active:scale-95 flex items-center justify-center rounded-full text-white transition-all duration-200`}
        style={{ transform: 'translateZ(0)' }}
      >
        <ArrowRight size={iconSizes[size]} />
      </button>
    </div>
  );
});

NavigationButtons.displayName = 'NavigationButtons';

export default function Testimonials() {
  const [[index, direction], setIndex] = useState([0, 0]);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const length = testimonial.length;
  const timerRef = useRef(null);
  const videoRef = useRef(null);
  const progressRAF = useRef(null);
  const containerRef = useRef(null);
  const isVisibleRef = useRef(true);

  // Responsive dimensions configuration
  const dimensions = useMemo(() => ({
    // Card heights per breakpoint
    cardHeight: {
      base: 560,      // Mobile (< 480px)
      xs: 520,        // 480px+
      sm: 480,        // 640px+
      md: 460,        // 768px+
      lg: 440,        // 1024px+ (tablet landscape)
      xl: 480,        // 1280px+
      '2xl': 520,     // 1536px+
    },
    // Side card widths
    sideCardWidth: {
      xl: 80,
      '2xl': 100,
    },
  }), []);

  const getIndex = useCallback((base, offset) => (base + offset + length) % length, [length]);

  // Memoized current and side cards
  const current = useMemo(() => testimonial[index], [index]);
  
  const leftCards = useMemo(() => [
    testimonial[getIndex(index, -2)], 
    testimonial[getIndex(index, -1)]
  ], [index, getIndex]);
  
  const rightCards = useMemo(() => [
    testimonial[getIndex(index, 1)], 
    testimonial[getIndex(index, 2)]
  ], [index, getIndex]);

  const startAutoScroll = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      if (isVisibleRef.current) {
        setIndex(([current]) => [(current + 1) % length, 1]);
      }
    }, 6000);
  }, [length]);

  const stopAutoScroll = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const paginate = useCallback((dir) => {
    setIndex(([current]) => [(current + dir + length) % length, dir]);
    stopAutoScroll();
    setTimeout(() => {
      if (!isVideoPlaying) startAutoScroll();
    }, 6000);
  }, [length, isVideoPlaying, startAutoScroll, stopAutoScroll]);

  const handleTogglePlay = useCallback(() => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
        setIsVideoPlaying(false);
        startAutoScroll();
      } else {
        videoRef.current.play();
        setIsVideoPlaying(true);
        stopAutoScroll();
      }
    }
  }, [isVideoPlaying, startAutoScroll, stopAutoScroll]);

  const handleVideoEnd = useCallback(() => {
    setIsVideoPlaying(false);
    setProgress(0);
    setTimeout(startAutoScroll, 3000);
  }, [startAutoScroll]);

  // Throttled progress update using RAF
  const updateProgress = useCallback(() => {
    if (!videoRef.current || !isVideoPlaying) return;
    
    const newProgress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
    setProgress(newProgress);
    
    progressRAF.current = requestAnimationFrame(updateProgress);
  }, [isVideoPlaying]);

  // Intersection Observer for visibility-based optimization
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
        if (entry.isIntersecting && !isVideoPlaying) {
          startAutoScroll();
        } else if (!entry.isIntersecting) {
          stopAutoScroll();
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [isVideoPlaying, startAutoScroll, stopAutoScroll]);

  // Auto scroll initialization
  useEffect(() => {
    startAutoScroll();
    return () => {
      clearInterval(timerRef.current);
      if (progressRAF.current) cancelAnimationFrame(progressRAF.current);
    };
  }, [startAutoScroll]);

  // Reset video on index change
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsVideoPlaying(false);
      setProgress(0);
    }
    if (progressRAF.current) {
      cancelAnimationFrame(progressRAF.current);
    }
  }, [index]);

  // Handle video progress with RAF
  useEffect(() => {
    if (isVideoPlaying) {
      progressRAF.current = requestAnimationFrame(updateProgress);
    } else if (progressRAF.current) {
      cancelAnimationFrame(progressRAF.current);
    }
    
    return () => {
      if (progressRAF.current) cancelAnimationFrame(progressRAF.current);
    };
  }, [isVideoPlaying, updateProgress]);

  return (
    <div 
      ref={containerRef}
      className="relative w-full flex flex-col items-center 
        py-4 xs:py-6 sm:py-8 md:py-10 lg:py-12 xl:py-14 2xl:py-20
        bg-[#eef5ff] overflow-hidden"
      style={{ 
        contain: 'layout style paint',
        isolation: 'isolate',
      }}
    >
      {/* Title Section */}
      <div className="z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900   leading-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
            Elevating Vision
          </span>{' '}
          <span className="block xs:inline">Into Reality</span>
        </h2>
        <p className="text-gray-600 max-w-2xl lg:max-w-4xl text-center mt-2 sm:mt-3 mx-auto text-sm sm:text-base lg:text-lg">
          We craft sophisticated, high-performance digital solutions designed to captivate.
        </p>
      </div>

      {/* Main Carousel Container */}
      <div className="relative mt-8 xs:mt-10 sm:mt-12 md:mt-14 lg:mt-14 xl:mt-16 flex items-center justify-center w-full 
        min-h-[520px] xs:min-h-[500px] sm:min-h-[460px] md:min-h-[480px] lg:min-h-[460px] xl:min-h-[520px] 2xl:min-h-[560px]
        px-4 sm:px-6 lg:px-8 xl:px-10">
        
        {/* LEFT STACKED CARDS - Only visible on xl+ screens (1280px+) */}
        <div className="hidden xl:flex flex-row gap-2 xl:gap-3 2xl:gap-4 absolute left-[2%] xl:left-[3%] 2xl:left-[6%] z-10">
          {leftCards.map((t, i) => (
            <SideCard
              key={`left-${t.id}`}
              testimonial={t}
              height={dimensions.cardHeight.xl * (i === 0 ? 0.75 : 0.85)}
              marginTop={i === 0 ? 50 : 20}
              side="left"
              showButton={i === 1}
              onPaginate={() => paginate(-1)}
              sideCardWidth={dimensions.sideCardWidth.xl}
            />
          ))}
        </div>

        {/* CENTER MAIN CARD */}
        <div 
          className="w-full xs:w-[95%] sm:w-[92%] md:w-[88%] lg:w-[80%] xl:w-[900px] 2xl:w-[1000px] relative mx-auto z-20"
          style={{ perspective: 1000 }}
        >
          <AnimatePresence mode="wait" custom={direction} initial={false}>
            <motion.div
              key={current.id}
              variants={cardVariants}
              initial="enter"
              animate="center"
              exit="exit"
              custom={direction}
              className="bg-gray-900 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl 
                h-[560px] xs:h-[520px] sm:h-[480px] md:h-[460px] lg:h-[440px] xl:h-[480px] 2xl:h-[520px]
                flex flex-col md:flex-row relative border border-gray-800"
              style={{ 
                willChange: 'transform, opacity',
                transform: 'translateZ(0)',
                backfaceVisibility: 'hidden',
              }}
            >
              {/* LEFT: DETAILS */}
              <div className="w-full md:w-1/2 p-5 xs:p-6 sm:p-7 md:p-6 lg:p-8 xl:p-10 flex flex-col text-white relative z-20 
                h-[320px] xs:h-[280px] sm:h-[240px] md:h-full">
                <div className="space-y-3 sm:space-y-3 md:space-y-3 lg:space-y-4 xl:space-y-5">
                  {/* Project Tag */}
                  <div className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-purple-900/40 rounded-full w-fit">
                    <span className="text-xs sm:text-sm font-medium text-purple-300">{current.project}</span>
                  </div>

                  {/* Role & Name */}
                  <div>
                    <p className="text-sm sm:text-base font-semibold text-purple-400">{current.role}</p>
                    <h3 className="text-lg xs:text-xl sm:text-xl md:text-xl lg:text-2xl xl:text-2xl 2xl:text-3xl font-bold text-white mt-0.5 sm:mt-1">
                      {current.name}
                    </h3>
                  </div>

                  {/* Review */}
                  <p className="text-gray-200 leading-relaxed text-sm sm:text-base lg:text-base xl:text-lg italic line-clamp-3 sm:line-clamp-3 md:line-clamp-4 lg:line-clamp-none">
                    "{current.review}"
                  </p>
                </div>

                {/* Play Controls */}
                <div className="mt-auto flex items-center pt-3 sm:pt-4">
                  <button
                    onClick={handleTogglePlay}
                    className="bg-gradient-to-r from-purple-600 to-pink-600 shadow-md hover:shadow-lg active:scale-95 
                      w-10 h-10 sm:w-12 sm:h-12 lg:w-12 lg:h-12 xl:w-14 xl:h-14 
                      flex items-center justify-center rounded-full text-white transition-all duration-150"
                    style={{ transform: 'translateZ(0)' }}
                  >
                    {isVideoPlaying ?
                      <PauseCircle className="w-4 h-4 sm:w-5 sm:h-5 lg:w-5 lg:h-5 xl:w-6 xl:h-6" /> :
                      <PlayCircle className="w-4 h-4 sm:w-5 sm:h-5 lg:w-5 lg:h-5 xl:w-6 xl:h-6 ml-0.5" />
                    }
                  </button>

                  <ProgressBar progress={progress} isVisible={isVideoPlaying} />
                </div>
              </div>

              {/* RIGHT: VIDEO */}
              <div 
                className="relative w-full md:w-1/2 
                  h-[240px] xs:h-[240px] sm:h-[240px] md:h-full 
                  bg-black overflow-hidden"
                style={{ contain: 'strict' }}
              >
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  muted={false}
                  playsInline
                  preload="metadata"
                  onEnded={handleVideoEnd}
                  onPlay={() => setIsVideoPlaying(true)}
                  onPause={() => setIsVideoPlaying(false)}
                  style={{ transform: 'translateZ(0)' }}
                >
                  <source src={current.video} type="video/mp4" />
                </video>
                
                {/* Video Overlay Badge */}
                <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 bg-black/60 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-medium text-gray-300">
                  {current.project}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* RIGHT STACKED CARDS - Only visible on xl+ screens (1280px+) */}
        <div className="hidden xl:flex flex-row gap-2 xl:gap-3 2xl:gap-4 absolute right-[2%] xl:right-[3%] 2xl:right-[6%] z-10">
          {rightCards.map((t, i) => (
            <SideCard
              key={`right-${t.id}`}
              testimonial={t}
              height={dimensions.cardHeight.xl * (i === 0 ? 0.85 : 0.75)}
              marginTop={i === 1 ? 50 : 20}
              side="right"
              showButton={i === 0}
              onPaginate={() => paginate(1)}
              sideCardWidth={dimensions.sideCardWidth.xl}
            />
          ))}
        </div>
      </div>

      {/* Navigation Controls - Visible on screens < xl (below 1280px) */}
      <div className="flex xl:hidden flex-col items-center gap-4 sm:gap-5 mt-6 xs:mt-8 sm:mt-8 md:mt-10 lg:mt-10 z-10">
        {/* Navigation Buttons */}
        <NavigationButtons 
          onPrev={() => paginate(-1)} 
          onNext={() => paginate(1)}
          size="default"
        />
        
        {/* Slide Counter for Mobile/Tablet */}
        <div className="flex items-center gap-2 text-gray-500 text-sm font-medium">
          <span className="text-purple-600 font-bold">{String(index + 1).padStart(2, '0')}</span>
          <span>/</span>
          <span>{String(length).padStart(2, '0')}</span>
        </div>
      </div>

      {/* Desktop Slide Counter - Only on xl+ screens */}
      <div className="hidden xl:flex justify-center items-center gap-2 mt-8 xl:mt-10 z-10 text-gray-500 text-sm font-medium">
        <span className="text-purple-600 font-bold text-lg">{String(index + 1).padStart(2, '0')}</span>
        <span className="text-base">/</span>
        <span className="text-lg">{String(length).padStart(2, '0')}</span>
      </div>
    </div>
  );
}