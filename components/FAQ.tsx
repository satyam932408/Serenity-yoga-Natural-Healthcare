// src/components/FAQ.tsx

const faqs = [
  {
    question: "Is yoga suitable for beginners?",
    answer:
      "Absolutely! Our yoga sessions are designed for all age groups and experience levels. Beginners receive step-by-step guidance in a safe and supportive environment.",
  },
  {
    question: "Do you offer online and offline classes?",
    answer:
      "Yes. You can join our live online sessions from anywhere or attend our offline classes at our wellness center based on your preference.",
  },
  {
    question: "Can yoga help with weight loss?",
    answer:
      "Yes. Our Weight Loss Program combines yoga, breathing exercises, healthy lifestyle guidance, and nutrition support to help you achieve sustainable results.",
  },
  
 
  {
    question: "What is included in the Nutrition Guidance Program?",
    answer:
      "Our nutrition guidance includes personalized diet recommendations, healthy eating habits, meal planning, and lifestyle advice to support your wellness goals.",
  },
  {
    question: "How does meditation help improve mental health?",
    answer:
      "Meditation helps reduce stress, anxiety, improves concentration, promotes better sleep, and creates a sense of inner peace and emotional balance.",
  },
  {
    question: "What are the benefits of Pranayama?",
    answer:
      "Pranayama improves lung capacity, enhances breathing efficiency, boosts energy levels, reduces stress, and supports overall physical and mental well-being.",
  },
  {
    question: "Do you provide personalized wellness plans?",
    answer:
      "Yes. Every client receives a customized wellness plan based on their health goals, lifestyle, fitness level, and any existing medical conditions.",
  },
  

  {
    question: "How do I book my first consultation?",
    answer:
      "Simply fill out the consultation form on our website. After submitting your request, our team will contact you through WhatsApp to confirm your appointment and guide you through the next steps.",
  },
];

export default function FAQ() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-gray-600 text-base sm:text-lg leading-7">
            Find answers to the most common questions about our yoga classes,
            wellness programs, and consultation process.
          </p>
        </div>

        {/* FAQ Cards */}
        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group border border-green-100 rounded-2xl bg-green-50 p-5 lg:p-6 hover:shadow-lg transition-all duration-300"
            >
              <summary className="cursor-pointer list-none flex justify-between items-center font-semibold text-lg text-gray-900">
                {faq.question}

                <span className="text-2xl text-green-700 group-open:rotate-45 transition-transform duration-300">
                  +
                </span>
              </summary>

              <p className="mt-4 text-gray-600 leading-7">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
