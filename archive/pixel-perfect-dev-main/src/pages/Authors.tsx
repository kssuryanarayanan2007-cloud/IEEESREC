import SectionHeader from "@/components/SectionHeader";
import ImportantDates from "@/components/ImportantDates";
import { motion } from "framer-motion";
import { fadeUp, fadeLeft, fadeRight, staggerContainer } from "@/lib/animations";

export default function Authors() {
  return (
    <div className="container py-12 md:py-20 relative">
      <div className="absolute top-0 right-1/4 -z-10 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl opacity-50" />
      
      <SectionHeader title="Guidelines for Authors" />

      <div className="grid lg:grid-cols-[350px_1fr] gap-10 max-w-6xl mx-auto items-start">
        <motion.aside
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeRight}
          className="sticky top-24"
        >
          <ImportantDates />
        </motion.aside>

        <motion.article 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="bg-white rounded-xl p-8 md:p-10 shadow-soft border border-border/50 space-y-10 relative overflow-hidden"
        >
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
          
          <motion.section variants={fadeUp} className="relative z-10">
            <h3 className="text-xl font-bold text-primary mb-4 border-b-2 border-primary/10 pb-2 inline-block">Instructions</h3>
            <ul className="space-y-4 text-sm md:text-base text-foreground/85">
              <li className="flex gap-3">
                <span className="text-accent font-bold mt-0.5">01</span>
                <span>The maximum length of the paper for review is 6 pages, including figures, tables, and references. The maximum file size allowed is 10 MB in PDF format without encryption and/or passwords.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold mt-0.5">02</span>
                <span>Papers of poor quality and/or high similarity index will be rejected during the initial screening process without review.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold mt-0.5">03</span>
                <span>Use only the <a href="#" className="text-primary font-semibold underline hover:text-accent transition-colors">IEEE standard two-column conference paper Microsoft Word template</a>.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold mt-0.5">04</span>
                <span>The paper will be peer-reviewed by domain experts of the respective tracks.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold mt-0.5">05</span>
                <span>Authors should submit the papers through Microsoft Conference Management Toolkit (CMT).</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold mt-0.5">06</span>
                <span>Kindly do not submit the paper multiple times, as it may lead to the cancellation of your paper.</span>
              </li>
            </ul>
          </motion.section>

          <motion.section variants={fadeUp} className="relative z-10">
            <h3 className="text-xl font-bold text-primary mb-4 border-b-2 border-primary/10 pb-2 inline-block">Procedure for Uploading Papers</h3>
            <ul className="space-y-3 text-sm md:text-base text-foreground/85">
              {[
                `Go to the paper submission website: <a href="https://cmt3.research.microsoft.com/aectsd2026" class="text-primary font-semibold underline hover:text-accent transition-colors">https://cmt3.research.microsoft.com/aectsd2026</a>.`,
                `If you are new to the system, please choose "Register" at the bottom of the dialog box. Create a new account with a user ID and Password.`,
                `Log in to CMT with your user ID and Password.`,
                `Select "All Conferences" and choose the conference.`,
                `Click the Conference Name link.`,
                `On the Author Console page, click + Create new submission.`,
                `Fill out the required fields, including the title, abstract, authors, subject areas, and email IDs of all the co-authors.`,
                `Upload your paper and other files (if needed).`,
                `Click "Submit" to submit your paper.`
              ].map((text, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <div className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center text-[10px] font-bold mt-1 shrink-0">{i + 1}</div>
                  <span dangerouslySetInnerHTML={{ __html: text }} />
                </li>
              ))}
            </ul>
          </motion.section>

          <motion.section variants={fadeUp} className="relative z-10">
            <h3 className="text-xl font-bold text-primary mb-4 border-b-2 border-primary/10 pb-2 inline-block">Submitting Camera-Ready Version</h3>
            <ul className="space-y-3 text-sm md:text-base text-foreground/85">
              {[
                `Go to the Author Console in CMT.`,
                `Click the <strong>Create Camera Ready Submission</strong> link.`,
                `Edit the title, abstract, and author information.`,
                `Upload the camera-ready file.`,
                `Answer any additional questions.`,
                `Click "Submit" to submit your paper.`
              ].map((text, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <div className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center text-[10px] font-bold mt-1 shrink-0">{i + 1}</div>
                  <span dangerouslySetInnerHTML={{ __html: text }} />
                </li>
              ))}
            </ul>
          </motion.section>
        </motion.article>
      </div>
    </div>
  );
}
