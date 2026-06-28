"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { profile } from "@/lib/data";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) return 100;
        const next = p + Math.random() * 18;
        return next > 100 ? 100 : next;
      });
    }, 140);

    const timer = setTimeout(() => {
      setProgress(100);
      setIsLoading(false);
    }, 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 w-full h-screen bg-[#050505] z-[100000] flex flex-col items-center justify-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,42,42,0.15),transparent_60%)]" />

          <motion.div
            exit={{ opacity: 0, scale: 0.96, y: -16 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative text-5xl md:text-7xl font-black tracking-tighter"
          >
            <div className="text-white/10">{profile.firstName}.</div>
            <motion.div
              className="absolute top-0 left-0 text-white overflow-hidden whitespace-nowrap"
              initial={{ clipPath: "inset(100% 0 0 0)" }}
              animate={{ clipPath: "inset(0% 0 0 0)" }}
              transition={{ duration: 1.4, ease: "easeInOut", delay: 0.2 }}
            >
              {profile.firstName}
              <span className="text-[#ff2a2a]">.</span>
            </motion.div>
          </motion.div>

          <div className="mt-8 w-40 h-[2px] bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-[#ff2a2a]"
              style={{ width: `${progress}%` }}
              transition={{ ease: "linear" }}
            />
          </div>
          <p className="mt-4 text-[10px] tracking-[0.3em] uppercase text-white/40 font-mono">
            {Math.floor(progress)}%
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
