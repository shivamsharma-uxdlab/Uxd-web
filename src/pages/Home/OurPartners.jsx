import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useMotionValue } from "framer-motion";
import {
  Trophy,
  Star,
  Award,
  Zap,
  ChevronLeft,
  ChevronRight,
  Activity,
  Medal,
  Quote,
} from "lucide-react";

// --- Static Data ---
const partners = [
  {
    id: 1,
    title: "AWS Partner",
    subtitle: "Cloud Excellence",
    desc: '"Empowering businesses with scalable cloud solutions and cutting-edge technologies."',
    icon: <Zap size={28} className="text-white" />,
    image: "/assets/marquieImages/aws-partner.webp",
    source: "Amazon Web Services",
    // Solid colors for decorations instead of opacity
    accentColor: "from-orange-500 to-yellow-500",
    decorColor1: "bg-orange-100",
    decorColor2: "bg-yellow-100",
  },
  {
    id: 2,
    title: "AWS Cloud Operations",
    subtitle: "Competency Certified",
    desc: '"Delivering exceptional cloud operations and infrastructure management."',
    icon: <Star size={28} className="text-white" />,
    image: "/assets/marquieImages/aws-partner-cloud-operations-competerncy.webp",
    source: "Amazon Web Services",
    accentColor: "from-blue-500 to-cyan-500",
    decorColor1: "bg-blue-100",
    decorColor2: "bg-cyan-100",
  },
  {
    id: 3,
    title: "AWS Security Services",
    subtitle: "Competency Leader",
    desc: '"Ensuring robust security frameworks for modern digital ecosystems."',
    icon: <Award size={28} className="text-white" />,
    image: "/assets/marquieImages/aws-partner-security-services-competency-removebg-preview.webp",
    source: "Amazon Web Services",
    accentColor: "from-red-500 to-pink-500",
    decorColor1: "bg-red-100",
    decorColor2: "bg-pink-100",
  },
  {
    id: 4,
    title: "CBSO Certified",
    subtitle: "Business Excellence",
    desc: '"Committed to delivering outstanding business solutions and services."',
    icon: <Trophy size={28} className="text-white" />,
    image: "/assets/marquieImages/cbso.webp",
    source: "CBSO",
    accentColor: "from-emerald-500 to-teal-500",
    decorColor1: "bg-emerald-100",
    decorColor2: "bg-teal-100",
  },
  {
    id: 5,
    title: "Datadog Partner",
    subtitle: "Monitoring & Analytics",
    desc: '"Providing comprehensive monitoring solutions for optimal performance."',
    icon: <Activity size={28} className="text-white" />,
    image: "/assets/marquieImages/datadog-wordmark.webp",
    source: "Datadog",
    accentColor: "from-purple-500 to-violet-500",
    decorColor1: "bg-purple-100",
    decorColor2: "bg-violet-100",
  },
  {
    id: 6,
    title: "Forbes Recognized",
    subtitle: "Industry Leader",
    desc: '"Featured among the most innovative companies shaping the future."',
    icon: <Medal size={28} className="text-white" />,
    image: "/assets/marquieImages/forbes.webp",
    source: "Forbes",
    accentColor: "from-slate-700 to-slate-900",
    decorColor1: "bg-slate-200",
    decorColor2: "bg-slate-300",
  },
  {
    id: 7,
    title: "Google Best App",
    subtitle: "Award Winner",
    desc: '"Creating exceptional mobile experiences that users love."',
    icon: <Star size={28} className="text-white" />,
    image: "/assets/marquieImages/google-best-app.webp",
    source: "Google",
    accentColor: "from-green-500 to-blue-500",
    decorColor1: "bg-green-100",
    decorColor2: "bg-blue-100",
  },
  {
    id: 8,
    title: "IBM Business Partner",
    subtitle: "Enterprise Solutions",
    desc: '"Driving enterprise transformation through innovative IBM technologies."',
    icon: <Award size={28} className="text-white" />,
    image: "/assets/ourPartners/ibm.svg",
    source: "IBM",
    accentColor: "from-blue-600 to-blue-800",
    decorColor1: "bg-blue-100",
    decorColor2: "bg-indigo-100",
  },
  {
    id: 9,
    title: "ISO Certified",
    subtitle: "Quality Standards",
    desc: '"Maintaining the highest standards of quality and compliance."',
    icon: <Trophy size={28} className="text-white" />,
    image: "/assets/marquieImages/iso.webp",
    source: "ISO",
    accentColor: "from-indigo-500 to-purple-600",
    decorColor1: "bg-indigo-100",
    decorColor2: "bg-purple-100",
  },
  {
    id: 10,
    title: "Microsoft Partner",
    subtitle: "Technology Alliance",
    desc: '"Building powerful solutions with Microsoft\'s world-class platforms."',
    icon: <Star size={28} className="text-white" />,
    image: "/assets/marquieImages/microsoft.webp",
    source: "Microsoft",
    accentColor: "from-cyan-500 to-blue-600",
    decorColor1: "bg-cyan-100",
    decorColor2: "bg-blue-100",
  },
  {
    id: 11,
    title: "Mixpanel Partner",
    subtitle: "Analytics Expert",
    desc: '"Unlocking insights through advanced product analytics."',
    icon: <Activity size={28} className="text-white" />,
    image: "/assets/ourPartners/mixpanel.svg",
    source: "Mixpanel",
    accentColor: "from-violet-500 to-purple-600",
    decorColor1: "bg-violet-100",
    decorColor2: "bg-purple-100",
  },
  {
    id: 12,
    title: "SOC 2 Compliant",
    subtitle: "Security Certified",
    desc: '"Ensuring data security and privacy with industry-leading standards."',
    icon: <Award size={28} className="text-white" />,
    image: "/assets/marquieImages/soc2.webp",
    source: "SOC 2",
    accentColor: "from-teal-500 to-emerald-600",
    decorColor1: "bg-teal-100",
    decorColor2: "bg-emerald-100",
  },
  {
    id: 13,
    title: "Top App Developer",
    subtitle: "Excellence Award",
    desc: '"Recognized for creating top-tier mobile applications."',
    icon: <Trophy size={28} className="text-white" />,
    image: "/assets/marquieImages/top-app-dev-company.webp",
    source: "Industry Awards",
    accentColor: "from-amber-500 to-orange-600",
    decorColor1: "bg-amber-100",
    decorColor2: "bg-orange-100",
  },
  {
    id: 14,
    title: "Top GenAI Company",
    subtitle: "AI Innovation",
    desc: '"Leading the way in generative AI solutions and applications."',
    icon: <Star size={28} className="text-white" />,
    image: "/assets/marquieImages/top-genai-company-final.webp",
    source: "AI Awards",
    accentColor: "from-pink-500 to-rose-600",
    decorColor1: "bg-pink-100",
    decorColor2: "bg-rose-100",
  },
  {
    id: 15,
    title: "Webby Award Winner",
    subtitle: "Digital Excellence",
    desc: '"Honored for outstanding achievements in web design and innovation."',
    icon: <Award size={28} className="text-white" />,
    image: "/assets/marquieImages/webby.webp",
    source: "Webby Awards",
    accentColor: "from-yellow-500 to-amber-600",
    decorColor1: "bg-yellow-100",
    decorColor2: "bg-amber-100",
  },
  {
    id: 16,
    title: "Xamarin Expert",
    subtitle: "Cross-Platform Dev",
    desc: '"Mastering cross-platform development for seamless user experiences."',
    icon: <Activity size={28} className="text-white" />,
    image: "/assets/ourPartners/xamarin.svg",
    source: "Microsoft",
    accentColor: "from-blue-500 to-indigo-600",
    decorColor1: "bg-blue-100",
    decorColor2: "bg-indigo-100",
  },
];

