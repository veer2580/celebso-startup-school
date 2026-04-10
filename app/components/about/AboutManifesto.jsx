export default function AboutManifesto() {
  return (
    <section className="bg-[#312e2e] text-white px-6 py-28 relative overflow-hidden">

      {/* Decorative background elements */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] rounded-full bg-[#fcb900]/5 pointer-events-none" />
      <div className="absolute bottom-[-80px] right-[-80px] w-[300px] h-[300px] rounded-full bg-[#fcb900]/5 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">

        {/* Label */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <span className="w-8 h-[2px] bg-[#fcb900]" />
          <p className="uppercase tracking-widest text-sm text-[#fcb900] font-semibold">
            Our Manifesto
          </p>
          <span className="w-8 h-[2px] bg-[#fcb900]" />
        </div>

        {/* Big Statement */}
        <h2 className="text-4xl md:text-6xl font-bold leading-tight max-w-4xl mx-auto">
          Celebso is not just a platform.
          <br />
          <span className="text-[#fcb900]">It&apos;s a builder ecosystem.</span>
        </h2>

        <p className="mt-8 text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
          We don&apos;t just teach skills — we create developers, innovators, and future leaders.
        </p>

        {/* Manifesto lines */}
        <div className="mt-16 space-y-6 text-left max-w-2xl mx-auto">
          {[
            "We believe skills should be practical, not just theoretical.",
            "We believe learning without execution has no real value.",
            "We believe technology and AI will define the future — and everyone should be ready for it.",
            "We believe real growth comes from building, failing, and improving.",
            "We are Celebso. And we are building the future.",
          ].map((line, i) => (
            <div key={i} className="flex items-start gap-4">
              <span className="w-2 h-2 rounded-full bg-[#fcb900] mt-2.5 flex-shrink-0" />
              <p
                className={`text-lg leading-relaxed ${
                  i === 4
                    ? "text-[#fcb900] font-bold"
                    : "text-gray-300"
                }`}
              >
                {line}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom decoration */}
        <div className="mt-20 flex items-center justify-center gap-4">
          <span className="flex-1 max-w-[120px] h-[1px] bg-white/10" />
          <div className="w-10 h-10 rounded-full border border-[#fcb900]/40 flex items-center justify-center">
            <span className="text-[#fcb900] font-extrabold text-lg">C</span>
          </div>
          <span className="flex-1 max-w-[120px] h-[1px] bg-white/10" />
        </div>
      </div>
    </section>
  );
}