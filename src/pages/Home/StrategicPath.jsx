import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Zap, Users, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const strategicPaths = [
  {
    id: 1,
    number: '01',
    icon: Zap,
    title: 'Build & Launch',
    subtitle: 'New App or Digital Platform',
    description: 'Transform your vision into a market-ready, cloud-native, secure, and scalable digital product with end-to-end delivery.',
    tags: ['Discovery', 'UX Strategy', 'Prototypes', 'Enterprise-Ready Launch'],
    gradient: 'from-pink-600 to-rose-600',
    borderGradient: 'from-pink-400 via-pink-300 to-rose-400',
    bgGradient: 'from-pink-50 to-rose-50',
  },
  {
    id: 2,
    number: '02',
    icon: Users,
    title: 'Augment Your Team',
    subtitle: 'With Top-tier Talent',
    description: 'Expand your capabilities with flexible and dedicated engineering teams, accelerate delivery, and extend your in-house capabilities.',
    tags: ['AI/ML', 'Frontend', 'Backend', 'Full Stack', 'Mobile', 'DevOps'],
    gradient: 'from-rose-600 to-pink-600',
    borderGradient: 'from-rose-400 via-pink-400 to-rose-400',
    bgGradient: 'from-rose-50 to-pink-50',
  },
  {
    id: 3,
    number: '03',
    icon: TrendingUp,
    title: 'Migrate & Modernize',
    subtitle: 'Legacy Systems',
    description: 'Migrate legacy platforms with modern architecture, better performance, and built-in security while ensuring ongoing support.',
    tags: ['Cloud Migration', 'Microservices', 'Serverless', 'DevSecOps', 'AI Integration'],
    gradient: 'from-pink-600 to-fuchsia-600',
    borderGradient: 'from-pink-400 via-fuchsia-400 to-pink-400',
    bgGradient: 'from-pink-50 to-fuchsia-50',
  },
];

const PathCard = ({ path, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;

    cardRef.current.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(15px)`;
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
    }
    setIsHovered(false);
  };

  const IconComponent = path.icon;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.23, 1, 0.32, 1] }}
      viewport={{ once: true, margin: "-100px" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setIsHovered(true)}
      className="transition-all duration-300"
    >
      <Card
        className={`relative overflow-hidden h-full border-2 transition-all duration-300 group cursor-pointer bg-gradient-to-br ${path.bgGradient}`}
        style={{
          borderColor: isHovered ? 'currentColor' : '#f0e4ff',
        }}
      >
        {/* Gradient top border accent */}
        <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${path.borderGradient}`} />

        {/* Animated background glow */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${path.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
        />

        {/* Icon circle with animation */}
        <motion.div
          className={`absolute top-6 right-6 w-16 h-16 rounded-full bg-gradient-to-br ${path.gradient} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
          animate={isHovered ? { scale: 1.1, rotate: 10 } : { scale: 1, rotate: 0 }}
          transition={{ duration: 0.4 }}
        >
          <IconComponent className="w-8 h-8 text-white" />
        </motion.div>

        <CardHeader className="pb-4">
          {/* Number */}
          <motion.div
            className={`text-4xl font-bold bg-gradient-to-r ${path.gradient} bg-clip-text text-transparent mb-2`}
            animate={isHovered ? { y: -3 } : { y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {path.number}
          </motion.div>

          {/* Titles */}
          <motion.div animate={isHovered ? { x: 5 } : { x: 0 }} transition={{ duration: 0.3 }}>
            <CardTitle className="text-2xl text-gray-900 mb-1">{path.title}</CardTitle>
            <CardDescription className="text-pink-600 font-semibold text-sm">
              {path.subtitle}
            </CardDescription>
          </motion.div>
        </CardHeader>

        <CardContent className="pt-0 flex flex-col h-[calc(100%-160px)]">
          {/* Description */}
          <p className="text-gray-700 text-sm leading-relaxed mb-6 flex-grow group-hover:text-gray-800 transition-colors duration-300">
            {path.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {path.tags.map((tag, idx) => (
              <motion.span
                key={idx}
                className={`text-xs px-3 py-1.5 rounded-full font-medium border border-pink-200/50 bg-white/50 text-gray-700 group-hover:bg-gradient-to-r ${path.gradient} group-hover:text-white group-hover:border-transparent transition-all duration-300`}
                whileHover={{ scale: 1.05 }}
              >
                {tag}
              </motion.span>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              className={`w-full bg-gradient-to-r ${path.gradient} hover:shadow-lg text-white font-semibold py-2 rounded-lg transition-all duration-300 group/btn`}
            >
              <span className="group-hover/btn:mr-2 transition-all duration-300">Explore</span>
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="inline-block"
              >
                <ArrowRight className="w-4 h-4" />
              </motion.span>
            </Button>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const StrategicPath = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] },
    },
  };

  return (
    <section ref={ref} className="py-24 px-4 relative overflow-hidden bg-white">
      {/* Background animated blobs - Pink theme */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-pink-200/40 to-rose-200/40 rounded-full blur-3xl"
          animate={{ y: [0, 40, 0], x: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-rose-200/40 to-pink-200/40 rounded-full blur-3xl"
          animate={{ y: [0, -40, 0], x: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-block px-4 py-2 bg-pink-100 text-pink-700 rounded-full text-sm font-semibold">
              Strategic Solutions
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Choose Your{' '}
            <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
              Strategic Path
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            From building innovative digital products to augmenting your teams or modernizing legacy systems, we provide tailored solutions that drive measurable business impact.
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {strategicPaths.map((path, index) => (
            <PathCard key={path.id} path={path} index={index} />
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 pt-16 border-t border-pink-200/30 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <p className="text-gray-600 mb-6">Not sure which path is right for you?</p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button className="bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              Schedule a Consultation
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default StrategicPath;
