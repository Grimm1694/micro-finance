import Image from "next/image";
import Microfinance from "@/components/first";
import Hero from "@/components/hero";
import { LampDemo } from "@/components/lampdemo";
import Workflow from "@/components/workflow";

export default function Home() {
  return (
    <div>
      <Hero/>
      <LampDemo/>
      <Workflow />
    </div>
  );
}
