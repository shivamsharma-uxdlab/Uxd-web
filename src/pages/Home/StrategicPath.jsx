import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

// --- Data ---
const paths = [
  {
    id: "01",
    title: "Launch Your Next AI-Powered Product",
    description:
      "Kickstart your product journey with rapid prototyping, refined UX, and a scalable architecture built for long-term growth.",
    tags: ["Ideation", "UX Research", "Rapid Prototypes", "AI Integrations"],
    color: "from-blue-500 to-indigo-500",
  },
  {
    id: "02",
    title: "Extend Your Engineering Capacity",
    description:
      "Work with elite developers and designers who seamlessly integrate with your existing workflows to accelerate delivery.",
    tags: ["AI Engineers", "Frontend", "Backend", "Cloud", "Mobile"],
    color: "from-indigo-500 to-purple-500",
  },
  {
    id: "03",
    title: "Rebuild & Evolve Existing Systems",
    description:
      "Strengthen performance, security, and reliability by transforming outdated applications into modern digital platforms.",
    tags: ["Refactoring", "Microservices", "Cloud Native", "Performance"],
    color: "from-purple-500 to-pink-500",
  },
];

// --- Card Component ---
const TiltCard = ({ data, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 25 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration: 0.45, delay: index * 0.12 }}
    className="relative group w-full
     h-[420px]
      xs:h-[400px]
      sm:h-[440px]
      md:h-[460px]
      lg:h-[540px]
      xl:h-[500px]
      2xl:h-[520px]
    "
  >
    <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-white/95 border border-white/60 shadow-xl 
      p-5 xs:p-6 sm:p-7 md:p-8 
      flex flex-col transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-violet-600/10"
    >
      {/* Soft Glow Background */}
      <div
        className={`absolute -top-8 -right-8 sm:-top-10 sm:-right-10 md:-top-12 md:-right-12 
          w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 
          rounded-full bg-gradient-to-br ${data.color} opacity-[0.15] blur-2xl`}
      />

      {/* ID Badge */}
      <div className="mb-4 sm:mb-5 md:mb-6 relative z-10">
        <div
          className={`
            w-10 h-10 
            xs:w-11 xs:h-11 
            sm:w-12 sm:h-12 
            md:w-13 md:h-13 
            lg:w-14 lg:h-14 
            rounded-xl sm:rounded-2xl bg-gradient-to-br ${data.color} 
            text-white text-base sm:text-lg md:text-xl font-bold 
            flex items-center justify-center shadow-md
          `}
        >
          {data.id}
        </div>
      </div>

      {/* Title */}
      <h3 className="
        text-lg xs:text-xl sm:text-[1.15rem] md:text-[1.05rem] lg:text-[1.35rem] xl:text-[1.5rem]
        font-bold text-slate-900 leading-snug mb-2 sm:mb-3 relative z-10
        line-clamp-2
      ">
        {data.title}
      </h3>

      {/* Description */}
      <p className="
        text-slate-600 pt-2
        text-sm xs:text-[0.875rem] sm:text-[0.8rem] md:text-[0.9rem] lg:text-base
        leading-relaxed mb-4 sm:mb-6 md:mb-8 relative z-10
        line-clamp-3 sm:line-clamp-4
      ">
        {data.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-auto relative z-10 pt-3">
        {data.tags.map((tag, i) => (
          <span
            key={i}
            className="
              px-2 py-0.5 
              xs:px-2.5 xs:py-1 
              sm:px-3 sm:py-1 
              rounded-full bg-slate-50 border border-slate-200 
              text-[10px] xs:text-[11px] sm:text-xs 
              font-medium text-slate-500
              whitespace-nowrap
            "
          >
            {tag}
          </span>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-1 sm:mt-3 md:mt-4 pt-3 sm:pt-4 md:pt-5 border-t border-slate-100 relative z-10">
        <button className="
          flex items-center gap-1.5 sm:gap-2 
          text-slate-800 
          text-sm sm:text-base
          font-semibold group-hover:text-violet-600 transition-colors duration-300
        ">
          Get Started
          <ArrowRight
            className="w-4 h-4 sm:w-[18px] sm:h-[18px] transition-transform duration-300 group-hover:translate-x-1"
          />
        </button>
      </div>
    </div>
  </motion.div>
);

// --- Main Section ---
const StrategicPath = () => {
  return (
    <section className="w-full bg-[#FFF4EE] 
      px-4 xs:px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12
      py-5 xs:py-6 sm:py-7 md:py-8 lg:py-20 xl:py-12
      relative overflow-hidden"
    >
      {/* Floating Blurred Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="
          absolute top-[-8%] left-[-10%] 
          w-[280px] h-[280px] 
          xs:w-[320px] xs:h-[320px]
          sm:w-[380px] sm:h-[380px]
          md:w-[420px] md:h-[420px]
          lg:w-[480px] lg:h-[480px]
          bg-purple-200/25 rounded-full blur-[80px] sm:blur-[100px] lg:blur-[110px]
        " />
        <div className="
          absolute bottom-[-8%] right-[-10%] 
          w-[300px] h-[300px]
          xs:w-[360px] xs:h-[360px]
          sm:w-[420px] sm:h-[420px]
          md:w-[480px] md:h-[480px]
          lg:w-[520px] lg:h-[520px]
          bg-blue-200/25 rounded-full blur-[80px] sm:blur-[100px] lg:blur-[110px]
        " />
      </div>

      <div className="
        max-w-[90rem] 
        mx-auto relative z-10
        w-full
        xs:max-w-[480px]
        sm:max-w-[640px]
        md:max-w-[768px]
        lg:max-w-[1024px]
        xl:max-w-[1280px]
        2xl:max-w-[1400px]
      ">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="
            text-center 
            max-w-[280px] xs:max-w-sm sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl 
            mx-auto 
            mb-8 xs:mb-10 sm:mb-12 md:mb-14 lg:mb-16
          "
        >
          <h2 className="
            text-[10px] xs:text-xs sm:text-xs md:text-sm 
            font-bold tracking-widest text-violet-600 uppercase 
            mb-2 sm:mb-3
          ">
            Strategic Options
          </h2>
     <h2
  className="
       text-2xl      /* very small screens */
    xs:text-2xl     /* extra small */
    sm:text-3xl           /* small screens */
    md:text-3xl           /* tablets */
    lg:text-4xl           /* laptops */
    2xl:text-[3rem]   
         /* large desktops */
    font-bold text-slate-900 
    mb-3 sm:mb-4 
   
  "
>
  Choose Your Growth Path
</h2>

          <p className="
            text-sm xs:text-[0.9rem] sm:text-base md:text-lg lg:text-xl
            text-slate-600 leading-relaxed
            px-2 sm:px-0
          ">
            Whether you're launching, scaling, or modernizing—we provide the
            engineering depth to get you there faster.
          </p>
        </motion.div>

        {/* Grid - Responsive Layout */}
        <div className="
          grid 
          grid-cols-1 
          xs:grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-5 xs:gap-6 sm:gap-6 md:gap-8 lg:gap-8 xl:gap-10
          
          w-full
          max-w-[340px] xs:max-w-[400px] sm:max-w-none
          mx-auto sm:mx-0
        ">
          {paths.map((path, i) => (
            <TiltCard key={path.id} data={path} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrategicPath;