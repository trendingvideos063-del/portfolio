"use client";

import { motion } from "framer-motion";
import { projectsData } from "@/lib/data";

function ProjectCard({ project }: { project: (typeof projectsData)[number] }) {
  return (
    <div className="group relative bg-white border border-black/5 rounded-3xl p-7 shadow-sm hover:shadow-2xl hover:shadow-red-500/20 hover:bg-[#ff2a2a] hover:border-[#ff2a2a] transition-colors duration-300 overflow-hidden w-[340px] sm:w-[400px] shrink-0">
      <div className="relative z-10">
        <h3 className="text-xl md:text-2xl font-black text-black mb-3 tracking-tight">
          {project.title}
        </h3>
        <p className="text-sm text-black/60 group-hover:text-black/80 leading-relaxed mb-5 min-h-[140px] transition-colors duration-300">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-3 py-1.5 text-xs font-medium text-black bg-black/3 group-hover:bg-black/10 border border-black/5 group-hover:border-black/15 rounded-full transition-colors duration-300"
            >
              {t}
            </span>
          ))}
        </div>
        <a
          href={project.link}
          className="inline-flex items-center gap-2 text-sm font-bold text-[#ff2a2a] group-hover:text-black hover:gap-3 transition-all"
        >
          View Project
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default function Projects() {
  const trackItems = [...projectsData, ...projectsData];

  return (
    <section id="projects" className="relative w-full bg-white py-20 md:py-28 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-10 md:mb-12"
        >
          <span className="inline-block text-xs font-semibold text-black/50 uppercase tracking-widest px-3 py-1.5 bg-black/2 border border-black/5 rounded-full mb-3">
            Selected Work
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-black mb-2 tracking-tight">
            Projects
          </h2>
          <p className="text-sm text-black/60 font-normal">A few things I&rsquo;ve built recently.</p>
        </motion.div>
      </div>

      <div className="relative z-10">
        {/* Edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />

        <motion.div
          className="flex gap-6 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        >
          {trackItems.map((project, i) => (
            <ProjectCard key={`${project.title}-${i}`} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
