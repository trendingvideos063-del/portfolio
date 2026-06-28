import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-[#d4d4d4] py-16 px-6 md:px-12 w-full font-mono text-[10px] md:text-xs tracking-widest flex flex-col justify-between min-h-[50vh]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full font-medium">
        <div className="flex flex-col gap-1">
          <p>Custom Software & Websites</p>
          <p>Apps & Automation</p>
          <p>Full Stack Development</p>
        </div>
        <div className="flex flex-col gap-1 md:items-center">
          <p>Available for work</p>
          <a href="#projects" className="underline hover:text-white transition-colors mt-1 underline-offset-4 decoration-1">
            View Work
          </a>
        </div>
        <div className="flex flex-col gap-1 md:items-end">
          <p>{profile.location}</p>
          <p>{new Date().getFullYear()}</p>
        </div>
      </div>

      <div className="w-full flex flex-col justify-center items-center py-20 md:py-24 overflow-hidden gap-3">
        <h2 className="text-[9vw] md:text-[6.5vw] leading-none font-sans font-black tracking-tighter select-none text-center">
          <span className="text-[#f4f4f4]">YASEEN</span>{" "}
          <span className="text-transparent" style={{ WebkitTextStroke: "1.5px #f4f4f4" }}>
            WASEEM
          </span>
          <span className="text-[#ff2a2a]">.</span>
        </h2>
        <p className="text-[10px] md:text-xs font-mono tracking-[0.3em] uppercase text-white/40">
          Full Stack Developer
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full items-end font-medium">
        <div className="flex flex-col gap-6">
          <a href="#contact" className="underline hover:text-white transition-colors underline-offset-4 decoration-1 font-bold">
            Contact
          </a>
          <p className="text-white/60 font-mono text-[9px] md:text-[10px]">
            &copy; {new Date().getFullYear()} {profile.name} | Built with Next.js
          </p>
        </div>

        <div className="flex flex-col gap-2 md:items-center">
          <a href={`mailto:${profile.email}`} className="underline hover:text-white transition-colors underline-offset-4 decoration-1 lowercase">
            {profile.email}
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors underline-offset-4 decoration-1">
            LinkedIn
          </a>
        </div>

        <div className="flex flex-col gap-1 md:items-end">
          <a href={profile.github} className="underline hover:text-white transition-colors underline-offset-4 decoration-1">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
