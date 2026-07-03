"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "@/lib/gsap";
import { profile } from "@/lib/data";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    if (!sectionRef.current) return;
    const tween = gsap.to(videoRef.current, {
      scale: 1.12,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      const next = !videoRef.current.muted;
      videoRef.current.muted = next;
      setIsMuted(next);
      if (videoRef.current.paused) videoRef.current.play();
    }
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden bg-black"
    >
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          preload="auto"
          className="absolute top-0 left-0 w-full h-full object-cover object-[50%_15%] md:object-[right_10%] will-change-transform"
          poster="/images/hero-fallback.png"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/10 to-black/70 z-10 pointer-events-none" />
      {/* Mobile: text stacks full-width over the video, so a uniform dark scrim guarantees legibility regardless of where the subject is in frame */}
      <div className="absolute inset-0 bg-black/55 md:hidden z-10 pointer-events-none" />
      {/* Desktop: text sits in a column beside the video, so a side scrim sized to that column is enough */}
      <div className="hidden md:block absolute inset-y-0 left-0 w-[45%] lg:w-[40%] bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10 pointer-events-none" />

      <div className="absolute inset-0 z-20 px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row justify-center md:justify-between items-start text-left w-full h-full pt-64 sm:pt-72 md:pt-[12%]">
        <div className="flex flex-col items-start text-left max-w-[200px] md:max-w-[215px] w-full">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full glass text-xs font-semibold tracking-widest uppercase text-white/80"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for Work
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-white text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-black mb-5 tracking-tight leading-[1.05] text-balance"
          >
            Hi I&rsquo;m {profile.firstName}
            <br />
            <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/80 drop-shadow-[0_2px_10px_rgba(0,0,0,0.2)]">
              {profile.title}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="text-white/85 text-sm md:text-base lg:text-lg font-medium mb-8 max-w-sm md:max-w-md leading-relaxed"
          >
            {profile.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.7 }}
            className="flex flex-row items-center gap-2 md:gap-3 w-full"
          >
            <a
              href="#projects"
              className="px-4 py-2.5 text-xs rounded-full bg-white text-black font-bold hover:bg-neutral-100 transition-all duration-300 transform hover:-translate-y-0.5 shadow-[0_10px_30px_rgba(255,255,255,0.15)] inline-block text-center whitespace-nowrap"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-4 py-2.5 text-xs rounded-full glass text-white font-bold hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-0.5 inline-block text-center whitespace-nowrap"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-12 md:mt-2 flex flex-col items-center justify-center gap-2 cursor-pointer group self-start md:self-auto"
          onClick={toggleMute}
        >
          <div className="w-14 h-14 md:w-16 md:h-16 rounded-full glass flex justify-center items-center group-hover:scale-105 group-hover:bg-white group-hover:border-white transition-all duration-300">
            {isMuted ? (
              <svg className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:text-black transition-colors" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l-2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6L4.5 9H1.5v6h3l4.5 3.75V5.25z" />
              </svg>
            ) : (
              <svg className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:text-black transition-colors" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28-.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
              </svg>
            )}
          </div>
          <span className="text-white text-[9px] md:text-[11px] font-extrabold tracking-widest uppercase opacity-60 group-hover:opacity-100 transition-opacity mt-1">
            {isMuted ? "Unmute Reel" : "Mute Sound"}
          </span>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none"
      >
        <div className="animate-bounce">
          <svg className="w-5 h-5 text-white opacity-70" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}
