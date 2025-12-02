import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Award, Zap, ChevronLeft, ChevronRight, Activity, Medal } from 'lucide-react';

// --- Static Data ---
const partners = [
  {
    id: 1,
    title: "AWS Partner",
    subtitle: "Cloud Excellence",
    desc: "\"Empowering businesses with scalable cloud solutions and cutting-edge technologies.\"",
    icon: <Zap size={28} className="text-white" />,
    image: "/assets/marquieImages/aws-partner.webp",
    source: "Amazon Web Services",
  },
  {
    id: 2,
    title: "AWS Cloud Operations",
    subtitle: "Competency Certified",
    desc: "\"Delivering exceptional cloud operations and infrastructure management.\"",
    icon: <Star size={28} className="text-white" />,
    image: "/assets/marquieImages/aws-partner-cloud-operations-competerncy.webp",
    source: "Amazon Web Services",
  },
  {
    id: 3,
    title: "AWS Security Services",
    subtitle: "Competency Leader",
    desc: "\"Ensuring robust security frameworks for modern digital ecosystems.\"",
    icon: <Award size={28} className="text-white" />,
    image: "/assets/marquieImages/aws-partner-security-services-competency-removebg-preview.webp",
    source: "Amazon Web Services",
  },
  {
    id: 4,
    title: "CBSO Certified",
    subtitle: "Business Excellence",
    desc: "\"Committed to delivering outstanding business solutions and services.\"",
    icon: <Trophy size={28} className="text-white" />,
    image: "/assets/marquieImages/cbso.webp",
    source: "CBSO",
  },
  {
    id: 5,
    title: "Datadog Partner",
    subtitle: "Monitoring & Analytics",
    desc: "\"Providing comprehensive monitoring solutions for optimal performance.\"",
    icon: <Activity size={28} className="text-white" />,
    image: "/assets/marquieImages/datadog-wordmark.webp",
    source: "Datadog",
  },
  {
    id: 6,
    title: "Forbes Recognized",
    subtitle: "Industry Leader",
    desc: "\"Featured among the most innovative companies shaping the future.\"",
    icon: <Medal size={28} className="text-white" />,
    image: "/assets/marquieImages/forbes.webp",
    source: "Forbes",
  },
  {
    id: 7,
    title: "Google Best App",
    subtitle: "Award Winner",
    desc: "\"Creating exceptional mobile experiences that users love.\"",
    icon: <Star size={28} className="text-white" />,
    image: "/assets/marquieImages/google-best-app.webp",
    source: "Google",
  },
  {
    id: 8,
    title: "IBM Business Partner",
    subtitle: "Enterprise Solutions",
    desc: "\"Driving enterprise transformation through innovative IBM technologies.\"",
    icon: <Award size={28} className="text-white" />,
    image: "/assets/marquieImages/ibm-business-partner.webp",
    source: "IBM",
  },
  {
    id: 9,
    title: "ISO Certified",
    subtitle: "Quality Standards",
    desc: "\"Maintaining the highest standards of quality and compliance.\"",
    icon: <Trophy size={28} className="text-white" />,
    image: "/assets/marquieImages/iso.webp",
    source: "ISO",
  },
  {
    id: 10,
    title: "Microsoft Partner",
    subtitle: "Technology Alliance",
    desc: "\"Building powerful solutions with Microsoft's world-class platforms.\"",
    icon: <Star size={28} className="text-white" />,
    image: "/assets/marquieImages/microsoft.webp",
    source: "Microsoft",
  },
  {
    id: 11,
    title: "Mixpanel Partner",
    subtitle: "Analytics Expert",
    desc: "\"Unlocking insights through advanced product analytics.\"",
    icon: <Activity size={28} className="text-white" />,
    image: "/assets/marquieImages/mixpanel.webp",
    source: "Mixpanel",
  },
  {
    id: 12,
    title: "SOC 2 Compliant",
    subtitle: "Security Certified",
    desc: "\"Ensuring data security and privacy with industry-leading standards.\"",
    icon: <Award size={28} className="text-white" />,
    image: "/assets/marquieImages/soc2.webp",
    source: "SOC 2",
  },
  {
    id: 13,
    title: "Top App Developer",
    subtitle: "Excellence Award",
    desc: "\"Recognized for creating top-tier mobile applications.\"",
    icon: <Trophy size={28} className="text-white" />,
    image: "/assets/marquieImages/top-app-dev-company.webp",
    source: "Industry Awards",
  },
  {
    id: 14,
    title: "Top GenAI Company",
    subtitle: "AI Innovation",
    desc: "\"Leading the way in generative AI solutions and applications.\"",
    icon: <Star size={28} className="text-white" />,
    image: "/assets/marquieImages/top-genai-company-final.webp",
    source: "AI Awards",
  },
  {
    id: 15,
    title: "Webby Award Winner",
    subtitle: "Digital Excellence",
    desc: "\"Honored for outstanding achievements in web design and innovation.\"",
    icon: <Award size={28} className="text-white" />,
    image: "/assets/marquieImages/webby.webp",
    source: "Webby Awards",
  },
  {
    id: 16,
    title: "Xamarin Expert",
    subtitle: "Cross-Platform Dev",
    desc: "\"Mastering cross-platform development for seamless user experiences.\"",
    icon: <Activity size={28} className="text-white" />,
    image: "/assets/marquieImages/xamarin.webp",
    source: "Microsoft",
  },
];



