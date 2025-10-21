import React, { FormEvent, useState } from "react";

interface GetStartedModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GetStartedModal: React.FC<GetStartedModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    destination: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here
    alert("Thank you! We'll contact you within 24 hours.");
    onClose();
    setFormData({ fullName: "", email: "", phone: "", destination: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-cream rounded-2xl shadow-2xl max-w-md w-full p-8 relative border-2 border-orange"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-navy hover:text-orange text-2xl"
          aria-label="Close"
        >
          ×
        </button>

        <h2 className="font-heading text-3xl font-bold text-navy text-center mb-8">
          Get Started
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="font-body w-full px-4 py-3 border-2 border-orange rounded-lg focus:outline-none focus:border-orange-dark bg-white transition-colors"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="font-body w-full px-4 py-3 border-2 border-orange rounded-lg focus:outline-none focus:border-orange-dark bg-white transition-colors"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="font-body w-full px-4 py-3 border-2 border-orange rounded-lg focus:outline-none focus:border-orange-dark bg-white transition-colors"
          />

          <select
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            required
            className="font-body w-full px-4 py-3 border-2 border-orange rounded-lg focus:outline-none focus:border-orange-dark bg-white transition-colors appearance-none cursor-pointer"
          >
            <option value="">Select Destination</option>
            <option value="UK">United Kingdom</option>
            <option value="USA">United States</option>
            <option value="Canada">Canada</option>
            <option value="Australia">Australia</option>
            <option value="Germany">Germany</option>
            <option value="Other">Other</option>
          </select>

          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              className="flex-1 py-3 px-6 text-base font-bold text-white bg-orange rounded-lg hover:bg-orange-dark transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-3 px-6 text-base font-bold text-navy bg-gray-200 rounded-lg hover:bg-gray-300 transition-all duration-300"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GetStartedModal;
