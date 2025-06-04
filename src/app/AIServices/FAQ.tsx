import React from "react";
import FAQItem from "../components/FAQSection/FAQItem";

const FAQSection = () => {
  const faqs = [
    { question: "What is blockchain development, and how can it help my business?", answer: "As a creative agency we work with you to develop solutions to address your brand needs. That includes various aspects of brand planning and strategy, marketing and design." },
    { question: "How do I know if my business needs blockchain technology?", answer: "As a creative agency we work with you to develop solutions to address your brand needs. That includes various aspects of brand planning and strategy, marketing and design." },
    { question: "Can blockchain integrate with my existing systems?", answer: "As a creative agency we work with you to develop solutions to address your brand needs. That includes various aspects of brand planning and strategy, marketing and design." },
    { question: "How long does it take to develop a blockchain solution?", answer: "Our pricing is based on..." },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 flex-col py-24">
      <h2 className="text-3xl font-bold text-center text-gray-900">
        <span className="text-[#BA24D5]">Frequently</span> Asked Questions
      </h2>
      <div className="mt-6">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
