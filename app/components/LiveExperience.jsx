"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function StartupHighlights() {
  return (
    <section className="w-full bg-[#0b0f0e] py-24 px-6">

      <div className="max-w-[1200px] mx-auto">

        {/* ================= STATS ================= */}

        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 text-center mb-16">

          {[
            { number: "40+", label: "Startups Built by Students" },
            { number: "20+", label: "AI Tools & Tech Mastered" },
            { number: "1.2Cr+", label: "Startup Funding Simulations" },
            { number: "7+", label: "Industry Mentors" },
            { number: "2+", label: "Live Startup Cohorts" },
          ].map((stat, i) => (
            <div key={i}>
              <h3 className="text-3xl md:text-4xl font-semibold text-white">
                {stat.number}
              </h3>
              <p className="text-white/60 text-sm mt-2">
                {stat.label}
              </p>
            </div>
          ))}

        </div>


        {/* ================= MAIN CARD ================= */}

        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#0f1f1b] via-[#10231e] to-[#0b0f0e] border border-white/10 mb-14">

          <div className="grid md:grid-cols-2 items-center gap-10 p-10">

            {/* IMAGE */}

            <div className="relative h-[260px] md:h-[320px] rounded-xl overflow-hidden">
              <Image
               src="/assest/mentor.png"
                alt="Startup Lab"
                fill
                className="object-cover"
              />
            </div>

            {/* TEXT */}

            <div>

              <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                Inside Celebso Startup Lab
              </h3>

              <p className="text-white/60 mb-6">
                Celebso Startup School is a hands-on incubator for future founders.
                Build real products, validate ideas, and launch startups using
                modern AI tools, mentorship, and real-world projects.
              </p>

              <Link
                href="#"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#fcb900] text-black font-semibold hover:scale-105 transition"
              >
                Apply Now
              </Link>

            </div>

          </div>

        </div>


        {/* ================= FEATURES ================= */}

        <div className="grid md:grid-cols-3 gap-6">

          {[
            {
              title: "Startup At The Centre",
              text: "Build and validate startup ideas through hands-on learning and real-world experimentation.",
            },
            {
              title: "Access To Mentors",
              text: "Learn directly from founders, engineers, and startup operators.",
            },
            {
              title: "AI Powered Learning",
              text: "Master modern AI tools and build products faster than ever before.",
            },
            {
              title: "Idea To Product",
              text: "Turn your startup idea into a real working product with guidance.",
            },
            {
              title: "Real Customer Validation",
              text: "Test your startup with real users and get real feedback.",
            },
            {
              title: "Build Your Founder Network",
              text: "Join a powerful community of ambitious founders and innovators.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="relative p-6 rounded-xl bg-[#13251f] border border-white/10"
            >

              <div className="absolute right-5 top-4 text-[#fcb900] text-xl font-bold">
                {i + 1}
              </div>

              <h4 className="text-white font-semibold mb-3">
                {item.title}
              </h4>

              <p className="text-white/60 text-sm">
                {item.text}
              </p>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}