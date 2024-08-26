"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

export function ThreeDCardDemo() {
  const walletAddress = "0x1234...abcd";
  const hasBorrowed = true; // Change to true/false based on status
  const creditScore = 800; // Placeholder credit score, full credit score as 800+

  return (
    <CardContainer className="inter-var">
      <CardBody
        className="relative w-[22rem] h-[14rem] rounded-lg p-6 border border-gray-500 bg-gradient-to-bl from-[#122f24] via-[#0a0a0a] to-[#0a0a0a] shadow-lg group/card transition-transform transform hover:scale-105"
      >
        {/* Top Section: Wallet Address and Company Name side by side */}
        <div className="flex justify-between items-center">
          {/* Wallet Address */}
          <CardItem translateZ="50" className="text-sm text-white">
            <div>Wallet Address</div>
            <div className="font-bold">{walletAddress}</div>
          </CardItem>

          {/* Company Name */}
          <CardItem translateZ="50" className="text-right text-white">
            <div className="text-xl font-bold">FinanceConnect</div>
          </CardItem>
        </div>

        {/* Bottom Section: Loan Status and Credit Score */}
        <div className="flex justify-between items-center mt-6">
          <CardItem translateZ="20" className="text-xs text-white">
            {hasBorrowed ? "Loan Status: Borrower" : "Loan Status: Lender"}
          </CardItem>
          <CardItem translateZ="20" className="text-xs text-white">
            Credit Score: {creditScore} / 800
          </CardItem>
        </div>

        {/* Optional: Button for actions */}
        <div className="flex justify-end items-center mt-4">
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-lg bg-white text-black text-xs font-bold hover:bg-gray-300"
          >
            Manage Account
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
