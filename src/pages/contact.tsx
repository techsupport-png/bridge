import React, { useState, FormEvent } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const ContactPage: React.FC = () => {
  const router = useRouter();
  
  useScrollReveal([
    {
      selector: ".contact-offices",
      options: {
        origin: "left",
        distance: "50px",
        duration: 1000,
      },
    },
    {
      selector: ".contact-form",
      options: {
        origin: "right",
        distance: "50px",
        duration: 1000,
      },
    },
  ]);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    countryCode: "+91",
    studyDestination: "",
    startTime: "",
    nearestOffice: "",
    counselingMode: "",
    studyLevel: "",
    howDidYouFind: "",
    agreeTerms: false,
    contactMe: false,
    receiveUpdates: false,
  });


  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here (e.g., API call)

    // Redirect to enquiry successful page
    router.push("/enquiry-successful");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <>
      <Head>
        <title>Contact Us - Bridge Bound Academics</title>
        <meta
          name="description"
          content="Get in touch with Bridge Bound Academics. We have offices in Nigeria and the UK ready to help you achieve your study abroad dreams."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />

      <main className="min-h-screen bg-cream-light pt-24">
        {/* Hero Section */}
        <section className="py-16 px-[5%] bg-gradient-to-br from-orange to-orange-dark text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-4xl lg:text-6xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="font-body text-lg lg:text-xl leading-relaxed">
              Ready to take the next step? Our friendly team is here to answer your questions, provide expert advice, and support you on your study abroad journey.
            </p>
          </div>
        </section>

        {/* Main Contact Section */}
        <section className="py-20 px-[5%] bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-center text-navy mb-4">
              Contact Us Via Our Offices or Send A Message
            </h2>
            <p className="font-body text-center text-navy-light max-w-3xl mx-auto mb-16 leading-relaxed">
              With offices in Nigeria and the UK, Bridge Bound Academics is committed to helping students worldwide achieve their dreams—reach out today and let&apos;s build your future together.
            </p>

            <div className="flex justify-center">
              {/* Contact Form */}
              <div className="contact-form bg-cream-light p-8 rounded-lg shadow-lg max-w-2xl w-full">
                <h3 className="font-heading text-3xl font-bold text-navy mb-2">
                  Get FREE Counselling Today!
                </h3>
                <div className="w-12 h-1 bg-orange mb-4"></div>
                <p className="font-body text-sm text-navy-light mb-6">
                  Enter your details and our expert will reach out to you to discuss your plans. By the way, all our services are free!
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* First Name & Last Name */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-body text-navy mb-1">First name*</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 font-body border border-gray-300 rounded-lg focus:outline-none focus:border-orange transition-colors"
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
                        className="w-full px-4 py-3 font-body border border-gray-300 rounded-lg focus:outline-none focus:border-orange transition-colors"
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
                      className="w-full px-4 py-3 font-body border border-gray-300 rounded-lg focus:outline-none focus:border-orange transition-colors"
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
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        required
                        className="flex-1 px-4 py-3 font-body border border-gray-300 rounded-lg focus:outline-none focus:border-orange transition-colors"
                      />
                    </div>
                  </div>

                  {/* Study Destination & Start Time */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                      <p className="text-xs text-red-600 mt-1">Please select nearest Bridge Bound Academics office</p>
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

                  {/* Study Level & How Found */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                        <option value="Bachelor's">Bachelor&apos;s</option>
                        <option value="Master's">Master&apos;s</option>
                        <option value="PhD">PhD</option>
                        <option value="Diploma">Diploma</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-body text-navy mb-1">How would you find your education?*</label>
                      <select
                        name="howDidYouFind"
                        value={formData.howDidYouFind}
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
                  <div className="space-y-3">
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

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 px-6 font-bold text-white bg-orange rounded-full hover:bg-orange-dark transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Avail FREE Counselling
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Map or Additional Info Section */}
        <section className="py-16 px-[5%] bg-cream">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-navy mb-6">
              Why Choose Bridge Bound Academics?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="p-6">
                <div className="text-orange text-5xl mb-4">
                  <i className="fa fa-globe"></i>
                </div>
                <h3 className="font-heading text-xl font-bold text-navy mb-3">
                  Global Reach
                </h3>
                <p className="font-body text-navy-light leading-relaxed">
                  With offices in multiple countries, we provide local support with global expertise.
                </p>
              </div>
              <div className="p-6">
                <div className="text-orange text-5xl mb-4">
                  <i className="fa fa-users"></i>
                </div>
                <h3 className="font-heading text-xl font-bold text-navy mb-3">
                  Expert Team
                </h3>
                <p className="font-body text-navy-light leading-relaxed">
                  Our experienced consultants have helped hundreds of students achieve their dreams.
                </p>
              </div>
              <div className="p-6">
                <div className="text-orange text-5xl mb-4">
                  <i className="fa fa-heart"></i>
                </div>
                <h3 className="font-heading text-xl font-bold text-navy mb-3">
                  Personalized Care
                </h3>
                <p className="font-body text-navy-light leading-relaxed">
                  Every student receives tailored guidance based on their unique goals and aspirations.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <BackToTop />
    </>
  );
};

export default ContactPage;
