"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";
import { WobbleCard } from "./ui/wobblecard";
import { useRouter } from "next/navigation";

export function LampDemo() {
  return (
    <div className="bg-[#0a0a0a]">
      {/* Lamp Section with adjusted height */}
      <LampContainer>
        {/* Company Name */}
        <motion.h1
          initial={{ opacity: 0.5, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-2 bg-clip-text text-center text-3xl font-semibold tracking-tight text-transparent md:text-5xl"
        >
          FinanceConnect
        </motion.h1>
        {/* Tagline: Decentralized Loans */}
        <motion.h2
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.4,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-4 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          Decentralized Loans <br /> & Flexible Payment Plans
        </motion.h2>
      </LampContainer>
      {/* Cards Section */}
      <WobbleCardDemo />
    </div>
  );
}

export function WobbleCardDemo() {
  const router = useRouter();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full ">
      {/* Lending Card */}
      
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full cursor-pointer bg-gradient-to-br from-gray-800 to-gray-600 min-h-[400px] lg:min-h-[300px] rounded-lg shadow-lg"
        className=""
        redirect="/lenders"
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Explore Lending Options
          </h2>
          <p className="mt-4 text-left text-base/6 text-neutral-200">
            Discover various lending options and enjoy flexible interest rates on your decentralized loans.
          </p>
        </div>
        <Image
          src="/next.svg" // Random image placeholder
          width={500}
          height={500}
          alt="Lending demo image"
          className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
      
      {/* Borrowing Card */}
      <WobbleCard
        containerClassName="col-span-1 min-h-[300px] cursor-pointer bg-gradient-to-br from-gray-700 to-gray-500 rounded-lg shadow-lg"
        className=""
        redirect="/borrowers"
      >
        <div className="max-w-80">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Flexible Borrowing Plans
          </h2>
          <p className="mt-4 text-left text-base/6 text-neutral-200">
            Borrow funds at low interest rates and pay back on flexible terms suited to your financial goals.
          </p>
        </div>
        <Image
          src="/next.svg" // Random image placeholder
          width={500}
          height={500}
          alt="Borrowing demo image"
          className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>

      {/* Crowdfunding Card */}
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-3 cursor-pointer bg-gradient-to-br from-gray-900 to-gray-700 min-h-[400px] lg:min-h-[400px] xl:min-h-[300px] rounded-lg shadow-lg"
        className=""
        redirect="/crowdfunding"
      >
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Crowdfunding Solutions for Entrepreneurs
          </h2>
          <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
            Raise funds for your innovative projects or support others through our decentralized crowdfunding platform.
          </p>
        </div>
        <Image
          src="/next.svg" // Random image placeholder
          width={500}
          height={500}
          alt="Crowdfunding demo image"
          className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
    </div>
  );
}
