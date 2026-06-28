"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useSpring, useMotionValueEvent, MotionValue } from "framer-motion";
import { skillsData } from "@/lib/data";

const skillPillVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.08, transition: { type: "spring" as const, stiffness: 400, damping: 10 } },
};

interface SkillCardProps {
  category: string;
  skills: string[];
  pathLength: MotionValue<number>;
  containerRef: React.RefObject<HTMLDivElement | null>;
}

function SkillCard({ category, skills, pathLength, containerRef }: SkillCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);

  useMotionValueEvent(pathLength, "change", (latest) => {
    if (!ref.current || !containerRef.current) return;
    const cardRect = ref.current.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();
    const cardTopRelativeToContainer = cardRect.top - containerRect.top;
    const containerHeight = containerRect.height;
    const triggerY = cardTopRelativeToContainer + 40;
    const lineTipY = latest * containerHeight;

    if (lineTipY >= triggerY && !isActive) setIsActive(true);
    else if (lineTipY < triggerY && isActive) setIsActive(false);
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ type: "spring", stiffness: 100, damping: 12 }}
      whileHover={{ y: -8, transition: { type: "spring", stiffness: 300, damping: 20 } }}
      className={`group relative border rounded-3xl p-6 h-fit shadow-sm transition-colors duration-500 ${
        isActive
          ? "bg-[#ff2a2a] border-[#ff2a2a] shadow-xl shadow-red-500/20"
          : "bg-white border-black/5 hover:shadow-xl hover:shadow-red-500/5"
      }`}
    >
      <div className="relative z-10">
        <h3
          className={`text-sm font-semibold mb-4 tracking-tight transition-colors duration-500 ${
            isActive ? "text-white" : "text-black"
          }`}
        >
          {category}
        </h3>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <motion.button
              key={skill}
              variants={skillPillVariants}
              initial="initial"
              whileHover="hover"
              className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-300 cursor-default select-none border ${
                isActive
                  ? "text-white bg-white/10 border-white/20"
                  : "text-black bg-black/3 hover:bg-red-500/10 border-black/5 hover:border-red-500/20 hover:text-red-500"
              }`}
            >
              {skill}
            </motion.button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const pathLength = useSpring(scrollYProgress, { stiffness: 60, damping: 20, restDelta: 0.001 });

  return (
    <section id="skills" className="relative w-full bg-white py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_24%,rgba(0,0,0,.05)_25%,rgba(0,0,0,.05)_26%,transparent_27%,transparent_74%,rgba(0,0,0,.05)_75%,rgba(0,0,0,.05)_76%,transparent_77%,transparent),linear-gradient(0deg,transparent_24%,rgba(0,0,0,.05)_25%,rgba(0,0,0,.05)_26%,transparent_27%,transparent_74%,rgba(0,0,0,.05)_75%,rgba(0,0,0,.05)_76%,transparent_77%,transparent)] bg-[length:50px_50px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-10 md:mb-12"
        >
          <span className="inline-block text-xs font-semibold text-black/50 uppercase tracking-widest px-3 py-1.5 bg-black/2 border border-black/5 rounded-full mb-3">
            Technical Stack
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-black mb-2 tracking-tight">
            Technologies I Work With
          </h2>
          <p className="text-sm text-black/60 font-normal">
            Full-stack expertise across modern development, automation, and cloud infrastructure.
          </p>
        </motion.div>

        <div ref={containerRef} className="relative flex flex-col gap-8 max-w-xl mx-auto">
          {/* Connecting dashed line, revealed and turning red as you scroll through the section */}
          <svg
            className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-full pointer-events-none z-0"
            viewBox="0 0 4 100"
            preserveAspectRatio="none"
          >
            <path
              d="M 2,0 L 2,100"
              fill="none"
              stroke="#cbd5e1"
              strokeWidth="4"
              strokeDasharray="4 6"
              vectorEffect="non-scaling-stroke"
            />
            <mask id="skills-path-mask">
              <motion.path
                d="M 2,0 L 2,100"
                fill="none"
                stroke="white"
                strokeWidth="4"
                style={{ pathLength }}
                vectorEffect="non-scaling-stroke"
              />
            </mask>
            <path
              d="M 2,0 L 2,100"
              fill="none"
              stroke="#ff2a2a"
              strokeWidth="4"
              strokeDasharray="4 6"
              mask="url(#skills-path-mask)"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          {skillsData.map((item) => (
            <SkillCard
              key={item.category}
              category={item.category}
              skills={item.skills}
              pathLength={pathLength}
              containerRef={containerRef}
            />
          ))}
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0], opacity: [0.03, 0.06, 0.03] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 right-10 w-32 h-32 bg-red-500 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ y: [0, -8, 0], opacity: [0.02, 0.04, 0.02] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-5 w-40 h-40 bg-red-500 rounded-full blur-3xl pointer-events-none"
      />
    </section>
  );
}
