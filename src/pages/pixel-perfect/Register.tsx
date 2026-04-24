import { useState } from "react";
import SectionHeader from "@/components/pixel-perfect/SectionHeader";
import { Button } from "@/components/pixel-perfect/ui/button";
import { Label } from "@/components/pixel-perfect/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/pixel-perfect/ui/radio-group";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/pixel-perfect/animations";

const indianFees = [
  { cat: "Conference only", a: "6000*", b: "7000*", c: "7000*", d: "8000*" },
  { cat: "Tutorial only", a: "1000", b: "1250", c: "1250", d: "1500" },
  { cat: "Conference plus Tutorial", a: "6500*", b: "7500*", c: "7500*", d: "8500*" },
  { cat: "Indian Non-Author Attendee", a: "3500", b: "5000", c: "4500", d: "6000" },
  { cat: "Rate per Additional Paper", a: "3000", b: "3000", c: "3000", d: "3000" },
  { cat: "Extra Page (after 6 pages)", a: "500", b: "500", c: "500", d: "500" },
];

const foreignFees = [
  { cat: "Conference only", a: "150*", b: "200*", c: "200*", d: "250*" },
  { cat: "Tutorial only", a: "40", b: "50", c: "50", d: "75" },
  { cat: "Conference plus Tutorial", a: "175*", b: "225*", c: "225*", d: "300*" },
  { cat: "Rate per Additional Paper", a: "50", b: "50", c: "50", d: "50" },
  { cat: "Extra Page (after 6 pages)", a: "20", b: "20", c: "20", d: "20" },
];

