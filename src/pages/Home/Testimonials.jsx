// TestimonialCard.jsx
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Sparkles, Play, Star, Quote } from 'lucide-react';

// testimonialData.js
export const testimonialData = [
  {
    id: 1,
    brandName: "TechFlow",
    logo: "/api/placeholder/120/40",
    personName: "Sarah Chen",
    role: "Chief Technology Officer",
    quote: "Working with this team transformed our entire digital infrastructure. They didn't just deliver a product—they delivered a vision that exceeded every expectation we had.",
    videoThumbnail: "/api/placeholder/320/180",
    rating: 5,
    industry: "Technology"
  },
  {
    id: 2,
    brandName: "Nexus Finance",
    logo: "/api/placeholder/120/40",
    personName: "Michael Torres",
    role: "VP of Digital Innovation",
    quote: "The level of craftsmanship and attention to detail was remarkable. Our conversion rates increased by 340% within the first quarter of launch.",
    videoThumbnail: "/api/placeholder/320/180",
    rating: 5,
    industry: "Finance"
  },
  {
    id: 3,
    brandName: "Verde Health",
    logo: "/api/placeholder/120/40",
    personName: "Dr. Emily Watson",
    role: "Founder & CEO",
    quote: "They understood our mission from day one. The platform they built has helped us reach over 2 million patients worldwide. True partners in every sense.",
    videoThumbnail: "/api/placeholder/320/180",
    rating: 5,
    industry: "Healthcare"
  },
  {
    id: 4,
    brandName: "Stellar Retail",
    logo: "/api/placeholder/120/40",
    personName: "James Park",
    role: "Head of E-Commerce",
    quote: "Our online sales exploded after the redesign. The user experience is so intuitive that our customer support tickets dropped by 60%.",
    videoThumbnail: "/api/placeholder/320/180",
    rating: 5,
    industry: "Retail"
  },
  {
    id: 5,
    brandName: "Quantum Labs",
    logo: "/api/placeholder/120/40",
    personName: "Dr. Anna Kowalski",
    role: "Research Director",
    quote: "Complex data visualization made simple and beautiful. They took our research platform to an entirely new level of accessibility.",
    videoThumbnail: "/api/placeholder/320/180",
    rating: 5,
    industry: "Research"
  },
  {
    id: 6,
    brandName: "Urban Dynamics",
    logo: "/api/placeholder/120/40",
    personName: "Robert Kim",
    role: "Managing Partner",
    quote: "The best investment we've made in years. The ROI was visible within weeks, not months. Exceptional work from start to finish.",
    videoThumbnail: "/api/placeholder/320/180",
    rating: 5,
    industry: "Real Estate"
  },
  {
    id: 7,
    brandName: "CloudScale AI",
    logo: "/api/placeholder/120/40",
    personName: "Jennifer Liu",
    role: "CTO & Co-Founder",
    quote: "Their expertise in AI integration was unmatched. They helped us scale our platform to handle 10x the traffic seamlessly. Absolutely phenomenal team.",
    videoThumbnail: "/api/placeholder/320/180",
    rating: 5,
    industry: "Artificial Intelligence"
  }
];

// TestimonialCard.jsx

