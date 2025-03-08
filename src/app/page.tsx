import { Experiences } from "@/app/(sections)/experiences";
import { Hero } from "@/app/(sections)/hero";
import { Skills } from "@/app/(sections)/skills";
import { Projects } from "./(sections)/projects";

export default function Home() {
  return (
    <div className="w-[90vw] max-w-[670px] mx-auto mt-10 space-y-10 mb-[300px]">
      <Hero />
      <Skills />
      <Experiences />
      <Projects />
    </div>
  )
}