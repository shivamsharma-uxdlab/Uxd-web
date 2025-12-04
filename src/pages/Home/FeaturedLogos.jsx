import React from "react";
import { motion } from "framer-motion";

// Import logos
import IncLogo from '../../assets/FeaturedLogos/inc-2.png';
import ForbesLogo from '../../assets/FeaturedLogos/forbes-3.png';
import CbsLogo from '../../assets/FeaturedLogos/cbs.png';
import KtlaLogo from '../../assets/FeaturedLogos/ktla.png';
import YahooLogo from '../../assets/FeaturedLogos/yahoo-7.png';
import abcbroadcast from '../../assets/FeaturedLogos/abc-broadcast.png';
import bloomberg from '../../assets/FeaturedLogos/bloomberg-1.png';
import business from '../../assets/FeaturedLogos/business-insider-2.png';
import cnbc from '../../assets/FeaturedLogos/cnbc-1.png';
import enterprenure from '../../assets/FeaturedLogos/entrepreneur-2.png';
import fastcompany from '../../assets/FeaturedLogos/fastcompany.png';
import foxnew from '../../assets/FeaturedLogos/fox-news-channel-logo-1.png';
import huffpost from '../../assets/FeaturedLogos/huffpost.png';

const randomBackgroundColors = [
  'bg-red-100', 'bg-blue-100', 'bg-green-100', 'bg-yellow-100', 'bg-purple-100',
  'bg-pink-100', 'bg-indigo-100', 'bg-teal-100', 'bg-orange-100', 'bg-gray-100'
];

