import React from "react";
import FAQItem from "../components/FAQSection/FAQItem";

const FAQSection = () => {
  const faqs = [
    { question: "What is blockchain development, and how can it help my business?", answer: "As a creative agency we work with you to develop solutions to address your brand needs. That includes various aspects of brand planning and strategy, marketing and design." },
    { question: "How do I know if my business needs blockchain technology?", answer: "Kai Foundry don’t just build solutions—we craft scalable, high-performance ecosystems tailored to real-world business needs." },
    { question: "Can blockchain integrate with my existing systems?", answer: "You can reach out to us through our website, email, or telegram. Whether you have a project in mind or just want to explore possibilities, our team is ready to connect and collaborate." },
    { question: "How long does it take to develop a blockchain solution?", answer: "As a creative agency we work with you to develop solutions to address your brand needs. That includes various aspects of brand planning and strategy, marketing and design." },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 flex-col py-24">
 <h2 className="text-3xl md:text-4xl lg:text-[50px] sm:text-[20px] font-bold text-center font-inter text-gray-900 mb-10">
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
