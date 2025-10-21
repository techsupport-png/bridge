import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SignInPage: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle sign in logic here
    console.log("Sign in:", formData);
  };

  return (
    <>
      <Head>
        <title>Sign In - Bridge Bound Academics</title>
        <meta name="description" content="Sign in to your Bridge Bound Academics account" />
      </Head>
      <Header />
      <main className="min-h-screen bg-gray-100 flex items-center justify-center py-16 pt-24">
        <div className="bg-white rounded-3xl shadow-2xl flex flex-col lg:flex-row w-full max-w-5xl overflow-hidden">
          {/* Left Side: Illustration */}
          <div className="hidden lg:flex flex-col justify-center items-center bg-gradient-to-br from-orange via-orange-light to-orange-dark px-10 py-12 w-2/5 relative">
            <div className="absolute top-0 left-0 w-64 h-64 bg-orange-dark rounded-full opacity-30 -translate-x-20 -translate-y-20"></div>
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-green-500 rounded-full opacity-40 translate-x-16 translate-y-16"></div>
            <div className="absolute bottom-20 left-10 w-56 h-56 bg-blue-600 rounded-full opacity-50"></div>
            <div className="relative z-10">
              <Image 
                src="/img/signin-graphic.png" 
                alt="Welcome back" 
                width={288}
                height={288}
                className="w-72 h-72 object-cover rounded-xl"
                onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          </div>

          {/* Right Side: Sign In Form */}
          <div className="w-full lg:w-3/5 px-8 lg:px-16 py-12 flex flex-col justify-center">
            <div className="max-w-md mx-auto w-full">
              <h1 className="font-heading text-4xl font-bold text-navy mb-3 text-center">
                Sign in
              </h1>
              <p className="font-body text-navy-light text-center mb-8">
                Welcome back! Please enter your details.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email */}
                <div>
                  <label className="block font-body text-navy font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 font-body text-navy-light focus:outline-none focus:border-orange transition-colors"
                  />
                </div>

                {/* Password */}
                <div>
                  <label className="block font-body text-navy font-semibold mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Enter your password"
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 font-body text-navy-light focus:outline-none focus:border-orange transition-colors pr-12 [&::-ms-reveal]:hidden [&::-ms-clear]:hidden"
                      style={{ WebkitTextSecurity: showPassword ? 'none' : 'disc' } as React.CSSProperties}
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-navy-light hover:text-navy"
                      onClick={() => setShowPassword((prev) => !prev)}
                      tabIndex={-1}
                    >
                      {showPassword ? (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>

                {/* Forgot Password */}
                <div className="text-right">
                  <Link 
                    href="/forgot-password" 
                    className="font-body text-sm text-orange hover:text-orange-dark font-semibold"
                  >
                    Forgot password?
                  </Link>
                </div>

                {/* Sign In Button */}
                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-orange text-white font-bold font-body text-lg hover:bg-orange-dark transition-all shadow-lg hover:shadow-xl"
                >
                  Sign in
                </button>
              </form>

              {/* Sign Up Link */}
              <div className="mt-8 text-center font-body text-navy-light">
                Don&apos;t have an account?{' '}
                <Link href="/sign-up" className="text-orange hover:text-orange-dark font-bold">
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default SignInPage;
