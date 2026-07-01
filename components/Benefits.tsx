// src/components/Benefits.tsx

import {
  FaUserCheck,
  FaClipboardList,
  FaLaptopHouse,
  FaSeedling,
  FaChartLine,
  FaUsers,
} from "react-icons/fa";

const benefits = [
  {
    icon: <FaUserCheck />,
    title: "Certified Wellness Experts",
    description:
      "Learn from experienced yoga professionals dedicated to your health and wellness journey.",
  },
  {
    icon: <FaClipboardList />,
    title: "Personalized Programs",
    description:
      "Customized yoga and wellness plans designed according to your health goals and lifestyle.",
  },
  {
    icon: <FaLaptopHouse />,
    title: "Online & Offline Sessions",
    description:
      "Attend flexible classes from the comfort of your home or join us at our wellness center.",
  },
  {
    icon: <FaSeedling />,
    title: "Natural Healing",
    description:
      "Experience holistic healing through yoga, meditation, breathing techniques, and natural therapies.",
  },
  {
    icon: <FaChartLine />,
    title: "Long-Term Results",
    description:
      "Improve flexibility, strength, mental peace, and overall health with sustainable wellness practices.",
  },
  {
    icon: <FaUsers />,
    title: "Supportive Community",
    description:
      "Become a part of a positive and encouraging wellness community that motivates your progress.",
  },
];

export default function Benefits() {
  return (
    <section className="bg-gradient-to-b from-green-50 to-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Why Choose Us?
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((item) => (
            <div
              key={item.title}
              className="group bg-white rounded-2xl p-6 lg:p-8 border border-green-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-green-100 flex items-center justify-center text-green-700 text-2xl lg:text-3xl mb-6 group-hover:bg-green-700 group-hover:text-white transition-all duration-300">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-4">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-lg sm:text-xl lg:text-[22px] leading-8">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
