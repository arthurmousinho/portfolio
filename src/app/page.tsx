import { Experiences } from "@/app/(sections)/experiences";
import { Hero } from "@/app/(sections)/hero";
import { Skills } from "@/app/(sections)/skills";
import { Projects } from "./(sections)/projects";
import { Education } from "./(sections)/education";
import { Contact } from "./(sections)/contact";
import { Footer } from "./(sections)/footer";

export default function Home() {
  return (
    <div className="w-[90vw] max-w-[670px] mx-auto mt-10 space-y-10 mb-[100px]">
      <Hero />
      <Skills />
      <Experiences />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </div>
  )
}