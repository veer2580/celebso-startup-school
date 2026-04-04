"use client";

import Roadmap from "../Roadmap";

export default function ProgramsSection() {
  return (
    <section className="bg-[#070b1a] text-white">

      {/* HERO SECTION */}
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-24 text-center">

        <p className="uppercase tracking-widest text-sm text-white/60 mb-6">
          Celebso Startup School
        </p>

        <h1 className="text-5xl md:text-7xl font-bold text-[#fcb900] leading-tight mb-6">
          Programs That
          <br />
          <span className="text-white">
            Build Future Founders
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg text-white/70">
          Our programs are designed to transform ambitious individuals into
          creators, founders and global innovators.
        </p>

      </div>


      {/* PROGRAMS */}
      <div className="max-w-7xl mx-auto px-6 pb-32 space-y-32">

        {/* AI Program */}
        <Program
          title="Celebso AI"
          description="Celebso AI is designed for the next generation of innovators who want to build powerful AI-driven startups. Learn automation, prompt engineering, generative AI tools and intelligent systems to create scalable digital products."
          image="/assest/ai.jpg"
          video="/video/ai.mp4"
          curriculum={[
            "AI Automation",
            "Prompt Engineering",
            "AI Content Creation",
            "Building AI Startups",
          ]}
        />

        {/* Tech Program */}
        <Program
          title="Celebso Tech"
          description="Celebso Tech program helps founders transform ideas into real technology products. From building modern web platforms to launching scalable startups, students learn how to create impactful digital solutions."
          image="/assest/tech2.png"
          video="/video/tech.mp4"
          reverse
          curriculum={[
            "Startup Tech Foundations",
            "Web & App Development",
            "Building Digital Products",
            "Scaling Tech Platforms",
          ]}
        />

        {/* Event Program */}
        <Program
          title="Celebso Events"
          description="Celebso Events program trains creators and entrepreneurs to produce high-impact events, celebrity launches and startup showcases while building strong brand experiences."
          image="/assest/event.png"
          video="/video/event.mp4"
          curriculum={[
            "Event Planning",
            "Celebrity Launch Events",
            "Stage & Media Production",
            "Startup Showcase Events",
          ]}
        />

      </div>


      {/* ROADMAP SECTION */}
      <Roadmap />

    </section>
  );
}



function Program({ title, description, image, video, curriculum, reverse }) {
  return (
    <div className="space-y-16">

      {/* TEXT + IMAGE */}
      <div className="grid md:grid-cols-2 gap-16 items-center">

        <div className={reverse ? "order-2" : ""}>
          <h2 className="text-4xl font-bold text-[#fcb900] mb-6">
            {title}
          </h2>

          <p className="text-white/70 text-lg">
            {description}
          </p>
        </div>

        <div className="rounded-xl overflow-hidden">
          <img
            src={image}
            className={`w-full ${
              title === "Celebso Tech"
                ? "h-[520px] object-contain"
                : "h-[420px] object-cover"
            }`}
          />
        </div>

      </div>


      {/* VIDEO */}
      <div className="w-full h-[500px] rounded-xl overflow-hidden">
        <video
          src={video}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
      </div>


      {/* CURRICULUM */}
      <div>

        <h3 className="text-2xl text-[#fcb900] mb-6">
          Curriculum
        </h3>

        <div className="grid md:grid-cols-2 gap-4">

          {curriculum.map((item, i) => (
            <div
              key={i}
              className="border border-white/10 bg-white/5 p-4 rounded-lg"
            >
              {item}
            </div>
          ))}

        </div>

      </div>

    </div>
  );
}