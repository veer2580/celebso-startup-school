"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// ─── Shared animation variants ───────────────────────────────
const fadeUp = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};
const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1 } },
};

// ─── Shared field wrapper ────────────────────────────────────
function FieldWrapper({ id, label, error, children }) {
  return (
    <motion.div variants={fadeUp} className="flex flex-col gap-2 px-6">
      {label && (
        <label className="text-xs uppercase tracking-widest text-white/40">{label}</label>
      )}
      {children}
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }} className="text-xs text-red-400 mt-0.5"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

const inputCls = (hasError) =>
  `bg-transparent border-b py-2 text-white placeholder:text-white/30 focus:outline-none transition ${
    hasError ? "border-red-500" : "border-white/20 focus:border-white"
  }`;

const selectCls = (hasError) =>
  `bg-neutral-950 border-b py-2 text-white focus:outline-none transition appearance-none cursor-pointer ${
    hasError ? "border-red-500" : "border-white/20 focus:border-white"
  }`;

// ══════════════════════════════════════════════════════════════
// FORM 1 — Tech Celebso + Celebso AI
// ══════════════════════════════════════════════════════════════
function TechAIForm() {
  const [formData, setFormData] = useState({
    name: "", email: "", mobile: "", city: "",
    service: "",
    course: "", level: "", goal: "",
    aiGoal: "", aiStage: "", aiMessage: "",
  });
  const [errors,    setErrors]    = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading,   setLoading]   = useState(false);

  const handleChange = (field, value) => {
    setFormData((p) => ({ ...p, [field]: value }));
    if (errors[field]) setErrors((p) => ({ ...p, [field]: "" }));
  };

  const validate = () => {
    const e = {};
    if (!formData.name.trim())  e.name    = "Full name is required.";
    if (!formData.email.trim()) e.email   = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) e.email = "Enter a valid email.";
    if (!formData.mobile.trim()) e.mobile = "Mobile is required.";
    if (!formData.city.trim())   e.city   = "City is required.";
    if (!formData.service)       e.service = "Please select a service.";
    if (formData.service === "tech") {
      if (!formData.course) e.course = "Select a course.";
      if (!formData.level)  e.level  = "Select your level.";
    }
    if (formData.service === "ai") {
      if (!formData.aiGoal)  e.aiGoal  = "Select your AI goal.";
      if (!formData.aiStage) e.aiStage = "Select your current stage.";
    }
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setLoading(true);
    await new Promise((res) => setTimeout(res, 1300));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="py-20 text-center max-w-lg mx-auto"
      >
        <div className="mx-auto mb-8 w-20 h-20 rounded-full border border-[#fcb900]/40 flex items-center justify-center">
          <motion.svg className="w-9 h-9 text-[#fcb900]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <motion.path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8, delay: 0.3 }} />
          </motion.svg>
        </div>
        <span className="text-xs uppercase tracking-[0.3em] text-white/50">Application Received</span>
        <h2 className="mt-4 text-3xl font-semibold text-white leading-tight">
          You&apos;re in the<br /><span className="text-white/50">queue.</span>
        </h2>
        <p className="mt-4 text-neutral-400 text-sm leading-relaxed">
          Our team will reach out within 24 hours via email or WhatsApp.
        </p>
        <div className="mt-8 border border-white/10 rounded-2xl p-6 text-left space-y-3">
          {[
            { label: "Name",    value: formData.name },
            { label: "Service", value: formData.service === "tech" ? "Tech Celebso" : "Celebso AI" },
            { label: "City",    value: formData.city },
            ...(formData.service === "tech" ? [{ label: "Course", value: formData.course }] : []),
            ...(formData.service === "ai"   ? [{ label: "AI Goal", value: formData.aiGoal }] : []),
          ].map((r) => (
            <div key={r.label} className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-widest text-white/30">{r.label}</span>
              <span className="text-sm text-white/80 font-medium">{r.value}</span>
            </div>
          ))}
        </div>
        <button
          onClick={() => { setSubmitted(false); setFormData({ name:"",email:"",mobile:"",city:"",service:"",course:"",level:"",goal:"",aiGoal:"",aiStage:"",aiMessage:"" }); setErrors({}); }}
          className="mt-8 text-xs uppercase tracking-widest text-white/40 hover:text-white transition-colors"
        >
          ← Submit another application
        </button>
      </motion.div>
    );
  }

  return (
    <motion.form
      variants={stagger} initial="hidden" animate="visible"
      onSubmit={handleSubmit} noValidate
      className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10 pt-10"
    >
      <FieldWrapper id="name" label="Full Name" error={errors.name}>
        <input type="text" value={formData.name} onChange={(e) => handleChange("name", e.target.value)}
          placeholder="Your full name" className={inputCls(errors.name)} />
      </FieldWrapper>

      <FieldWrapper id="email" label="Email Address" error={errors.email}>
        <input type="email" value={formData.email} onChange={(e) => handleChange("email", e.target.value)}
          placeholder="you@email.com" className={inputCls(errors.email)} />
      </FieldWrapper>

      <FieldWrapper id="mobile" label="Mobile / WhatsApp" error={errors.mobile}>
        <input type="text" value={formData.mobile} onChange={(e) => handleChange("mobile", e.target.value)}
          placeholder="+91 XXXXX XXXXX" className={inputCls(errors.mobile)} />
      </FieldWrapper>

      <FieldWrapper id="city" label="City" error={errors.city}>
        <input type="text" value={formData.city} onChange={(e) => handleChange("city", e.target.value)}
          placeholder="Your city" className={inputCls(errors.city)} />
      </FieldWrapper>

      <FieldWrapper id="service" label="Select Service" error={errors.service}>
        <select value={formData.service} onChange={(e) => handleChange("service", e.target.value)} className={selectCls(errors.service)}>
          <option value="" disabled className="bg-neutral-900 text-white/40">Choose a service</option>
          <option value="tech" className="bg-neutral-900">⚙ Tech Celebso — Platform &amp; Courses</option>
          <option value="ai"   className="bg-neutral-900">✦ Celebso AI — Smart Career Strategy</option>
        </select>
      </FieldWrapper>

      <div className="hidden md:block" />

      <AnimatePresence>
        {formData.service === "tech" && (
          <>
            <FieldWrapper id="course" label="Select Course" error={errors.course}>
              <select value={formData.course} onChange={(e) => handleChange("course", e.target.value)} className={selectCls(errors.course)}>
                <option value="" disabled className="bg-neutral-900">Choose a course</option>
                {["Full Stack Development","AI & Automation","Frontend Development","Backend Development","UI / UX Design","Digital Marketing"].map((c) => (
                  <option key={c} className="bg-neutral-900">{c}</option>
                ))}
              </select>
            </FieldWrapper>
            <FieldWrapper id="level" label="Experience Level" error={errors.level}>
              <select value={formData.level} onChange={(e) => handleChange("level", e.target.value)} className={selectCls(errors.level)}>
                <option value="" disabled className="bg-neutral-900">Select your level</option>
                {["Beginner (No prior experience)","Intermediate (Some knowledge)","Advanced (Looking to upskill)"].map((l) => (
                  <option key={l} className="bg-neutral-900">{l}</option>
                ))}
              </select>
            </FieldWrapper>
            <motion.div variants={fadeUp} className="flex flex-col gap-2 px-6 md:col-span-2">
              <label className="text-xs uppercase tracking-widest text-white/40">Your Learning Goal</label>
              <textarea rows={3} value={formData.goal} onChange={(e) => handleChange("goal", e.target.value)}
                placeholder="What do you want to achieve with this course?"
                className="bg-transparent border-b border-white/20 py-2 text-white placeholder:text-white/30 focus:outline-none focus:border-white transition resize-none" />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {formData.service === "ai" && (
          <>
            <FieldWrapper id="aiGoal" label="AI Career Goal" error={errors.aiGoal}>
              <select value={formData.aiGoal} onChange={(e) => handleChange("aiGoal", e.target.value)} className={selectCls(errors.aiGoal)}>
                <option value="" disabled className="bg-neutral-900">What do you want AI to help with?</option>
                {["Build my personal brand & identity","Generate a career roadmap","Get matched with opportunities","Content & social media strategy","Full career management"].map((g) => (
                  <option key={g} className="bg-neutral-900">{g}</option>
                ))}
              </select>
            </FieldWrapper>
            <FieldWrapper id="aiStage" label="Your Current Stage" error={errors.aiStage}>
              <select value={formData.aiStage} onChange={(e) => handleChange("aiStage", e.target.value)} className={selectCls(errors.aiStage)}>
                <option value="" disabled className="bg-neutral-900">Where are you right now?</option>
                {["Just starting out","Some experience, ready to grow","Established, want to scale globally","Already signed / managed, need strategy"].map((s) => (
                  <option key={s} className="bg-neutral-900">{s}</option>
                ))}
              </select>
            </FieldWrapper>
            <motion.div variants={fadeUp} className="flex flex-col gap-2 px-6 md:col-span-2">
              <label className="text-xs uppercase tracking-widest text-white/40">Tell Us More</label>
              <textarea rows={3} value={formData.aiMessage} onChange={(e) => handleChange("aiMessage", e.target.value)}
                placeholder="Describe your career situation and what you're looking to achieve..."
                className="bg-transparent border-b border-white/20 py-2 text-white placeholder:text-white/30 focus:outline-none focus:border-white transition resize-none" />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <motion.div variants={fadeUp} className="md:col-span-2 mt-4 px-6">
        <button type="submit" disabled={loading}
          className="group flex items-center gap-5 bg-[#fcb900] text-[#1a1818] font-bold text-sm tracking-widest uppercase px-10 py-5 rounded-full hover:bg-[#e0a700] active:scale-[0.98] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed">
          {loading ? (
            <><svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"/>
              </svg><span>Submitting...</span></>
          ) : (
            <><span>Submit Application</span>
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
              </svg></>
          )}
        </button>
        <p className="mt-4 text-xs text-white/25">We respond within 24 hours via email or WhatsApp.</p>
      </motion.div>
    </motion.form>
  );
}


// ══════════════════════════════════════════════════════════════
// FORM 2 — Celebso Events
// ══════════════════════════════════════════════════════════════
function EventsForm() {
  const [formData, setFormData] = useState({
    name: "", email: "", mobile: "", city: "",
    eventType: "", eventDate: "", timeSlot: "", budget: "", message: "",
  });
  const [errors,    setErrors]    = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading,   setLoading]   = useState(false);

  const handleChange = (field, value) => {
    setFormData((p) => ({ ...p, [field]: value }));
    if (errors[field]) setErrors((p) => ({ ...p, [field]: "" }));
  };

  const validate = () => {
    const e = {};
    if (!formData.name.trim())   e.name      = "Full name is required.";
    if (!formData.email.trim())  e.email     = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) e.email = "Enter a valid email.";
    if (!formData.mobile.trim()) e.mobile    = "Mobile is required.";
    if (!formData.city.trim())   e.city      = "City is required.";
    if (!formData.eventType)     e.eventType = "Select an event type.";
    if (!formData.eventDate)     e.eventDate = "Event date is required.";
    if (!formData.budget.trim()) e.budget    = "Budget is required.";
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setLoading(true);
    await new Promise((res) => setTimeout(res, 1300));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="py-20 text-center max-w-lg mx-auto"
      >
        <div className="mx-auto mb-8 w-20 h-20 rounded-full border border-[#fcb900]/40 flex items-center justify-center">
          <motion.svg className="w-9 h-9 text-[#fcb900]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <motion.path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8, delay: 0.3 }} />
          </motion.svg>
        </div>
        <span className="text-xs uppercase tracking-[0.3em] text-white/50">Booking Confirmed</span>
        <h2 className="mt-4 text-3xl font-semibold text-white leading-tight">
          Event request<br /><span className="text-white/50">received.</span>
        </h2>
        <p className="mt-4 text-neutral-400 text-sm leading-relaxed">
          Our events team will get back to you within 24 hours.
        </p>
        <div className="mt-8 border border-white/10 rounded-2xl p-6 text-left space-y-3">
          {[
            { label: "Name",       value: formData.name },
            { label: "Event Type", value: formData.eventType },
            { label: "City",       value: formData.city },
            { label: "Date",       value: formData.eventDate },
            { label: "Budget",     value: formData.budget },
          ].map((r) => (
            <div key={r.label} className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-widest text-white/30">{r.label}</span>
              <span className="text-sm text-white/80 font-medium">{r.value}</span>
            </div>
          ))}
        </div>
        <button
          onClick={() => { setSubmitted(false); setFormData({ name:"",email:"",mobile:"",city:"",eventType:"",eventDate:"",timeSlot:"",budget:"",message:"" }); setErrors({}); }}
          className="mt-8 text-xs uppercase tracking-widest text-white/40 hover:text-white transition-colors"
        >
          ← Submit another booking
        </button>
      </motion.div>
    );
  }

  return (
    <motion.form
      variants={stagger} initial="hidden" animate="visible"
      onSubmit={handleSubmit} noValidate
      className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10 pt-10"
    >
      <FieldWrapper id="name" label="Full Name" error={errors.name}>
        <input type="text" value={formData.name} onChange={(e) => handleChange("name", e.target.value)}
          placeholder="Your full name" className={inputCls(errors.name)} />
      </FieldWrapper>

      <FieldWrapper id="email" label="Email Address" error={errors.email}>
        <input type="email" value={formData.email} onChange={(e) => handleChange("email", e.target.value)}
          placeholder="you@email.com" className={inputCls(errors.email)} />
      </FieldWrapper>

      <FieldWrapper id="mobile" label="Mobile / WhatsApp" error={errors.mobile}>
        <input type="text" value={formData.mobile} onChange={(e) => handleChange("mobile", e.target.value)}
          placeholder="+91 XXXXX XXXXX" className={inputCls(errors.mobile)} />
      </FieldWrapper>

      <FieldWrapper id="city" label="City" error={errors.city}>
        <input type="text" value={formData.city} onChange={(e) => handleChange("city", e.target.value)}
          placeholder="Event city" className={inputCls(errors.city)} />
      </FieldWrapper>

      <FieldWrapper id="eventType" label="Event Type" error={errors.eventType}>
        <select value={formData.eventType} onChange={(e) => handleChange("eventType", e.target.value)} className={selectCls(errors.eventType)}>
          <option value="" disabled className="bg-neutral-900 text-white/40">Select event type</option>
          {["Live Artist Showcase","Brand Event & Activation","Private Performance","Industry Networking Night","Panel Talk & Conference","College / Campus Event"].map((t) => (
            <option key={t} className="bg-neutral-900">{t}</option>
          ))}
        </select>
      </FieldWrapper>

      <FieldWrapper id="eventDate" label="Event Date" error={errors.eventDate}>
        <input type="date" value={formData.eventDate} onChange={(e) => handleChange("eventDate", e.target.value)}
          className={inputCls(errors.eventDate)} />
      </FieldWrapper>

      <FieldWrapper id="timeSlot" label="Preferred Time Slot" error={errors.timeSlot}>
        <input type="text" value={formData.timeSlot} onChange={(e) => handleChange("timeSlot", e.target.value)}
          placeholder="e.g. Evening / 7 PM onwards" className={inputCls(errors.timeSlot)} />
      </FieldWrapper>

      <FieldWrapper id="budget" label="Estimated Budget" error={errors.budget}>
        <input type="text" value={formData.budget} onChange={(e) => handleChange("budget", e.target.value)}
          placeholder="₹ 50,000 – ₹ 1,00,000" className={inputCls(errors.budget)} />
      </FieldWrapper>

      <motion.div variants={fadeUp} className="flex flex-col gap-2 px-6 md:col-span-2">
        <label className="text-xs uppercase tracking-widest text-white/40">Additional Requirements</label>
        <textarea rows={4} value={formData.message} onChange={(e) => handleChange("message", e.target.value)}
          placeholder="Tell us about your event, special requirements, or anything we should know..."
          className="bg-transparent border-b border-white/20 py-2 text-white placeholder:text-white/30 focus:outline-none focus:border-white transition resize-none" />
      </motion.div>

      <motion.div variants={fadeUp} className="md:col-span-2 mt-4 px-6">
        <button type="submit" disabled={loading}
          className="group flex items-center gap-5 bg-[#fcb900] text-[#1a1818] font-bold text-sm tracking-widest uppercase px-10 py-5 rounded-full hover:bg-[#e0a700] active:scale-[0.98] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed">
          {loading ? (
            <><svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"/>
              </svg><span>Submitting...</span></>
          ) : (
            <><span>Book Now</span>
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
              </svg></>
          )}
        </button>
        <p className="mt-4 text-xs text-white/25">Our events team responds within 24 hours.</p>
      </motion.div>
    </motion.form>
  );
}


