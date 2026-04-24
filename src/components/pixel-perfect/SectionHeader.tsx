import { motion } from "framer-motion";
import { fadeUp, staggerContainer, scaleUp } from "@/lib/pixel-perfect/animations";

interface SectionHeaderProps {
  title: string;
  description?: string;
  eyebrow?: string;
}

export default function SectionHeader({ title, description, eyebrow }: SectionHeaderProps) {
  return (
    <motion.div 
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      variants={staggerContainer}
      className="max-w-3xl mx-auto text-center my-16 px-4"
    >
      {eyebrow && <motion.p variants={fadeUp} className="section-eyebrow">{eyebrow}</motion.p>}
      <motion.h2 variants={fadeUp} className="section-title">{title}</motion.h2>
      <motion.div variants={scaleUp} className="gold-divider" />
      {description && (
        <motion.p variants={fadeUp} className="text-base md:text-lg text-muted-foreground leading-relaxed mt-4">
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}

