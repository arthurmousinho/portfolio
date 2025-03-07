import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Skills } from "@/components/skills";

export default function Home() {
  return (
    <div className="w-[90vw] max-w-[670px] mx-auto mt-4 space-y-10">
      <Header />
      <Hero />
      <Skills />
    </div>
  )
}