export default function Register() {
  const [regType, setRegType] = useState("late");

  return (
    <div className="container py-12 md:py-20 relative">
      <div className="absolute top-0 left-0 -z-10 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl opacity-60" />
      
      <SectionHeader title="Registration Guidelines" />

      <motion.div 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="max-w-5xl mx-auto space-y-4 text-sm md:text-base text-foreground/85 leading-relaxed bg-white p-8 rounded-xl shadow-sm border border-border/50"
      >
        <motion.p variants={fadeUp}>At least one of the authors of each accepted paper must register for the conference for the paper to be included in the conference proceedings.</motion.p>
        <motion.p variants={fadeUp} className="text-destructive font-semibold">All accepted and presented papers of AECTSD 2026 will be forwarded for possible inclusion in the IEEE Xplore digital library.</motion.p>
        <motion.p variants={fadeUp}>Full registration includes the registration of one paper. Additional papers for a single registration come with an additional fee. The maximum length of the paper is 6 pages including figures, tables, and references.</motion.p>
        <motion.p variants={fadeUp}>Registration fee covers admission to all sessions, cost of publishing the article in conference proceedings, welcome reception, conference kit, refreshments, working lunch, banquet dinner and half a day tour to nearby places.</motion.p>
        <motion.p variants={fadeUp}>A fee of Rs. 500 will be applied for each additional page (with a maximum of 2 pages).</motion.p>
      </motion.div>

      {/* Indian Authors */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto mt-16"
      >
        <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-accent/20 text-accent flex items-center justify-center font-serif">1</span> 
          Indian Authors
        </h3>
        <FeeTable currency="INR" rows={indianFees} />
        <div className="mt-6 bg-secondary/30 p-6 rounded-lg space-y-2 text-sm border border-border/60">
          <p><span className="text-destructive font-semibold">*Early Bird Registration</span></p>
          <p className="ml-4">1. Discount of INR 1000 on the conference and conference plus tutorial registration fee.</p>
          <p className="ml-4">2. Discount of INR 500 on the Indian non author attendee fee.</p>
          <p className="text-destructive font-semibold mt-4">*Late Registration Fee</p>
          <p className="ml-4">Additional fee of INR 1000 on the conference and conference plus tutorial registration fee.</p>
          <p className="text-destructive font-semibold mt-4">Virtual Mode</p>
          <p className="ml-4">Additional fee of INR 1000 on the conference registration fee.</p>
        </div>
      </motion.div>

      {/* Foreign */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto mt-16"
      >
        <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-accent/20 text-accent flex items-center justify-center font-serif">2</span> 
          Foreign Authors
        </h3>
        <FeeTable currency="USD" rows={foreignFees} />
        <div className="mt-6 bg-secondary/30 p-6 rounded-lg space-y-2 text-sm border border-border/60">
          <p className="text-destructive font-semibold">*Early-Bird Registration</p>
          <p className="ml-4">Discount of USD 25 on the conference and conference plus tutorial registration fee.</p>
          <p className="text-destructive font-semibold mt-4">*Late Registration fee:</p>
          <p className="ml-4">Additional fee of USD 25 on the conference and conference plus tutorial registration fee.</p>
          <p className="text-destructive font-semibold mt-4">Virtual Mode</p>
          <p className="ml-4">Additional fee of USD 25 on the conference registration fee.</p>
        </div>
      </motion.div>

      {/* Calculator */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto mt-20"
      >
        <h3 className="text-center text-2xl font-bold text-primary mb-2 font-serif">
          Registration Fee Calculator
        </h3>
        <p className="text-center text-muted-foreground text-sm mb-10">Select particular options applicable to you to calculate registration fees.</p>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl p-8 shadow-soft border border-border/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full" />
            <h4 className="font-bold text-primary text-lg mb-6 border-b border-border/50 pb-3">Calculate Fees</h4>

            <div className="mb-6">
              <Label className="font-bold text-primary/80 mb-3 block">Registration Type*</Label>
              <RadioGroup value={regType} onValueChange={setRegType} className="space-y-2">
                <div className="flex items-center gap-3 p-3 rounded-lg border border-border/50 cursor-pointer hover:bg-secondary/20 transition-colors">
                  <RadioGroupItem value="late" id="late" />
                  <Label htmlFor="late" className="cursor-pointer">Late Registration <span className="block mt-1 text-xs text-destructive font-medium">From: November 1, 2026 (Penalty: ₹1000)</span></Label>
                </div>
              </RadioGroup>
            </div>

            <div className="mb-6">
              <Label className="font-bold text-primary/80 mb-3 block">Are you Indian or International?*</Label>
              <RadioGroup defaultValue="indian" className="flex gap-4">
                <div className="flex items-center gap-2 flex-1 p-3 rounded-lg border border-border/50 hover:bg-secondary/20"><RadioGroupItem value="indian" id="i" /><Label htmlFor="i" className="cursor-pointer w-full">Indian</Label></div>
                <div className="flex items-center gap-2 flex-1 p-3 rounded-lg border border-border/50 hover:bg-secondary/20"><RadioGroupItem value="intl" id="in" /><Label htmlFor="in" className="cursor-pointer w-full">International</Label></div>
              </RadioGroup>
            </div>

            <div className="mb-8">
              <Label className="font-bold text-primary/80 mb-3 block">Are you a student or a professional?*</Label>
              <RadioGroup defaultValue="student" className="space-y-3">
                <div className="flex items-center gap-3 p-3 rounded-lg border border-border/50 hover:bg-secondary/20"><RadioGroupItem value="student" id="s" /><Label htmlFor="s" className="cursor-pointer w-full">Graduate Student / Research Scholar</Label></div>
                <div className="flex items-center gap-3 p-3 rounded-lg border border-border/50 hover:bg-secondary/20"><RadioGroupItem value="prof" id="p" /><Label htmlFor="p" className="cursor-pointer w-full">Professional</Label></div>
              </RadioGroup>
            </div>

            <Button size="lg" className="w-full text-base font-semibold shadow-elegant hover:scale-[1.02] transition-transform">Calculate Estimate</Button>
          </div>

          <div className="bg-primary-dark text-white rounded-xl p-8 shadow-soft relative overflow-hidden">
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent/20 rounded-full blur-2xl" />
            <h4 className="font-bold text-accent text-lg mb-6 border-b border-primary-glow/30 pb-3">Bank Account Details</h4>
            <dl className="space-y-4 text-sm md:text-base opacity-90">
              <div className="flex flex-col md:flex-row md:justify-between border-b border-primary-glow/20 pb-3">
                <dt className="text-white/60 mb-1 md:mb-0">Account Name</dt>
                <dd className="font-semibold text-right">Sri Ramakrishna Engineering College – AECTSD</dd>
              </div>
              <div className="flex flex-col md:flex-row md:justify-between border-b border-primary-glow/20 pb-3">
                <dt className="text-white/60 mb-1 md:mb-0">Account Number</dt>
                <dd className="font-semibold text-right tracking-wider">058705008110</dd>
              </div>
              <div className="flex flex-col md:flex-row md:justify-between border-b border-primary-glow/20 pb-3">
                <dt className="text-white/60 mb-1 md:mb-0">Account Type</dt>
                <dd className="font-semibold text-right">Current</dd>
              </div>
              <div className="flex flex-col md:flex-row md:justify-between border-b border-primary-glow/20 pb-3">
                <dt className="text-white/60 mb-1 md:mb-0">Customer ID</dt>
                <dd className="font-semibold text-right tracking-wider">602339485</dd>
              </div>
              <div className="flex flex-col md:flex-row md:justify-between border-b border-primary-glow/20 pb-3">
                <dt className="text-white/60 mb-1 md:mb-0">IFSC Code</dt>
                <dd className="font-semibold text-right tracking-wider">ICIC0000587</dd>
              </div>
            </dl>
            <div className="mt-8 bg-black/20 p-4 rounded-lg border border-white/5">
              <p className="text-xs md:text-sm text-accent font-medium">📋 Note: Please include your Paper ID in the payment reference.</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function FeeTable({ currency, rows }: { currency: string; rows: { cat: string; a: string; b: string; c: string; d: string }[] }) {
  return (
    <div className="overflow-x-auto bg-white rounded-xl shadow-soft border border-border/50">
      <table className="w-full text-sm border-collapse min-w-[700px]">
        <thead>
          <tr className="bg-primary/5 text-primary">
            <th rowSpan={2} className="border border-border/60 p-4 font-bold text-left">Categories</th>
            <th colSpan={2} className="border border-border/60 p-3 font-bold">Graduate Student / Scholar</th>
            <th colSpan={2} className="border border-border/60 p-3 font-bold">Professionals</th>
          </tr>
          <tr className="bg-primary/5 text-primary text-xs uppercase tracking-wider">
            <th className="border border-border/60 p-3 font-semibold text-accent-foreground">IEEE Member ({currency})</th>
            <th className="border border-border/60 p-3 font-semibold">Non-IEEE ({currency})</th>
            <th className="border border-border/60 p-3 font-semibold text-accent-foreground">IEEE Member ({currency})</th>
            <th className="border border-border/60 p-3 font-semibold">Non-IEEE ({currency})</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, idx) => (
            <tr key={r.cat} className={`${idx % 2 === 0 ? 'bg-white' : 'bg-secondary/20'} hover:bg-secondary/60 transition-colors`}>
              <td className="border border-border/60 p-4 font-semibold text-primary/80">{r.cat}</td>
              <td className="border border-border/60 p-4 text-center font-medium">{r.a}</td>
              <td className="border border-border/60 p-4 text-center font-medium">{r.b}</td>
              <td className="border border-border/60 p-4 text-center font-medium">{r.c}</td>
              <td className="border border-border/60 p-4 text-center font-medium">{r.d}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

