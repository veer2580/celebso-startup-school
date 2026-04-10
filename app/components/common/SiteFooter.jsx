"use client";

import Link from "next/link";
import {
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaEnvelope
} from "react-icons/fa";

export default function SiteFooter() {
  return (
    <footer className="w-full bg-[#070b1a] text-[#c9a227] px-8 md:px-16 py-16">

      {/* MAIN GRID */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">

        {/* LEFT SECTION */}
        <div className="space-y-4 text-[#c9a227]/80 text-sm leading-relaxed">
          <p>
            Celebso Startup School <br />
            Innovation & Creator Campus <br />
            India
          </p>

          <p>
            Empowering creators, founders and innovators to build global
            startups, powerful brands and future-ready companies.
          </p>

          <p className="text-[#c9a227]/60">
            CIN: U80904KA2022PTC168903
          </p>
        </div>

        {/* CENTER SECTION */}
        <div className="flex flex-col items-center text-center">

          <h3 className="text-2xl font-serif italic mb-3">
            Contact Us
          </h3>

          {/* Email Clickable */}
          <a
            href="mailto:info@celebso.com"
            className="mb-6 text-[#c9a227]/80 hover:text-[#fcb900]"
          >
            info@celebso.com
          </a>

          {/* SOCIAL ICONS */}
          <div className="flex gap-5">

            <SocialIcon href="https://instagram.com/yourusername">
              <FaInstagram />
            </SocialIcon>

            <SocialIcon href="https://twitter.com/yourusername">
              <FaTwitter />
            </SocialIcon>

            <SocialIcon href="https://linkedin.com/in/yourusername">
              <FaLinkedin />
            </SocialIcon>

            <SocialIcon href="mailto:info@celebso.com">
              <FaEnvelope />
            </SocialIcon>

          </div>

        </div>

        {/* RIGHT SECTION */}
        <div className="flex flex-col items-start md:items-end text-sm gap-3">

          <h3 className="text-xl font-serif italic mb-3">
            Quick Links
          </h3>

          <FooterLink href="/">Home</FooterLink>
          <FooterLink href="/programs">Programs</FooterLink>
          <FooterLink href="/about">About</FooterLink>
          <FooterLink href="/enquiry">Enquiry</FooterLink>
          <FooterLink href="/login">Login</FooterLink>

        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-[#c9a227]/20 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-[#c9a227]/70">

        <p>
          © 2025 Celebso Startup School
        </p>

        <div className="flex gap-6 mt-4 md:mt-0">
          <Link href="/terms" className="hover:text-[#fcb900] transition">
            Terms of Use
          </Link>

          <Link href="/privacy" className="hover:text-[#fcb900] transition">
            Privacy Policy
          </Link>
        </div>

      </div>

    </footer>
  );
}


/* SOCIAL ICON BUTTON */
function SocialIcon({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full border border-[#c9a227]/40 flex items-center justify-center
      text-white hover:bg-[#fcb900] hover:text-black hover:scale-110 transition-all duration-300"
    >
      {children}
    </a>
  );
}


/* FOOTER LINK */
function FooterLink({ href, children }) {
  return (
    <Link
      href={href}
      className="text-[#c9a227]/80 hover:text-[#fcb900] transition"
    >
      {children}
    </Link>
  );
}