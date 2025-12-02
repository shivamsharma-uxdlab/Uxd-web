import React, { useState, useEffect, useRef, memo } from "react";
import { motion } from "framer-motion";

// --- Static Data ---
const projectImages = [
  { id: 1, alt: "Project 1", url: "/assets/images/Group-157.webp" },
  { id: 2, alt: "Project 2", url: "/assets/images/Group-158.webp" },
  { id: 3, alt: "Project 3", url: "/assets/images/Group-159.webp" },
  { id: 4, alt: "Project 4", url: "/assets/images/Group-160.webp" },
  { id: 5, alt: "Project 5", url: "/assets/images/Group-161.webp" },
  { id: 6, alt: "Project 6", url: "/assets/images/Group-162.webp" },
  { id: 7, alt: "Project 7", url: "/assets/images/Group-163.webp" },
  { id: 8, alt: "Project 8", url: "/assets/images/Group-165.webp" },
  { id: 9, alt: "Project 9", url: "/assets/images/Group-166.webp" },
  { id: 10, alt: "Project 10", url: "/assets/images/Group-167.webp" },
  { id: 11, alt: "Project 11", url: "/assets/images/Group-168.webp" },
  { id: 12, alt: "UXD Lab Logo", url: "/assets/images/uxdlab-logo.webp" },
];

