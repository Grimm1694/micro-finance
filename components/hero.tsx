"use client";
import React from "react";
import { FaRocket, FaLock, FaCalendarAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between h-full md:h-screen bg-gradient-to-bl from-[#122f24] via-[#0a0a0a] to-[#0a0a0a] text-center md:text-left px-8 py-8 md:px-28 md:py-16">
      {/* Left Side Content */}
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 pt-14 md:pt-0">
          Welcome to Decentralized Microfinance
        </h1>
        <h2 className="text-xl md:text-2xl text-[#b1b1b1] mb-6">
          Empowering Financial Inclusion for Everyone
        </h2>
        <p className="text-base md:text-lg text-gray-300 mb-6">
          Our decentralized microfinance dApp connects borrowers and lenders
          securely on the blockchain, ensuring transparent and efficient
          financial services.
        </p>
        <motion.button
          className="px-6 py-3 bg-[#34d399] rounded-full text-white font-semibold shadow-lg hover:bg-[#2bbf77] focus:outline-none focus:ring-2 focus:ring-[#34d399] focus:ring-opacity-50"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          Register
        </motion.button>
      </div>

      {/* Right Side Content */}
      <div className="md:w-1/4 flex flex-col space-y-4">
        <div className="bg-[#34d399] p-6 rounded-lg shadow-lg text-white flex items-center space-x-4 cursor-context-menu">
          <FaRocket className="text-2xl" />
          <div>
            <h3 className="text-lg font-semibold mb-1">Instant Approval</h3>
            <p>Quick and easy loan approvals.</p>
          </div>
        </div>
        <div className="bg-[#34d399] p-6 rounded-lg shadow-lg text-white flex items-center space-x-4 cursor-context-menu">
          <FaLock className="text-2xl" />
          <div>
            <h3 className="text-lg font-semibold mb-1">Secure Transactions</h3>
            <p>Safe and transparent operations.</p>
          </div>
        </div>
        <div className="bg-[#34d399] p-6 rounded-lg shadow-lg text-white flex items-center space-x-4 cursor-context-menu">
          <FaCalendarAlt className="text-2xl" />
          <div>
            <h3 className="text-lg font-semibold mb-1">Flexible Repayments</h3>
            <p>Choose your repayment plan.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
