import { Header } from "@/components/header";
import { Hero } from "@/components/hero";

export default function Home() {
  return (
    <div className="w-[90vw] max-w-[670px] mx-auto mt-4 space-y-10">
      <Header />
      <Hero />
    </div>
  )
}