// --- Optimized Counter Component (Direct DOM Manipulation) ---
const StatItem = memo(({ target, label, start }) => {
  const ref = useRef(null);
  const numericValue = parseInt(target.replace(/[^\d]/g, ""));
  const suffix = target.replace(/\d/g, "");

  useEffect(() => {
    if (!start || !ref.current) return;

    let startTime;
    const duration = 2000;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeValue = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const currentCount = Math.floor(easeValue * numericValue);
      
      if (ref.current) {
        ref.current.innerText = currentCount.toLocaleString() + suffix;
      }

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [start, numericValue, suffix]);

  return (
    <div className="text-center">
      <div 
        ref={ref} 
        className="text-2xl xs:text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-5xl 
          font-bold text-[#CC28B3] mb-1 xs:mb-2 tabular-nums"
      >
        0{suffix}
      </div>
      <p className="text-gray-700 text-xs xs:text-sm sm:text-sm md:text-base leading-relaxed font-medium">
        {label}
      </p>
    </div>
  );
});

// --- Horizontal Marquee for Mobile/Tablet (< 1024px) ---
const HorizontalImageMarquee = memo(() => {
  const scrollingImages = [...projectImages, ...projectImages];

  return (
    <div className="relative w-full overflow-hidden">
      {/* Gradient Overlays */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute left-0 top-0 bottom-0 w-12 xs:w-16 sm:w-20 bg-gradient-to-r from-[#FFF0FC] to-transparent"></div>
        <div className="absolute right-0 top-0 bottom-0 w-12 xs:w-16 sm:w-20 bg-gradient-to-l from-[#FFF0FC] to-transparent"></div>
      </div>

      {/* CSS Animated Container - Horizontal Scroll */}
      <div className="flex animate-scroll-horizontal will-change-transform">
        {scrollingImages.map((item, index) => (
          <div
            key={`h-${item.id}-${index}`}
            className="px-2 xs:px-3 sm:px-4 flex justify-center items-center shrink-0"
          >
            <div className="w-48 xs:w-56 sm:w-64 md:w-72 
              h-36 xs:h-40 sm:h-48 md:h-56 
              bg-white rounded-lg overflow-hidden shadow-lg 
              border border-[#CC28B3]/20 
              hover:scale-[1.02] transition-transform duration-300 
              hover:border-[#CC28B3]/50"
            >
              <img
                src={item.url}
                alt={item.alt}
                loading="lazy" 
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

// --- Vertical Marquee for Desktop (>= 1024px) ---
const VerticalImageMarquee = memo(() => {
  const scrollingImages = [...projectImages, ...projectImages];

  return (
    <div className="relative 
      h-[50vh] lg:h-[60vh] xl:h-[70vh] 2xl:h-[75vh] 
      w-full lg:w-[22rem] xl:w-[26rem] 2xl:w-[32rem] 
      mx-auto overflow-hidden"
    >
      {/* Gradient Overlays */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute top-0 h-16 lg:h-20 xl:h-24 w-full bg-gradient-to-b from-[#FFF0FC] to-transparent"></div>
        <div className="absolute bottom-0 h-16 lg:h-20 xl:h-24 w-full bg-gradient-to-t from-[#FFF0FC] to-transparent"></div>
      </div>

      {/* CSS Animated Container - Vertical Scroll */}
      <div className="flex flex-col animate-scroll-vertical will-change-transform">
        {scrollingImages.map((item, index) => (
          <div
            key={`v-${item.id}-${index}`}
            className="p-2 lg:p-3 my-1 lg:my-2 flex justify-center items-center shrink-0"
          >
            <div className="w-full 
              h-48 lg:h-56 xl:h-64 2xl:h-72 
              bg-white rounded-lg overflow-hidden shadow-lg 
              border border-[#CC28B3]/20 
              hover:scale-[1.02] transition-transform duration-300 
              hover:border-[#CC28B3]/50"
            >
              <img
                src={item.url}
                alt={item.alt}
                loading="lazy" 
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

// --- Main Component ---
export default function TrustedBy() {
  const [startCount, setStartCount] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const statsRef = useRef(null);

  // Check screen size for marquee direction
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const pillars = [
    { title: "Strategic Innovation", desc: "We act as strategic partners to uncover new opportunities and drive market disruption." },
    { title: "Unwavering Quality", desc: "Pixel-perfect design and robust engineering ensure your product is beautiful and built to last." },
    { title: "Transparent Collaboration", desc: "Open communication makes you an integral part of our team throughout the entire process." },
  ];

  return (
    <section className="w-full 
      min-h-[auto] xs:min-h-[auto] sm:min-h-[auto] md:min-h-[70vh] lg:min-h-[80vh] xl:min-h-[85vh] 2xl:min-h-[90vh]
      bg-gradient-to-br from-[#CC28B3]/5 via-[#FFF0FC] to-[#CC28B3]/10 
      text-black 
      flex flex-col lg:flex-row 
      items-center justify-between 
      px-4 xs:px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16
      py-8 xs:py-10 sm:py-12 md:py-14 lg:py-16 xl:py-20 2xl:py-24
      overflow-hidden"
    >
      
      {/* Keyframes for Both Marquee Directions */}
      <style>{`
        @keyframes scrollVertical {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes scrollHorizontal {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-vertical {
          animation: scrollVertical 40s linear infinite;
        }
        .animate-scroll-horizontal {
          animation: scrollHorizontal 30s linear infinite;
        }
        .animate-scroll-vertical:hover,
        .animate-scroll-horizontal:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Left Content */}
      <div className="w-full lg:w-1/2 xl:w-[55%] 2xl:w-[50%]
        max-w-none xs:max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-none
        mb-8 xs:mb-10 sm:mb-12 lg:mb-0 
        lg:pr-6 xl:pr-10 2xl:pr-16
        lg:ml-[2%] xl:ml-[4%] 2xl:ml-[6%]
        text-center lg:text-left 
        flex-shrink-0 z-10
        mx-auto lg:mx-0"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl xs:text-4xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl 
            font-bold leading-tight 
            mb-3 xs:mb-4 sm:mb-5 md:mb-6 
            text-black"
          >
            Trusted by
          </h1>
          <p className="text-sm xs:text-base sm:text-lg md:text-lg lg:text-lg xl:text-xl 
            text-gray-700 leading-relaxed 
            mb-6 xs:mb-8 sm:mb-10 
            max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl
            mx-auto lg:mx-0"
          >
            Empowering Global Brands and Startups to Drive Innovation and Success
            with our unparalleled expertise and commitment to excellence.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 
            variants={itemVariants} 
            className="text-xl xs:text-2xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl 
              font-bold text-black 
              mb-4 xs:mb-5 sm:mb-6"
          >
            Our Pillars of Partnership
          </motion.h2>
          
          <ul className="space-y-3 xs:space-y-4 sm:space-y-5 
            mb-8 xs:mb-10 sm:mb-12
            max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl
            mx-auto lg:mx-0"
          >
            {pillars.map((item, index) => (
              <motion.li 
                key={index} 
                variants={itemVariants} 
                className="flex items-start space-x-2 xs:space-x-3 text-left"
              >
                <div className="flex-shrink-0 mt-0.5 xs:mt-1 text-[#CC28B3]">
                  <svg className="w-4 h-4 xs:w-5 xs:h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-black text-sm xs:text-base sm:text-base md:text-lg">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-xs xs:text-sm sm:text-sm md:text-base leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Stats Section */}
        <div 
          ref={statsRef} 
          className="grid grid-cols-2 sm:grid-cols-4 
            gap-3 xs:gap-4 sm:gap-5 md:gap-6 lg:gap-4 xl:gap-6
            max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl
            mx-auto lg:mx-0"
        >
          <StatItem target="1000+" label="Apps & Products" start={startCount} />
          <StatItem target="30+" label="Awards" start={startCount} />
          <StatItem target="500+" label="Global Brands" start={startCount} />
          <StatItem target="10+" label="Years Success" start={startCount} />
        </div>
      </div>

      {/* Right Side: Marquee - Conditional Rendering Based on Screen Size */}
      <div className="w-full lg:w-1/2 xl:w-[45%] 2xl:w-[50%]
        mt-8 xs:mt-10 sm:mt-12 lg:mt-0 
        flex-shrink-0 
        lg:pl-4 xl:pl-8 2xl:pl-12
        flex justify-center 
        relative z-0"
      >
        {isMobile ? (
          // Horizontal Marquee for Mobile & Tablet (< 1024px)
          <HorizontalImageMarquee />
        ) : (
          // Vertical Marquee for Desktop (>= 1024px)
          <VerticalImageMarquee />
        )}
      </div>
    </section>
  );
}