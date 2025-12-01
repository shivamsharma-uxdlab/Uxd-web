import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

// --- Data Configuration (Static) ---
const paths = [
  {
    id: "01",
    title: "Build & Launch a New App or Digital Platform",
    description: "Transform your vision into a market-ready, cloud-native, secure, and scalable digital product.",
    tags: ["Discovery", "UX Strategy", "Prototypes", "Enterprise-Ready Launch"],
    color: "from-blue-500 to-violet-500",
  },
  {
    id: "02",
    title: "Augment Your Team with Top-tier Talent",
    description: "Expand your capabilities with flexible and dedicated engineering teams, accelerate delivery, reduce hiring overhead.",
    tags: ["AI/ML", "Frontend", "Backend", "Full Stack", "iOS", "Android"],
    color: "from-violet-500 to-fuchsia-500",
  },
  {
    id: "03",
    title: "Migrate. Modernize. Maintain",
    description: "Migrate your legacy platforms with modern architecture, better performance, and built-in security.",
    tags: ["Cloud Migration", "Microservices", "Serverless", "DevSecOps"],
    color: "from-fuchsia-500 to-rose-500",
  },
];

// --- Card Component ---
const TiltCard = ({ data, index }) => {
  return (
    <motion.div
      // PERFORMANCE: Entry animation runs once, then stops tracking
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.4,
        delay: index * 0.1,
        ease: "easeOut" 
      }}
      className="relative w-full h-full min-h-[500px] group"
    >
      <div
        // PERFORMANCE: 
        // 1. Removed 'backdrop-blur' (Major lag fixer)
        // 2. Used CSS 'hover:' for interaction instead of JS
        // 3. Added 'will-change-transform' for GPU acceleration
        className="absolute inset-0 h-full w-full rounded-3xl bg-white/95 border border-white/50 flex flex-col p-8 shadow-xl transition-all duration-300 ease-out transform-gpu will-change-transform group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-purple-500/10"
      >
        {/* Static Background Blob (Reduced Opacity for performance) */}
        <div
          className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${data.color} opacity-10 blur-2xl rounded-full pointer-events-none`}
        />

        {/* ID Number */}
        <div className="mb-6 relative z-10">
          <div
            className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${data.color} flex items-center justify-center text-white text-xl font-bold shadow-md`}
          >
            {data.id}
          </div>
        </div>

        {/* Content */}
        <h3 className="text-2xl font-bold text-slate-800 mb-4 leading-tight relative z-10">
          {data.title}
        </h3>

        <p className="text-slate-600 mb-8 leading-relaxed text-base relative z-10">
          {data.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-auto relative z-10">
          {data.tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-slate-50 border border-slate-200 rounded-full text-xs font-semibold text-slate-500"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Button */}
        <div className="mt-8 pt-6 border-t border-slate-100 relative z-10">
          <button className="flex items-center gap-2 text-slate-800 font-bold group-hover:text-violet-600 transition-colors duration-300">
            Get Started
            {/* CSS Animation for arrow is lighter than JS */}
            <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

// --- Main Section Component ---
const StrategicPath = () => {
  return (
    <section className="w-full bg-[#FFF4EE] px-4 sm:px-6 lg:px-4 relative overflow-hidden pb-16 pt-10">
      
      {/* Static CSS Backgrounds (Zero JS overhead) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-200/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-200/20 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-[82rem] mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 max-w-3xl mx-auto"
        >
          <h2 className="text-sm md:text-base font-bold tracking-widest text-violet-600 uppercase mb-3">
            Select Your Strategic Path
          </h2>
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 leading-tight">
            We meet you where you are.
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            From launching new AI initiatives to augmenting your teams or
            modernizing your legacy systems.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {paths.map((path, index) => (
            <TiltCard key={path.id} data={path} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrategicPath;