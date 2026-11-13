"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue } from "framer-motion";
import { gsap } from "@/lib/gsap";
import { profile } from "@/lib/data";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [badgePos, setBadgePos] = useState({ x: 0, y: 0 });
  const [saved, setSaved] = useState(false);
  const badgeX = useMotionValue(0);
  const badgeY = useMotionValue(0);

  useEffect(() => {
    const stored = localStorage.getItem("badge-pos");
    if (stored) {
      const pos = JSON.parse(stored);
      setBadgePos(pos);
      badgeX.set(pos.x);
      badgeY.set(pos.y);
    }
  }, []);

  const saveBadgePos = () => {
    const pos = { x: badgeX.get(), y: badgeY.get() };
    localStorage.setItem("badge-pos", JSON.stringify(pos));
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  useEffect(() => {
    if (!sectionRef.current) return;
    const tween = gsap.to(videoRef.current, {
      scale: 1.08,
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
      {/* Video — landscape, face biased right on desktop, centered on mobile */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          preload="auto"
          className="absolute top-0 left-0 w-full h-full object-cover object-center md:object-[68%_center] will-change-transform"
          poster={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/hero-fallback.png`}
        >
       <source src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/videos/hero.mp4`} type="video/mp4" />
        </video>
      </div>

      {/* Global vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/5 to-black/65 z-10 pointer-events-none" />
      {/* Mobile scrim — uniform dark so text is always readable */}
      <div className="absolute inset-0 bg-black/50 md:hidden z-10 pointer-events-none" />
      {/* Desktop scrim — covers the left text column */}
      <div className="hidden md:block absolute inset-y-0 left-0 w-[52%] bg-gradient-to-r from-black/90 via-black/60 to-transparent z-10 pointer-events-none" />

      {/* Badge — draggable, position saved to localStorage */}
      <motion.div
        drag
        dragMomentum={false}
        style={{ x: badgeX, y: badgeY, top: 80, left: 12, position: "absolute" }}
        className="z-30 cursor-grab active:cursor-grabbing select-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-semibold tracking-widest uppercase text-white/80">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Available for Work
        </span>
      </motion.div>

      {/* Content */}
      <div className="absolute inset-0 z-20 flex flex-col md:flex-row md:items-center w-full h-full px-6 md:px-12 max-w-7xl mx-auto">

        {/* Text column — bottom on mobile, left-center on desktop */}
        <div className="mt-auto mb-10 md:mt-0 md:mb-0 flex flex-col items-start text-left w-full max-w-sm md:max-w-md">

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-white text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-black mb-4 tracking-tight leading-[1.05]"
          >
            Hi I&rsquo;m {profile.firstName}
            <br />
            <span className="text-white/90">{profile.title}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.7 }}
            className="text-white/80 text-sm md:text-base font-medium mb-7 leading-relaxed"
          >
            {profile.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="flex flex-row items-center gap-3"
          >
            <a
              href="#projects"
              className="px-6 py-3 text-xs rounded-full bg-white text-black font-bold hover:bg-neutral-100 transition-all duration-300 hover:-translate-y-0.5 shadow-[0_10px_30px_rgba(255,255,255,0.15)] whitespace-nowrap"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 text-xs rounded-full glass text-white font-bold hover:bg-white/15 transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* Mute button — bottom right on both */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="absolute bottom-10 right-6 md:right-12 flex flex-col items-center gap-2 cursor-pointer group"
          onClick={toggleMute}
        >
          <div className="w-12 h-12 md:w-14 md:h-14 rounded-full glass flex justify-center items-center group-hover:scale-105 group-hover:bg-white group-hover:border-white transition-all duration-300">
            {isMuted ? (
              <svg className="w-5 h-5 text-white group-hover:text-black transition-colors" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l-2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6L4.5 9H1.5v6h3l4.5 3.75V5.25z" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-white group-hover:text-black transition-colors" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28-.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
              </svg>
            )}
          </div>
          <span className="text-white text-[9px] font-extrabold tracking-widest uppercase opacity-60 group-hover:opacity-100 transition-opacity">
            {isMuted ? "Unmute" : "Mute"}
          </span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2 z-20 pointer-events-none"
      >
        <div className="animate-bounce">
          <svg className="w-5 h-5 text-white opacity-60" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}
