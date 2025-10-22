import React from "react";
import Head from "next/head";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SignUp } from "@clerk/nextjs";

const SignUpPage: React.FC = () => {
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
          {/* Right Side: Clerk Sign Up */}
          <div className="w-full lg:w-3/5 px-8 py-12 flex justify-center items-center">
            <SignUp
              appearance={{ variables: { colorPrimary: "#ff6b35" } }}
              path="/sign-up"
              routing="path"
              signInUrl="/sign-in"
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default SignUpPage;
