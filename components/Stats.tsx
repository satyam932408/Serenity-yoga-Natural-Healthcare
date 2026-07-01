// src/components/Stats.tsx

import { FaUsers, FaAward, FaBuilding, FaSmileBeam } from "react-icons/fa";

export default function Stats() {
  const stats = [
    {
      value: "5000+",
      label: "Lives Transformed",
      icon: <FaUsers />,
    },
    {
      value: "16+",
      label: "Years Experience",
      icon: <FaAward />,
    },
    {
      value: "100+",
      label: "Corporate Sessions",
      icon: <FaBuilding />,
    },
    {
      value: "95%",
      label: "Client Satisfaction",
      icon: <FaSmileBeam />,
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm sm:text-base font-semibold">
            Trusted by Thousands
          </span>

          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Our Impact in Numbers
          </h2>

          <p className="mt-5 text-gray-600 text-lg sm:text-xl lg:text-[22px] leading-8">
            Helping thousands of people improve their physical health, mental
            well-being, and lifestyle through yoga and natural healing.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group bg-white border border-gray-200 rounded-3xl p-6 text-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Icon */}
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-3xl text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                {stat.icon}
              </div>

              {/* Number */}
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-900">
                {stat.value}
              </h3>

              {/* Label */}
              <p className="mt-3 text-gray-600 text-base sm:text-lg lg:text-xl font-medium leading-7">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
