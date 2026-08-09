import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Summary from "@/components/Summary";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import ProjectHighlights from "@/components/ProjectHighlights";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Summary />
        <Services />
        <Experience />
        <ProjectHighlights />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
