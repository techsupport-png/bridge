import React, { FormEvent, useState, useEffect } from "react";
import { useRouter } from "next/router";

interface GetStartedModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GetStartedModal: React.FC<GetStartedModalProps> = ({ isOpen, onClose }) => {
  const router = useRouter();
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    countryCode: "+91",
    studyDestination: "",
    startTime: "",
    nearestOffice: "",
    counselingMode: "",
    studyLevel: "",
    fundEducation: "",
    agreeTerms: false,
    contactMe: false,
    receiveUpdates: false,
  });

  // Handle ESC key press
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscKey);
    }

    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [isOpen, onClose]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here (e.g., API call)
    
    // Close modal and redirect to enquiry successful page
    onClose();
    router.push("/enquiry-successful");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      countryCode: "+91",
      studyDestination: "",
      startTime: "",
      nearestOffice: "",
      counselingMode: "",
      studyLevel: "",
      fundEducation: "",
      agreeTerms: false,
      contactMe: false,
      receiveUpdates: false,
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-cream-light rounded-3xl shadow-2xl max-w-4xl w-full p-10 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-navy hover:text-orange text-3xl font-light leading-none"
          aria-label="Close"
        >
          ×
        </button>

        <h2 className="font-heading text-4xl font-bold text-navy text-center mb-10">
          Get Started
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4 max-h-[70vh] overflow-y-auto pr-2">
          {/* First Name & Last Name */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-body text-navy mb-1">First name*</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="font-body w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange transition-colors text-base"
              />
            </div>
            <div>
              <label className="block text-sm font-body text-navy mb-1">Last name*</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="font-body w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange transition-colors text-base"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-body text-navy mb-1">Email address*</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="font-body w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange transition-colors text-base"
            />
          </div>

          {/* Mobile Number */}
          <div>
            <label className="block text-sm font-body text-navy mb-1">Mobile number*</label>
            <div className="flex gap-2">
              <select
                name="countryCode"
                value={formData.countryCode}
                onChange={handleChange}
                className="px-3 py-3 font-body border border-gray-300 rounded-lg focus:outline-none focus:border-orange transition-colors"
              >
                <option value="+91">+91</option>
                <option value="+1">+1</option>
                <option value="+44">+44</option>
                <option value="+234">+234</option>
              </select>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="flex-1 px-4 py-3 font-body border border-gray-300 rounded-lg focus:outline-none focus:border-orange transition-colors"
              />
            </div>
          </div>

          {/* Study Destination & Start Time */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-body text-navy mb-1">Your preferred study destination*</label>
              <select
                name="studyDestination"
                value={formData.studyDestination}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 font-body border border-gray-300 rounded-lg focus:outline-none focus:border-orange transition-colors appearance-none bg-white"
              >
                <option value="">Select</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
                <option value="Canada">Canada</option>
                <option value="Australia">Australia</option>
                <option value="Germany">Germany</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-body text-navy mb-1">When would you like to start?*</label>
              <select
                name="startTime"
                value={formData.startTime}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 font-body border border-gray-300 rounded-lg focus:outline-none focus:border-orange transition-colors appearance-none bg-white"
              >
                <option value="">Select</option>
                <option value="Immediately">Immediately</option>
                <option value="1-3 months">1-3 months</option>
                <option value="3-6 months">3-6 months</option>
                <option value="6-12 months">6-12 months</option>
              </select>
            </div>
          </div>

          {/* Nearest Office & Counseling Mode */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-body text-navy mb-1">Nearest Bridge Bound Academics Office*</label>
              <select
                name="nearestOffice"
                value={formData.nearestOffice}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 font-body border border-gray-300 rounded-lg focus:outline-none focus:border-orange transition-colors appearance-none bg-white"
              >
                <option value="">Select</option>
                <option value="Taraba State">Taraba State</option>
                <option value="Ebonyi State">Ebonyi State</option>
                <option value="Anambra State">Anambra State</option>
                <option value="Abuja / UK">Abuja / UK</option>
              </select>
              {!formData.nearestOffice && (
                <p className="text-xs text-red-600 mt-1">Please select nearest Bridge Bound Academics office</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-body text-navy mb-1">Preferred mode of counselling*</label>
              <select
                name="counselingMode"
                value={formData.counselingMode}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 font-body border border-gray-300 rounded-lg focus:outline-none focus:border-orange transition-colors appearance-none bg-white"
              >
                <option value="">Select</option>
                <option value="In-person">In-person</option>
                <option value="Video Call">Video Call</option>
                <option value="Phone Call">Phone Call</option>
              </select>
            </div>
          </div>

          {/* Study Level & Fund Education */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-body text-navy mb-1">Preferred study level*</label>
              <select
                name="studyLevel"
                value={formData.studyLevel}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 font-body border border-gray-300 rounded-lg focus:outline-none focus:border-orange transition-colors appearance-none bg-white"
              >
                <option value="">Select</option>
                <option value="Bachelor's">Bachelor's</option>
                <option value="Master's">Master's</option>
                <option value="PhD">PhD</option>
                <option value="Diploma">Diploma</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-body text-navy mb-1">How would you fund your education?*</label>
              <select
                name="fundEducation"
                value={formData.fundEducation}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 font-body border border-gray-300 rounded-lg focus:outline-none focus:border-orange transition-colors appearance-none bg-white"
              >
                <option value="">Select</option>
                <option value="Self-funded">Self-funded</option>
                <option value="Scholarship">Scholarship</option>
                <option value="Education Loan">Education Loan</option>
                <option value="Sponsorship">Sponsorship</option>
              </select>
            </div>
          </div>

          {/* Checkboxes */}
          <div className="space-y-3 pt-2">
            <label className="flex items-start gap-2">
              <input
                type="checkbox"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleChange}
                required
                className="mt-1 w-4 h-4 text-orange border-gray-300 rounded focus:ring-orange"
              />
              <span className="text-sm font-body text-navy">
                I agree to Bridge Bound Academics <a href="#" className="text-blue-600 underline">Terms</a> and <a href="#" className="text-blue-600 underline">privacy policy</a> *
              </span>
            </label>
            <label className="flex items-start gap-2">
              <input
                type="checkbox"
                name="contactMe"
                checked={formData.contactMe}
                onChange={handleChange}
                className="mt-1 w-4 h-4 text-orange border-gray-300 rounded focus:ring-orange"
              />
              <span className="text-sm font-body text-navy">
                Please contact me by phone, email or SMS to assist with my enquiry*
              </span>
            </label>
            <label className="flex items-start gap-2">
              <input
                type="checkbox"
                name="receiveUpdates"
                checked={formData.receiveUpdates}
                onChange={handleChange}
                className="mt-1 w-4 h-4 text-orange border-gray-300 rounded focus:ring-orange"
              />
              <span className="text-sm font-body text-navy">
                I would like to receive updates and offers from Bridge Bound Academics
              </span>
            </label>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-6">
            <button
              type="submit"
              className="flex-1 py-4 px-6 text-base font-bold text-white bg-orange rounded-xl hover:bg-orange-dark transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-4 px-6 text-base font-bold text-navy bg-gray-300 rounded-xl hover:bg-gray-400 transition-all duration-300"
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
