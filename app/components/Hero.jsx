"use client";

export default function Hero() {
  return (
    <section className="hero relative w-full h-screen bg-[#f7f7f5] overflow-hidden cursor-none">

       
      <img
        className="absolute inset-0 w-full h-full object-cover opacity-10"
        src="assest/layer.webp"
        alt="Background texture"
      />
 
      <div className="absolute top-6 left-6 text-xs tracking-widest text-grey">
        {/* ● REC 00:00:12 */}
      </div>
 
      <div className="absolute top-6 right-6 text-xs tracking-widest text-grey">
        {/* ISO 800 • 24FPS */}
      </div>

  
     <div className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none">
  <img
    src="/assest/back.png"
    alt="Video Camera"
    className="w-full h-full object-cover"
  />
 </div>

      <div className="absolute inset-0 bg-black/35 pointer-events-none" />

    
      <div className="relative z-10 h-full px-4 sm:px-6 flex flex-col justify-center items-center text-center">

        <h1 className="text-4xl sm:text-5xl md:text-[5vw] text-white font-bold text-center leading-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
          CELEBSO STARTUP SCHOOL
        </h1>

    
        <p className="mt-3 flex flex-wrap items-center justify-center gap-3 text-[4.5vw] sm:text-[3.8vw] md:text-[1vw] text-[#211f1f] font-bold leading-tight uppercase bg-[#fcb900] px-4 sm:px-6 py-4 max-w-4xl mx-auto shadow-[0_6px_24px_rgba(0,0,0,0.45)]">

          <span>Startup Internships</span>

          <span className="text-[#d8d8d8]">
            <svg
              viewBox="0 0 24 24"
              width="12"
              height="12"
              fill="currentColor"
            >
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
            </svg>
          </span>

          <span>Future technology</span>

          <span className="text-[#d8d8d8]">
            <svg
              viewBox="0 0 24 24"
              width="12"
              height="12"
              fill="currentColor"
            >
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
            </svg>
          </span>

          <span>AI-focused</span>

        </p>

      </div>
    </section>
  );
}
