import SectionHeader from "@/components/pixel-perfect/SectionHeader";
import { Plane, Train, Car, Map as MapIcon, Compass } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, fadeLeft, fadeRight, staggerContainer } from "@/lib/pixel-perfect/animations";
import campusHero from "@/assets/pixel-perfect/campus-hero.jpg";

export default function Venue() {
  return (
    <div className="container py-12 md:py-20 relative">
      <div className="absolute top-1/2 right-0 -z-10 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      
      <SectionHeader title="Conference Venue" />

      {/* Image Gallery */}
      <motion.div 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
        className="mb-20"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 max-w-6xl mx-auto h-[400px] md:h-[500px]">
          <motion.div variants={fadeRight} className="md:col-span-8 rounded-2xl overflow-hidden relative group shadow-soft">
            <img 
              src={campusHero} 
              alt="Sri Ramakrishna Engineering College Campus" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </motion.div>
          <div className="hidden md:flex md:col-span-4 flex-col gap-4 h-full">
            <motion.div variants={fadeLeft} className="flex-1 rounded-2xl overflow-hidden relative group shadow-soft">
              <img 
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80" 
                alt="Conference Hall" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-5">
                <p className="text-white font-bold tracking-wide">Auditorium</p>
              </div>
            </motion.div>
            <motion.div variants={fadeUp} className="flex-1 rounded-2xl overflow-hidden relative group shadow-soft">
              <img 
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80" 
                alt="University Building" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-5">
                <p className="text-white font-bold tracking-wide">Campus</p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <motion.div 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto items-center mb-24"
      >
        <motion.div variants={fadeUp} className="space-y-6">
          <h3 className="text-2xl font-bold text-primary font-serif mb-4">Sri Ramakrishna Engineering College</h3>
          <p className="text-base md:text-lg text-foreground/85 leading-relaxed text-justify relative z-10">
            Sri Ramakrishna Engineering College (SREC), located in Coimbatore, was established in 1994 and is managed by the SNR Sons Charitable Trust. The college offers undergraduate and postgraduate programs in engineering and technology. SREC is known for its strong academic curriculum, research initiatives, and modern facilities, fostering a practical learning environment. The college also emphasizes extracurricular activities and industry collaborations, aiming to produce skilled professionals.
          </p>
          <motion.div variants={fadeUp} className="bg-secondary/40 p-5 rounded-lg border border-border/50 flex gap-4 items-center mt-6">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-sm shrink-0">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <p className="font-bold text-primary">Discover More</p>
              <a href="https://www.srec.ac.in" target="_blank" rel="noopener noreferrer" className="text-sm text-foreground/80 hover:text-accent font-medium transition-colors underline-offset-4 hover:underline">
                Visit Official Website →
              </a>
            </div>
          </motion.div>
        </motion.div>
        <motion.div variants={fadeUp}>
          <div className="aspect-square md:aspect-video w-full rounded-2xl overflow-hidden shadow-elegant border border-border/50 relative group object-cover bg-primary/10">
            <iframe
              title="SREC Map"
              src="https://www.google.com/maps?q=Sri+Ramakrishna+Engineering+College,+Coimbatore&output=embed"
              className="absolute inset-0 w-full h-full opacity-90 group-hover:opacity-100 transition-opacity duration-500 saturate-[1.2] invert-0 dark:invert-[0.9]"
              loading="lazy"
            />
          </div>
        </motion.div>
      </motion.div>

      <motion.div 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.h2 variants={fadeUp} className="text-3xl font-serif text-center font-bold text-primary mb-12">How to Reach</motion.h2>

        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-soft border border-border/50 overflow-hidden mb-10">
          <table className="w-full text-sm md:text-base">
            <tbody>
              <motion.tr variants={fadeUp} className="border-b border-border/50 flex flex-col sm:table-row hover:bg-secondary/20 transition-colors">
                <td className="p-4 sm:p-5 flex items-center gap-3 font-semibold text-primary"><div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center text-accent"><Plane className="h-4 w-4" /></div> Nearby Airport</td>
                <td className="p-4 sm:p-5 font-medium border-t sm:border-t-0 border-border/50">CJB Coimbatore</td>
                <td className="p-4 sm:p-5 sm:text-center text-foreground/70"><span className="sm:hidden font-semibold mr-2">Distance:</span> 20 km</td>
                <td className="p-4 sm:p-5 sm:text-center text-foreground/70"><span className="sm:hidden font-semibold mr-2">Time:</span> 40 minutes</td>
              </motion.tr>
              <motion.tr variants={fadeUp} className="flex flex-col sm:table-row hover:bg-secondary/20 transition-colors">
                <td className="p-4 sm:p-5 flex items-center gap-3 font-semibold text-primary"><div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center text-accent"><Train className="h-4 w-4" /></div> Nearby Railway</td>
                <td className="p-4 sm:p-5 font-medium border-t sm:border-t-0 border-border/50">CBE Coimbatore Jn</td>
                <td className="p-4 sm:p-5 sm:text-center text-foreground/70"><span className="sm:hidden font-semibold mr-2">Distance:</span> 15 km</td>
                <td className="p-4 sm:p-5 sm:text-center text-foreground/70"><span className="sm:hidden font-semibold mr-2">Time:</span> 30 minutes</td>
              </motion.tr>
            </tbody>
          </table>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <motion.div variants={fadeUp} className="bg-primary-dark text-white p-8 rounded-xl shadow-soft relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-bl-full pointer-events-none" />
            <div>
               <h3 className="font-bold text-accent mb-4 flex items-center gap-2"><Car className="h-5 w-5" /> Local Transport</h3>
               <p className="text-sm leading-relaxed opacity-90 mb-4 bg-white/5 p-4 rounded border border-white/10 relative z-10 block backdrop-blur-sm">Candidates can hire a car (Red Taxi/Go Taxi/OLA) from Airport or Railway Station to reach Sri Ramakrishna Engineering College.</p>
               <p className="text-sm font-semibold mb-3">Bookings / Contact Numbers:</p>
               <ul className="space-y-2 text-sm opacity-80 pl-4 border-l-2 border-accent ml-2 relative z-10">
                 <li>Red Taxi: 0422 456 7890</li>
                 <li>Capital Call Taxi: 0422 245 4444</li>
                 <li>OLA Cabs: 0422 335 5335</li>
                 <li>Fast Track: 0422 288 8999</li>
                 <li>Go Taxi: 0422 4455 6677</li>
               </ul>
            </div>
          </motion.div>
          
          <motion.div variants={fadeUp} className="bg-white p-8 rounded-xl shadow-soft border border-border/50 flex flex-col justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-secondary/20 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 pointer-events-none" />
            <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center text-primary mb-5 border border-primary/20 relative z-10 shrink-0">
              <MapIcon className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-primary mb-3 relative z-10 text-xl">Nearby Connectivity</h3>
            <p className="text-sm md:text-base leading-relaxed text-foreground/80 mb-5 relative z-10">
              Candidates can hire an auto rickshaw from <strong>Thudiyalur</strong> (nearest Town, about 4km away) to reach Sri Ramakrishna Engineering College.
            </p>
            <div className="bg-secondary/40 p-4 rounded-lg border border-border/50 relative z-10 group-hover:border-primary/20 transition-colors">
              <p className="text-sm font-semibold text-primary mb-1">Coval Zone Group Auto</p>
              <p className="text-xl md:text-2xl font-bold tracking-wider text-accent">+91 84381 44544</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

