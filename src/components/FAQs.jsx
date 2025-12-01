import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What should I expect during my first appointment?",
      answer:
        "Your first appointment will include a comprehensive assessment where we discuss your concerns, medical history, and treatment goals. This helps us create a personalized care plan tailored to your needs.",
    },
    {
      question: "Do you accept insurance?",
      answer:
        "Yes, we accept most major insurance providers. Please contact our office to verify your specific insurance coverage and benefits before your appointment.",
    },
    {
      question: "How long are therapy sessions?",
      answer:
        "Standard therapy sessions are typically 50 minutes. Initial evaluations may take up to 90 minutes to ensure we fully understand your situation and needs.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "We require 24 hours notice for appointment cancellations. Late cancellations may be subject to a fee. We understand emergencies happen and will work with you in those situations.",
    },
    {
      question: "Are my sessions confidential?",
      answer:
        "Absolutely. All sessions are completely confidential in accordance with HIPAA regulations. The only exceptions are situations involving immediate danger to yourself or others, or cases of abuse.",
    },
    {
      question: "How do I know if I need therapy or medication?",
      answer:
        "During your evaluation, we will discuss your symptoms and history to determine the most appropriate treatment approach. This may include therapy, medication, or a combination of both, depending on your specific needs.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-custom text-lg max-w-2xl mx-auto">
            Find answers to common questions about our services and mental
            health care
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-light last:border-b-0">
              <button
                className="flex justify-between items-center w-full py-6 text-left hover:text-primary transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-lg text-secondary pr-4">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-custom flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="pb-6">
                  <p className="text-gray-custom leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-white max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">
              Still Have Questions?
            </h3>
            <p className="mb-6 opacity-90">
              Our team is here to help. Don't hesitate to reach out with any
              questions or concerns.
            </p>
            <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-light transition-colors">
              Contact Us Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
