import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SignIn } from "@clerk/nextjs";

const SignInPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Sign In - Bridge Bound Academics</title>
        <meta name="description" content="Sign in to your Bridge Bound Academics account" />
      </Head>
      <Header />
      <main className="min-h-screen bg-gray-100 flex items-center justify-center py-16 pt-24">
        <div className="bg-white rounded-3xl shadow-2xl w-full max-w-3xl overflow-hidden flex justify-center px-6 py-10">
          <SignIn
            appearance={{ variables: { colorPrimary: "#ff6b35" } }}
            path="/sign-in"
            routing="path"
            signUpUrl="/sign-up"
          />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default SignInPage;
