"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { profile } from "@/lib/data";

const techLogos = [
  { src: "/images/react.png", alt: "React" },
  { src: "/images/node.png", alt: "Node.js" },
  { src: "/images/mongodb.png", alt: "MongoDB" },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-[#ff2a2a] pt-24 pb-40 px-6 md:px-12 w-full overflow-hidden font-sans"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_50%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start relative z-10">
        <div className="flex flex-col items-center w-full md:w-[350px] shrink-0 mt-12 md:mt-0">
          <motion.div
            initial={{ opacity: 0, y: -60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex justify-center w-full"
          >
            <div className="absolute -top-32 left-1/2 w-3 h-40 bg-black/80 transform -translate-x-1/2 shadow-inner z-0" />
            <div className="absolute -top-6 left-1/2 w-6 h-12 bg-gray-300 rounded border border-gray-400 transform -translate-x-1/2 z-10 shadow-[0_2px_10px_rgba(0,0,0,0.3)]" />

            <div className="bg-gray-900 w-full max-w-[280px] rounded-2xl p-3 shadow-[0_20px_50px_rgba(0,0,0,0.45)] relative z-20 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="absolute -top-3 left-1/2 w-16 h-6 bg-gray-900 rounded-t-xl transform -translate-x-1/2 flex justify-center items-center">
                <div className="w-8 h-2 bg-black/30 rounded-full shadow-inner" />
              </div>
              <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-gray-800 border-2 border-transparent">
                <Image
                  src="/images/yaseen.png"
                  alt={profile.name}
                  width={280}
                  height={373}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex-1 text-white mt-8 md:mt-0 relative z-20"
        >
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4">Hello!</h2>
          <p className="text-lg font-bold mb-12 leading-relaxed max-w-3xl text-red-50">
            Hi, my name is{" "}
            <span className="text-black text-xl font-black mx-1 tracking-wide uppercase">
              {profile.name}
            </span>
            , a full-stack developer based in {profile.location}, helping
            businesses design and build fast, secure, and scalable web &amp;
            mobile applications from frontend to backend.
          </p>

          <div className="flex items-center gap-10 mt-8">
            {techLogos.map((logo, i) => (
              <motion.div
                key={logo.alt}
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={96}
                  height={96}
                  className="w-20 h-20 md:w-24 md:h-24 object-contain hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z" />
        </svg>
      </div>
    </section>
  );
}
