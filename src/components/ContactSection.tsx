import React, { FormEvent, useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface Office {
  id: number;
  location: string;
  address: string;
  phone: string;
}

const ContactSection: React.FC = () => {
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
    name: "",
    email: "",
    message: "",
  });

  const offices: Office[] = [
    {
      id: 1,
      location: "Taraba State",
      address: "No. 1 Trinidax Road, Roadblock Jalingo, Taraba State",
      phone: "+2348133758770",
    },
    {
      id: 2,
      location: "Ebonyi State",
      address:
        "95 Democracy Estate Abakaliki, Flat 1 F & C Quarters, Amankwo, Afikpo, Ebonyi State",
      phone: "+2348131137854",
    },
    {
      id: 3,
      location: "Anambra State",
      address: "23 New market Road Onitsha, Anambra State",
      phone: "+2348029487353",
    },
    {
      id: 4,
      location: "Abuja / United Kingdom",
      address: "Space Acero, No. 1 Concourse Way Sheffield, UK",
      phone: "+2348036734634",
    },
  ];

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-20 px-[5%] bg-white" id="contact">
      <h3 className="font-body text-orange text-sm font-semibold tracking-wider text-center mb-4">
        CONTACT US
      </h3>
      <h1 className="font-heading text-4xl lg:text-5xl font-bold text-center text-navy mb-8">
        Get in Touch
      </h1>
      <h4 className="font-body text-base lg:text-lg text-center text-navy-light max-w-3xl mx-auto mb-16 leading-relaxed">
        Ready to take the next step? Our friendly team is here to answer your questions, provide expert advice, and support you on your study abroad journey. With offices in Nigeria and the UK, Bridge Bound Academy is committed to helping students worldwide achieve their dreams—reach out today and let’s build your future together.
      </h4>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="contact-offices grid grid-cols-1 md:grid-cols-2 gap-6">
          {offices.map((office) => (
            <div 
              className="bg-cream p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-transparent hover:border-orange"
              key={office.id}
            >
              <h4 className="font-heading text-lg font-bold text-orange mb-4 flex items-center gap-2">
                <i className="fa fa-map-marker" aria-hidden="true"></i>
                {office.location}
              </h4>
              <div className="space-y-3 text-navy-light font-body">
                <div className="flex items-start gap-2">
                  <i className="fa fa-home mt-1 text-orange" aria-hidden="true"></i>
                  <p className="text-sm leading-relaxed">{office.address}</p>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fa fa-phone text-orange" aria-hidden="true"></i>
                  <p className="text-sm">{office.phone}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="contact-form bg-cream p-8 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="font-body w-full px-4 py-3 border-2 border-orange/30 rounded-md focus:border-orange focus:outline-none transition-colors bg-white"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="font-body w-full px-4 py-3 border-2 border-orange/30 rounded-md focus:border-orange focus:outline-none transition-colors bg-white"
            />
            <textarea
              name="message"
              cols={30}
              rows={6}
              placeholder="Your Message Here"
              value={formData.message}
              onChange={handleChange}
              className="font-body w-full px-4 py-3 border-2 border-orange/30 rounded-md focus:border-orange focus:outline-none transition-colors resize-none bg-white"
            ></textarea>

            <button 
              className="w-full py-4 px-8 text-base font-bold text-white bg-orange border-2 border-orange rounded-sm hover:bg-orange-dark hover:border-orange-dark transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              type="submit"
            >
              Send Message
              <i className="fa fa-check-square-o" aria-hidden="true"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;