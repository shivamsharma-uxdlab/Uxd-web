import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronRight, Star, Shield, Zap, Globe, Users, TrendingUp, Cpu, Layers, MousePointer2, Palette, Eye, LayoutTemplate, Smartphone, Code2 } from 'lucide-react';

const contentData = [
  {
    id: "01",
    title: "User-Centric Methodology",
    description: "We don't just guess; we validate. Our rigorous user research and persona mapping ensure every pixel serves a specific user need, reducing friction and boosting retention.",
    icon: <Users className="w-6 h-6 text-cyan-400" />
  },
  {
    id: "02",
    title: "Data-Driven Design Decisions",
    description: "Move beyond subjectivity. We leverage heatmaps, A/B testing, and behavioral analytics to craft interfaces that are scientifically proven to convert.",
    icon: <TrendingUp className="w-6 h-6 text-purple-400" />
  },
  {
    id: "03",
    title: "Scalable Design Systems",
    description: "We build atomic design libraries that ensure consistency across your entire product ecosystem, drastically reducing design debt and accelerating development velocity.",
    icon: <LayoutTemplate className="w-6 h-6 text-blue-400" />
  },
  {
    id: "04",
    title: "Accessibility & Inclusion First",
    description: "Inclusive design isn't an afterthought. We ensure your digital products are WCAG compliant, expanding your market reach to users of all abilities from day one.",
    icon: <Eye className="w-6 h-6 text-green-400" />
  },
  {
    id: "05",
    title: "Rapid Prototyping & Iteration",
    description: "Visualize ideas instantly. Our high-fidelity interactive prototypes allow stakeholders to touch and feel the product before a single line of code is written.",
    icon: <Zap className="w-6 h-6 text-pink-400" />
  },
  {
    id: "06",
    title: "Cognitive Psychology Integration",
    description: "We apply principles of cognitive load and behavioral economics to guide users intuitively through complex flows, making difficult tasks feel effortless.",
    icon: <MousePointer2 className="w-6 h-6 text-yellow-400" />
  },
  {
    id: "07",
    title: "Seamless Developer Handoff",
    description: "We speak code. Our designs are delivered with pixel-perfect specifications, assets, and documentation that developers love, ensuring nothing gets lost in translation.",
    icon: <Code2 className="w-6 h-6 text-orange-400" />
  },
  {
    id: "08",
    title: "Omnichannel Experience",
    description: "Whether on a smartwatch, a kiosk, or a 4K desktop, we craft adaptive experiences that maintain brand integrity and usability across every touchpoint.",
    icon: <Smartphone className="w-6 h-6 text-red-400" />
  }
];

const ListItem = ({ item, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex flex-col sm:flex-row gap-6 p-8 mb-8 bg-slate-800/50 hover:bg-slate-800 rounded-2xl border border-slate-700 hover:border-cyan-500/30 transition-all duration-300 backdrop-blur-sm"
    >
      <div className="absolute top-0 right-0 p-4 opacity-10 font-bold text-6xl text-slate-500 select-none">
        {item.id}
      </div>
      
      <div className="flex-shrink-0">
        <div className="w-14 h-14 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center group-hover:scale-110 group-hover:border-cyan-500/50 transition-all duration-300 shadow-lg shadow-black/20">
          {item.icon}
        </div>
      </div>
      
      <div className="relative z-10">
        <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-cyan-400 transition-colors">
          {item.title}
        </h3>
        <p className="text-slate-400 leading-relaxed">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
};

export default function App() {
  const containerRef = useRef(null);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500/30">
      {/* Decorative Background Gradients */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-cyan-900/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[100px]" />
      </div>

      <main className="relative z-10 max-w-7xl  mx-auto px-2 sm:px-2 lg:px-2 py:5 sm:py-8 md:py-12 lg:py-16">
        <div className="lg:flex lg:gap-16 lg:justify-evenly " ref={containerRef}>
          
          {/* Left Side - Sticky Header */}
          <div className="lg:w-1/3 shrink-0">
            <div className="lg:sticky lg:top-24 lg:h-[calc(100vh-12rem)] flex flex-col justify-center mb-16 pt-2  lg:mb-0">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6 ">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                  </span>
                  Why Choose Us
                </div>
                
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-8 leading-tight">
                  Why global innovators build with <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">UXDLab</span>
                </h2>
                
                <p className="text-lg text-slate-400 mb-8 leading-relaxed max-w-md">
                  We go beyond aesthetics. Our strategic design approach combines deep user empathy with rigorous data validation to create digital products that solve complex problems and deliver measurable ROI.
                </p>

                <div className="hidden lg:block">
                  <button className="group flex items-center gap-2 text-cyan-400 font-semibold hover:text-cyan-300 transition-colors">
                    Start your journey
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
                
                {/* Visual Indicator of Scroll Progress could go here */}
                <div className="hidden lg:block mt-12 h-1 w-20 bg-slate-800 rounded-full overflow-hidden">
                   <motion.div 
                     className="h-full bg-cyan-500"
                     initial={{ width: "0%" }}
                     whileInView={{ width: "100%" }}
                     transition={{ duration: 1.5 }}
                   />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Side - Scrollable List */}
          <div className="lg:w-2/3">
            <div className="space-y-4">
               {contentData.map((item, index) => (
                 <ListItem key={item.id} item={item} index={index} />
               ))}
            </div>

            {/* Bottom CTA for Mobile */}
            <div className="mt-12 pb-2 lg:hidden">
              <button className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold shadow-lg shadow-cyan-900/20 active:scale-95 transition-transform">
                Start your journey
              </button>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}