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

        <div className="flex flex-col gap-3 md:items-center">
          <a href={`mailto:${profile.email}`} className="underline hover:text-white transition-colors underline-offset-4 decoration-1 lowercase">
            {profile.email}
          </a>
          <div className="flex items-center gap-4">
            {/* LinkedIn */}
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 transition-opacity hover:scale-110 transform duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6" style={{ fill: "#0A66C2" }}>
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            {/* Gmail */}
            <a href={`mailto:${profile.email}`} className="opacity-80 hover:opacity-100 transition-opacity hover:scale-110 transform duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6">
                <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.907 1.528-1.148C21.69 2.28 24 3.434 24 5.457z" style={{ fill: "#EA4335" }}/>
                <path d="M0 5.457v13.909c0 .904.732 1.636 1.636 1.636h3.819V11.73L12 16.64V9.548L5.455 4.64 3.927 3.493C2.309 2.28 0 3.434 0 5.457z" style={{ fill: "#C5221F" }}/>
              </svg>
            </a>
            {/* WhatsApp */}
            <a href="https://wa.me/923352287994" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 transition-opacity hover:scale-110 transform duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6" style={{ fill: "#25D366" }}>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
              </svg>
            </a>
          </div>
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
