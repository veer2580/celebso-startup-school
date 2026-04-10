"use client";

export default function AboutHero() {
  const ventures = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
        </svg>
      ),
      label: "Tech Celebso",
      desc: "Students career platform",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
        </svg>
      ),
      label: "Celebso AI",
      desc: "Smart career intelligence",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a3 3 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z" />
        </svg>
      ),
      label: "Celebso Events",
      desc: "Live talent showcases",
    },
  ];

  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden bg-[#d8d8d8]">

      {/* Background decorative circles */}
      <div className="absolute top-[-120px] right-[-100px] w-[500px] h-[500px] rounded-full bg-[#fcb900]/10 pointer-events-none" />
      <div className="absolute bottom-[-80px] left-[-80px] w-[350px] h-[350px] rounded-full bg-[#312e2e]/5 pointer-events-none" />

<<<<<<< HEAD
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
=======
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-16 items-center w-full">
>>>>>>> 0be217fffdbc53df08aafea378640922401a30d1

        {/* ── LEFT: Text ── */}
        <div>

          {/* Label */}
          <div className="inline-flex flex-col items-start gap-2 mb-8">

  {/* Top Row */}
  <div className="flex items-center gap-2">
    <span className="w-8 h-[2px] bg-[#fcb900]" />
    <p className="uppercase tracking-widest text-sm text-[#312e2e] font-semibold">
      About Celebso
    </p>
  </div>

  {/* Bottom Text */}
  <p className="text-[#fcb900] text-sm uppercase tracking-widest font-semibold ml-10">
    Startup School
  </p>

</div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl text-[#312e2e] font-extrabold leading-tight">
            We turn talent
            <br />
            into{" "}
            <span className="text-[#fcb900]">global</span>
            <br />
            <span className="text-[#fcb900]">influence</span>.
          </h1>

          {/* Description */}
          <p className="mt-8 text-xl text-[#312e2e]/70 max-w-xl leading-relaxed">
            Celebso Startup School trains students and builds the technology,
            intelligence, and live experiences that reshape how talent is
            discovered, developed, and celebrated worldwide.
          </p>

          {/* 3 Venture Chips */}
          <div className="mt-10 flex flex-wrap gap-3">
            {ventures.map((v) => (
              <div
                key={v.label}
                className="flex items-center gap-2.5 bg-[#312e2e] text-white px-4 py-2.5 rounded-full border border-[#fcb900]/20 hover:border-[#fcb900]/60 transition-colors"
              >
                <span className="text-[#fcb900]">{v.icon}</span>
                <div>
                  <p className="text-xs font-bold leading-none">{v.label}</p>
                  <p className="text-[10px] text-gray-400 mt-0.5 leading-none">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/enquiry"
              className="bg-[#fcb900] text-[#312e2e] font-bold px-8 py-4 rounded-full hover:bg-[#e0a700] transition-colors text-sm tracking-wide"
            >
              Apply Now →
            </a>
            <a
              href="/programs"
              className="border-2 border-[#312e2e] text-[#312e2e] font-bold px-8 py-4 rounded-full hover:bg-[#312e2e] hover:text-white transition-colors text-sm tracking-wide"
            >
              Explore Programs
            </a>
          </div>
        </div>

        {/* ── RIGHT: Cards ── */}
        <div className="flex flex-col gap-5">

          {/* Impact Stats Card */}
          <div className="bg-[#312e2e] rounded-3xl p-8 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#fcb900]/10 rounded-bl-full" />

            <p className="text-[#fcb900] text-xs font-semibold uppercase tracking-widest mb-6">
              Our Impact
            </p>

<<<<<<< HEAD
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
=======
            <div className="grid grid-cols-2 gap-6">
>>>>>>> 0be217fffdbc53df08aafea378640922401a30d1
              {[
                { number: "500+", label: "Students Trained" },
                { number: "12+", label: "Industries Served" },
                { number: "98%", label: "Placement Rate" },
                { number: "3+", label: "Cities Across India" },
              ].map((stat) => (
                <div key={stat.label} className="border-l-2 border-[#fcb900]/30 pl-4">
                  <p className="text-3xl font-extrabold text-[#fcb900]">
                    {stat.number}
                  </p>
                  <p className="mt-1 text-xs text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-gray-400 text-sm leading-relaxed italic">
                &quot;Not just learning — we build creators, developers, and innovators 
              ready for the future.&quot;
              </p>
              <p className="mt-3 text-[#fcb900] text-sm font-bold">
                — Veer Singh, Founder & CEO
              </p>
            </div>
          </div>

          {/* 3 Venture Mini Cards Row */}
<<<<<<< HEAD
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
=======
          <div className="grid grid-cols-3 gap-3">
>>>>>>> 0be217fffdbc53df08aafea378640922401a30d1
            {[
              {
                title: "Tech Celebso",
                tag: "Live",
                tagBg: "bg-emerald-500/20 text-emerald-400",
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                ),
              },
              {
                title: "Celebso AI",
                tag: "Building",
                tagBg: "bg-blue-500/20 text-blue-400",
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                  </svg>
                ),
              },
              {
                title: "Celebso Event",
                tag: "Upcoming",
                tagBg: "bg-[#fcb900]/20 text-[#fcb900]",
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a3 3 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z" />
                  </svg>
                ),
              },
            ].map((v) => (
              <div
                key={v.title}
                className="bg-[#312e2e] rounded-2xl p-4 border border-white/5 hover:border-[#fcb900]/40 transition-all duration-300"
              >
                {/* Status tag */}
                <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${v.tagBg}`}>
                  {v.tag}
                </span>

                {/* Icon */}
                <div className="mt-3 text-[#fcb900]">{v.icon}</div>

                {/* Title */}
                <p className="mt-2 text-white text-xs font-bold leading-tight">
                  {v.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}