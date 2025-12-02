import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { AnimatedButton } from '@/components/ui/animated-button';
import { Menu, X, ChevronDown, Send } from 'lucide-react';
import logo from '@/assets/images/uxdlab-logo.webp';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

  const navLinks = [
    { name: 'AI CoE', href: '/ai-coe' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Services', href: '/services' },
    { name: 'Industries', href: '/industries' },
    { name: 'Insights', href: '/insights' },
    { name: 'About', href: '/about' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 24,
      },
    },
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      pointerEvents: 'none',
    },
    open: {
      opacity: 1,
      y: 0,
      pointerEvents: 'auto',
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
  };

  const linkHoverVariants = {
    initial: { y: 0 },
    hover: { y: -5 },
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-pink-100/30 shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="flex-shrink-0"
            >
              <Link to="/">
                <img src={logo} alt="UXD Lab Logo" className=" w-28 h-7 md:w-32 md:h-8 " />
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <motion.div
              className="hidden md:flex items-center gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {navLinks.map((link, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  onMouseEnter={() => setHoveredLink(link.name)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  <motion.div
                    variants={linkHoverVariants}
                    initial="initial"
                    whileHover="hover"
                  >
                    <Link
                      to={link.href}
                      className="relative !text-black font-medium text-sm transition-colors hover:text-[var(--primary)]"
                    >
                      {link.name}
                      {/* Animated underline */}
                      <motion.div
                        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] rounded-full"
                        initial={{ width: 0 }}
                        animate={{
                          width: hoveredLink === link.name ? '100%' : 0,
                        }}
                        transition={{ duration: 0.3 }}
                      />
                    </Link>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button and Mobile Menu */}
            <div className="flex items-center gap-4">
              <motion.div
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.4 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{
                    type: 'spring',
                    stiffness: 400,
                    damping: 30,
                  }}
                >
                  <AnimatedButton 
                    variant="primary" 
                    size="md"
                    className="hidden sm:flex"
                    icon={Send}
                  >
                    Contact Us
                  </AnimatedButton>
                </motion.div>
              </motion.div>

              {/* Mobile Menu Button */}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 rounded-lg bg-[var(--primary)]/10 hover:bg-[var(--secondary)]/10 transition-colors"
              >
                <motion.div
                  animate={{ rotate: isOpen ? 90 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isOpen ? (
                    <X className="w-6 h-6 text-gray-700" />
                  ) : (
                    <Menu className="w-6 h-6 text-gray-700" />
                  )}
                </motion.div>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="md:hidden bg-gradient-to-b from-white via-pink-50 to-white border-b border-pink-100/50"
            >
              <div className="px-4 py-4 space-y-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: index * 0.05,
                      duration: 0.3,
                    }}
                  >
                    <Link
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-3 text-gray-700 font-medium rounded-lg bg-[var(--primary)]/10 hover:bg-[var(--secondary)]/10 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: navLinks.length * 0.05,
                    duration: 0.3,
                  }}
                  className="pt-2"
                >
                  <AnimatedButton 
                    variant="primary" 
                    size="md"
                    fullWidth
                    icon={Send}
                  >
                    Contact Us
                  </AnimatedButton>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Spacer for fixed navbar */}
      <div className="h-16 md:h-20" />
    </>
  );
};

export default Navbar;