const CARD_WIDTH_XL = 380;
const CARD_WIDTH_MD = 320;
const CARD_WIDTH_SM = 280;
const GAP = 32;

const PartnerCard = ({ partner, isActive }) => {
  return (
    <motion.div
      layout
      // REMOVED: Opacity classes (opacity-70, etc)
      // CHANGED: Only using scale for active state. Inactive cards are fully visible, just smaller.
      className={`relative flex-shrink-0 h-full transition-transform duration-500 select-none ${
        isActive ? "scale-100 z-10" : "scale-90 z-0"
      }`}
      style={{
        width: "var(--card-width)",
      }}
    >
      <div className="h-full bg-white rounded-[2rem] border border-slate-200 shadow-xl p-6 md:p-8 flex flex-col relative overflow-hidden">
        {/* Top Colorful Border Line */}
        <div
          className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${partner.accentColor}`}
        />

        {/* Solid Background Shapes (No Opacity/Blur) */}
        <div
          className={`absolute -right-12 -top-12 w-48 h-48 rounded-full ${partner.decorColor1}`}
        />
        <div
          className={`absolute -right-4 -top-4 w-24 h-24 rounded-full ${partner.decorColor2}`}
        />

        {/* Header: Image */}
        <div className="flex items-start justify-between mb-6 relative z-10">
          <div className="w-40 h-20 p-4 bg-white rounded-xl shadow-sm border border-slate-100">
            <img
              src={partner.image}
              alt={partner.title}
              className="w-full h-full object-contain"
              // ENSURED: No filters
              style={{ filter: "none", opacity: 1 }}
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex-grow relative z-10">
          <h3 className="text-xl font-bold text-slate-900 leading-tight mb-1">
            {partner.title}
          </h3>
          <p
            className={`text-sm font-bold uppercase tracking-wider mb-6 bg-gradient-to-r ${partner.accentColor} bg-clip-text text-transparent`}
          >
            {partner.subtitle}
          </p>

          <div className="relative">
            {/* Solid Color Quote Icon */}
            <div className="absolute -left-2 -top-3">
  <Quote
    size={24}
    className="text-slate-200 fill-slate-200 -scale-x-100"
  />
</div>
            <p className="text-slate-700 font-medium leading-relaxed pl-6 text-sm md:text-base">
              {partner.desc.replace(/"/g, "")}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between relative z-10">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
            Source
          </span>
          <span
            className={`text-sm font-bold bg-clip-text text-transparent bg-gradient-to-r ${partner.accentColor}`}
          >
            {partner.source}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

const OurPartners = () => {
  const carouselRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const controls = useAnimation();
  const x = useMotionValue(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Responsive Card Width
  const [cardWidth, setCardWidth] = useState(CARD_WIDTH_XL);

  // Infinite Loop Strategy: Duplicate the list
  const extendedPartners = [...partners, ...partners];
  const realLength = partners.length;

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w < 640) setCardWidth(CARD_WIDTH_SM);
      else if (w < 1024) setCardWidth(CARD_WIDTH_MD);
      else setCardWidth(CARD_WIDTH_XL);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getOffset = (index) => -(index * (cardWidth + GAP));

  const snapToSlide = async (newIndex) => {
    if (isAnimating) return;
    setIsAnimating(true);

    // --- Infinite Loop Logic ---
    
    // 1. Forward Loop (End -> Start)
    if (newIndex === realLength) {
      setCurrentIndex(newIndex); // Visually move to the clone
      await controls.start({
        x: getOffset(newIndex),
        transition: { type: "spring", stiffness: 300, damping: 30 },
      });

      // Teleport back to 0 instantly
      controls.set({ x: 0 });
      setCurrentIndex(0);
    } 
    // 2. Backward Loop (Start -> End)
    else if (newIndex < 0) {
      // Teleport to the clone at the end
      const jumpIndex = realLength;
      controls.set({ x: getOffset(jumpIndex) });
      
      // Animate backward to the last real item
      setCurrentIndex(realLength - 1);
      await controls.start({
        x: getOffset(realLength - 1),
        transition: { type: "spring", stiffness: 300, damping: 30 },
      });
    } 
    // 3. Normal Movement
    else {
      setCurrentIndex(newIndex);
      await controls.start({
        x: getOffset(newIndex),
        transition: { type: "spring", stiffness: 300, damping: 30 },
      });
    }

    setIsAnimating(false);
  };

  // Auto-play
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      snapToSlide(currentIndex + 1);
    }, 3000);

    return () => clearInterval(timer);
  }, [currentIndex, cardWidth, isPaused, isAnimating]);

  return (
    <section
      className="bg-white py-10 relative overflow-hidden"
      style={{ "--card-width": `${cardWidth}px` }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Ambience - Solid Colors / No Blur */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {/* Solid Circles for decoration */}
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-50 rounded-full" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-purple-50 rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-2 bg-indigo-600 text-white font-bold tracking-widest uppercase text-xs mb-4 rounded-full"
            >
              Network of Excellence
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black text-slate-900 leading-[1.1]"
            >
              Strategic{" "}
              <span className="text-indigo-600">Partnerships</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-lg text-slate-600 max-w-lg font-medium"
            >
              Collaborating with industry leaders to deliver world-class digital
              solutions and innovation.
            </motion.p>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => snapToSlide(currentIndex - 1)}
              className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full border-2 border-slate-300 bg-white/80 text-slate-700 hover:bg-white hover:border-slate-400 hover:text-slate-900 transition-all duration-200 flex items-center justify-center active:scale-95 disabled:opacity-50"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => snapToSlide(currentIndex + 1)}
              className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full border-2 border-slate-300 bg-white/80 text-slate-700 hover:bg-white hover:border-slate-400 hover:text-slate-900 transition-all duration-200 flex items-center justify-center active:scale-95 disabled:opacity-50"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <motion.div
            ref={carouselRef}
            className="cursor-grab active:cursor-grabbing overflow-hidden py-10 -my-10"
            whileTap={{ cursor: "grabbing" }}
          >
            <motion.div
              className="flex"
              animate={controls}
              style={{ x, gap: GAP, paddingLeft: "1rem", paddingRight: "1rem" }}
            >
              {extendedPartners.map((partner, index) => (
                <PartnerCard
                  // Unique key combining id and index to handle duplicates
                  key={`${partner.id}-${index}`}
                  partner={partner}
                  // Calculate active status based on modulo to highlight duplicates correctly
                  isActive={index % realLength === currentIndex % realLength}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Solid Progress Bar */}
        <div className="mt-12 flex items-center gap-4">
          <span className="text-xs font-bold text-slate-400 w-8 text-right">
            {String((currentIndex % realLength) + 1).padStart(2, "0")}
          </span>
          <div className="flex-grow h-2 bg-slate-100 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-indigo-600 rounded-full"
              initial={{ width: 0 }}
              animate={{
                width: `${(((currentIndex % realLength) + 1) / realLength) * 100}%`,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          </div>
          <span className="text-xs font-bold text-slate-400 w-8">
            {realLength}
          </span>
        </div>
      </div>
    </section>
  );
};

export default OurPartners;