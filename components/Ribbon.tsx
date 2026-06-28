"use client";

import { motion } from "framer-motion";

const ITEM = "FULL STACK DEVELOPER • BUILDING PREMIUM WEBSITES • INTELLIGENT & SCALABLE SOFTWARE • ";

export default function Ribbon() {
  const repeated = ITEM.repeat(4);

  return (
    <div className="relative w-full overflow-hidden bg-[#0a0a0a] border-y border-white/10 py-3">
      <motion.div
        className="flex w-max whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
      >
        <span className="text-xs md:text-sm font-semibold tracking-[0.2em] text-white/50 px-3">
          {repeated}
        </span>
        <span className="text-xs md:text-sm font-semibold tracking-[0.2em] text-white/50 px-3">
          {repeated}
        </span>
      </motion.div>
    </div>
  );
}
