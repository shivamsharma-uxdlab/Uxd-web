import React from "react";
import { motion } from "framer-motion";

// --- INSERT THE LOGO DATA HERE (from above) ---
const logos = [
    { id: 1, name: "Inc.", style: "bg-white text-black font-serif font-bold text-3xl tracking-tighter" },
    // ... paste the rest of the logos data here
    { id: 13, name: "FOX NEWS", style: "bg-[#E8F4F6] text-blue-900 font-sans font-black text-lg leading-none text-center" },
  ];

// Framer Motion Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // The delay between each item loading
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0, scale: 0.95 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

const Partners = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-xl md:text-2xl font-bold text-slate-800 mb-12"
        >
          Proudly Featured On
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} // Starts animating when 20% visible
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8"
        >
          {logos.map((logo) => (
            <motion.div
              key={logo.id}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgb(0 0 0 / 0.1)",
                transition: { type: "spring", stiffness: 300 }
              }}
              // The styling below ensures uniform height for a clean grid look
              className={`flex items-center justify-center h-28 w-full rounded-2xl p-6 shadow-sm border border-slate-100 select-none ${logo.style} ${logo.large ? 'md:row-span-2 md:h-full' : ''}`}
            >
               {/* Replace this text with your actual <img> tag */}
              <span className="w-full text-center">{logo.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;