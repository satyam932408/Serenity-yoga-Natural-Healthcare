// src/components/Testimonials.tsx

import { FaStar, FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Priya Sharma",
    program: "Weight Loss Program",
    review:
      "I lost 12 kg naturally in just 5 months. The personalized yoga sessions and nutrition guidance completely changed my lifestyle.",
  },
  {
    name: "Rahul Verma",
    program: "Pain Relief Program",
    review:
      "My chronic back and shoulder pain reduced significantly within a few weeks. I can now work comfortably without discomfort.",
  },
  {
    name: "Neha Patel",
    program: "Stress Management",
    review:
      "Meditation and breathing exercises helped me overcome stress and anxiety. I feel calmer and more focused every day.",
  },
  {
    name: "Amit Singh",
    program: "Diabetes Wellness",
    review:
      "The yoga sessions and healthy lifestyle guidance helped me manage my blood sugar levels much better than before.",
  },
  {
    name: "Sneha Kapoor",
    program: "Personal Yoga Coaching",
    review:
      "The one-to-one coaching improved my flexibility, posture, and confidence. Every session was motivating and enjoyable.",
  },
  {
    name: "Vikram Joshi",
    program: "Natural Healing",
    review:
      "After months of body stiffness and joint pain, I finally found lasting relief through therapeutic yoga and natural healing techniques.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 lg:py-24 bg-[#F8FDF9]">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Success Stories
          </h2>

          <p className="mt-4 text-gray-600 text-base sm:text-lg leading-7">
            Hear from people who transformed their health and lifestyle through
            our yoga and natural wellness programs.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="bg-white rounded-2xl p-7 shadow-md border border-green-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Quote Icon */}
              <FaQuoteLeft className="text-green-600 text-3xl mb-5" />

              {/* Stars */}
              <div className="flex text-yellow-400 mb-4">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              {/* Review */}
              <p className="text-gray-600 leading-7 italic">"{item.review}"</p>

              {/* User */}
              <div className="mt-6 pt-5 border-t border-gray-200">
                <h4 className="font-bold text-lg text-gray-900">{item.name}</h4>

                <p className="text-green-700 text-sm font-medium">
                  {item.program}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
