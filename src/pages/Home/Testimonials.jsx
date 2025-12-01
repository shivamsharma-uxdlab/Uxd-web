import { useState, useEffect, useRef, useCallback, useMemo, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

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
const SideCard = memo(({ testimonial, height, marginTop, side, showButton, onPaginate }) => (
  <div
    className="w-24 bg-gradient-to-br from-black to-[#320b47] text-white flex items-center justify-center relative shadow-lg gpu-accelerated"
    style={{
      height: `${height}px`,
      marginTop: `${marginTop}px`,
      writingMode: "vertical-rl",
      borderRadius: side === 'left' ? '8px 0 0 8px' : '0 8px 8px 0',
      transform: 'translateZ(0)',
      willChange: 'transform',
    }}
  >
    <span className="opacity-60 rotate-180 tracking-[0.4em] font-semibold">
      {testimonial.name}
    </span>
    {showButton && (
      <button
        onClick={onPaginate}
        className={`absolute top-2 ${side === 'left' ? 'left-2' : 'right-2'} bg-white shadow-md hover:scale-110 active:scale-95 w-10 h-10 flex items-center justify-center rounded-full text-black z-20`}
        style={{ transform: 'translateZ(0)' }}
      >
        {side === 'left' ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
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
      className="ml-5 h-2 bg-gray-700 rounded-full overflow-hidden"
      style={{ width: 130, opacity: 1 }}
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

export default function Testimonials() {
  const [[index, direction], setIndex] = useState([0, 0]);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const baseHeight = 462;
  const length = testimonial.length;
  const timerRef = useRef(null);
  const videoRef = useRef(null);
  const progressRAF = useRef(null);
  const containerRef = useRef(null);
  const isVisibleRef = useRef(true);

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
      className="relative w-full flex flex-col items-center py-12 bg-[#eef5ff] overflow-hidden"
      style={{ 
        contain: 'layout style paint',
        isolation: 'isolate',
      }}
    >
      {/* Static Title */}
      <div className="z-10 text-center px-4">
        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mt-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
            Elevating Vision
          </span>{' '}Into Reality
        </h2>
        <p className="text-gray-600 max-w-4xl text-center mt-3 mx-auto">
          We craft sophisticated, high-performance digital solutions designed to captivate.
        </p>
      </div>

      <div className="relative mt-16 flex items-center justify-center w-full min-h-[500px] px-4">
        
        {/* LEFT STACKED CARDS */}
        <div className="hidden md:flex flex-row gap-4 absolute left-[5%] z-10">
          {leftCards.map((t, i) => (
            <SideCard
              key={`left-${t.id}`}
              testimonial={t}
              height={baseHeight * (i === 0 ? 0.8 : 0.9)}
              marginTop={i === 0 ? 40 : 0}
              side="left"
              showButton={i === 1}
              onPaginate={() => paginate(-1)}
            />
          ))}
        </div>

        {/* CENTER MAIN CARD */}
        <div 
          className="w-[95%] md:w-[780px] lg:w-[900px] relative mx-auto z-20"
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
              className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl h-[462px] flex flex-col md:flex-row relative border border-gray-800"
              style={{ 
                willChange: 'transform, opacity',
                transform: 'translateZ(0)',
                backfaceVisibility: 'hidden',
              }}
            >
              {/* LEFT: DETAILS */}
              <div className="w-full md:w-1/2 p-7 md:p-10 flex flex-col text-white relative z-20">
                <div className="space-y-5">
                  <div className="px-3 py-1.5 bg-purple-900/40 rounded-full w-fit">
                    <span className="text-sm font-medium text-purple-300">{current.project}</span>
                  </div>

                  <div>
                    <p className="text-base font-semibold text-purple-400">{current.role}</p>
                    <h3 className="text-xl md:text-2xl font-bold text-white mt-1">{current.name}</h3>
                  </div>

                  <p className="text-gray-200 mt-6 leading-relaxed text-base md:text-lg italic">
                    "{current.review}"
                  </p>
                </div>

                {/* Controls */}
                <div className="mt-auto flex items-center pt-4">
                  <button
                    onClick={handleTogglePlay}
                    className="bg-gradient-to-r from-purple-600 to-pink-600 shadow-md hover:shadow-lg active:scale-95 w-14 h-14 flex items-center justify-center rounded-full text-white"
                    style={{ 
                      transform: 'translateZ(0)',
                      transition: 'transform 0.15s ease, box-shadow 0.15s ease',
                    }}
                  >
                    {isVideoPlaying ? <Pause size={22} /> : <Play size={22} className="ml-0.5" />}
                  </button>

                  <ProgressBar progress={progress} isVisible={isVideoPlaying} />
                </div>
              </div>

              {/* RIGHT: VIDEO */}
              <div 
                className="relative w-full md:w-1/2 h-[220px] md:h-full bg-black overflow-hidden"
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
                
                <div className="absolute bottom-4 right-4 bg-black/60 px-3 py-1.5 rounded-full text-xs font-medium text-gray-300">
                  {current.project}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* RIGHT STACKED CARDS */}
        <div className="hidden md:flex flex-row gap-4 absolute right-[5%] z-10">
          {rightCards.map((t, i) => (
            <SideCard
              key={`right-${t.id}`}
              testimonial={t}
              height={baseHeight * (i === 0 ? 0.9 : 0.8)}
              marginTop={i === 1 ? 40 : 0}
              side="right"
              showButton={i === 0}
              onPaginate={() => paginate(1)}
            />
          ))}
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="flex md:hidden gap-4 mt-8 z-10">
        <button
          onClick={() => paginate(-1)}
          className="bg-white shadow-md active:scale-95 w-12 h-12 flex items-center justify-center rounded-full text-black"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={() => paginate(1)}
          className="bg-white shadow-md active:scale-95 w-12 h-12 flex items-center justify-center rounded-full text-black"
        >
          <ChevronRight size={24} />
        </button>
      </div>

  
    </div>
  );
}