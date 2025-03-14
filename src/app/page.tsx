import { Experiences } from "@/app/(sections)/experiences";
import { Hero } from "@/app/(sections)/hero";
import { Skills } from "@/app/(sections)/skills";
import { Projects } from "./(sections)/projects";
import { Education } from "./(sections)/education";
import { Contact } from "./(sections)/contact";
import { Navbar } from "@/components/nav-bar";

export default function Home() {
  return (
    <div className="space-y-10 relative" id="top-section">
  
      <div
        className="fixed top-1/2 transform -translate-y-1/2 hidden md:block"
        style={{ right: "calc(50% - 335px - 190px)" }}
      >
        <Navbar />
      </div>

      <Hero />
      <Skills />
      <Experiences />
      <Projects />
      <Education />
      <Contact />
    </div>
  )
}