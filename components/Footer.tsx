// // src/components/Footer.tsx

// export default function Footer() {
//   return (
//     <footer className="bg-[#263238] text-white py-10">
//       <div className="max-w-7xl mx-auto px-6 text-center">
//         <h3 className="text-2xl font-bold mb-4">Serenity Yoga & Natural Healthcare</h3>

//         <p>Transforming lives through Yoga, Meditation, and Natural Healing.</p>

//         <p className="mt-6 text-sm">© 2026 All Rights Reserved.</p>
//       </div>
//     </footer>
//   );
// }

// src/components/Footer.tsx

// src/components/Footer.tsx

// src/components/Footer.tsx

import { FaLeaf, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center">
            <FaLeaf className="text-emerald-600 text-2xl" />
          </div>
        </div>

        {/* Business Name */}
        <h3 className="text-2xl font-bold">
          Serenity Yoga & Natural Healthcare
        </h3>

        {/* Description */}
        <p className="mt-3 text-gray-400 max-w-xl mx-auto leading-7">
          Transforming lives through Yoga, Meditation, Natural Healing, and
          holistic wellness.
        </p>

        {/* Email */}
        <div className="flex justify-center items-center gap-2 mt-6 text-gray-300">
          <FaEnvelope className="text-emerald-400" />
          <a
            href="mailto:info@serenityyoga.com"
            className="hover:text-emerald-400 transition"
          >
            afsana.mkzia@gmail.com
          </a>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-5 text-sm text-gray-500">
          © 2026 Serenity Yoga & Natural Healthcare. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}