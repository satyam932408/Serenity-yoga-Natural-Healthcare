// src/components/Programs.tsx

const programs = [
  {
    title: "Stress Management Program",
    description:
      "Reduce stress, anxiety, and improve mental well-being with meditation, breathing techniques, and relaxation practices.",
    image: "/images/SMP.webp",
  },
  {
    title: "Diabetes Wellness Program",
    description:
      "Support healthy blood sugar management through therapeutic yoga, mindful nutrition, and holistic wellness practices.",
    image: "/images/DWP.jpg",
  },
  {
    title: "Weight Loss Program",
    description:
      "Achieve healthy and sustainable weight loss through personalized yoga sessions, nutrition guidance, and lifestyle coaching.",
    image: "/images/WLP.webp",
  },
  {
    title: "Corporate Wellness Program",
    description:
      "Enhance employee health, productivity, and work-life balance with customized corporate yoga and wellness sessions.",
    image:
      "/images/CWP.jpg",
  },
  {
    title: "Personal Yoga Coaching",
    description:
      "Receive one-on-one yoga coaching designed specifically for your fitness goals, flexibility, and overall well-being.",
    image:
      "/images/PY.png",
  },
  {
    title: "Whole Body Pain Relief Program",
    description:
      "Relieve neck, shoulder, back, knee, and joint pain through therapeutic yoga, stretching exercises.",
    image:
      "/images/bodypain.jpg",
  },
];

export default function Programs() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-emerald-50 to-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm sm:text-base font-semibold">
            Wellness Programs
          </span>

          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Popular Programs
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => (
            <div
              key={program.title}
              className="bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-56 object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  {program.title}
                </h3>

                <p className="text-gray-600 text-lg sm:text-xl lg:text-[22px] leading-8">
                  {program.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
