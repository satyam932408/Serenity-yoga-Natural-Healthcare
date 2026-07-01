// // // src/components/Contact.tsx

// // export default function Contact() {
// //   return (
// //     <section id="contact" className="py-24 bg-green-50">
// //       <div className="max-w-5xl mx-auto px-6">
// //         <h2 className="text-4xl font-bold text-center mb-12">
// //           Book Your Consultation
// //         </h2>

// //         <form className="grid md:grid-cols-2 gap-6">
// //           <input
// //             type="text"
// //             placeholder="Name"
// //             className="border p-4 rounded-lg"
// //           />

// //           <input
// //             type="email"
// //             placeholder="Email"
// //             className="border p-4 rounded-lg"
// //           />

// //           <input
// //             type="tel"
// //             placeholder="Phone"
// //             className="border p-4 rounded-lg"
// //           />

// //           <input
// //             type="text"
// //             placeholder="Program"
// //             className="border p-4 rounded-lg"
// //           />

// //           <textarea
// //             rows={5}
// //             placeholder="Message"
// //             className="border p-4 rounded-lg md:col-span-2"
// //           />

// //           <button className="bg-green-700 text-white py-4 rounded-lg md:col-span-2">
// //             Submit
// //           </button>
// //         </form>
// //       </div>
// //     </section>
// //   );
// // }
// "use client";

// import { useState } from "react";

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     program: "",
//     message: "",
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
//   ) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     // Basic Validation
//     if (!formData.name || !formData.phone || !formData.program) {
//       alert("Please fill all required fields.");
//       return;
//     }

//     const whatsappNumber = "919321459947"; // Replace with client's WhatsApp number

//     const message = `
// 🌿 *New Consultation Request*

// 👤 Name: ${formData.name}

// 📧 Email: ${formData.email}

// 📱 Phone: ${formData.phone}

// 🧘 Program: ${formData.program}

// 💬 Message:
// ${formData.message}
// `;

//     const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
//       message,
//     )}`;

//     window.open(whatsappURL, "_blank");

//     setFormData({
//       name: "",
//       email: "",
//       phone: "",
//       program: "",
//       message: "",
//     });
//   };

//   return (
//     <section id="contact" className="py-24 bg-green-50">
//       <div className="max-w-5xl mx-auto px-6">
//         <h2 className="text-4xl font-bold text-center mb-12">
//           Book Your Consultation
//         </h2>

//         <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
//           <input
//             type="text"
//             name="name"
//             placeholder="Name *"
//             value={formData.name}
//             onChange={handleChange}
//             className="border p-4 rounded-lg"
//           />

//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={handleChange}
//             className="border p-4 rounded-lg"
//           />

//           <input
//             type="tel"
//             name="phone"
//             placeholder="Phone *"
//             value={formData.phone}
//             onChange={handleChange}
//             className="border p-4 rounded-lg"
//           />

//           <input
//             type="text"
//             name="program"
//             placeholder="Program *"
//             value={formData.program}
//             onChange={handleChange}
//             className="border p-4 rounded-lg"
//           />

//           <textarea
//             rows={5}
//             name="message"
//             placeholder="Message"
//             value={formData.message}
//             onChange={handleChange}
//             className="border p-4 rounded-lg md:col-span-2"
//           />

//           <button
//             type="submit"
//             className="bg-green-700 text-white py-4 rounded-lg md:col-span-2 hover:bg-green-800 transition"
//           >
//             Book Consultation
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// }
"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    program: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.program) {
      alert("Please fill all required fields.");
      return;
    }

    const whatsappNumber = "919987175449";

    const message = `
🌿 *New Consultation Request*

👤 Name: ${formData.name}

📧 Email: ${formData.email}

📱 Phone: ${formData.phone}

🧘 Program: ${formData.program}

💬 Message:
${formData.message}
`;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message,
    )}`;

    window.open(whatsappURL, "_blank");

    setFormData({
      name: "",
      email: "",
      phone: "",
      program: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      className="py-16 lg:py-24 bg-gradient-to-b from-emerald-50 to-white"
    >
      <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Heading */}

        <div className="text-center mb-12">
          <span className="inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold">
            Get Started Today
          </span>

          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Book Your Consultation
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto leading-7">
            Fill out the form below and we'll connect with you on WhatsApp to
            guide you toward a healthier and happier lifestyle.
          </p>
        </div>

        {/* Form Card */}

        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 md:p-10">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <input
              type="text"
              name="name"
              placeholder="Full Name *"
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-300 px-4 py-4 outline-none transition-all duration-300 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-300 px-4 py-4 outline-none transition-all duration-300 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number *"
              value={formData.phone}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-300 px-4 py-4 outline-none transition-all duration-300 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
            />

            <input
              type="text"
              name="program"
              placeholder="Program *"
              value={formData.program}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-300 px-4 py-4 outline-none transition-all duration-300 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
            />

            <textarea
              rows={6}
              name="message"
              placeholder="Tell us about your health goals..."
              value={formData.message}
              onChange={handleChange}
              className="md:col-span-2 w-full rounded-xl border border-gray-300 px-4 py-4 outline-none resize-none transition-all duration-300 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
            />

            <button
              type="submit"
              className="md:col-span-2 bg-emerald-600 text-white py-4 rounded-xl font-semibold text-lg shadow-lg hover:bg-emerald-700 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
            >
              Book Consultation via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}