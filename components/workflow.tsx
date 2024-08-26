"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useTransform, useScroll } from "framer-motion";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

const Workflow = () => {
  const data: TimelineEntry[] = [
    {
      title: "Step 1: User Registration",
      content: (
        <p>
          Users sign up for the microfinance platform by providing their personal details and completing identity verification.
        </p>
      ),
    },
    {
      title: "Step 2: Application for Loan",
      content: (
        <p>
          Registered users can apply for loans by specifying the amount and the purpose of the loan.
        </p>
      ),
    },
    {
      title: "Step 3: Loan Approval",
      content: (
        <p>
          Loan applications are reviewed and approved based on predefined criteria, such as credit score and financial history.
        </p>
      ),
    },
    {
      title: "Step 4: Fund Disbursement",
      content: (
        <p>
          Approved loans are disbursed to the user's account. Users can view their loan details and manage repayments through their dashboard.
        </p>
      ),
    },
    {
      title: "Step 5: Loan Repayment",
      content: (
        <p>
          Users make repayments towards their loan as per the agreed schedule. The platform tracks payments and updates the loan balance.
        </p>
      ),
    },
    {
      title: "Step 6: Loan Completion",
      content: (
        <p>
          Once the loan is fully repaid, users receive confirmation and their account is updated to reflect the completed status.
        </p>
      ),
    },
  ];

  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height *1.2]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-[#0a0a0a] font-sans md:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-10 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-4 text-white max-w-4xl">
          Workflow of Our Microfinance App
        </h2>
        <p className="text-neutral-400 text-sm md:text-base max-w-sm">
          Here's a step-by-step guide to how our microfinance app works from user registration to loan completion.
        </p>
      </div>
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="relative flex flex-col py-6 md:py-12 gap-6"
          >
            <div className="relative flex flex-col md:flex-row items-start">
              <div className="absolute left-3 w-3 h-3 rounded-full bg-green-500 flex items-center justify-center mt-1">
              </div>
              <div className="ml-10 bg-[#0f0f0f] border cursor-pointer border-[#34d399] hover:border-emerald-600 p-6 rounded-lg shadow-md text-gray-300">
                <h3 className="text-2xl mb-4 font-bold text-white">
                  {item.title}
                </h3>
                {item.content}
              </div>
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent via-green-500 to-transparent"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-green-400 via-green-600 to-transparent rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Workflow;
