import React from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ThankYouPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Thank You - Bridge Bound Academy</title>
        <meta
          name="description"
          content="Thank you for submitting your details. We'll contact you soon!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />


      <main className="min-h-screen bg-gradient-to-br from-cream-light to-white pt-24 pb-20">
  <div className="max-w-6xl mx-auto px-[5%] py-16">
          {/* Success Banner */}
          <div className="bg-orange rounded-lg p-8 mb-8 shadow-lg">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <h1 className="font-heading text-3xl font-bold mb-3 text-white">
                  Thank you for submitting your details!
                </h1>
                <p className="font-body text-lg leading-relaxed text-white">
                  Your study abroad journey is just a step away. Please be available to take a call from <span className=" text-white">01244861306</span>. See you soon :)
                </p>
              </div>
            </div>
          </div>

          {/* What happens next */}
          <div className="bg-white rounded-lg p-8 shadow-lg mb-8">
            <h2 className="font-heading text-2xl font-bold text-navy mb-4">
              What happens next:
            </h2>
            <p className="font-body text-navy-light leading-relaxed mb-6">
              Enquiry success email has been sent to your given mail ID. Please check and read the content. You will get a phone call from <span className="font-bold text-orange">Bridge Bound Academics counsellor</span>. Your given phone number at the time of enquiry will be used to call you.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/sign-up"
                className="inline-block py-4 px-8 text-base font-bold text-white bg-orange rounded-full hover:bg-orange-dark transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Complete your profile
              </Link>
              <Link
                href="/"
                className="inline-block py-4 px-8 text-base font-bold text-navy bg-white border-2 border-navy rounded-full hover:bg-orange/10 transition-all duration-300"
              >
                Continue researching
              </Link>
            </div>
          </div>

          {/* More info for your support */}
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h2 className="font-heading text-2xl font-bold text-navy mb-4">
              More info for your support:
            </h2>
            <p className="font-body text-navy-light leading-relaxed">
              Search for locate an <span className="font-bold text-orange">Bridge Bound Academics office</span> near you. Download <span className="font-bold text-orange">Bridge Bound Academics Live</span> mobile app: Bridge Bound Academics Live is the express route to study abroad in your dream course. Bridge Bound Academics Live is a free app that combines data and human expertise to give you the best chance of getting into your ideal course. Our support does not end with your acceptance letter. We will be there to assist you even after you reach your new country. Come, see us - It&apos;s free!
            </p>
          </div>

          {/* Additional Actions */}
          <div className="mt-8 text-center">
            <p className="font-body text-navy-light mb-4">
              Need immediate assistance?
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-block py-3 px-6 text-base font-bold text-orange border-2 border-orange rounded-full hover:bg-orange-dark hover:text-white transition-all duration-300"
              >
                Contact Us
              </Link>
              <Link
                href="/faq"
                className="inline-block py-3 px-6 text-base font-bold text-navy border-2 border-navy rounded-full hover:bg-navy-dark hover:text-white transition-all duration-300"
              >
                View FAQs
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default ThankYouPage;
