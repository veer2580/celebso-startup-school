"use client";

import { motion } from "framer-motion";

const steps = [
  { title: "Month 1-2", text: "Startup Ideation & Market Research" },
  { title: "Month 3-4", text: "Learning AI Tools & Building MVP" },
  { title: "Month 5-6", text: "Product Testing & Early Marketing" },
  { title: "Month 7-8", text: "Building Community & Audience" },
  { title: "Month 9-10", text: "SEO & Growth Optimization" },
  { title: "Month 11", text: "Startup Launch Preparation" },
  { title: "Month 12", text: "Launch & Scaling Startup" },
];

export default function Roadmap() {
  return (
    <section className="max-w-7xl mx-auto px-6 pb-32">

      <h2 className="text-4xl font-bold text-[#fcb900] mb-16">
        Startup Roadmap
      </h2>

      <div className="relative">

        {/* animated line */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 3 }}
          className="absolute top-6 left-0 h-[3px] bg-[#fcb900]"
        />

        <div className="grid md:grid-cols-4 gap-10 pt-12">

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.3 }}
              className="bg-white/5 border border-white/10 p-6 rounded-xl"
            >
              <h3 className="text-[#fcb900] mb-2">{step.title}</h3>
              <p className="text-white/70 text-sm">{step.text}</p>
            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}