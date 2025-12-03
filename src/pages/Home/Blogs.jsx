import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Eye } from "lucide-react";

// Mock Data based on your image
const blogPosts = [
  {
    id: 3,
    category: "AI Reliability",
    title: "Why LLM Monitoring Is the Backbone of Every Scalable AI System",
    date: "November 20, 2025",
    views: "742 Views",
    author: " Rohit Kumar",
    authorImg: "https://i.pravatar.cc/150?u=a04258114e29026302d",
    image:
      "https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=1000&auto=format&fit=crop",
    readTime: "6 min read",
  },
  {
    id: 1,
    category: "Intelligent Retrieval",
    title: "Smarter RAG Systems: How AI Decides What Matters and What Doesn’t",
    date: "November 27, 2025",
    views: "389 Views",
    author: " Ankush Singla",
    authorImg: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop",
    readTime: "5 min read",
  },
  {
    id: 2,
    category: "AI Engineering",
    title: "Designing High-Velocity AI Workflows for the Next Generation of Apps",
    date: "November 24, 2025",
    views: "301 Views",
    author: "Deepak Sinha",
    authorImg: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop",
    readTime: "7 min read",
  },
];


// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Delay between each card appearing
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 12 },
  },
};

const Blogs = () => {
  return (
    <section className="bg-slate-50 py-20 px-6 sm:px-12 lg:px-24">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 max-w-7xl mx-auto">
        <div className="max-w-2xl">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-indigo-600 font-bold tracking-widest text-sm uppercase mb-2"
          >
            Blog & Insights
          </motion.h2>
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight"
          >
            Decoding the Future of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
              Generative AI
            </span>
          </motion.h1>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-full text-slate-700 font-semibold shadow-sm hover:shadow-md transition-all"
        >
          View All Articles <ArrowRight size={18} />
        </motion.button>
      </div>

      {/* Grid Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
      >
        {blogPosts.map((post) => (
          <motion.div
            key={post.id}
            variants={cardVariants}
            whileHover={{ y: -12 }} // Lifts up on hover
            className="group relative bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 flex flex-col h-full"
          >
            {/* Image Container with Zoom Effect */}
            <div className="relative h-56 overflow-hidden">
              <div className="absolute top-4 left-4 z-10 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                <span className="text-xs font-medium text-white tracking-wide">
                  {post.category}
                </span>
              </div>
              <motion.img
                whileHover={{ scale: 1.1 }} // Image zooms in
                transition={{ duration: 0.4 }}
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content Container */}
            <div className="p-6 flex flex-col flex-grow">
              {/* Meta Top */}
              <div className="flex items-center gap-4 text-xs text-slate-500 mb-4 font-medium">
                <span className="flex items-center gap-1">
                  <Clock size={14} /> {post.readTime}
                </span>
                <span className="flex items-center gap-1">
                  <Eye size={14} /> {post.views}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-slate-800 mb-3 leading-snug group-hover:text-indigo-600 transition-colors">
                {post.title}
              </h3>

              <div className="mt-auto pt-6 flex items-center justify-between border-t border-slate-100">
                {/* Author Info */}
                <div className="flex items-center gap-3">
                  <img
                    src={post.authorImg}
                    alt={post.author}
                    className="w-10 h-10 rounded-full object-cover ring-2 ring-white shadow-sm"
                  />
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-slate-900">
                      {post.author}
                    </span>
                    <span className="text-xs text-slate-500">{post.date}</span>
                  </div>
                </div>

                {/* Floating Action Button (appears on hover/group-hover) */}
                <motion.div
                  className="bg-indigo-50 p-2 rounded-full text-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity"
                  whileHover={{ rotate: -45 }}
                >
                  <ArrowRight size={20} />
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Mobile Button (only visible on small screens) */}
      <div className="mt-12 text-center md:hidden">
        <button className="px-8 py-3 bg-indigo-600 text-white rounded-full font-semibold shadow-lg">
          View All Articles
        </button>
      </div>
    </section>
  );
};

export default Blogs;
