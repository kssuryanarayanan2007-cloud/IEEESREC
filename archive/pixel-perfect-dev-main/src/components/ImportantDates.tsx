import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";

interface DateItem {
  label: string;
  date: string;
  strikethrough?: string;
  current?: boolean;
}

const dates: DateItem[] = [
  { label: "Call for Papers", date: "15th December 2024" },
  { label: "Paper Submission Deadline", date: "30th September 2026", strikethrough: "25th August 2026" },
  { label: "Paper Acceptance Notification", date: "15th October 2026" },
  { label: "Camera-ready Paper Submission Deadline", date: "20th October 2026" },
  { label: "Early Bird Registration Deadline", date: "25th October 2026" },
  { label: "Final Registration Deadline", date: "30th October 2026" },
  { label: "Late Fee Registration Deadline", date: "10th November 2026" },
  { label: "Pre-conference Tutorials Registration", date: "25th November 2026" },
  { label: "Conference Date", date: "11th to 13th December 2026", current: true },
];

export default function ImportantDates() {
  return (
    <motion.div 
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={staggerContainer}
      className="bg-white rounded-xl p-6 md:p-8 shadow-soft border-t-4 border-accent relative overflow-hidden"
    >
      <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
      <motion.h3 variants={fadeUp} className="text-center text-xl font-bold text-primary mb-8 font-serif tracking-tight">Important Dates</motion.h3>
      <motion.ol variants={staggerContainer} className="relative border-l-2 border-primary/20 ml-3 space-y-6">
        {dates.map((d, i) => (
          <motion.li 
            key={i} 
            variants={fadeUp}
            whileHover={{ x: 5 }}
            className="ml-6 transition-transform"
          >
            <span
              className={`absolute -left-[9px] flex h-4 w-4 rounded-full border-2 border-primary ring-4 ring-white ${
                d.current ? "bg-accent shadow-glow" : "bg-primary"
              }`}
            />
            <p className={`font-bold text-sm md:text-base ${d.current ? "text-accent" : "text-primary "}`}>{d.label}</p>
            <p className="text-xs md:text-sm text-foreground/80 mt-1 font-medium">
              {d.strikethrough && <span className="line-through text-destructive mr-2 opacity-70">{d.strikethrough}</span>}
              {d.date}
            </p>
          </motion.li>
        ))}
      </motion.ol>
    </motion.div>
  );
}