const FeaturedLogos = () => {
  const getRandomColor = () => {
    return randomBackgroundColors[Math.floor(Math.random() * randomBackgroundColors.length)];
  };

  return (
    <div className="py-8 bg-gray-100 flex justify-center items-center">
      <div className="w-full max-w-5xl bg-white p-6 rounded-xl shadow-xl">
        <h2 className="text-4xl font-serif font-semibold mb-6 text-center text-gray-800 relative">
  <span className="font-normal">Featured Across</span> <span className="font-bold">Leading Platforms</span>
</h2>



        <motion.div
          className="flex flex-wrap justify-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}      
          transition={{ duration: 1.2 }}
        >
          
          <motion.div
            className={`p-4 rounded-xl ${getRandomColor()} cursor-pointer shadow-lg hover:bg-opacity-50 hover:scale-105 transition-all duration-200 ease-in-out`}
            whileHover={{ rotate: 5 }}
            transition={{ duration: 0.2 }}      
          >
            <img src={bloomberg} alt="Bloomberg Logo    " className="h-auto max-h-[60px] mx-auto" />
          </motion.div>
          <motion.div
            className={`p-4 rounded-xl ${getRandomColor()} cursor-pointer shadow-lg hover:bg-opacity-50 hover:scale-105 transition-all duration-200 ease-in-out`}
            whileHover={{ rotate: -5 }}
            transition={{ duration: 0.2 }}
          >
            <img src={YahooLogo} alt="Yahoo Logo" className="h-auto max-h-[60px] mx-auto" />
          </motion.div>
          <motion.div
            className={`p-4 rounded-xl ${getRandomColor()} cursor-pointer shadow-lg hover:bg-opacity-50 hover:scale-105 transition-all duration-200 ease-in-out`}
            whileHover={{ rotate: 5 }}
            transition={{ duration: 0.2 }}
          >
            <img src={abcbroadcast} alt="ABC Broadcast Logo" className="h-auto max-h-[60px] mx-auto" />
          </motion.div>
          <motion.div
            className={`p-4 rounded-xl ${getRandomColor()} cursor-pointer shadow-lg hover:bg-opacity-50 hover:scale-105 transition-all duration-200 ease-in-out`}
            whileHover={{ rotate: -5 }}
            transition={{ duration: 0.2 }}
          >
            <img src={CbsLogo} alt="CBS Logo" className="h-auto max-h-[60px] mx-auto" />
          </motion.div>
          <motion.div
            className={`p-4 rounded-xl ${getRandomColor()} cursor-pointer shadow-lg hover:bg-opacity-50 hover:scale-105 transition-all duration-200 ease-in-out`}
            whileHover={{ rotate: 5 }}
            transition={{ duration: 0.2 }}
          >
            <img src={ForbesLogo} alt="Forbes Logo" className="h-auto max-h-[60px] mx-auto" />
          </motion.div>
          <motion.div
            className={`p-4 rounded-xl ${getRandomColor()} cursor-pointer shadow-lg hover:bg-opacity-50 hover:scale-105 transition-all duration-200 ease-in-out`}
            whileHover={{ rotate: -5 }}
            transition={{ duration: 0.2 }}
          >
            <img src={business} alt="Business Insider Logo" className="h-auto max-h-[60px] mx-auto" />
          </motion.div>
          <motion.div
            className={`p-4 rounded-xl ${getRandomColor()} cursor-pointer shadow-lg hover:bg-opacity-50 hover:scale-105 transition-all duration-200 ease-in-out`}
            whileHover={{ rotate: 5 }}
            transition={{ duration: 0.2 }}
          >
            <img src={cnbc} alt="CNBC Logo" className="h-auto max-h-[60px] mx-auto" />
          </motion.div>
          <motion.div
            className={`p-4 rounded-xl ${getRandomColor()} cursor-pointer shadow-lg hover:bg-opacity-50 hover:scale-105 transition-all duration-200 ease-in-out`}
            whileHover={{ rotate: -5 }}
            transition={{ duration: 0.2 }}
          >
            <img src={fastcompany} alt="Fast Company Logo" className="h-auto max-h-[60px] mx-auto" />
          </motion.div>
          <motion.div
            className={`p-4 rounded-xl ${getRandomColor()} cursor-pointer shadow-lg hover:bg-opacity-50 hover:scale-105 transition-all duration-200 ease-in-out`}
            whileHover={{ rotate: 5 }}
            transition={{ duration: 0.2 }}
          >
            <img src={enterprenure} alt="Entrepreneur Logo" className="h-auto max-h-[60px] mx-auto" />
          </motion.div>
          <motion.div
            className={`p-4 rounded-xl ${getRandomColor()} cursor-pointer shadow-lg hover:bg-opacity-50 hover:scale-105 transition-all duration-200 ease-in-out`}
            whileHover={{ rotate: -5 }}
            transition={{ duration: 0.2 }}
          >
            <img src={foxnew} alt="Fox News Logo" className="h-auto max-h-[60px] mx-auto" />
          </motion.div>
          <motion.div
            className={`p-4 rounded-xl ${getRandomColor()} cursor-pointer shadow-lg hover:bg-opacity-50 hover:scale-105 transition-all duration-200 ease-in-out`}
            whileHover={{ rotate: 5 }}
            transition={{ duration: 0.2 }}
          >
            <img src={huffpost} alt="HuffPost Logo" className="h-auto max-h-[60px] mx-auto" />
          </motion.div>
          <motion.div
            className={`p-4 rounded-xl ${getRandomColor()} cursor-pointer shadow-lg hover:bg-opacity-50 hover:scale-105 transition-all duration-200 ease-in-out`}
            whileHover={{ rotate: -5 }}
            transition={{ duration: 0.2 }}
          >
            <img src={IncLogo} alt="Inc Logo" className="h-auto max-h-[60px] mx-auto" />
          </motion.div>
          <motion.div
            className={`p-4 rounded-xl ${getRandomColor()} cursor-pointer shadow-lg hover:bg-opacity-50 hover:scale-105 transition-all duration-200 ease-in-out`}
            whileHover={{ rotate: 5 }}
            transition={{ duration: 0.2 }}
          >
            <img src={KtlaLogo} alt="KTLA Logo" className="h-auto max-h-[60px] mx-auto" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default FeaturedLogos;
