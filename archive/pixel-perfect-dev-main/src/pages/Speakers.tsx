import SectionHeader from "@/components/SectionHeader";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { User } from "lucide-react";

const speakers = [
  {
    name: "Dr. Pao-Ann Hsiung",
    affiliation: ["Professor and Director of the Research Center on AI and Sustainability,", "National Chung Cheng University (CCU), Taiwan."],
    topic: "Smart Systems Design / AI for Sustainable Development through Engineering and Computing Technologies",
  },
  {
    name: "Dr. Maheswari S S",
    affiliation: ["Software Development Specialist,", "Bosch Global Software Technologies,", "Coimbatore, TN, INDIA."],
    topic: "From Automation to Autonomy: The Impact of Agentic AI on Everyday Life",
  },
  {
    name: "Dr. V. Thanikaiselvan",
    affiliation: ["Professor – School of Electronics Engineering,", "Researcher – AI & ML, Dept. of Communication Engg,", "Vellore Institute of Technology, Vellore, TN, INDIA."],
    topic: "Secured Data Transmission Methods for Next Generation Communication Systems",
  },
  {
    name: "Dr. M. Sabarimalai Manikandan",
    affiliation: ["Associate Professor,", "Department of Electrical Engineering,", "Indian Institute of Technology Palakkad, Kerala, INDIA."],
    topic: "Deep Learning Networks for Event Detection and Classification: Concepts, Key Challenges and Future Directions",
  },
  {
    name: "Dr. V. Nagarajan",
    affiliation: ["Professor,", "Department of Electronics Engineering,", "Pondicherry University, Pondicherry, INDIA."],
    topic: "Integrating Machine Learning into Real-Time / Embedded Wireless Systems",
  },
  {
    name: "Dr. K. Udhayakumar",
    affiliation: ["Professor,", "Department of Electrical and Electronics Engineering,", "Anna University, TN, INDIA."],
    topic: "Emerging Trends in Power Converter Topologies: Challenges and Opportunities",
  },
  {
    name: "Dr. M. Sundaram",
    affiliation: ["Associate Professor,", "Department of Electrical and Electronics Engineering,", "PSG College of Technology, Coimbatore, TN, INDIA."],
    topic: "Advances in Power Electronics and Drives for Electric Mobility: Key Challenges and Future Opportunities",
  },
];

const guests = [
  { name: "Dr. P. Sakthivel", role: "Chairman, IEEE Madras Section" },
  { name: "Dr. S. Radha", role: "Secretary, IEEE Madras Section" },
  { name: "Dr. Ramalatha Marimuthu", role: "Vice-Chairman – Industry" },
];

export default function Speakers() {
  return (
    <div className="container py-12 md:py-20 relative">
      <div className="absolute top-40 right-0 -z-10 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-0 -z-10 w-80 h-80 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
      
      <SectionHeader
        title="Keynote Speakers"
        description="We are honored to present our distinguished Keynote Speakers of AECTSD 2026. Their presentations set the tone for the event, aligning with its central theme. The industry leaders and renowned academics will share their insights on cutting edge technologies."
      />

      <motion.div 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="space-y-6 max-w-5xl mx-auto"
      >
        {speakers.map((s) => (
          <motion.article 
            variants={fadeUp}
            whileHover={{ y: -4, scale: 1.01 }}
            key={s.name} 
            className="bg-white border border-border/60 rounded-xl shadow-soft p-6 md:p-8 flex flex-col md:flex-row gap-6 transition-all group overflow-hidden relative"
          >
            <div className="absolute left-0 top-0 w-1.5 h-full bg-border group-hover:bg-primary transition-colors" />
            <div className="w-24 h-24 md:w-32 md:h-32 bg-primary/5 rounded-full flex items-center justify-center text-primary border border-primary/10 flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
              <User className="w-10 h-10 md:w-12 md:h-12" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-primary text-xl md:text-2xl mb-2">{s.name}</h3>
              <div className="mb-4">
                {s.affiliation.map((l, i) => (
                  <p key={i} className="text-sm md:text-base text-foreground/80 leading-relaxed font-medium">{l}</p>
                ))}
              </div>
              <div className="bg-secondary/40 p-4 rounded-lg border border-border/50">
                <p className="text-sm md:text-base"><span className="text-destructive font-bold uppercase tracking-wider text-xs mr-2 border border-destructive/20 bg-destructive/5 px-2 py-1 rounded">Topic</span> {s.topic}</p>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>

      <div className="mt-24">
        <SectionHeader title="Technical Co-Sponsor Invited Guests" eyebrow="Honorable Mentions" />
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {guests.map((g) => (
            <motion.div 
              variants={fadeUp}
              whileHover={{ y: -5 }}
              key={g.name} 
              className="text-center bg-white p-8 rounded-xl shadow-soft border border-border/50 relative group"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-accent rounded-b-md opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-24 h-24 mx-auto mb-5 rounded-full bg-primary/5 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <User className="w-10 h-10" />
              </div>
              <p className="font-bold text-lg text-primary mb-1">{g.name}</p>
              <p className="text-sm text-foreground/80 font-medium">{g.role}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
