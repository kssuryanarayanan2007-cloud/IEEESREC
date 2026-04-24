import SectionHeader from "@/components/pixel-perfect/SectionHeader";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/pixel-perfect/animations";

const departments = [
  {
    name: "Department of Electrical and Electronics Engineering",
    desc: "The Department of Electrical and Electronics Engineering was established in 1994. It offers four year B.E. (Electrical and Electronics Engineering) Programme. The department also offers Ph.D. Programme to promote research activities in the areas related to Electrical Engineering. The consultancy services are also rendered by the department. It has a distinguished team of faculty consisting of 9 Doctorates and 9 Post Graduates who have registered for Ph.D. in different areas of Electrical and Electronics Engineering and have rich industrial/research/teaching experience. The Programmes offered by the department of Electrical and Electronics Engineering are Accredited by the National Board of Accreditation, New Delhi.",
  },
  {
    name: "Department of Electronics and Communication Engineering",
    desc: "The Department of Electronics and Communication Engineering was established in the year 1994 offering Undergraduate programme in Electronics and Communication Engineering and two postgraduate programmes - VLSI Design and Embedded system Technologies. The UG programme is accredited and re-accredited by National Board of Accreditation, New Delhi, since 2007. The department enables the students to attain excellence in domain technologies of Electronics and Communication with curricula focusing on the requirements specified by the industries. The department has 36 faculty members with 14 members holding doctoral degree, with competent expertise in the fields of VLSI Design, Embedded Systems, Image and Signal Processing, Communication and Networks, RF and MEMS. The department is recognized as the research centre with all computing facilities, State-of-Art laboratories with 29 research scholars working towards potential solutions for the real-time problems. The department has received grants form AICTE, New Delhi, under various schemes specifically RPS, MODROBs, FDPs and Seminar Grants to the tune of Rs.1 Crore. The department has also received grants from DRDO, ISRO, BRNS ICMR, ISTE and IEEE for seminars and workshops.",
  },
  {
    name: "Department of Computer Science and Engineering",
    desc: "The Department of Computer Science and Engineering was established in 1994 with the goal of producing technically competent computer engineers. The department offers undergraduate programmes in Computer Science and Engineering and postgraduate programmes in Computer Science and Engineering. The department is also offering Ph.D. Programme. The faculty members are involved in active research in the areas of Data Mining, Cloud Computing, Network Security, Image Processing and Software Engineering.",
  },
  {
    name: "Department of Information Technology",
    desc: "The Department of Information Technology was established in the year 2000. It offers Undergraduate programme in Information Technology. The department has well qualified and experienced faculty members. The department has well equipped laboratories with latest configuration systems and licensed software.",
  },
  {
    name: "Department of Bio-Medical Engineering",
    desc: "The Department of Biomedical Engineering offers a four-year B.E. degree programme that integrates engineering principles with biology and medicine. The programme is designed to equip students with the skills needed to design and develop equipment, devices, computer systems, and software used in healthcare.",
  },
];

export default function About() {
  return (
    <div className="container py-12 md:py-20 relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <SectionHeader
        title="About the Conference"
        description="The First International Conference on Advances in Engineering and Computing Technologies for Sustainable Development (AECTSD) 2026, organized by Sri Ramakrishna Engineering College, Coimbatore, brings together academicians, researchers, industry professionals and students to share their expertise on emerging technologies driving sustainable development."
      />

      <SectionHeader
        title="About the College"
        description="Sri Ramakrishna Engineering College (SREC), an autonomous institution affiliated to Anna University Chennai, was established in 1994 by SNR Sons Charitable Trust, Coimbatore. The college offers eleven Undergraduate programmes in Engineering and Technology with specializations of Aeronautical, Automobile, Bio-Medical, Civil, Computer Science and Engineering, Electrical and Electronics, Electronics and Communication, Electronics and Instrumentation, Information Technology, Mechanical and Mechatronics; Seven Post Graduate programmes in Engineering and Technology with specializations of Manufacturing Engineering, Power Electronics and Drives, VLSI Design, Computer Science and Engineering, Embedded System Technologies, Control and Instrumentation Engineering and Nanoscience and Technology in addition to MBA."
      />

      <motion.div 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="mt-20"
      >
        <motion.h2 variants={fadeUp} className="text-3xl font-serif text-center font-bold text-primary mb-12">Organizing Departments</motion.h2>

        <div className="space-y-8 max-w-5xl mx-auto">
          {departments.map((d, i) => (
            <motion.article 
              key={d.name} 
              variants={fadeUp}
              whileHover={{ scale: 1.01, boxShadow: "0 10px 40px -10px rgba(0,0,0,0.1)" }}
              className={`bg-white rounded-xl p-8 md:p-10 shadow-soft border-l-4 ${i % 2 === 0 ? 'border-accent' : 'border-primary'} transition-all`}
            >
              <h3 className="text-xl md:text-2xl font-bold text-primary mb-4">{d.name}</h3>
              <p className="text-base text-foreground/80 leading-relaxed text-justify">{d.desc}</p>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