// --- Main Component ---
const OurPartners = () => {
  const containerRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(340);
  const [gap, setGap] = useState(32);
  const [isInView, setIsInView] = useState(false);

  const totalItems = partners.length;

  // Create extended array for infinite loop (only one set of clones on each side)
  const displayPartners = [...partners, ...partners, ...partners];

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
        <div className="flex flex-col items-center text-center mb-10 sm:mb-14 md:mb-16 lg:mb-20 px-2 sm:px-4 gap-6">
          <div className="max-w-4xl">
            <h3 className="text-slate-600 font-bold tracking-[0.15em] sm:tracking-[0.2em] uppercase text-xs sm:text-sm mb-3 sm:mb-4">
              Strategic Partnerships
            </h3>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-slate-900 leading-tight">
              Our Partners <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]">Network</span>
              <br />
              <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-slate-700 font-medium">
                Building the Future Together
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
            {displayPartners.map((partner, index) => (
              <div
                key={`${partner.id}-${index}`}
                className="relative flex-shrink-0 rounded-2xl sm:rounded-3xl bg-white border border-slate-200/50 p-5 sm:p-6 md:p-7 lg:p-8 flex flex-col hover:border-slate-300 hover:shadow-xl transition-shadow duration-300 group overflow-hidden"
                style={{
                  width: `${cardWidth}px`,
                  minHeight: '450px'
                }}
              >
                {/* Content Container */}
                <div className="h-full flex flex-col relative z-10">

                  {/* Partner Image - Centered at top */}
                  <div className="mb-6 sm:mb-8 flex justify-center">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300 overflow-hidden">
                      <img
                        src={partner.image}
                        alt={partner.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Quote - Prominent */}
                  <div className="flex-grow mb-4 sm:mb-6">
                    <blockquote className="text-slate-700 text-sm sm:text-base leading-relaxed italic text-center">
                      "{partner.desc.replace(/"/g, '')}"
                    </blockquote>
                  </div>

                  {/* Title and Subtitle */}
                  <div className="text-center">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 mb-2 leading-tight">
                      {partner.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-slate-600 uppercase tracking-wider mb-3 sm:mb-4 bg-slate-100/50 px-3 sm:px-4 py-1 rounded-full inline-block">
                      {partner.subtitle}
                    </p>
                  </div>

                  {/* Footer */}
                  <div className="pt-4 sm:pt-5 border-t border-slate-200/50 flex justify-center mt-auto">
                    <span className="text-xs sm:text-sm font-bold bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent">
                      {partner.source}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center mt-8 sm:mt-10 md:mt-12 gap-2">
          {partners.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (isTransitioning) return;
                setIsTransitioning(true);
                setCurrentIndex(totalItems + index);
              }}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                index === currentDotIndex ? 'bg-[var(--primary)] scale-125' : 'bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`Go to partner ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default OurPartners;