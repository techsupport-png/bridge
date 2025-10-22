import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SignedIn, SignedOut, RedirectToSignIn, useUser } from "@clerk/nextjs";

const Dashboard: React.FC = () => {
  const { user } = useUser();

  return (
    <>
      <Head>
        <title>Dashboard - Bridge Bound Academics</title>
      </Head>
      <Header />
      <main className="min-h-screen bg-gray-100 pt-24 py-10">
        <SignedIn>
          <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow p-8">
            <h1 className="font-heading text-3xl font-bold text-navy mb-2">Welcome</h1>
            <p className="font-body text-navy-light">Signed in as <span className="font-bold text-orange">{user?.primaryEmailAddress?.emailAddress}</span></p>
          </div>
        </SignedIn>
        <SignedOut>
          <div className="flex items-center justify-center">
            <RedirectToSignIn />
          </div>
        </SignedOut>
      </main>
      <Footer />
    </>
  );
};

export default Dashboard;
