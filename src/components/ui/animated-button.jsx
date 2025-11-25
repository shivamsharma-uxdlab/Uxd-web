import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const AnimatedButton = React.forwardRef((
  {
    children,
    className,
    variant = 'primary',
    size = 'md',
    isLoading = false,
    disabled = false,
    icon: Icon = null,
    fullWidth = false,
    ...props
  },
  ref
) => {
  // Variant styles
  const variants = {
    primary: 'bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] hover:from-[var(--secondary)] hover:to-[var(--primary)] text-white shadow-lg hover:shadow-xl',
    secondary: 'bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 text-gray-900 shadow-md hover:shadow-lg',
    outline: 'border-2 border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)]/10 hover:border-[var(--secondary)] hover:text-[var(--secondary)]',
    ghost: 'text-gray-700 hover:bg-gray-100 hover:text-gray-900',
    danger: 'bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white shadow-lg hover:shadow-xl',
  };

  // Size styles
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-lg',
  };

  const baseClasses = 'relative inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--primary)] outline-none disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden group';

  const buttonClasses = cn(
    baseClasses,
    variants[variant],
    sizes[size],
    fullWidth && 'w-full',
    className
  );

  // Animation variants for button
  const buttonVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.02 },
    tap: { scale: 0.98 },
  };

  // Animation for shimmer effect
  const shimmerVariants = {
    rest: { x: '-100%' },
    hover: {
      x: '100%',
      transition: {
        duration: 0.6,
        ease: 'easeInOut',
      },
    },
  };

  // Animation for icon
  const iconVariants = {
    rest: { rotate: 0 },
    hover: { rotate: 12 },
  };

  return (
    <motion.button
      ref={ref}
      className={buttonClasses}
      variants={buttonVariants}
      initial="rest"
      whileHover={disabled ? 'rest' : 'hover'}
      whileTap={disabled ? 'rest' : 'tap'}
      transition={{
        type: 'spring',
        stiffness: 400,
        damping: 30,
      }}
      disabled={disabled || isLoading}
      {...props}
      style={{ outline: 'none' }}
    >
      {/* Shimmer overlay effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-lg"
        variants={shimmerVariants}
        initial="rest"
        whileHover="hover"
      />

      {/* Button content */}
      <div className="relative flex items-center justify-center gap-2 z-10">
        {/* Icon with animation */}
        {Icon && (
          <motion.div
            variants={iconVariants}
            initial="rest"
            whileHover="hover"
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 20,
            }}
          >
            <Icon size={size === 'sm' ? 16 : size === 'md' ? 18 : size === 'lg' ? 20 : 24} />
          </motion.div>
        )}

        {/* Loading spinner */}
        {isLoading ? (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            className="relative w-5 h-5"
          >
            <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-current border-r-current opacity-60" />
          </motion.div>
        ) : (
          children
        )}
      </div>

      {/* Background glow effect (subtle) */}
      <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/5" />
    </motion.button>
  );
});

AnimatedButton.displayName = 'AnimatedButton';

export { AnimatedButton };
