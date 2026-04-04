export default function MagazineLayout() {
  return (
    <section className="bg-[#070b1a] py-32 text-[#f8fafc]">

      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <div className="mb-20">
          <h1 className="text-6xl md:text-7xl font-light tracking-wide">
            CELEBSO <span className="font-semibold">STARTUP SCHOOL</span>
          </h1>

          <p className="text-sm tracking-[0.35em] mt-4 text-[#94a3b8]">
            BUILDERS EDITION
          </p>
        </div>

        {/* GRID */}
<<<<<<< HEAD
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-auto md:auto-rows-[120px]">

          {/* BIG IMAGE */}
          <div className="col-span-1 md:col-span-6 md:row-span-4 overflow-hidden rounded-xl min-h-[240px]">
=======
        <div className="grid grid-cols-12 gap-6 auto-rows-[120px]">

          {/* BIG IMAGE */}
          <div className="col-span-6 row-span-4 overflow-hidden rounded-xl">
>>>>>>> 0be217fffdbc53df08aafea378640922401a30d1
            <img
               src="/assest/image09.jpeg"
              className="w-full h-full object-cover"
              alt="Startup founders"
            />
          </div>

          {/* TEXT BLOCK */}
<<<<<<< HEAD
          <div className="col-span-1 md:col-span-3 md:row-span-2 bg-[#0f172a] p-6 rounded-xl flex flex-col justify-between border border-[#1e293b]">
=======
          <div className="col-span-3 row-span-2 bg-[#0f172a] p-6 rounded-xl flex flex-col justify-between border border-[#1e293b]">
>>>>>>> 0be217fffdbc53df08aafea378640922401a30d1

            <h3 className="text-xl font-semibold">
              STARTUP BUILDER WORKSHOP
            </h3>

            <p className="text-sm text-[#94a3b8]">
              Students collaborate to validate ideas, talk to users and design
              their first startup prototypes.
            </p>

          </div>

          {/* SMALL IMAGE */}
<<<<<<< HEAD
          <div className="col-span-1 md:col-span-3 md:row-span-3 overflow-hidden rounded-xl min-h-[220px]">
=======
          <div className="col-span-3 row-span-3 overflow-hidden rounded-xl">
>>>>>>> 0be217fffdbc53df08aafea378640922401a30d1
            <img
              src="/assest/image01.jpeg"
              className="w-full h-full object-cover"
              alt="Startup team"
            />
          </div>

          {/* LONG TEXT */}
<<<<<<< HEAD
          <div className="col-span-1 md:col-span-4 md:row-span-2 bg-[#0f172a] p-6 rounded-xl border border-[#1e293b]">
=======
          <div className="col-span-4 row-span-2 bg-[#0f172a] p-6 rounded-xl border border-[#1e293b]">
>>>>>>> 0be217fffdbc53df08aafea378640922401a30d1

            <h2 className="text-3xl font-bold text-[#38bdf8]">
              INNOVATION LAB
            </h2>

            <p className="text-sm text-[#94a3b8] mt-2">
              At Celebso Startup School, founders experiment with AI tools,
              build MVPs and launch their first real digital products.
            </p>

          </div>

          {/* VERTICAL IMAGE */}
<<<<<<< HEAD
          <div className="col-span-1 md:col-span-2 md:row-span-4 overflow-hidden rounded-xl min-h-[240px]">
=======
          <div className="col-span-2 row-span-4 overflow-hidden rounded-xl">
>>>>>>> 0be217fffdbc53df08aafea378640922401a30d1
            <img
              src="/assest/startuppitch.jpeg"
              className="w-full h-full object-contain"
              alt="Startup pitch"
            />
          </div>

          {/* ARTICLE */}
<<<<<<< HEAD
          <div className="col-span-1 md:col-span-3 md:row-span-3 bg-[#0f172a] p-6 rounded-xl border border-[#1e293b]">
=======
          <div className="col-span-3 row-span-3 bg-[#0f172a] p-6 rounded-xl border border-[#1e293b]">
>>>>>>> 0be217fffdbc53df08aafea378640922401a30d1

            <h3 className="text-lg font-semibold">
              THE FOUNDER JOURNEY
            </h3>

            <p className="text-sm text-[#94a3b8] mt-2">
              From idea discovery to launching a scalable startup —
              participants learn through real-world building experiences.
            </p>

          </div>

          {/* WIDE IMAGE */}
<<<<<<< HEAD
          <div className="col-span-1 md:col-span-6 md:row-span-3 overflow-hidden rounded-xl min-h-[240px]">
=======
          <div className="col-span-6 row-span-3 overflow-hidden rounded-xl">
>>>>>>> 0be217fffdbc53df08aafea378640922401a30d1
            <img
              src="/assest/startupevent01.jpeg"
              className="w-full h-full object-cover"
              alt="Startup event"
            />
          </div>

          {/* QUOTE */}
<<<<<<< HEAD
          <div className="col-span-1 md:col-span-3 md:row-span-2 bg-[#0f172a] p-6 rounded-xl border border-[#1e293b] flex items-center">
=======
          <div className="col-span-3 row-span-2 bg-[#0f172a] p-6 rounded-xl border border-[#1e293b] flex items-center">
>>>>>>> 0be217fffdbc53df08aafea378640922401a30d1

            <p className="text-xl font-light italic text-[#e2e8f0]">
              “Celebso Startup School turns ambitious ideas into real companies
              built by the next generation of founders.”
            </p>

          </div>

        </div>
      </div>
    </section>
  );
}