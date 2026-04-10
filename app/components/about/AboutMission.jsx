export default function AboutMission() {
  const missions = [
    {
      number: "01",
      title: "Train in Tech & Full Stack Development",
      desc: "We equip students with modern development skills including frontend, backend, and real-world project building using industry tools.",
    },
    {
      number: "02",
      title: "Build AI-Driven Skills",
      desc: "We teach practical AI tools, prompt engineering, and automation to prepare students for the future of technology.",
    },
    {
      number: "03",
      title: "Provide Real-World Experience",
      desc: "Through live projects and client work, we ensure students gain hands-on experience beyond traditional learning.",
    },
    {
      number: "04",
      title: "Organize Events & Opportunities",
      desc: "We create events, workshops, and networking opportunities to connect students with industry exposure and growth.",
    },
  ];

  return (
    <section className="bg-[#f9f6f0] px-6 py-24">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="grid md:grid-cols-2 gap-12 items-end mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-[#fcb900]" />
              <p className="uppercase tracking-widest text-sm text-[#fcb900] font-semibold">
                Our Mission
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#312e2e] leading-tight">
              What we aim
              <br />
              to <span className="text-[#fcb900]">build</span>
            </h2>
          </div>
          <div>
            <p className="text-lg text-[#312e2e]/60 leading-relaxed">
              Our mission is to empower students with practical skills in
              technology, AI, and real-world execution — helping them build
              strong careers through learning, creating, and industry exposure.
            </p>
          </div>
        </div>

        {/* Mission Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {missions.map((item) => (
            <div
              key={item.number}
              className="group bg-white rounded-2xl p-7 border border-[#fcb900]/20 hover:border-[#fcb900] hover:shadow-lg transition-all duration-300"
            >
              {/* Number */}
              <span className="text-5xl font-extrabold text-[#fcb900]/20 group-hover:text-[#fcb900]/40 transition-colors block mb-4 leading-none">
                {item.number}
              </span>

              {/* Divider */}
              <div className="w-10 h-[2px] bg-[#fcb900] mb-5" />

              {/* Title */}
              <p className="text-lg font-bold text-[#312e2e] leading-snug mb-3">
                {item.title}
              </p>

              {/* Description */}
              <p className="text-sm text-[#312e2e]/60 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom banner */}
        <div className="mt-16 bg-[#312e2e] rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white text-2xl font-bold">
              Ready to build your future?
            </p>
            <p className="text-gray-400 mt-1 text-sm">
              Join Celebso and start your journey in Tech, AI, and real-world innovation.
            </p>
          </div>
          <a
            href="/enquiry"
            className="flex-shrink-0 bg-[#fcb900] text-[#312e2e] font-bold px-8 py-4 rounded-full hover:bg-[#e0a700] transition-colors text-sm tracking-wide"
          >
            Join Now →
          </a>
        </div>
      </div>
    </section>
  );
}