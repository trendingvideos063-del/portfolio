import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Expertise from "@/components/Expertise";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Ribbon from "@/components/Ribbon";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Preloader />
      <Navbar />
      <Hero />
      <About />
      <Expertise />
      <Skills />
      <Projects />
      <Contact />
      <Ribbon />
      <Footer />
    </>
  );
}
