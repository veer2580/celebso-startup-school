export default function AboutWhatWeDo() {
  const services = [
    {
      title: "Full Stack Development Training",
      desc: "We teach modern web development including frontend, backend, and real-world project building using industry tools and frameworks.",
      icon: "✦",
    },
    {
      title: "AI & Automation Learning",
      desc: "Hands-on training in AI tools, prompt engineering, and automation to prepare students for future tech-driven careers.",
      icon: "◈",
    },
    {
      title: "Live Projects & Client Work",
      desc: "Students work on real-world projects and client-based applications to gain practical experience beyond theory.",
      icon: "◎",
    },
    {
      title: "Portfolio & Personal Branding",
      desc: "We help students build strong portfolios, GitHub profiles, and personal brands to stand out in the industry.",
      icon: "⬡",
    },
    {
      title: "Workshops & Tech Events",
      desc: "We organize coding events, workshops, and hackathons to provide exposure, networking, and real learning environments.",
      icon: "◇",
    },
    {
      title: "Career Guidance & Opportunities",
      desc: "We guide students in placements, internships, and career growth through mentorship and industry connections.",
      icon: "◉",
    },
  ];

  return (
    <section className="bg-white px-6 py-24">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="grid md:grid-cols-2 gap-12 items-end mb-16 border-t border-black/10 pt-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-[#fcb900]" />
              <p className="uppercase tracking-widest text-sm text-[#fcb900] font-semibold">
                Our Services
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#312e2e] leading-tight">
              What We Do
            </h2>
          </div>
          <div>
            <p className="text-lg text-[#312e2e]/60 leading-relaxed">
              We provide a complete ecosystem of learning, building, and real-world
              exposure in Tech, AI, and development — everything needed to grow in today’s industry.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-0 border border-[#312e2e]/10 rounded-2xl overflow-hidden">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`group p-8 border-b border-r border-[#312e2e]/10 hover:bg-[#312e2e] transition-all duration-300 
                ${i % 2 === 1 ? "border-r-0" : ""}
                ${i >= services.length - 2 ? "border-b-0" : ""}
              `}
            >
              {/* Icon + Number */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-3xl text-[#fcb900]">
                  {service.icon}
                </span>
                <span className="text-5xl font-extrabold text-[#312e2e]/5 group-hover:text-white/5 leading-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-[#312e2e] group-hover:text-white mb-3 transition-colors">
                {service.title}
              </h3>

              {/* Divider */}
              <div className="w-8 h-[2px] bg-[#fcb900]/40 group-hover:bg-[#fcb900] mb-4 transition-colors" />

              {/* Description */}
              <p className="text-[#312e2e]/60 group-hover:text-gray-400 text-sm leading-relaxed transition-colors">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}