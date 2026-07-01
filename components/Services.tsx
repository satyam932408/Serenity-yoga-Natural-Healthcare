"use client";

import { useState } from "react";
import { services } from "@/data/services";
import ServiceModal from "./ServiceModal";

import {
  FaSpa,
  FaLeaf,
  FaHeart,
  FaHandsHelping,
  FaAppleAlt,
  FaPrayingHands,
} from "react-icons/fa";

const icons = [
  <FaSpa />,
  <FaHandsHelping />,
  <FaPrayingHands />,
  <FaLeaf />,
  <FaAppleAlt />,
  <FaHeart />,
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<{
    title: string;
    description: string;
  } | null>(null);

  return (
    <>
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
              Our Services
            </h2>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group bg-[#F8FDF9] border border-green-100 rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-green-100 flex items-center justify-center text-2xl lg:text-3xl text-green-700 mb-6 group-hover:bg-green-700 group-hover:text-white transition-all duration-300">
                  {icons[index]}
                </div>

                {/* Title */}
                <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-lg sm:text-xl lg:text-[22px] leading-8">
                  {service.description}
                </p>

                {/* Button */}
                <button
                  onClick={() => setSelectedService(service)}
                  className="mt-6 text-green-700 text-base sm:text-lg font-semibold hover:text-green-900 transition"
                >
                  Learn More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <ServiceModal
        open={selectedService !== null}
        onClose={() => setSelectedService(null)}
        title={selectedService?.title || ""}
        description={selectedService?.description || ""}
      />
    </>
  );
}
