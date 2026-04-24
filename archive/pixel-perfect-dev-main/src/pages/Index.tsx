import { Button } from "@/components/ui/button";
import { Download, Calendar, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, scaleUp } from "@/lib/animations";
import campusHero from "@/assets/campus-hero.jpg";
import ieee from "@/assets/ieee-madras.png";

const Index = () => {
  return (
    <div>
      {/* Hero */}
      <section
        className="relative w-full min-h-[88vh] flex items-center justify-center overflow-hidden"
      >
        <img src={campusHero} alt="Campus" className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-hero" />
        
        {/* Animated Background Elements */}
        <motion.div 
          className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,rgba(38,105,204,0.4)_0%,transparent_50%)] bg-[length:150%_150%]" 
          initial={{ backgroundPosition: "0% 0%" }}
          animate={{ backgroundPosition: "100% 100%" }}
          transition={{ repeat: Infinity, duration: 20, repeatType: "reverse" }}
        />

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="relative max-w-5xl mx-auto text-center text-white px-6 py-20"
        >
          <motion.p variants={fadeUp} className="text-xs md:text-sm uppercase tracking-[0.35em] text-accent font-semibold mb-6">
            First International Conference
          </motion.p>
          <motion.h1 variants={fadeUp} className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.05] tracking-tight">
            Advances in Engineering <br className="hidden md:block" />
            &amp; Computing Technologies
          </motion.h1>
          <motion.div variants={scaleUp} className="gold-divider !w-24 !my-6" />
          <motion.p variants={fadeUp} className="text-lg md:text-xl text-white/85 font-light italic mb-10 max-w-2xl mx-auto">
            for Sustainable Development
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-6 md:gap-10 text-sm md:text-base text-white/90 mb-10">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-accent" />
              <span>11 – 13 December 2026</span>
            </div>
            <div className="hidden md:block w-px bg-white/30" />
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-accent" />
              <span>Coimbatore, India</span>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 shadow-elegant hover:scale-105 transition-transform duration-300">
              <Download className="mr-2 h-4 w-4" /> Download Brochure
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-white/40 text-white hover:bg-white hover:text-primary px-8 hover:scale-105 transition-all duration-300">
              <Link to="/call">Call for Papers <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Announcement bar */}
      <div className="bg-primary-dark text-white/90 py-3.5 border-b border-accent/20 relative overflow-hidden">
        <motion.div 
          initial={{ x: "100%" }} 
          animate={{ x: "-100%" }} 
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="absolute inset-0 h-full w-[200%] bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12"
        />
        <div className="container relative z-10">
          <p className="text-xs md:text-sm text-center tracking-wide">
            <span className="text-accent font-semibold uppercase tracking-[0.18em] mr-3">Announcement</span>
            Registration opens 21.10.2026 · Indian authors within 300 km of Coimbatore are encouraged to attend in person.
          </p>
        </div>
      </div>

      {/* Highlights */}
      <section className="container py-24">
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.p variants={fadeUp} className="section-eyebrow">About the Conference</motion.p>
          <motion.h2 variants={fadeUp} className="section-title">A Premier Forum for Sustainable Innovation</motion.h2>
          <motion.div variants={scaleUp} className="gold-divider" />
          <motion.p variants={fadeUp} className="max-w-2xl mx-auto text-muted-foreground leading-relaxed text-lg">
            AECTSD 2026 brings together researchers, academicians, and industry leaders to advance engineering and computing solutions that shape a sustainable future.
          </motion.p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {[
            { title: "6 Technical Tracks", desc: "From AI & IoT to Sustainable Energy and Smart Manufacturing." },
            { title: "Distinguished Speakers", desc: "Keynotes from global academic and industry leaders." },
            { title: "IEEE Xplore", desc: "Accepted papers forwarded for inclusion in IEEE Xplore digital library." },
          ].map((c) => (
            <motion.div key={c.title} variants={fadeUp} whileHover={{ y: -8, transition: { duration: 0.3 } }} className="info-card text-center flex flex-col items-center justify-center p-8 bg-gradient-to-b from-card to-secondary/20 shadow-soft hover:shadow-elegant border-border/40">
              <h4 className="text-xl mb-3 text-primary font-bold">{c.title}</h4>
              <p className="text-muted-foreground">{c.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Sponsor */}
      <section className="bg-card border-y border-border relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="container py-20 text-center relative z-10"
        >
          <motion.p variants={fadeUp} className="section-eyebrow">Technical Co-Sponsor</motion.p>
          <motion.div variants={scaleUp} className="flex justify-center mt-6">
            <img src={ieee} alt="IEEE Madras Section" className="h-28 md:h-36 opacity-95 drop-shadow-md hover:scale-105 transition-transform duration-500" loading="lazy" width={256} height={256} />
          </motion.div>
          <motion.p variants={fadeUp} className="mt-5 font-serif text-xl tracking-wide font-semibold text-primary">IEEE Madras Section</motion.p>
        </motion.div>
      </section>
    </div>
  );
};

export default Index;
