"use client";

interface ServiceModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  description: string;
}

export default function ServiceModal({
  open,
  onClose,
  title,
  description,
}: ServiceModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex justify-center items-center px-5">
      <div className="bg-white rounded-3xl max-w-lg w-full p-8 relative animate-in fade-in zoom-in duration-300">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-2xl text-gray-500 hover:text-red-500"
        >
          ✕
        </button>

        <h2 className="text-3xl font-bold text-green-700 mb-5">{title}</h2>

        <p className="text-gray-600 leading-7">{description}</p>

        <div className="mt-8">
          <h3 className="font-semibold text-lg mb-3">Benefits</h3>

          <ul className="space-y-2 text-gray-600">
            <li>✅ Personalized guidance</li>
            <li>✅ Suitable for beginners</li>
            <li>✅ Improves physical & mental health</li>
            <li>✅ Flexible online & offline sessions</li>
            <li>✅ Certified yoga experts</li>
          </ul>
        </div>

        <a
          href="#contact"
          onClick={onClose}
          className="mt-8 inline-block w-full bg-green-700 text-white text-center py-4 rounded-xl font-semibold hover:bg-green-800 transition"
        >
          Book Consultation
        </a>
      </div>
    </div>
  );
}
