import React from "react";
import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Linkedin, } from "lucide-react";

export default function Footer() {
    const fade = {
        hidden: { opacity: 0, y: 25 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
    };

    return (
        <footer className="w-full max-w-none bg-[#050B14] text-white px-10 py-20 mt-20 border-t border-gray-800 relative overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.04)_0,rgba(255,255,255,0.04)_1px,transparent_1px,transparent_20px)] after:content-[''] after:absolute after:inset-0 after:bg-[repeating-linear-gradient(-45deg,rgba(255,255,255,0.04)_0,rgba(255,255,255,0.04)_1px,transparent_1px,transparent_20px)] before:pointer-events-none after:pointer-events-none  rounded-3xl">
            {/* MIDDLE SECTION - SERVICES */}
            <motion.div
                variants={fade}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.8 }}
                className="grid grid-cols-1 md:grid-cols-4 gap-10 "
            >
                <div>
                    <h3 className="text-xl font-semibold mb-4">Resources</h3>
                    <ul className="space-y-2">
                        <li className="opacity-80 hover:opacity-100 transition-all hover:text-[#D029A8] hover:font-bold hover:cursor-pointer">Technologies</li>
                        <li className="opacity-80 hover:opacity-100 transition-all hover:text-[#D029A8] hover:font-bold hover:cursor-pointer">Careers</li>
                        <li className="opacity-80 hover:opacity-100 transition-all hover:text-[#D029A8] hover:font-bold hover:cursor-pointer">Hire Developers</li>
                        <li className="opacity-80 hover:opacity-100 transition-all hover:text-[#D029A8] hover:font-bold hover:cursor-pointer">Industries</li>
                        <li className="opacity-80 hover:opacity-100 transition-all hover:text-[#D029A8] hover:font-bold hover:cursor-pointer">Client Reviews</li>
                        <li className="opacity-80 hover:opacity-100 transition-all hover:text-[#D029A8] hover:font-bold hover:cursor-pointer">Community</li>
                    </ul>

                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-4">AI & Cloud</h3>
                    <ul className="space-y-2 ">
                        <li className="opacity-80 hover:opacity-100 transition-all hover:text-[#D029A8] hover:font-bold hover:cursor-pointer">AI Center of Excellence (CoE)</li>
                        <li className="opacity-80 hover:opacity-100 transition-all hover:text-[#D029A8] hover:font-bold hover:cursor-pointer">AI Software Development</li>
                        <li className="opacity-80 hover:opacity-100 transition-all hover:text-[#D029A8] hover:font-bold hover:cursor-pointer">Agentic AI Development</li>
                        <li className="opacity-80 hover:opacity-100 transition-all hover:text-[#D029A8] hover:font-bold hover:cursor-pointer">Cloud Migration</li>
                        <li className="opacity-80 hover:opacity-100 transition-all hover:text-[#D029A8] hover:font-bold hover:cursor-pointer">AWS Consulting</li>
                        <li className="opacity-80 hover:opacity-100 transition-all hover:text-[#D029A8] hover:font-bold hover:cursor-pointer">Azure Consulting</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-xl font-semibold mb-4">Services</h3>
                    <ul className="space-y-2 ">
                        <li className="opacity-80 hover:opacity-100 transition-all hover:text-[#D029A8] hover:font-bold hover:cursor-pointer">Hybrid App Development</li>
                        <li className="opacity-80 hover:opacity-100 transition-all hover:text-[#D029A8] hover:font-bold hover:cursor-pointer">Website Development</li>
                        <li className="opacity-80 hover:opacity-100 transition-all hover:text-[#D029A8] hover:font-bold hover:cursor-pointer">Web App Development</li>
                        <li className="opacity-80 hover:opacity-100 transition-all hover:text-[#D029A8] hover:font-bold hover:cursor-pointer">Xamarin App Development</li>
                        <li className="opacity-80 hover:opacity-100 transition-all hover:text-[#D029A8] hover:font-bold hover:cursor-pointer">Zend Development</li>
                        <li className="opacity-80 hover:opacity-100 transition-all hover:text-[#D029A8] hover:font-bold hover:cursor-pointer">Custom App Development</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-xl font-semibold mb-4">Mobile</h3>
                    <ul className="space-y-2 ">
                        <li className="opacity-80 hover:opacity-100 transition-all hover:text-[#D029A8] hover:font-bold hover:cursor-pointer">iOS App Development</li>
                        <li className="opacity-80 hover:opacity-100 transition-all hover:text-[#D029A8] hover:font-bold hover:cursor-pointer">Android App Development</li>
                        <li className="opacity-80 hover:opacity-100 transition-all hover:text-[#D029A8] hover:font-bold hover:cursor-pointer">Flutter Development</li>
                        <li className="opacity-80 hover:opacity-100 transition-all hover:text-[#D029A8] hover:font-bold hover:cursor-pointer">React Native Development</li>
                    </ul>
                </div>
            </motion.div>
            <hr className="mt-10 mb-10" />
            {/* TOP GRID */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {/* USA */}
                <motion.div variants={fade} initial="hidden" animate="visible">
                    <h3 className="text-xl font-semibold mb-4">USA (HQ)</h3>
                    <p className="opacity-80">720 Market St San Francisco CA 94102</p>
                    <p className="opacity-80">CA 94102</p>
                </motion.div>

                {/* India */}
                <motion.div variants={fade} initial="hidden" animate="visible" transition={{ delay: 0.2 }}>
                    <h3 className="text-xl font-semibold mb-4">India</h3>
                    <p className="opacity-80">A-27, 9th Floor, Industrial Area,</p>
                    <p className="opacity-80">Sector 62, Noida, Uttar Pradesh</p>
                </motion.div>

                {/* UAE */}
                <motion.div variants={fade} initial="hidden" animate="visible" transition={{ delay: 0.4 }}>
                    <h3 className="text-xl font-semibold mb-4">UAE</h3>
                    <p className="opacity-80">1920 Yonge Street, Davisville</p>
                    <p className="opacity-80">Centre, Suite 200, Toronto, ON M4S 3E2</p>
                </motion.div>

                {/* Resources */}

            </div>

            <motion.div
                variants={fade}
                initial="hidden"
                animate="visible"
                transition={{ delay: 1 }}
                className="mt-10 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6"
            >
                {/* Left Section */}
                <img src="https://uxdlab.com/wp-content/uploads/2023/07/Group-1597883174.png" alt="Company Logo" className="footer-logo" />

                {/* Center Section (empty, but you can add content here if needed) */}
                <div className="flex-grow">
                    <div className="flex justify-center gap-10 mt-6 md:mt-0">
                        {/* First Group: Social Media Icons (Facebook, Twitter, Instagram, LinkedIn) */}
                        <div className="flex gap-5">
                            <motion.a
                                href="https://www.facebook.com/uxdlabsoftware?rdid=dBihFDKcU71pqm3U&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F12Br7fYYtxW%2F#"
                                whileHover={{ scale: 1.15 }}
                                className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition"
                            >
                                <Facebook size={20} />
                            </motion.a>
                            <motion.a
                                href="https://x.com/uxd_lab"
                                whileHover={{ scale: 1.15 }}
                                className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition"
                            >
                                <Twitter size={20} />
                            </motion.a>
                            <motion.a
                                href="https://www.instagram.com/uxdlab_software/?igsh=czJ1dGlvb2RleWt4#"
                                whileHover={{ scale: 1.15 }}
                                className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition"
                            >
                                <Instagram size={20} />
                            </motion.a>
                            <motion.a
                                href="https://www.linkedin.com/company/uxdlab-software/"
                                whileHover={{ scale: 1.15 }}
                                className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition"
                            >
                                <Linkedin size={20} />
                            </motion.a>
                        </div>

                       
                    </div>
                </div>


                {/* Right Section */}
                <div>


                    {/* Logos */}
                    <div className="flex gap-4 mt-4 md:mt-0">
                        <img src="https://uxdlab.com/wp-content/uploads/2025/01/image_2024_04_25T12_59_40_698Z-1.webp" alt="logo1" className="h-12 w-auto opacity-80 hover:opacity-100 transition" />
                        <img src="https://uxdlab.com/wp-content/uploads/2025/01/image_2024_04_25T12_59_54_240Z-1.webp" alt="logo2" className="h-12 w-auto opacity-80 hover:opacity-100 transition" />
                        <img src="https://uxdlab.com/wp-content/uploads/2025/01/image_2024_04_25T12_59_35_719Z-1.webp" alt="logo2" className="h-12 w-auto opacity-80 hover:opacity-100 transition" />
                    </div>
                </div>
            </motion.div>




            {/* BOTTOM */}
            <motion.div
                variants={fade}
                initial="hidden"
                animate="visible"
                transition={{ delay: 1 }}
                className="mt-10 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6"
            >
                <div className="flex items-center gap-6">
                    <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
                    <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition-colors">Cookies Policy</a>

                    <div className="opacity-70">
                        © 2025 Uxdlab
                    </div>
                </div>



            </motion.div>

        </footer>
    );
}