const TestimonialCard = ({ testimonial, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        delay: index * 0.08,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative flex-shrink-0 w-[360px] md:w-[400px] snap-center"
    >
      {/* Glow Effect on Hover */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 0.6 : 0 }}
        transition={{ duration: 0.4 }}
        className="absolute -inset-[3px] rounded-3xl blur-xl"
        style={{
          background: 'linear-gradient(135deg, #CC28B3 0%, #b42ea0 50%, #CC28B3 100%)'
        }}
      />
      
      {/* Gradient Border */}
      <motion.div 
        className="absolute -inset-[1.5px] rounded-3xl p-[1.5px]"
        initial={{ opacity: 0.3 }}
        animate={{ opacity: isHovered ? 1 : 0.3 }}
        transition={{ duration: 0.4 }}
        style={{
          background: 'linear-gradient(135deg, #CC28B3 0%, #b42ea0 50%, #e855d0 100%)'
        }}
      >
        <div className="absolute inset-0 rounded-3xl bg-white" />
      </motion.div>

      <Card className="relative overflow-hidden rounded-3xl border-0 bg-white shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-pink-200/30 transition-all duration-500">
        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-50/50 via-transparent to-purple-50/30 opacity-60" />
        
        <CardContent className="relative p-6 md:p-7">
          {/* Top Section - Brand & Rating */}
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-3">
              {/* Brand Logo */}
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div 
                  className="w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, rgba(204, 40, 179, 0.1) 0%, rgba(180, 46, 160, 0.15) 100%)'
                  }}
                >
                  <span 
                    className="text-lg font-bold"
                    style={{
                      background: 'linear-gradient(135deg, #CC28B3 0%, #b42ea0 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}
                  >
                    {testimonial.brandName.charAt(0)}
                  </span>
                </div>
              </motion.div>
              <div>
                <h4 className="font-semibold text-gray-900 text-sm">{testimonial.brandName}</h4>
                <span className="text-xs text-gray-500">{testimonial.industry}</span>
              </div>
            </div>
            
            {/* Rating Stars */}
            <div className="flex gap-0.5">
              {[...Array(testimonial.rating)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0, rotate: -180 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ 
                    delay: 0.6 + i * 0.08,
                    duration: 0.4,
                    ease: "backOut"
                  }}
                >
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Video Thumbnail */}
          <motion.div 
            className="relative mb-5 rounded-2xl overflow-hidden cursor-pointer group"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
          >
            <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200">
              <img 
                src={testimonial.videoThumbnail} 
                alt="Video thumbnail"
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
              />
            </div>
            
            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.3 }}
              >
                {/* Pulse Ring */}
                <motion.div
                  animate={{ 
                    scale: [1, 1.4, 1],
                    opacity: [0.4, 0, 0.4]
                  }}
                  transition={{ 
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 rounded-full"
                  style={{ background: '#CC28B3' }}
                />
                <div 
                  className="relative w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
                  style={{
                    background: 'linear-gradient(135deg, #CC28B3 0%, #b42ea0 100%)',
                    boxShadow: '0 8px 25px rgba(204, 40, 179, 0.35)'
                  }}
                >
                  <Play className="w-5 h-5 text-white ml-0.5" fill="white" />
                </div>
              </motion.div>
            </div>
            
            {/* Bottom Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </motion.div>

          {/* Quote Section */}
          <div className="relative mb-5">
            <Quote 
              className="absolute -top-1 -left-1 w-7 h-7 opacity-20"
              style={{ color: '#CC28B3' }}
            />
            <p className="text-gray-700 text-sm leading-relaxed pl-5 italic font-light">
              "{testimonial.quote}"
            </p>
          </div>

          {/* Person Info */}
          <div className="flex items-center gap-3.5 pt-4 border-t border-gray-100">
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.3 }}
            >
              <div 
                className="w-11 h-11 rounded-full p-[2px]"
                style={{
                  background: 'linear-gradient(135deg, #CC28B3 0%, #b42ea0 100%)'
                }}
              >
                <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                  <span className="text-sm font-semibold text-gray-700">
                    {testimonial.personName.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
              </div>
              {/* Status Indicator */}
              <div 
                className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full border-2 border-white"
                style={{ background: '#10b981' }}
              />
            </motion.div>
            
            <div className="flex-1">
              <h5 className="font-semibold text-gray-900 text-sm">{testimonial.personName}</h5>
              <p className="text-gray-500 text-xs">{testimonial.role}</p>
            </div>
          </div>
        </CardContent>

        {/* Decorative Corner Accents */}
        <div 
          className="absolute top-0 right-0 w-28 h-28 rounded-bl-full opacity-5"
          style={{
            background: 'linear-gradient(135deg, #CC28B3 0%, transparent 100%)'
          }}
        />
        <div 
          className="absolute bottom-0 left-0 w-20 h-20 rounded-tr-full opacity-5"
          style={{
            background: 'linear-gradient(315deg, #b42ea0 0%, transparent 100%)'
          }}
        />
      </Card>
    </motion.div>
  );
};


