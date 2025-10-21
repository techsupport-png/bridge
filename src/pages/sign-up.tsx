import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const countryCodes = ["+91", "+1", "+44", "+234"];

const SignInPage: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    countryCode: "+91",
    mobile: "",
    email: "",
    password: "",
    agreeTerms: false,
    contactMe: false,
    receiveUpdates: false,
  });
  const [showPassword, setShowPassword] = useState(false);

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle sign up logic here
  };

  return (
    <>
      <Head>
        <title>Create your Account - Bridge Bound Academics</title>
      </Head>
      <Header />
      <main className="min-h-screen bg-orange/10 flex items-center justify-center py-16 pt-24">
        <div className="bg-white rounded-3xl shadow-2xl flex flex-col lg:flex-row w-full max-w-5xl overflow-hidden">
          {/* Left Side: Illustration & Info */}
          <div className="hidden lg:flex flex-col justify-center items-center bg-orange/20 px-10 py-12 w-2/5">
            <div className="mb-8">
              <Image src="/img/student.png" alt="Create your account" width={120} height={224} className="w-30 h-56 object-cover rounded-xl" />
            </div>
            <h1 className="font-heading text-3xl font-bold text-orange mb-4">Create your Bridge Bound Academics account</h1>
            <p className="font-body text-navy-light mb-6 text-base">
              One account for all your study abroad needs. Start your global education journey today.
            </p>
            <ul className="font-body text-navy-light text-base space-y-3 mb-6">
              <li className="flex items-center gap-2">
                <span className="text-orange text-xl">✓</span> Access your personalized student dashboard.
              </li>
              <li className="flex items-center gap-2">
                <span className="text-orange text-xl">✓</span> Save and compare universities & courses.
              </li>
              <li className="flex items-center gap-2">
                <span className="text-orange text-xl">✓</span> Track your applications in real-time.
              </li>
              <li className="flex items-center gap-2">
                <span className="text-orange text-xl">✓</span> Get expert counseling and support.
              </li>
            </ul>
            <p className="font-body text-xs text-navy-light">
              <span className="font-bold">Note:</span> Creating an account is free and won&apos;t result in unsolicited calls. You&apos;ll only be contacted after submitting an enquiry form.
            </p>
          </div>
          {/* Right Side: Form */}
          <div className="w-full lg:w-3/5 px-8 py-12 flex flex-col justify-center">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-body text-navy font-semibold mb-2">* First name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First name"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 font-body text-navy-light focus:outline-none focus:border-orange"
                  />
                </div>
                <div>
                  <label className="block font-body text-navy font-semibold mb-2">* Last name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last name"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 font-body text-navy-light focus:outline-none focus:border-orange"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-body text-navy font-semibold mb-2">Dial code</label>
                  <select
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 font-body text-navy-light focus:outline-none focus:border-orange"
                  >
                    {countryCodes.map((code) => (
                      <option key={code} value={code}>{code}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block font-body text-navy font-semibold mb-2">* Mobile number</label>
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="Mobile number"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 font-body text-navy-light focus:outline-none focus:border-orange"
                  />
                </div>
              </div>
              <div>
                <label className="block font-body text-navy font-semibold mb-2">* Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 font-body text-navy-light focus:outline-none focus:border-orange"
                />
              </div>
              <div>
                <label className="block font-body text-navy font-semibold mb-2">* Create a password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 font-body text-navy-light focus:outline-none focus:border-orange pr-12 [&::-ms-reveal]:hidden [&::-ms-clear]:hidden"
                    style={{ WebkitTextSecurity: showPassword ? 'none' : 'disc' } as React.CSSProperties}
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-navy-light"
                    onClick={() => setShowPassword((prev) => !prev)}
                    tabIndex={-1}
                  >
                    {showPassword ? (
                      <span className="fa fa-eye"></span>
                    ) : (
                      <span className="fa fa-eye-slash"></span>
                    )}
                  </button>
                </div>
              </div>
              <div className="space-y-3">
                <label className="flex items-center gap-2 font-body text-navy-light text-sm">
                  <input
                    type="checkbox"
                    name="agreeTerms"
                    checked={formData.agreeTerms}
                    onChange={handleChange}
                    required
                    className="accent-orange w-4 h-4"
                  />
                  I agree to Bridge Bound Academics <Link href="#" className="text-blue-600 underline">Terms</Link> and <Link href="#" className="text-blue-600 underline">privacy policy</Link> *
                </label>
                <label className="flex items-center gap-2 font-body text-navy-light text-sm">
                  <input
                    type="checkbox"
                    name="contactMe"
                    checked={formData.contactMe}
                    onChange={handleChange}
                    className="accent-orange w-4 h-4"
                  />
                  Please contact me by phone, email or SMS to assist with my enquiry *
                </label>
                <label className="flex items-center gap-2 font-body text-navy-light text-sm">
                  <input
                    type="checkbox"
                    name="receiveUpdates"
                    checked={formData.receiveUpdates}
                    onChange={handleChange}
                    className="accent-orange w-4 h-4"
                  />
                  I agree to receive occasional communications from Bridge Bound Academics about courses, offers and other marketing information
                </label>
              </div>
              <button
                type="submit"
                className="w-full py-4 rounded-full bg-orange text-white font-bold font-body text-lg hover:bg-orange-dark transition-all mt-2"
              >
                Create an account
              </button>
            </form>
            <div className="mt-6 text-center font-body text-navy-light text-base">
              Already have an account?{' '}
              <Link href="/sign-in" className="text-orange hover:text-orange-dark font-bold">Sign in</Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default SignInPage;
