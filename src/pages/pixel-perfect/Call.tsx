import ImportantDates from "@/components/pixel-perfect/ImportantDates";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/pixel-perfect/animations";
import SectionHeader from "@/components/pixel-perfect/SectionHeader";

const tracks = [
  {
    n: 1,
    title: "Power and Energy Systems",
    items: [
      "Power System Operation and Control",
      "Advanced Transmission and Distribution Systems",
      "Smart Grids and Micro Grids",
      "Renewable Energy Systems",
      "Electrical Machinery and Control",
      "Electric Vehicles",
      "Emerging Power Electronics Converters",
      "Energy Storage Systems",
      "AI/ML Applications in Electrical Engineering",
      "Sustainable Energy Systems",
    ],
  },
  {
    n: 2,
    title: "Emerging Embedded and Communication Systems",
    items: [
      "Microelectronics",
      "Semiconductor Devices",
      "Circuits and Systems",
      "Embedded Systems",
      "VLSI Design",
      "5G/6G Technology",
      "Communication Protocols and Networks",
      "Green and Sustainable Communication Systems",
      "Signal, Speech and Image Processing",
      "RF, Microwaves & Optical Communication",
      "Digital Communication Technologies and Systems",
      "Sensor Networks & IoT",
      "Embedded AI",
    ],
  },
  {
    n: 3,
    title: "Instrumentation and Control Systems",
    items: [
      "Smart Instrumentation and Control Systems",
      "AI and Machine Learning in Control and Instrumentation Applications",
      "Process Control",
      "Instrumentation Systems",
      "DCS and SCADA",
      "Automation and Industrial Control",
      "CAN",
      "Sensors and Actuators",
      "Cyber-Physical Systems and Industrial IoT",
      "Robotics and Autonomous Systems",
      "Measurement Techniques and Metrology",
      "Wearable and Portable Sensing Devices",
      "Quantum Sensors and Measurement Technologies",
    ],
  },
  {
    n: 4,
    title: "Biomedical Engineering and Sciences",
    items: [
      "Disruptive technologies in healthcare – AI/ML",
      "Micro/Nano Bio-engineering",
      "Biomedical Instrumentation and Devices",
      "Biosensors/ Micro/Nano and Wearable Technologies",
      "Biomedical Imaging and Image Processing",
      "Biomedical and Health Informatics",
      "IoT in Healthcare",
      "Diagnostic",
      "Therapeutic and Rehabilitation Engineering",
      "Big Data Analytics in Healthcare",
      "Telemedicine and Remote Healthcare",
      "Smart Implants and Biocompatible Devices",
      "Bio-photonics and Optical Technologies",
    ],
  },
  {
    n: 5,
    title: "Emerging Computing Technologies and Computational Intelligence",
    items: [
      "Artificial Intelligence",
      "Machine Learning",
      "Generative AI",
      "Computational Intelligence Techniques",
      "High-Performance and Parallel Computing",
      "Edge, IoT, and Cyber-Physical Systems",
      "Ethics and Societal Impact of AI",
      "Intelligent Software and Systems",
    ],
  },
  {
    n: 6,
    title: "Transformative Technologies in Big Data, Internet of Things and Security",
    items: [
      "Predictive Modeling",
      "Business Intelligence and Real-Time Analytics",
      "AI-Driven Automation",
      "Edge Computing",
      "Cloud Computing",
      "IoT Security",
      "Cybersecurity",
      "Ethical Hacking and Threat Intelligence",
      "Data Science and Big Data Analytics",
      "AI and Big Data Integration",
      "Blockchain Technologies",
    ],
  },
];

export default function Call() {
  return (
    <div className="container py-12 md:py-20 relative">
      <div className="absolute top-0 right-1/4 -z-10 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl opacity-50" />
      
      <SectionHeader title="Call for Papers" />

      <div className="grid lg:grid-cols-[1fr_350px] gap-10 max-w-7xl mx-auto items-start">
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="space-y-8"
        >
          {tracks.map((t) => (
            <motion.article 
              variants={fadeUp}
              whileHover={{ y: -5 }}
              key={t.n} 
              className="bg-white rounded-xl shadow-soft border border-border/50 p-8 relative overflow-hidden transition-all group"
            >
              <div className="absolute top-0 left-0 w-1.5 h-full bg-primary group-hover:bg-accent transition-colors" />
              <div className="flex items-center gap-4 mb-4">
                <span className="text-4xl font-black text-primary/10 tracking-tighter">0{t.n}</span>
                <h2 className="text-sm font-bold text-accent uppercase tracking-widest">Track {t.n}</h2>
              </div>
              <p className="text-primary font-bold text-xl border-b border-border/50 pb-4 mb-5">{t.title}</p>
              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3 list-disc pl-5 text-sm md:text-base text-foreground/80">
                {t.items.map((i) => (
                  <li key={i} className="marker:text-primary/40 pl-1">{i}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>

        <motion.aside 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:sticky lg:top-24 lg:self-start"
        >
          <ImportantDates />
        </motion.aside>
      </div>
    </div>
  );
}

