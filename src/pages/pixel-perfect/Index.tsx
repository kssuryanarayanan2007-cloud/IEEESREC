import { useState, useEffect } from "react";
import { Button } from "@/components/pixel-perfect/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, scaleUp } from "@/lib/pixel-perfect/animations";
import campusHero from "@/assets/pixel-perfect/campus-hero.jpg";
import ieee from "@/assets/pixel-perfect/ieee-madras.png";
import FloatingRobotAgent from "@/components/FloatingRobotAgent";

const Index = () => {
  // Countdown Timer Logic
  const calculateTimeLeft = () => {
    const targetDate = new Date("2026-12-11T00:00:00");
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#fafafa]">
      {/* Hero */}
      <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center overflow-hidden">
        {/* Background Layer matching the light teal/green vibe of the screenshot */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#cce5e2] via-[#e5f0ea] to-[#bcd7cb]" />
        <img src={campusHero} alt="Campus" className="absolute inset-0 w-full h-full object-cover object-center opacity-10 pointer-events-none mix-blend-multiply" />
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="relative max-w-5xl mx-auto text-center px-6 py-20 z-10 w-full"
        >
          <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight text-white drop-shadow-md">
            IEEE IES
          </motion.h1>
          
          <motion.h2 variants={fadeUp} className="text-lg md:text-2xl font-semibold mb-6 tracking-wider text-white drop-shadow uppercase">
            Student and Young Professional Congress
          </motion.h2>
          
          <motion.div variants={scaleUp} className="inline-block px-4 py-1.5 mb-4 rounded-full border-2 border-[#5a8b9f] text-[#5a8b9f] font-bold tracking-widest text-sm uppercase">
            1st Edition
          </motion.div>
          
          <motion.p variants={fadeUp} className="text-xl md:text-3xl font-bold mb-8 text-white drop-shadow">
            Advances in Engineering, Computing Technologies
          </motion.p>
          
          <motion.div variants={fadeUp} className="flex flex-col items-center gap-1 text-[#4a6b7f] font-semibold mb-12">
            <span>Coimbatore, India</span>
            <span>December 11 - 13, 2026</span>
          </motion.div>

          {/* Countdown Timer */}
          <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12">
            {[
              { label: "DAYS", value: timeLeft.days },
              { label: "HOURS", value: timeLeft.hours },
              { label: "MINUTES", value: timeLeft.minutes },
              { label: "SECONDS", value: timeLeft.seconds },
            ].map((item, idx) => (
              <div key={idx} className="bg-white/30 backdrop-blur-md border border-white/40 rounded-xl p-4 md:p-6 min-w-[100px] md:min-w-[140px] shadow-sm">
                <div className="text-3xl md:text-5xl font-bold text-white drop-shadow-sm mb-2">{item.value.toString().padStart(2, '0')}</div>
                <div className="text-[10px] md:text-xs font-bold text-white/80 uppercase tracking-widest">{item.label}</div>
              </div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-wrap justify-center items-center gap-4">
            <Button size="lg" className="bg-[#427b94] hover:bg-[#346277] text-white px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
              Registration Open
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white text-[#427b94] hover:bg-gray-50 border-none px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
              <Link to="/pixel-perfect/about">Learn More</Link>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Organized By */}
      <section className="py-16 md:py-24 bg-white relative z-20">
        <div className="container max-w-6xl">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-xl md:text-2xl text-gray-600 font-medium mb-12"
          >
            Organized by
          </motion.h3>
          
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
            {/* Logo Card 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)] transition-shadow duration-300 flex items-center justify-center w-64 h-40 border border-gray-50"
            >
              <img src={ieee} alt="IEEE" className="max-h-20 object-contain grayscale hover:grayscale-0 transition-all duration-500" />
            </motion.div>
            
            {/* Logo Card 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)] transition-shadow duration-300 flex flex-col items-center justify-center w-64 h-40 border border-gray-50 text-center"
            >
              <span className="font-bold text-[#00629b] text-xl mb-1">IEEE SREC</span>
              <span className="text-sm text-gray-500">Student Branch</span>
            </motion.div>
            
            {/* Logo Card 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)] transition-shadow duration-300 flex flex-col items-center justify-center w-64 h-40 border border-gray-50 text-center"
            >
              <span className="font-bold text-[#00629b] text-xl">IEEE</span>
              <span className="text-xs text-gray-500 font-semibold tracking-wider">Advancing Technology<br/>for Humanity</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section 1: Alternating Layout */}
      <section className="py-16 md:py-24 bg-[#fafafa]">
        <div className="container max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
            <div className="lg:w-1/2">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold text-[#2a3c4a] mb-6"
              >
                Industrial Electronics Society
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-gray-600 leading-relaxed mb-8"
              >
                The IEEE Industrial Electronics Society (IES) is one of the largest technical societies within IEEE, dedicated to advancing the theory and application of electronics, controls, and instrumentation in industrial and manufacturing systems. With over 4,000 members worldwide, IES promotes excellence in research, education, and industrial technological innovation, supporting advances in areas such as robotics, automation, industrial communications, signal processing, and power electronics.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Button className="bg-[#427b94] hover:bg-[#346277] text-white rounded-xl shadow-md">
                  Learn more about the Industrial Electronics Society
                </Button>
              </motion.div>
            </div>
            <div className="lg:w-1/2">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="rounded-3xl overflow-hidden shadow-2xl h-[400px] w-full"
              >
                <img src={campusHero} alt="Society" className="w-full h-full object-cover" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section 2: Alternating Layout Reversed */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-6xl">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-24">
            <div className="lg:w-1/2">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="rounded-3xl overflow-hidden shadow-xl h-[300px] w-full bg-[#7a9dad] flex flex-col items-center justify-center text-white"
              >
                <h3 className="text-5xl font-black tracking-widest mb-2 opacity-90">IEEE</h3>
                <p className="text-sm font-medium tracking-wide opacity-80">Institute of Electrical and Electronics Engineers</p>
                <p className="text-xs mt-6 opacity-60">Madras Section</p>
              </motion.div>
            </div>
            <div className="lg:w-1/2">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold text-[#2a3c4a] mb-6"
              >
                Madras Section
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-gray-600 leading-relaxed mb-8"
              >
                The IEEE Madras Section is one of the most active in India, representing thousands of members. Founded with the objective of disseminating IEEE initiatives throughout the region, the section promotes educational and technical programs, networking opportunities, and development of technological applications. With strong academic and industrial presence, it has been fundamental in technological development, supporting cutting-edge research and training of qualified professionals.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Mascot Agent */}
      <FloatingRobotAgent />
    </div>
  );
};

export default Index;

