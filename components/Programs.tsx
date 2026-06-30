// src/components/Programs.tsx

const programs = [
  {
    title: "Weight Loss Program",
    description:
      "Achieve healthy and sustainable weight loss through personalized yoga sessions, nutrition guidance, and lifestyle coaching.",
    image:
      "https://th.bing.com/th/id/OIP.ETIjj1LbQqFThBf0nRHbkwHaEO?w=252&h=180&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3",
  },
  {
    title: "Stress Management Program",
    description:
      "Reduce stress, anxiety, and improve mental well-being with meditation, breathing techniques, and relaxation practices.",
    image:
      "https://tse3.mm.bing.net/th/id/OIP.bgetXThvbRTMBGz6y4Gk_wHaGe?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    title: "Diabetes Wellness Program",
    description:
      "Support healthy blood sugar management through therapeutic yoga, mindful nutrition, and holistic wellness practices.",
    image:
      "https://www.goodlife.co.ke/wp-content/uploads/bfi_thumb/Article-Banners-1200-by-630-3n1bnaw27j1qx01h8ff3t6.jpg",
  },
  {
    title: "Corporate Wellness Program",
    description:
      "Enhance employee health, productivity, and work-life balance with customized corporate yoga and wellness sessions.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
  },
  {
    title: "Personal Yoga Coaching",
    description:
      "Receive one-on-one yoga coaching designed specifically for your fitness goals, flexibility, and overall well-being.",
    image:
      "https://img.freepik.com/premium-photo/group-sporty-people-easy-seat-pose-close-up_1182637-45320.jpg",
  },
  {
    title: "Whole Body Pain Relief Program",
    description:
      "Relieve neck, shoulder, back, knee, and joint pain through therapeutic yoga, stretching exercises, and natural healing techniques.",
    image:
      "https://centurionspine.com/wp-content/uploads/2022/03/shutterstock_603101948-scaled.jpg",
  },
];

export default function Programs() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-emerald-50 to-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold">
            Wellness Programs
          </span>

          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Popular Programs
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-base sm:text-lg leading-7">
            Discover personalized wellness programs designed to improve your
            physical health, mental well-being, and overall quality of life.
          </p>
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
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {program.title}
                </h3>

                <p className="text-gray-600 leading-7">{program.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
