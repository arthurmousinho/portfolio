import { Experiences } from "@/app/(sections)/experiences";
import { Header } from "@/components/header";
import { Hero } from "@/app/(sections)/hero";
import { Skills } from "@/app/(sections)/skills";

export default function Home() {
  return (
    <div className="w-[90vw] max-w-[670px] mx-auto mt-4 space-y-10 mb-10">
      <Header />
      <Hero />
      <Skills />
      <Experiences />
    </div>
  )
}