import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, ArrowRight, Zap, Bot, Cloud, Smartphone, Code2, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 100]);

  // Animated gradient circles
  const circles = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    size: Math.random() * 300 + 100,
    x: Math.random() * 80 + 10,
    y: Math.random() * 80 + 10,
    duration: Math.random() * 4 + 6,
    delay: i * 0.2,
  }));

  const floatingItems = [
    { Icon: Bot, x: -5, y: 15, delay: 0, color: 'from-pink-500 to-rose-500' },
    { Icon: Smartphone, x: 88, y: 20, delay: 0.3, color: 'from-purple-500 to-pink-500' },
    { Icon: Cloud, x: 8, y: 60, delay: 0.6, color: 'from-blue-500 to-cyan-500' },
    { Icon: Code2, x: 85, y: 65, delay: 0.9, color: 'from-indigo-500 to-purple-500' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
        duration: 1.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.23, 1, 0.320, 1], // cubic-bezier for smooth easing
      },
    },
  };

  const floatingVariants = {
    floating: {
      y: [0, -25, 0],
      x: [0, 15, 0],
      rotate: [0, 8, 0],
    },
  };

  return (
    <>
      <section ref={ref} className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100">
        {/* Animated Background Circles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Primary gradient sphere */}
          <motion.div
            className="absolute w-96 h-96 bg-gradient-to-br from-pink-400/30 via-rose-400/25 to-transparent rounded-full blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ top: "-10%", right: "-5%" }}
          />

          {/* Secondary gradient sphere */}
          <motion.div
            className="absolute w-96 h-96 bg-gradient-to-br from-pink-500/30 via-fuchsia-400/25 to-transparent rounded-full blur-3xl"
            animate={{
              x: [0, -100, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            style={{ bottom: "-10%", left: "-5%" }}
          />

          {/* Tertiary gradient sphere */}
          <motion.div
            className="absolute w-72 h-72 bg-gradient-to-br from-rose-400/25 via-pink-400/20 to-transparent rounded-full blur-3xl"
            animate={{
              x: [0, 50, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            style={{ top: "50%", left: "50%" }}
          />
        </div>

        {/* Floating Icons with Glass Effect */}
        {floatingItems.map((item, i) => (
          <motion.div
            key={i}
            className="absolute hidden lg:flex items-center justify-center"
            style={{
              left: `${item.x}%`,
              top: `${item.y}%`,
            }}
            animate={floatingVariants.floating}
            transition={{
              duration: 6 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: item.delay,
            }}
          >
            <motion.div
              className={`p-5 bg-gradient-to-br ${item.color} backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl hover:shadow-3xl`}
              whileHover={{
                scale: 1.15,
                rotate: 5,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
            >
              <item.Icon
                size={56}
                className="text-white drop-shadow-lg"
                strokeWidth={1.5}
              />
            </motion.div>
          </motion.div>
        ))}

        {/* Main Content */}
        <motion.div
          className="relative z-10 px-4 py-10 max-w-5xl mx-auto text-center"
          style={{ paddingBottom: "20vh" }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge with animation */}
          <motion.div
            variants={itemVariants}
            className="mb-6"
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/50 backdrop-blur-md border border-pink-200 hover:border-pink-400/80 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <Sparkles className="w-4 h-4 text-pink-600" />
              </motion.div>
              <span className="text-sm font-semibold text-gray-800">
                AI-Powered Innovation
              </span>
            </motion.div>
          </motion.div>

          {/* Main Heading */}
         <motion.h1
           variants={itemVariants}
           className="text-4xl md:text-5xl lg:text-5xl font-bold mb-6 leading-loose text-gray-900"
         >
  Empowering Businesses with
  <motion.div
    className="bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent"
    animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
    transition={{ duration: 8, repeat: Infinity }}
  >
    Cutting-Edge AI-Driven
  </motion.div>
  Digital Innovation
</motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed font-medium"
          >
            Your strategic partner for transforming ideas into market-ready digital products.
            <br />
            <span className="text-sm text-gray-600 mt-3 block">
              Trusted by 1200+ global brands, startups, and enterprises for AI-driven innovation.
            </span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 30,
              }}
            >
              <Button
                className="group bg-gray-900 text-gray-700 hover:bg-gray-800 px-8 py-3 rounded-lg text-base font-semibold shadow-md hover:shadow-lg transition-all duration-300"
              >
                View Our Work
                <motion.div
                  className="ml-2"
                  animate={{ x: [0, 4, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 30,
              }}
            >
              <Button
                className="group bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white px-8 py-3 rounded-lg text-base font-semibold shadow-md hover:shadow-lg transition-all duration-300 border-0"
              >
                Get Started
                <motion.div
                  className="ml-2"
                  animate={{ x: [0, 4, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </Button>
            </motion.div>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            variants={itemVariants}
            className="pt-10 border-t border-pink-200/50"
          >
            <p className="text-xs text-gray-600 mb-4 uppercase tracking-wider font-semibold">Trusted by Industry Leaders</p>
            <div className="flex justify-center items-center flex-wrap gap-4">
              {['AWS Partner', 'ISO 27001', 'SOC 2 Certified', 'Google Developer'].map((badge, i) => (
                <motion.div
                  key={i}
                  className="text-xs font-semibold text-gray-700 px-4 py-2 bg-white/60 backdrop-blur-md rounded-full border border-pink-200/50 hover:border-pink-400 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  ✓ {badge}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Marquee Section - Inside Hero with 10vh gap from bottom */}
        <div className="absolute w-full bg-gradient-to-r from-pink-200 via-rose-200 to-pink-300 py-6 overflow-hidden border-t border-pink-300 shadow-xl" style={{ bottom: "10vh" }}>
          <motion.div
            className="flex gap-12 whitespace-nowrap"
            animate={{ 
              x: [0, -2000],
            }}
            transition={{
              x: {
                duration: 50,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              },
            }}
          >
            {[
              "✨ AI Development",
              "☁️ Cloud Solutions",
              "📱 Mobile Apps",
              "🔧 DevOps",
              "🚀 Microservices",
              "🔐 Security",
              "⚡ Performance",
              "🌐 Scalability",
              "✨ AI Development",
              "☁️ Cloud Solutions",
              "📱 Mobile Apps",
              "🔧 DevOps",
              "🚀 Microservices",
              "🔐 Security",
              "⚡ Performance",
              "🌐 Scalability",
            ].map((text, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-12 px-8"
                whileHover={{ 
                  scale: 1.1,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
              >
                <span className="text-xs md:text-sm font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent flex-shrink-0 tracking-wider">
                  {text}
                </span>
                <span className="text-2xl text-pink-400">•</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Hero;