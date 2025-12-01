import React, { useRef, useEffect, useState } from 'react';
import { 
  Star, TrendingUp, Zap, Radio, Globe, BookOpen, Shield, Award, Send, Anchor, Dribbble, Heart, MessageSquare, Briefcase, Feather
} from 'lucide-react';

// Map icon names to components for dynamic rendering
const iconMap = {
  Star: Star,
  TrendingUp: TrendingUp,
  Zap: Zap,
  Radio: Radio,
  Globe: Globe,
  BookOpen: BookOpen,
  Shield: Shield,
  Award: Award,
  Send: Send,
  Anchor: Anchor,
  Dribbble: Dribbble,
  Heart: Heart,
  MessageSquare: MessageSquare,
  Briefcase: Briefcase,
  Feather: Feather,
};

// --- Mock Data ---
// Brand colors and generic icons are used to simulate the logo appearance.
// The 'url' field is kept for easy switch back to image-based rendering later.
const mediaLogos = [
  { name: "Inc.", icon: "Star", color: "text-orange-500", url: "https://placehold.co/150x50/ffffff/000000?text=Inc." },
  { name: "Forbes", icon: "TrendingUp", color: "text-red-500", url: "https://placehold.co/180x50/ffffff/000000?text=Forbes" },
  { name: "CBS", icon: "Radio", color: "text-blue-500", url: "https://placehold.co/120x50/ffffff/000000?text=CBS" },
  { name: "KTLA 5", icon: "Globe", color: "text-green-500", url: "https://placehold.co/100x50/ffffff/000000?text=KTLA+5" },
  { name: "Business Insider", icon: "Briefcase", color: "text-teal-500", url: "https://placehold.co/220x50/ffffff/000000?text=Business+Insider" },
  { name: "HuffPost", icon: "Feather", color: "text-purple-500", url: "https://placehold.co/160x50/ffffff/000000?text=HuffPost" },
  { name: "Yahoo", icon: "Zap", color: "text-indigo-500", url: "https://placehold.co/160x50/ffffff/000000?text=Yahoo!" },
  { name: "CNBC", icon: "Shield", color: "text-yellow-500", url: "https://placehold.co/100x50/ffffff/000000?text=CNBC" },
  { name: "Bloomberg", icon: "Award", color: "text-pink-500", url: "https://placehold.co/200x50/ffffff/000000?text=Bloomberg" },
  { name: "ABC", icon: "MessageSquare", color: "text-gray-500", url: "https://placehold.co/100x50/ffffff/000000?text=ABC" },
  { name: "Entrepreneur", icon: "Send", color: "text-cyan-500", url: "https://placehold.co/200x50/ffffff/000000?text=Entrepreneur" },
  { name: "Fast Company", icon: "Anchor", color: "text-lime-500", url: "https://placehold.co/180x50/ffffff/000000?text=Fast+Company" },
  { name: "Fox News", icon: "Heart", color: "text-sky-500", url: "https://placehold.co/140x50/ffffff/000000?text=FOX+NEWS" },
];

const MediaMentionsSection = () => {
  return (
    <section className="relative w-full py-20 bg-gray-900 overflow-hidden">
      
      {/* Header */}
      <div className="text-center max-w-4xl mx-auto mb-16 px-4">
        <h2 className="text-sm font-bold text-blue-400 tracking-widest uppercase mb-3">
          INDUSTRY ACCLAIM
        </h2>
        <h1 className="text-3xl md:text-5xl font-extrabold text-white">
          Where Innovation Meets Recognition
        </h1>
        <p className="text-base md:text-lg text-gray-400 mt-4">
          Our commitment to excellence has earned us features in the world's leading publications.
        </p>
      </div>

      {/* Grid Container */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-6 md:gap-8 justify-items-center">
          {mediaLogos.map((logo, index) => {
            const IconComponent = iconMap[logo.icon] || Globe;
            
            return (
              <a 
                key={index}
                href="#" // Placeholder link
                className={`
                  relative w-full aspect-[2/1] max-w-[220px] 
                  bg-gray-800 rounded-xl p-4 md:p-6
                  flex flex-col items-center justify-center 
                  transition-all duration-300 transform 
                  border border-gray-700 hover:border-transparent
                  hover:bg-gray-800/80 hover:scale-105 group
                  shadow-lg
                `}
                title={`Featured on ${logo.name}`}
              >
                {/* Neon Glow Effect on Hover */}
                <div className={`
                    absolute inset-0 rounded-xl opacity-0 transition-opacity duration-500 
                    ${logo.color.replace('text-', 'bg-')} 
                    group-hover:opacity-10 
                    blur-xl
                `}></div>
                
                {/* Icon/Logo Container */}
                <div className="relative z-10">
                  <IconComponent 
                    className={`
                      w-8 h-8 sm:w-10 sm:h-10 text-gray-500 
                      transition-all duration-300 
                      group-hover:opacity-100 group-hover:${logo.color}
                      group-hover:drop-shadow-[0_0_8px_var(--tw-shadow-color)]
                    `} 
                    style={{ '--tw-shadow-color': logo.color.split('-')[1] === '500' ? logo.color.replace('text', '') : 'rgba(255,255,255,0.8)' }}
                  />

                  {/* Logo Name */}
                  <p className="mt-3 text-xs sm:text-sm font-semibold text-gray-400 group-hover:text-white transition-colors duration-300">
                    {logo.name}
                  </p>
                </div>
                
                {/* How to switch to image later: 
                    Uncomment the <img> below and comment out the <IconComponent /> block. 
                    The 'filter grayscale' classes achieve a similar monochromatic look.
                */}
                {/* <img
                  src={logo.url}
                  alt={logo.name}
                  className="w-full h-auto max-h-12 object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                  onError={(e) => { e.target.src = 'https://placehold.co/150x50/ffffff/333333?text=Logo'; }}
                />
                */}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MediaMentionsSection;    