import React from 'react';
import { motion } from 'framer-motion';
import { 
  Bot, 
  Smartphone, 
  Watch, 
  CloudLightning, 
  Users, 
  Palette, 
  ArrowUpRight 
} from 'lucide-react';

const services = [
  {
    id: 1,
    title: "AI Automation & Intelligent Workflows",
    description: "We design AI-driven automation pipelines, smart decision engines, and adaptive systems that streamline operations and unlock new business efficiencies.",
    icon: <Bot size={32} />,
    color: "from-purple-500 to-indigo-500",
    shadow: "shadow-purple-500/20"
  },
  {
    id: 2,
    title: "Custom Web, Mobile & SaaS Platforms",
    description: "We build scalable digital products, responsive interfaces, and high-performance applications tailored to deliver seamless user experiences across all devices.",
    icon: <Smartphone size={32} />,
    color: "from-blue-500 to-cyan-500",
    shadow: "shadow-blue-500/20"
  },
  {
    id: 3,
    title: "IoT Systems & Smart Device Integration",
    description: "We create secure IoT ecosystems, real-time monitoring systems, and connected device solutions that offer intelligent automation and actionable insights.",
    icon: <Watch size={32} />,
    color: "from-emerald-500 to-teal-500",
    shadow: "shadow-emerald-500/20"
  },
  {
    id: 4,
    title: "Cloud Engineering & Infrastructure Scaling",
    description: "We architect and optimize cloud-native infrastructures with automated deployments, enterprise security layers, and performance-driven modernization.",
    icon: <CloudLightning size={32} />,
    color: "from-orange-500 to-red-500",
    shadow: "shadow-orange-500/20"
  },
  {
    id: 5,
    title: "Dedicated Teams & End-to-End Delivery",
    description: "We provide expert engineering teams, rapid development support, and fully managed services to accelerate product delivery and reduce operational overhead.",
    icon: <Users size={32} />,
    color: "from-pink-500 to-rose-500",
    shadow: "shadow-pink-500/20"
  },
  {
    id: 6,
    title: "UX/UI Design & Product Strategy",
    description: "We craft user-centric digital experiences supported by deep research, design systems, and strategic product roadmaps aligned with your business goals.",
    icon: <Palette size={32} />,
    color: "from-violet-500 to-fuchsia-500",
    shadow: "shadow-violet-500/20"
  }
];


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const cardVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 12 }
  }
};

const Services = () => {
  return (
    <section className="relative min-h-screen bg-[#050505] text-white py-4 md:py-8 lg:py-16 sm:px-6 px-2 overflow-hidden">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-900/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-[128px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block py-1 px-3 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-400 text-sm font-semibold tracking-wider mb-6"
          >
            SERVICES WE OFFER
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-500 max-w-4xl mx-auto leading-tight"
          >
           Building digital solutions that move businesses forward
          </motion.h2>
        </div>

        {/* Services Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group relative p-1 rounded-2xl bg-gradient-to-b from-gray-800/50 to-gray-900/50 hover:bg-gray-800 transition-colors duration-300"
            >
              {/* Card Inner Content */}
              <div className="relative h-full bg-[#0A0A0A] rounded-xl p-8 border border-gray-800 group-hover:border-gray-700 overflow-hidden transition-colors duration-300">
                
                {/* Gradient Hover Background Effect */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br ${service.color}`} />
                
                {/* Header: Icon & Arrow */}
                <div className="flex justify-between items-start mb-6">
                  <div className={`p-3 rounded-lg bg-gray-900 border border-gray-800 group-hover:border-gray-600 transition-colors duration-300`}>
                    <div className={`text-gray-300 group-hover:text-white transition-colors duration-300`}>
                      {service.icon}
                    </div>
                  </div>
                  <ArrowUpRight className="text-gray-600 group-hover:text-white transition-colors duration-300" size={20} />
                </div>

                {/* Text Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed text-sm group-hover:text-gray-300 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Bottom Line Accent */}
                <div className={`absolute bottom-0 left-0 h-1 w-0 group-hover:w-full bg-gradient-to-r ${service.color} transition-all duration-500 ease-out`} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;