import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Play, Star } from 'lucide-react';
import ReactPlayer from 'react-player';
import Autoplay from 'embla-carousel-autoplay';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Carousel, CarouselContent, CarouselItem, CarouselDots } from '@/components/ui/carousel';

const testimonials = [
  {
    id: 1,
    company: 'TechCorp Solutions',
    clientName: 'Sarah Johnson',
    role: 'CEO',
    review: 'UXD Lab delivered exceptional results, transforming our digital presence with innovative solutions that exceeded our expectations.',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', // placeholder
  },
  {
    id: 2,
    company: 'InnovateNow',
    clientName: 'Michael Chen',
    role: 'CTO',
    review: 'The team at UXD Lab brought our vision to life with cutting-edge technology and unparalleled expertise in AI-powered solutions.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    id: 3,
    company: 'FutureTech Inc',
    clientName: 'Emily Davis',
    role: 'Product Manager',
    review: 'Working with UXD Lab was a game-changer. Their attention to detail and commitment to excellence is truly remarkable.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    id: 4,
    company: 'NextGen Systems',
    clientName: 'David Wilson',
    role: 'Founder',
    review: 'UXD Lab\'s innovative approach and technical prowess helped us achieve our goals faster than we ever imagined possible.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    id: 5,
    company: 'Digital Dynamics',
    clientName: 'Lisa Rodriguez',
    role: 'VP of Engineering',
    review: 'The collaboration with UXD Lab resulted in a seamless integration of advanced technologies that boosted our productivity significantly.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    id: 6,
    company: 'TechCorp Solutions',
    clientName: 'Sarah Johnson',
    role: 'CEO',
    review: 'UXD Lab delivered exceptional results, transforming our digital presence with innovative solutions that exceeded our expectations.',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    id: 7,
    company: 'InnovateNow',
    clientName: 'Michael Chen',
    role: 'CTO',
    review: 'The team at UXD Lab brought our vision to life with cutting-edge technology and unparalleled expertise in AI-powered solutions.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
];

const TestimonialCard = ({ testimonial, index }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card
        ref={cardRef}
        className="relative overflow-hidden bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 h-[320px] w-full transition-all duration-300 cursor-pointer group hover:border-white/30"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          background: 'linear-gradient(135deg, rgba(51, 65, 85, 0.4), rgba(15, 23, 42, 0.4))',
          boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <CardContent className="p-0 relative z-10 h-full">
          <div className="flex items-center gap-6 h-full">
            {/* Left side - Avatar & Content */}
            <div className="flex-1 flex flex-col">
              <div className="flex items-start gap-4 mb-3">
                <Avatar className="w-14 h-14 border-2 border-white/30 flex-shrink-0">
                  <AvatarImage src={testimonial.avatar} alt={testimonial.clientName} />
                  <AvatarFallback>{testimonial.clientName.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div className="min-w-0">
                  <h3 className="text-lg font-bold text-white">{testimonial.company}</h3>
                  <p className="text-white/70 text-xs">{testimonial.clientName}</p>
                  <p className="text-white/60 text-xs">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-white/80 text-sm leading-relaxed line-clamp-3">{testimonial.review}</p>
            </div>

            {/* Right side - Video */}
            <div className="flex-1 flex items-center justify-center h-full">
              <div className="w-full h-full rounded-xl overflow-hidden bg-black/40 border border-white/10">
                <ReactPlayer
                  url={testimonial.videoUrl}
                  playing
                  muted
                  loop
                  controls={false}
                  width="100%"
                  height="100%"
                  style={{ borderRadius: '12px' }}
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [api, setApi] = useState();

  return (
    <section
      ref={ref}
      className="py-20 px-4 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0E0F1B 0%, #1a1b2e 50%, #0E0F1B 100%)',
      }}
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-indigo-900/20" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Badge variant="secondary" className="bg-white/10 text-white border-white/20">
              <Star className="w-4 h-4 mr-1" />
              Clutch Reviews
            </Badge>
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            HEAR FROM OUR <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">PARTNERS</span>
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
            Discover how we've empowered businesses with our <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent font-semibold">next-gen digital solutions</span>, driving innovation and delivering exceptional results that speak for themselves.
          </p>
        </motion.div>

        {/* Carousel */}
        <Carousel
          setApi={setApi}
          opts={{
            align: "center",
            loop: true,
            containScroll: false,
            slidesToScroll: 1,
          }}
          plugins={[Autoplay({ delay: 5000, stopOnInteraction: false, rootNode: (emblaRoot) => emblaRoot.parentElement })]}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={testimonial.id} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                <TestimonialCard testimonial={testimonial} index={index} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselDots api={api} className="mt-8" />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;