// ══════════════════════════════════════════════════════════════
// MAIN — Accordion toggle between Form 01 and Form 02
// ══════════════════════════════════════════════════════════════
export default function EnquiryForm() {
  // Form 01 is always open by default; Form 02 is closed
  const [activeForm, setActiveForm] = useState("form1");

  const tabs = [
    {
      id: "form1",
      label: "Form 01",
      sublabel: "Tech Celebso & Celebso AI",
      dot: "bg-emerald-400",
      tag1: { text: "Tech Celebso", cls: "bg-emerald-500/15 text-emerald-400" },
      tag2: { text: "Celebso AI",   cls: "bg-blue-500/15 text-blue-400" },
    },
    {
      id: "form2",
      label: "Form 02",
      sublabel: "Celebso Events Booking",
      dot: "bg-purple-400",
      tag1: { text: "Celebso Events", cls: "bg-purple-500/15 text-purple-400" },
      tag2: null,
    },
  ];

  return (
    <section className="relative bg-neutral-950 text-white overflow-hidden min-h-screen">

      {/* Top glow */}
      <div className="pointer-events-none absolute top-0 left-0 w-full h-[500px] bg-[radial-gradient(circle_at_50%_0%,rgba(252,185,0,0.06),transparent_60%)]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-24">

        {/* Page heading */}
        <motion.div variants={fadeUp} initial="hidden" animate="visible" className="mb-14">
          <span className="text-xs uppercase tracking-[0.3em] text-white/40">Celebso Startup School</span>
          <h1 className="mt-3 text-5xl sm:text-6xl md:text-7xl font-semibold leading-[1.05]">
            Enquiry<br /><span className="text-white/40">Portal</span>
          </h1>
          <p className="mt-5 text-neutral-400 max-w-xl text-sm leading-relaxed">
            Two paths. One ecosystem. Press a form below to open it and fill in your details.
          </p>
        </motion.div>

        {/* ── Accordion tabs ── */}
        <div className="space-y-4">
          {tabs.map((tab) => {
            const isOpen = activeForm === tab.id;
            return (
              <div
                key={tab.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen ? "border-[#fcb900]/30 bg-white/[0.03]" : "border-white/10 bg-white/[0.02]"
                }`}
              >
                {/* ── Tab header (always visible, clickable) ── */}
                <button
                  type="button"
                  onClick={() => setActiveForm(tab.id)}
                  className="w-full flex items-center justify-between px-8 py-6 text-left group"
                >
                  <div className="flex items-center gap-5">
                    {/* Dot indicator */}
                    <span className={`w-2.5 h-2.5 rounded-full flex-shrink-0 transition-all duration-300 ${
                      isOpen ? tab.dot : "bg-white/20"
                    }`} />

                    <div>
                      <div className="flex items-center gap-3 flex-wrap">
                        <span className={`text-lg font-bold transition-colors ${isOpen ? "text-white" : "text-white/50"}`}>
                          {tab.label}
                        </span>
                        <span className="text-xs text-white/30 hidden sm:block">—</span>
                        <span className={`text-xs text-white/40 hidden sm:block transition-colors ${isOpen ? "text-white/60" : ""}`}>
                          {tab.sublabel}
                        </span>
                      </div>
                      {/* Tags */}
                      <div className="mt-2 flex gap-2 flex-wrap">
                        <span className={`text-[9px] font-bold px-2.5 py-1 rounded-full ${tab.tag1.cls}`}>
                          {tab.tag1.text}
                        </span>
                        {tab.tag2 && (
                          <span className={`text-[9px] font-bold px-2.5 py-1 rounded-full ${tab.tag2.cls}`}>
                            {tab.tag2.text}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Chevron */}
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-colors ${
                      isOpen ? "border-[#fcb900]/40 text-[#fcb900]" : "border-white/10 text-white/30"
                    }`}
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.div>
                </button>

                {/* ── Accordion body (form content) ── */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-10 border-t border-white/5">
                        {tab.id === "form1" ? <TechAIForm /> : <EventsForm />}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom glow */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-[300px] bg-[radial-gradient(circle_at_50%_100%,rgba(252,185,0,0.04),transparent_70%)]" />
    </section>
  );
}