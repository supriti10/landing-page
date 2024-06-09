import Camp from "@/landing-page/components/Camp";
import Features from "@/landing-page/components/Features";
import GetApp from "@/landing-page/components/GetApp";
import Guide from "@/landing-page/components/Guide";
import Hero from "@/landing-page/components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <Camp />
      <Guide />
      <Features />
      <GetApp />
    </>
  )
}