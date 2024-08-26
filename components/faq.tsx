"use client";
import { useState } from "react";

const faqs = [
  {
    question: "How can I apply for a loan?",
    answer: "Registered users can apply for loans by specifying the amount and the purpose of the loan through the dashboard.",
  },
  {
    question: "What is the loan approval process?",
    answer: "Loan applications are reviewed and approved based on predefined criteria such as credit score and financial history.",
  },
  {
    question: "How do I repay the loan?",
    answer: "Loan repayments can be made via your dashboard, where you can track your loan balance and repayment schedule.",
  },
  {
    question: "Is there any interest on the loan?",
    answer: "Yes, the interest rate is determined by the platform based on market conditions and user creditworthiness.",
  },
];

const FaqCard = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4 border hover:border-emerald-600 border-gray-600 bg-[#0f0f0f] rounded-xl shadow-sm ">
      <div
        className="flex justify-between items-center p-4 cursor-pointer transition-all duration-500 ease-in-out"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-medium text-gray-300">Q: {question}</h3>
        <span className="text-xl text-gray-300">{isOpen ? "-" : "+"}</span>
      </div>
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="p-4 text-[#34d399]">{answer}</p>
      </div>
    </div>
  );
};

export default function Faq() {
  return (
    <div className="bg-[#0a0a0a] lg:pl-28 lg:pr-28">
      <div className="container mx-auto px-4 py-8">
        <section>
          <h2 className="text-2xl font-bold text-center text-gray-300 mb-6">FAQs</h2>
          <div>
            {faqs.map((faq, index) => (
              <FaqCard key={index} {...faq} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