// TestimonialSection.jsx

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const carouselRef = useRef(null);
  const autoPlayRef = useRef(null);

  const cardWidth = 424; // card width + gap
  const visibleCards = 3;
  const maxIndex = Math.max(0, testimonialData.length - visibleCards);

  // Scroll to specific index
  const scrollToIndex = useCallback((index) => {
    if (carouselRef.current) {
      const newIndex = Math.max(0, Math.min(index, maxIndex));
      setCurrentIndex(newIndex);
      carouselRef.current.scrollTo({
        left: newIndex * cardWidth,
        behavior: 'smooth'
      });
    }
  }, [maxIndex, cardWidth]);

  // Navigation handlers
  const handlePrev = () => {
    scrollToIndex(currentIndex - 1);
    setIsAutoPlaying(false);
  };

  const handleNext = () => {
    scrollToIndex(currentIndex + 1);
    setIsAutoPlaying(false);
  };

  // Autoplay functionality
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prev) => {
          const next = prev >= maxIndex ? 0 : prev + 1;
          if (carouselRef.current) {
            carouselRef.current.scrollTo({
              left: next * cardWidth,
              behavior: 'smooth'
            });
          }
          return next;
        });
      }, 5000);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, maxIndex, cardWidth]);

  // Handle scroll event for updating dots
  const handleScroll = () => {
    if (carouselRef.current) {
      const scrollLeft = carouselRef.current.scrollLeft;
      const newIndex = Math.round(scrollLeft / cardWidth);
      if (newIndex !== currentIndex) {
        setCurrentIndex(newIndex);
      }
    }
  };

  // Animation variants
  const titleVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: 0.25,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-gradient-to-b from-white via-gray-50/80 to-white">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Soft Gradient Orbs */}
        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, -40, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-1/4 w-[500px] h-[500px] rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(204, 40, 179, 0.08) 0%, transparent 70%)'
          }}
        />
        <motion.div
          animate={{
            x: [0, -60, 0],
            y: [0, 50, 0],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 right-1/4 w-[600px] h-[600px] rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(180, 46, 160, 0.06) 0%, transparent 70%)'
          }}
        />
        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(204, 40, 179, 0.04) 0%, transparent 70%)'
          }}
        />
        
        {/* Subtle Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />

        {/* Floating Particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full opacity-20"
            style={{
              background: '#CC28B3',
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
          />
        ))}
      </div>

      <div className="relative z-10 py-20 md:py-10">
        {/* Header Section */}
        <div className="max-w-7xl mx-auto px-6 md:px-8 mb-14">
          {/* Badge */}
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-8"
          >
            <div 
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full backdrop-blur-sm shadow-sm"
              style={{
                background: 'linear-gradient(135deg, rgba(204, 40, 179, 0.08) 0%, rgba(180, 46, 160, 0.12) 100%)',
                border: '1px solid rgba(204, 40, 179, 0.2)'
              }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-4 h-4" style={{ color: '#CC28B3' }} />
              </motion.div>
              <span 
                className="text-sm font-medium"
                style={{ color: '#b42ea0' }}
              >
                Success Stories
              </span>
            </div>
          </motion.div> */}

          {/* Main Title */}
          <motion.h3
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 tracking-tight"
          >
            <span className="text-gray-900">Trusted by </span>
            <span 
              style={{
                background: 'linear-gradient(135deg, #CC28B3 0%, #b42ea0 50%, #e855d0 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Industry Leaders
            </span>
            <br />
            <span className="text-gray-900">Across the Globe</span>
          </motion.h3>

          {/* Subtitle */}
          <motion.p
            variants={subtitleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-lg md:text-xl text-gray-600 text-center max-w-3xl mx-auto leading-relaxed font-light"
          >
            We forge{' '}
            <span 
              className="font-medium"
              style={{ color: '#CC28B3' }}
            >
              lasting partnerships
            </span>{' '}
            with visionary leaders who trust us to transform their boldest ideas into reality.
            Every project reflects our commitment to excellence.
          </motion.p>
        </div>

        {/* Carousel Section */}
        <div className="relative">
          {/* Navigation Arrows */}
          <div className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20">
            <motion.div 
              whileHover={{ scale: 1.08 }} 
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="outline"
                size="icon"
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="w-12 h-12 rounded-full border-gray-200 bg-white/90 backdrop-blur-sm hover:bg-white hover:border-pink-300 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-400 shadow-lg shadow-gray-200/50 group"
              >
                <ChevronLeft 
                  className="w-5 h-5 text-gray-600 group-hover:text-pink-600 transition-colors duration-300" 
                />
              </Button>
            </motion.div>
          </div>
          
          <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20">
            <motion.div 
              whileHover={{ scale: 1.08 }} 
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="outline"
                size="icon"
                onClick={handleNext}
                disabled={currentIndex >= maxIndex}
                className="w-12 h-12 rounded-full border-gray-200 bg-white/90 backdrop-blur-sm hover:bg-white hover:border-pink-300 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-400 shadow-lg shadow-gray-200/50 group"
              >
                <ChevronRight 
                  className="w-5 h-5 text-gray-600 group-hover:text-pink-600 transition-colors duration-300" 
                />
              </Button>
            </motion.div>
          </div>

          {/* Carousel Container */}
          <div
            ref={carouselRef}
            onScroll={handleScroll}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory px-8 md:px-16 lg:px-24 py-6"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {testimonialData.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                index={index}
              />
            ))}
          </div>

          {/* Gradient Fade Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-28 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-28 bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none z-10" />
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center items-center gap-3 mt-10">
          {[...Array(maxIndex + 1)].map((_, index) => (
            <motion.button
              key={index}
              onClick={() => {
                scrollToIndex(index);
                setIsAutoPlaying(false);
              }}
              className="relative p-1.5"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                className="rounded-full transition-all duration-400"
                style={{
                  width: currentIndex === index ? '32px' : '10px',
                  height: '10px',
                  background: currentIndex === index 
                    ? 'linear-gradient(135deg, #CC28B3 0%, #b42ea0 100%)' 
                    : '#d1d5db'
                }}
                layout
              />
              {currentIndex === index && (
                <motion.div
                  layoutId="activeDotGlow"
                  className="absolute inset-0 rounded-full blur-md opacity-50"
                  style={{ background: '#CC28B3' }}
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Autoplay Toggle */}
        <div className="flex justify-center mt-6">
          <motion.button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="flex items-center gap-2.5 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-400 shadow-sm"
            style={{
              background: isAutoPlaying 
                ? 'linear-gradient(135deg, rgba(204, 40, 179, 0.1) 0%, rgba(180, 46, 160, 0.15) 100%)'
                : 'rgba(243, 244, 246, 0.8)',
              border: isAutoPlaying 
                ? '1px solid rgba(204, 40, 179, 0.3)'
                : '1px solid rgba(209, 213, 219, 0.5)',
              color: isAutoPlaying ? '#b42ea0' : '#6b7280'
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ rotate: isAutoPlaying ? 360 : 0 }}
              transition={{ 
                duration: 3, 
                repeat: isAutoPlaying ? Infinity : 0, 
                ease: "linear" 
              }}
              className="w-2.5 h-2.5 rounded-full"
              style={{ 
                background: isAutoPlaying ? '#CC28B3' : '#9ca3af' 
              }}
            />
            {isAutoPlaying ? 'Autoplay On' : 'Autoplay Off'}
          </motion.button>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="max-w-5xl mx-auto mt-20 px-6"
        >
          <div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 p-8 md:p-10 rounded-3xl backdrop-blur-sm shadow-xl"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(252, 231, 249, 0.4) 50%, rgba(255,255,255,0.95) 100%)',
              border: '1px solid rgba(204, 40, 179, 0.1)'
            }}
          >
            {[
              { value: '500+', label: 'Projects Delivered' },
              { value: '98%', label: 'Client Satisfaction' },
              { value: '50+', label: 'Industry Awards' },
              { value: '12+', label: 'Years of Excellence' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + index * 0.12, duration: 0.6 }}
                className="text-center"
              >
                <motion.div 
                  className="text-3xl md:text-4xl font-bold mb-2"
                  style={{
                    background: 'linear-gradient(135deg, #CC28B3 0%, #b42ea0 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-center mt-16"
        >
          <motion.button
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-white font-semibold shadow-lg transition-all duration-400"
            style={{
              background: 'linear-gradient(135deg, #CC28B3 0%, #b42ea0 100%)',
              boxShadow: '0 10px 40px rgba(204, 40, 179, 0.3)'
            }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 15px 50px rgba(204, 40, 179, 0.4)'
            }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Start Your Success Story</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.button>
        </motion.div>
      </div>

      {/* Custom CSS */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default TestimonialSection;