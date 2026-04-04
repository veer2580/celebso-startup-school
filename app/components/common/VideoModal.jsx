"use client";

import { motion, AnimatePresence } from "framer-motion";

export default function VideoModal({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[9999] "
        > 
         <button
  onClick={onClose}
  className="absolute top-6 right-6 z-30 flex items-center gap-2 text-sm uppercase tracking-wider text-white opacity-80 hover:opacity-100 cursor-pointer"
>
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="bg-[#fcb900] text-[#312e2e] rounded-full p-1"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>

  <span className="bg-[#fcb900] text-xs text-[#312e2e] rounded-full py-1 px-4">
    Close
  </span>
</button>

 
          <div className="w-full h-full flex items-center justify-center">
            <video
              src="/assest/herovideo.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
