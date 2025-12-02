import React, { useMemo, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Bot, Cloud, Smartphone, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import awsPartnerCloudOps from '../../assets/marquieImages/aws-partner-cloud-operations-competerncy.webp';
import awsPartnerSecurity from '../../assets/marquieImages/aws-partner-security-services-competency-removebg-preview.webp';
import awsPartner from '../../assets/marquieImages/aws-partner.webp';
import cbso from '../../assets/marquieImages/cbso.webp';
import datadog from '../../assets/marquieImages/datadog-wordmark.webp';
import forbes from '../../assets/marquieImages/forbes.webp';
import googleBestApp from '../../assets/marquieImages/google-best-app.webp';
import ibmPartner from '../../assets/marquieImages/ibm-business-partner.webp';
import iso from '../../assets/marquieImages/iso.webp';
import microsoft from '../../assets/marquieImages/microsoft.webp';
import mixpanel from '../../assets/marquieImages/mixpanel.webp';
import soc2 from '../../assets/marquieImages/soc2.webp';
import topAppDev from '../../assets/marquieImages/top-app-dev-company.webp';
import topGenAiFinal from '../../assets/marquieImages/top-genai-company-final.webp';
import topGenAi from '../../assets/marquieImages/top-genai-company.webp';
import webby from '../../assets/marquieImages/webby.webp';
import xamarin from '../../assets/marquieImages/xamarin.webp';

// CSS for smooth marquee - add this to your CSS file
const marqueeStyles = `
  .marquee-container {
    overflow: hidden;
    width: 100%;
    background: rgba(255, 255, 255, 0.8);
  }
  
  .marquee-track {
    display: flex;
    animation: marquee 30s linear infinite;
    will-change: transform;
  }
  
  .marquee-track:hover {
    animation-play-state: paused;
  }
  
  @keyframes marquee {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
  
  .marquee-logo {
    flex-shrink: 0;
    height: 25px;
    width: auto;
    margin: 0 24px;
    object-fit: contain;
  }

  @media (min-width: 768px) {
    .marquee-logo {
      height: 32px;
      margin: 0 32px;
    }
  }
`;

const Hero = () => {
const gradients = useMemo(() => [
  // Pink (dark → light)
  'linear-gradient(90deg, #9a0079 0%, #d500a8 100%)',

  // Red (dark → light)
  'linear-gradient(90deg, #b30026 0%, #ff0036 100%)',

  // Purple (dark → light)
  'linear-gradient(90deg, #5a00a1 0%, #8f00df 100%)',
], []);




  const [currentGradient, setCurrentGradient] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGradient((prev) => (prev + 1) % gradients.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [gradients.length]);

  // Memoized floating items to prevent recreation on every render
  const floatingItems = useMemo(() => [
    { Icon: Bot, x: -5, y: 15, delay: 0, color: 'from-pink-500 to-rose-500', title: 'AI Assistant' },
    { Icon: Smartphone, x: 88, y: 20, delay: 0.2, color: 'from-purple-500 to-pink-500', title: 'Mobile Apps' },
    { Icon: Cloud, x: 8, y: 60, delay: 0.4, color: 'from-blue-500 to-cyan-500', title: 'Cloud Solutions' },
    { Icon: Code2, x: 85, y: 65, delay: 0.6, color: 'from-indigo-500 to-purple-500', title: 'Custom Development' },
  ], []);

  // Memoized marquee images
  const marqueeImages = useMemo(() => [
    awsPartnerCloudOps, awsPartnerSecurity, awsPartner, cbso, datadog,
    forbes, googleBestApp, ibmPartner, iso, microsoft, mixpanel,
    soc2, topAppDev, topGenAiFinal, topGenAi, webby, xamarin,
  ], []);

  // Only duplicate twice for seamless loop
  const duplicatedImages = useMemo(() => [...marqueeImages, ...marqueeImages], [marqueeImages]);

  const containerVariants = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }), []);

  const itemVariants = useMemo(() => ({
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "tween",
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }), []);

  const trustBadges = useMemo(() => [
    'AWS Partner', 'ISO 27001', 'SOC 2 Certified', 'Google Developer'
  ], []);

  return (
    <>
      <style>{marqueeStyles}</style>
      
      <section
        role="banner"
        className="relative w-full min-h-[calc(100vh-16vh)] md:min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Animated Background Gradients */}
        {gradients.map((grad, i) => (
          <motion.div
            key={i}
            className="absolute inset-0 pointer-events-none"
            style={{ background: grad }}
            animate={{ opacity: currentGradient === i ? 1 : 0 }}
            transition={{ duration: 3 }}
          />
        ))}

        {/* Static Background Gradients - No animation for performance */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute w-96 h-96 bg-gradient-to-br from-pink-400/30 via-rose-400/25 to-transparent rounded-full blur-3xl"
            style={{ top: "-10%", right: "-5%", willChange: "auto" }}
          />
          <div
            className="absolute w-96 h-96 bg-gradient-to-br from-pink-500/30 via-fuchsia-400/25 to-transparent rounded-full blur-3xl"
            style={{ bottom: "-10%", left: "-5%", willChange: "auto" }}
          />
          <div
            className="absolute w-72 h-72 bg-gradient-to-br from-rose-400/25 via-pink-400/20 to-transparent rounded-full blur-3xl"
            style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
          />
        </div>

        {/* Floating Icons - Simplified animation */}
        {floatingItems.map((item, i) => (
          <motion.div
            key={i}
            className="absolute hidden md:flex items-center justify-center"
            style={{
              left: `${item.x}%`,
              top: `${item.y}%`,
              willChange: "transform, opacity",
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: item.delay + 0.5,
              ease: "easeOut",
            }}
          >
            <motion.div
              className={`p-4 md:p-5 bg-gradient-to-br ${item.color} backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl cursor-pointer`}
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
              whileHover={{ scale: 1.1 }}
              title={item.title}
            >
              <item.Icon
                className="w-12 h-12 md:w-14 md:h-14 text-white drop-shadow-lg"
                strokeWidth={1.5}
              />
            </motion.div>
          </motion.div>
        ))}

        {/* Main Content */}
        <motion.div
          className="relative z-10 px-2 md:px-4 max-w-5xl mx-auto text-center mt-6 md:mt-0"
          style={{ paddingBottom: "10vh" }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
  

          {/* Main Heading */}
          <motion.div
            variants={itemVariants}
            className="text-xs md:text-sm lg:text-md font-bold mb-6 leading-loose text-gray-200"
          >
            <h1>
              <span className="text-3xl md:text-5xl font-bold">
                Transforming visions into
              </span>
              <br />
              <span className=" text-white p-0 md:p-2 text-3xl md:text-5xl font-bold">
                Cutting-Edge AI-Driven
              </span>
              <br />
              <span className="text-3xl md:text-5xl font-bold">Tech Solutions</span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-md md:text-xl text-gray-300 mb-6 md:mb-10 max-w-4xl mx-auto leading-relaxed font-medium"
          >
            Our team translates visionary concepts into advanced technological solutions,
            harnessing innovation to bring your ideas to market with precision and impact.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-row gap-4 justify-center items-center mb-6 md:mb-12"
          >
            <Button
              className="group bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 rounded-lg text-base font-semibold shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
            >
              View Our Work
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              className="group bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] hover:from-[var(--secondary)] hover:to-[var(--secondary)] text-white px-8 py-3 rounded-lg text-base font-semibold shadow-md hover:shadow-lg transition-all duration-300 border-0 hover:scale-105 active:scale-95"
            >
              Get Started
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            variants={itemVariants}
            className="pt-1 md:pt-10 border-t border-pink-200/50 mb-10 md:mb-0"
          >
            <p className="text-sm text-gray-400 mb-4 uppercase tracking-wider font-semibold">
              Trusted by Industry Leaders
            </p>
            <div className="flex justify-center items-center flex-wrap gap-2 md:gap-4">
              {trustBadges.map((badge, i) => (
                <div
                  key={i}
                  className="text-xs font-semibold text-black px-2 md:px-4 py-2 bg-white backdrop-blur-md rounded-full border border-pink-200/50 hover:border-pink-400 hover:scale-105 transition-all duration-300"
                >
                  ✓ {badge}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Partners Marquee - Pure CSS Animation */}
        <motion.div
          className="absolute w-full overflow-hidden bottom-[4vh] md:bottom-[10vh]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6, ease: "easeOut" }}
        >
          <div className="marquee-container h-16 md:h-20 flex items-center">
            <div className="marquee-track">
              {duplicatedImages.map((image, i) => (
                <img
                  key={i}
                  src={image}
                  alt={`Partner logo ${(i % marqueeImages.length) + 1}`}
                  className="marquee-logo h-auto"
                  loading="lazy"
                  decoding="async"
                />
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Hero;