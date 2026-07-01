// "use client";

// import { motion } from "framer-motion";

// export default function Hero() {
//   return (
//     <section
//       className="h-screen flex items-center justify-center text-center bg-cover bg-center"
//       style={{
//         backgroundImage:
//           "url('https://images.unsplash.com/photo-1545205597-3d9d02c29597')",
//       }}
//     >
//       <div className="bg-black/40 w-full h-full flex items-center justify-center">
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="max-w-3xl text-white px-5"
//         >
//           <h1 className="text-5xl font-bold mb-6">
//             Transform Your Health Naturally
//           </h1>

//           <p className="text-xl mb-8">
//             Yoga, Meditation, Natural Healing & Holistic Wellness Programs
//           </p>

//           <div className="flex flex-wrap justify-center gap-4">
//             <button
//               className="
//     bg-green-600
//     px-8
//     py-4
//     rounded-full
//     font-semibold
//     hover:bg-green-700
//     transition
//     "
//             >
//               Book Consultation
//             </button>

//             <button
//               className="
//     bg-white
//     text-black
//     px-8
//     py-4
//     rounded-full
//     font-semibold
//     hover:bg-gray-100
//     transition
//     "
//             >
//               WhatsApp Us
//             </button>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
"use client";

import { motion } from "framer-motion";
import { FaLeaf, FaWhatsapp } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/hero-yoga-png.png')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/20"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/20 text-white px-5 py-2 rounded-full mb-6">
            <FaLeaf className="text-emerald-300" />
            <span className="text-sm font-medium">
              Holistic Wellness • Natural Healing
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight text-white">
            Transform Your
            <span className="block text-emerald-300">Health Naturally</span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-lg sm:text-xl text-gray-200 leading-8 max-w-2xl">
            Experience the power of Yoga, Meditation, Pranayama, Therapeutic
            Healing and personalized wellness programs designed to improve your
            body, mind, and lifestyle.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex justify-center items-center rounded-full bg-emerald-600 px-8 py-4 text-white font-semibold shadow-xl hover:bg-emerald-700 hover:-translate-y-1 transition-all duration-300"
            >
              Book Consultation
            </a>

            <a
              href="https://wa.me/919321459947"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center gap-3 rounded-full border border-white/30 bg-white/10 backdrop-blur-md px-8 py-4 text-white font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              <FaWhatsapp />
              WhatsApp Us
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-8 text-white">
            <div>
              <h3 className="text-3xl font-bold">5000+</h3>
              <p className="text-gray-300 text-sm">Happy Clients</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">16+</h3>
              <p className="text-gray-300 text-sm">Years Experience</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">95%</h3>
              <p className="text-gray-300 text-sm">Client Satisfaction</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}