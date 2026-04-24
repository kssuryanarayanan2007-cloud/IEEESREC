import { Link } from "react-router-dom";
import { Mail, MapPin, ChevronRight, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import logo from "@/assets/2.png";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden mt-10">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-glow/30 rounded-full blur-[100px] pointer-events-none" />
      
      <motion.div 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
        className="container py-16 relative z-10"
      >
        <div className="grid md:grid-cols-12 gap-10 lg:gap-16 mb-12">
          <motion.div variants={fadeUp} className="md:col-span-5">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-white p-1 rounded-full ring-4 ring-white/10">
                <img src={logo} alt="SREC" className="h-14 w-14" width={56} height={56} loading="lazy" />
              </div>
              <div>
                <p className="font-serif font-bold text-xl tracking-wide text-white">AECTSD 2026</p>
                <p className="text-[10px] uppercase tracking-[0.25em] text-accent font-semibold">SREC, Coimbatore</p>
              </div>
            </div>
            <p className="text-sm md:text-base text-white/70 leading-relaxed pr-4">
              First International Conference on Advances in Engineering and Computing Technologies for Sustainable Development. A premier forum for pioneering research and innovation.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="md:col-span-3">
            <p className="font-serif text-sm uppercase tracking-[0.2em] text-accent font-bold mb-6 flex items-center gap-2">
              <span className="w-6 h-[2px] bg-accent"></span> Quick Links
            </p>
            <ul className="space-y-3">
              {[
                { l: "Call for Papers", to: "/call" },
                { l: "Authors Guidelines", to: "/author" },
                { l: "Registration Details", to: "/register" },
                { l: "Conference Venue", to: "/venue" },
                { l: "Contact Us", to: "/contact" },
              ].map((i) => (
                <li key={i.to}>
                  <Link to={i.to} className="group flex items-center gap-2 text-sm text-white/80 hover:text-accent transition-colors">
                    <ChevronRight className="h-3 w-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all text-accent" />
                    {i.l}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeUp} className="md:col-span-4">
            <p className="font-serif text-sm uppercase tracking-[0.2em] text-accent font-bold mb-6 flex items-center gap-2">
              <span className="w-6 h-[2px] bg-accent"></span> Contact Reach
            </p>
            <ul className="space-y-4 text-sm text-white/80">
              <li className="flex items-start gap-3 group">
                <div className="w-8 h-8 rounded-md bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                  <MapPin className="h-4 w-4 text-accent" />
                </div>
                <span className="mt-1.5 leading-relaxed">Sri Ramakrishna Engineering College, Vattamalaipalayam, N.G.G.O. Colony Post, Coimbatore – 641022</span>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-md bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                  <Mail className="h-4 w-4 text-accent" />
                </div>
                <a href="mailto:aectsd2026@srec.ac.in" className="hover:text-accent transition-colors">aectsd2026@srec.ac.in</a>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-md bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                  <Phone className="h-4 w-4 text-accent" />
                </div>
                <span className="hover:text-accent transition-colors">+91 422 2460088, 2461588</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div variants={fadeUp} className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/50 text-center md:text-left">
            © {new Date().getFullYear()} AECTSD · Sri Ramakrishna Engineering College. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs font-semibold tracking-wider text-white/70">
            <span>11 – 13 DEC 2026</span>
            <span className="w-1 h-1 rounded-full bg-accent self-center"></span>
            <span>COIMBATORE, INDIA</span>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}
