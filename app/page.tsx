import { ThreeDCardDemo } from "@/components/card";
import Faq from "@/components/faq";
import Hero from "@/components/hero";
import { LampDemo } from "@/components/lampdemo";
import { MarqueeDemo } from "@/components/review";
import Workflow from "@/components/workflow";

export default function Home() {
  return (
    <div>
      <Hero/>
      <LampDemo/>
      <Workflow />
      <Faq />
      <ThreeDCardDemo/>
    </div>
  );
}
