"use client";
import { useState, useRef, useEffect } from "react";
import VideoModal from "../components/common/VideoModal";

export default function TeaserSection() {
  const [openVideo, setOpenVideo] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);

  const videoRef = useRef(null);
  const journeyRef = useRef(null);

  const toggleSound = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  // VIDEO AUTOPLAY
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.6 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  // JOURNEY ANIMATION
  useEffect(() => {
    const section = journeyRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let value = 0;

          const interval = setInterval(() => {
            value += 1;
            setProgress(value);

            if (value >= 100) clearInterval(interval);
          }, 20);
        } else {
          setProgress(0);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* MAIN SECTION */}
      <section className="w-full bg-[#0b0f0e]">

        {/* WORKSHOP */}
        <div className="relative w-full h-[60vh] overflow-hidden">

          <img
            src="/assest/group.png"
            alt="Workshop"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#06211c]/95 via-[#06211c]/70 to-transparent"></div>

          <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-16 text-white">

            <p className="text-white/60 mb-3 text-sm">
              Workshops & Bootcamps
            </p>

            <h2 className="text-2xl md:text-4xl max-w-xl leading-tight font-semibold">
              Entrepreneurship, taught Through Hands-On Workshops
            </h2>

            <div className="flex flex-wrap gap-6 mt-10">

              <Card title="Term 1">
                Discover ideas, talk to users and get your first 10 customers.
              </Card>

              <Card title="Term 2">
                Build MVPs, launch experiments and start growth engines.
              </Card>

              <Card title="Term 3">
                Tell your story, market your product and attract real demand.
              </Card>

              <Card title="Terms 4-6">
                Scale sales, optimise funnels, try AI-powered automations.
              </Card>

            </div>

            <button className="mt-10 w-fit bg-[#fcb900] text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition">
              APPLY NOW →
            </button>

          </div>
        </div>

{/* STUDIO REEL */}

<section className="w-full bg-[#070b1a] py-24 px-6">

  <div className="max-w-7xl mx-auto">

    <h2 className="text-4xl text-white font-semibold mb-3">
      Inside Celebso Startup School
    </h2>

    <p className="text-white/60 mb-12 max-w-xl">
      Explore the journey of founders building real companies at Celebso Startup School — 
  from hands-on workshops and product experiments to live events and startup launches.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

      {/* CARD 1 */}
      <div className="rounded-2xl overflow-hidden group">

        <video
          src="/video/Ai1.mp4"
          autoPlay
          muted
          loop
          playsInline
<<<<<<< HEAD
          className="w-full h-[220px] sm:h-[280px] md:h-[420px] object-cover group-hover:scale-105 transition duration-500"
          loop
          playsInline
          className="w-full h-[220px] sm:h-[280px] md:h-[420px] object-cover group-hover:scale-105 transition duration-500"
=======
          className="w-full h-[420px] object-cover group-hover:scale-105 transition duration-500"
        />

      </div>

      {/* CARD 2 */}
      <div className="rounded-2xl overflow-hidden group">

        <video
          src="/video/tech1.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-[420px] object-cover group-hover:scale-105 transition duration-500"
>>>>>>> 0be217fffdbc53df08aafea378640922401a30d1
        />

      </div>

      {/* CARD 3 */}
      <div className="rounded-2xl overflow-hidden group">

        <video
          src="/video/event1.mp4"
          autoPlay
          muted
          loop
          playsInline
<<<<<<< HEAD
          className="w-full h-[220px] sm:h-[280px] md:h-[420px] object-cover group-hover:scale-105 transition duration-500"
=======
          className="w-full h-[420px] object-cover group-hover:scale-105 transition duration-500"
>>>>>>> 0be217fffdbc53df08aafea378640922401a30d1
        />

      </div>

    </div>

  </div>

</section>
      </section>

      {/* JOURNEY SECTION */}
      <section
        ref={journeyRef}
        className="w-full bg-[#070b1a] py-24 px-6"
      >
        <div className="max-w-7xl mx-auto border border-[#1b3a35] rounded-3xl p-10">

          <p className="text-white/60 mb-3">The Journey</p>

          <h2 className="text-3xl md:text-4xl text-white mb-16">
            Your 12-month Founder Journey at MSL
          </h2>

          {/* LINE */}
          <div className="relative w-full h-[3px] bg-[#9ee7c6]/30 mb-16">

            <div
              className="absolute top-0 left-0 h-full bg-[#d6f59a] transition-all duration-500"
              style={{ width: `${progress}%` }}
            />

          </div>

          {/* STEPS */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-white">

            <Step show={progress > 20} number="1" title="Discover" month="Month 0-2">
              Validate the founder-problem fit. Dive into sectors and rapid idea testing.
            </Step>

            <Step show={progress > 45} number="2" title="Build" month="Month 3-6">
              Ship real MVPs, run experiments, and start generating revenue.
            </Step>

            <Step show={progress > 70} number="3" title="Scale" month="Month 7-10">
              Double down on traction and refine operations.
            </Step>

            <Step show={progress > 90} number="4" title="Raise & Launch" month="Month 11-12">
              Pitch to investors and launch globally.
            </Step>

          </div>

        </div>
      </section>

      <VideoModal open={openVideo} onClose={() => setOpenVideo(false)} />
    </>
  );
}

/* CARD */
function Card({ title, children }) {
  return (
<<<<<<< HEAD
    <div className="bg-[#2c5c46]/90 backdrop-blur-lg rounded-xl p-6 w-full max-w-[220px]">
=======
    <div className="bg-[#2c5c46]/90 backdrop-blur-lg rounded-xl p-6 w-[220px]">
>>>>>>> 0be217fffdbc53df08aafea378640922401a30d1
      <h4 className="text-[#9ee7c6] font-semibold mb-2">{title}</h4>
      <p className="text-sm text-white/80">{children}</p>
    </div>
  );
}

/* STEP */
function Step({ show, number, title, month, children }) {
  return (
    <div
      className={`transition-all duration-700 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="w-10 h-10 bg-[#d6f59a] text-black flex items-center justify-center rounded-full font-semibold mb-4">
        {number}
      </div>

      <h3 className="text-xl mb-1">{title}</h3>

      <p className="text-white/60 text-sm mb-3">({month})</p>

      <p className="text-white/70 text-sm">{children}</p>
    </div>
  );
}