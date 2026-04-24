import SectionHeader from "@/components/pixel-perfect/SectionHeader";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/pixel-perfect/animations";

export default function Contact() {
  return (
    <div className="container py-12 md:py-20 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      
      <SectionHeader title="Contact Us" description="For any queries regarding the conference, please reach out to the organizing team." />

      <motion.div 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
      >
        <motion.div variants={fadeUp} className="bg-white rounded-xl p-8 shadow-soft text-center border-t-4 border-accent hover:-translate-y-2 transition-transform duration-300">
          <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-5 text-primary">
            <Mail className="h-8 w-8" />
          </div>
          <h3 className="font-bold text-primary mb-3 text-lg">Email</h3>
          <p className="text-foreground/80 hover:text-accent transition-colors"><a href="mailto:aectsd2026@srec.ac.in">aectsd2026@srec.ac.in</a></p>
        </motion.div>

        <motion.div variants={fadeUp} className="bg-white rounded-xl p-8 shadow-soft text-center border-t-4 border-accent hover:-translate-y-2 transition-transform duration-300">
          <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-5 text-primary">
            <Phone className="h-8 w-8" />
          </div>
          <h3 className="font-bold text-primary mb-3 text-lg">Phone</h3>
          <p className="text-foreground/80 mb-1">+91 422 2460088</p>
          <p className="text-foreground/80">+91 422 2461588</p>
        </motion.div>

        <motion.div variants={fadeUp} className="bg-white rounded-xl p-8 shadow-soft text-center border-t-4 border-accent hover:-translate-y-2 transition-transform duration-300">
          <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-5 text-primary">
            <MapPin className="h-8 w-8" />
          </div>
          <h3 className="font-bold text-primary mb-3 text-lg">Address</h3>
          <p className="text-foreground/80 text-sm leading-relaxed">
            Sri Ramakrishna Engineering College, Vattamalaipalayam, NGGO Colony Post, Coimbatore – 641022, Tamil Nadu, India
          </p>
        </motion.div>
      </motion.div>

      <motion.div 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="mt-20 max-w-4xl mx-auto bg-white rounded-xl p-10 shadow-soft border border-border/50 relative overflow-hidden"
      >
        <div className="absolute right-0 bottom-0 w-40 h-40 bg-accent/10 rounded-tl-full" />
        
        <motion.h3 variants={fadeUp} className="text-2xl font-serif font-bold text-primary mb-8 text-center">Conference Secretariat</motion.h3>
        
        <div className="grid sm:grid-cols-2 gap-10">
          <motion.div variants={fadeUp} className="bg-secondary/30 p-6 rounded-lg border border-border/60">
            <p className="font-bold text-primary text-lg mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent"></span> Dr. R. Shanmugasundaram
            </p>
            <p className="text-sm md:text-base text-foreground/80 mb-1 font-medium">Organizing Secretary, AECTSD 2026</p>
            <p className="text-sm mt-3 text-foreground/70">Professor – EEE</p>
            <p className="text-sm text-foreground/70">Sri Ramakrishna Engineering College</p>
          </motion.div>
          
          <motion.div variants={fadeUp} className="bg-secondary/30 p-6 rounded-lg border border-border/60">
            <p className="font-bold text-primary text-lg mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent"></span> Dr. A. Soundarrajan
            </p>
            <p className="text-sm md:text-base text-foreground/80 mb-1 font-medium">Principal, General Chair</p>
            <p className="text-sm mt-3 text-foreground/70">Sri Ramakrishna Engineering College</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

