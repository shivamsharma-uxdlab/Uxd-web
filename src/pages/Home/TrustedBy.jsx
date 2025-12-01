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
// This prevents React from re-rendering 60 times a second per number
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
      
      // Ease-out expo function for smooth number rolling
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
        className="text-3xl md:text-5xl font-bold text-[#CC28B3] mb-2 tabular-nums"
      >
        0{suffix}
      </div>
      <p className="text-gray-700 text-sm leading-relaxed font-medium">
        {label}
      </p>
    </div>
  );
});

// --- Vertical Marquee (CSS Animation) ---
const VerticalImageMarquee = memo(() => {
  // Duplicating list for seamless loop
  const scrollingImages = [...projectImages, ...projectImages];

  return (
    <div className="relative h-[70vh] w-[25.6rem] md:w-[32rem] mx-auto overflow-hidden">
      {/* Gradient Overlays - Pointer events none to allow scrolling if needed */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute top-0 h-24 w-full bg-gradient-to-b from-[#FFF0FC] to-transparent"></div>
        <div className="absolute bottom-0 h-24 w-full bg-gradient-to-t from-[#FFF0FC] to-transparent"></div>
      </div>

      {/* CSS Animated Container */}
      <div className="flex flex-col animate-scroll-vertical will-change-transform">
        {scrollingImages.map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className="p-3 my-2 flex justify-center items-center shrink-0"
          >
            <div className="w-full h-72 bg-white rounded-lg overflow-hidden shadow-lg border border-[#CC28B3]/20 hover:scale-[1.02] transition-transform duration-300 hover:border-[#CC28B3]/50">
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
  const statsRef = useRef(null);

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

  return (
    <section className="w-full min-h-[70vh] bg-gradient-to-br from-[#CC28B3]/5 via-[#FFF0FC] to-[#CC28B3]/10 text-black flex flex-col md:flex-row items-center justify-between px-6 py-12 lg:px-12 overflow-hidden">
      
      {/* Injecting Keyframes for Marquee */}
      <style>{`
        @keyframes scrollVertical {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        .animate-scroll-vertical {
          animation: scrollVertical 40s linear infinite;
        }
        /* Pause on hover if desired, remove if not */
        .animate-scroll-vertical:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Left Content */}
      <div className="max-w-[45.2rem] mb-12 md:mb-0 md:pr-10 ml-0 md:ml-[8%] text-center md:text-left flex-shrink-0 z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-black">
            Trusted by
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-10">
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
          <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl font-bold text-black mb-6">
            Our Pillars of Partnership
          </motion.h2>
          
          <ul className="space-y-5 mb-12">
            {[
              { title: "Strategic Innovation", desc: "We act as strategic partners to uncover new opportunities and drive market disruption." },
              { title: "Unwavering Quality", desc: "Pixel-perfect design and robust engineering ensure your product is beautiful and built to last." },
              { title: "Transparent Collaboration", desc: "Open communication makes you an integral part of our team throughout the entire process." },
            ].map((item, index) => (
              <motion.li key={index} variants={itemVariants} className="flex items-start space-x-3 text-left">
                <div className="flex-shrink-0 mt-1 text-[#CC28B3]">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-black">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Stats Section - Optimized with Refs */}
        <div ref={statsRef} className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          <StatItem target="1000+" label="Apps & Products" start={startCount} />
          <StatItem target="30+" label="Awards" start={startCount} />
          <StatItem target="500+" label="Global Brands" start={startCount} />
          <StatItem target="10+" label="Years Success" start={startCount} />
        </div>
      </div>

      {/* Right Side: CSS Marquee */}
      <div className="mt-12 md:mt-0 flex-shrink-0 md:pl-16 flex justify-center w-full md:w-auto relative z-0">
        <VerticalImageMarquee />
      </div>
    </section>
  );
}