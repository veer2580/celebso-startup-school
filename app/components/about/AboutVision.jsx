export default function AboutVision() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="max-w-7xl mx-auto">

        {/* Section Label */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-[2px] bg-[#fcb900]" />
          <p className="uppercase tracking-widest text-sm text-[#fcb900] font-semibold">
            What Drives Us
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start border-t border-black/10 pt-12">

          {/* ── LEFT: Our Vision ── */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#312e2e] leading-tight">
              Our Vision
            </h2>
            <p className="text-lg leading-relaxed text-[#312e2e]/70">
              To make Indian talent globally visible — by building the school,
              the technology, the AI, and the live stages that artists need to
              become iconic. We don&apos;t just train; we build the entire
              ecosystem around every artist we touch.
            </p>

            {/* Vision pillars — each tied to a venture */}
            <div className="mt-10 space-y-4">

              {/* Tech Celebso */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#f9f6f0] border border-[#fcb900]/20 hover:border-[#fcb900]/50 transition-colors">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#312e2e] flex items-center justify-center text-[#fcb900]">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-bold text-[#312e2e]">Tech Celebso</p>
                    <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700">
                      Live Platform
                    </span>
                  </div>
                  <p className="text-sm text-[#312e2e]/60 leading-relaxed">
                    Tech Celebso is a full-stack learning and career platform where students build real-world projects, manage their portfolios, explore AI and development tools, and gain industry exposure — all in one place.
                  </p>
                </div>
              </div>

              {/* Celebso AI */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#f9f6f0] border border-[#fcb900]/20 hover:border-[#fcb900]/50 transition-colors">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#312e2e] flex items-center justify-center text-[#fcb900]">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
                  </svg>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-bold text-[#312e2e]">Celebso AI</p>
                    <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">
                      In Development
                    </span>
                  </div>
                  <p className="text-sm text-[#312e2e]/60 leading-relaxed">
                    Proprietary AI that generates personalized career roadmaps,
                    content strategies, and opportunity matches — built
                    exclusively for the creative industry.
                  </p>
                </div>
              </div>

              {/* Celebso Events */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#f9f6f0] border border-[#fcb900]/20 hover:border-[#fcb900]/50 transition-colors">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#312e2e] flex items-center justify-center text-[#fcb900]">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a3 3 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z" />
                  </svg>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-bold text-[#312e2e]">Celebso Events</p>
                    <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-[#fcb900]/20 text-[#8a6500]">
                      Upcoming
                    </span>
                  </div>
                  <p className="text-sm text-[#312e2e]/60 leading-relaxed">
                    Flagship live experiences where artists perform, network, and
                    get discovered by labels, brands, and collaborators — a
                    real launchpad, not just a showcase.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* ── RIGHT: Why We Exist ── */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#312e2e] leading-tight">
              Why We Exist
            </h2>
            <p className="text-lg leading-relaxed text-[#312e2e]/70">
              In an industry obsessed with short-term hype, Celebso focuses on
              longevity. We believe true stardom is not viral — it&apos;s built,
              positioned, and sustained with intention. And now we&apos;re building
              the tools to prove it.
            </p>

            {/* 3-step ecosystem */}
            <div className="mt-10 space-y-3">
              {[
                {
                  step: "01",
                  heading: "Train at Tech Celebso",
                  body: "Learn full stack development, AI tools, and modern technologies through hands-on training and real-world projects."
                },
                {
                  step: "02",
                  heading: "Scale with Tech & AI",
                  body: "Use Tech Celebso to manage your career and Celebso AI to unlock personalized strategies no manager could offer.",
                },
                {
                  step: "03",
                  heading: "Get Discovered at Events",
                  body: "Step onto the Celebso Event stage — in front of labels, brands, and collaborators who are there to sign, invest, and partner.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="flex items-start gap-5 p-5 rounded-2xl border border-[#fcb900]/20 bg-[#f9f6f0] hover:bg-[#312e2e] group transition-all duration-300"
                >
                  <span className="text-3xl font-extrabold text-[#fcb900]/20 group-hover:text-[#fcb900]/40 transition-colors leading-none flex-shrink-0 w-10">
                    {item.step}
                  </span>
                  <div>
                    <p className="font-bold text-[#312e2e] group-hover:text-white transition-colors">
                      {item.heading}
                    </p>
                    <p className="mt-1 text-sm text-[#312e2e]/60 group-hover:text-gray-400 leading-relaxed transition-colors">
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quote block */}
            <div className="mt-6 bg-[#312e2e] text-white rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#fcb900]/10 rounded-bl-full" />
              <span className="text-6xl text-[#fcb900] font-extrabold leading-none block mb-4">
                "
              </span>
              <p className="text-xl font-bold leading-snug">
                We didn&apos;t just build a school. We&apos;re building the entire
                ecosystem — the platform, the AI, and the stage.
              </p>
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-[#fcb900] font-bold text-sm">
                  — Veer Singh , Founder & CEO
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}