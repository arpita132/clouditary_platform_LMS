
import React from 'react';
import { Helmet } from 'react-helmet';
import { Mail, Phone } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-gray-50 flex flex-col items-center">
      <Helmet>
        <title>Contact Us - Clouditary</title>
        <meta name="description" content="Contact Clouditary for inquiries about our IT training, Cloud Computing courses, and technology solutions." />
      </Helmet>

      <div className="container mx-auto px-4 max-w-3xl flex-grow flex flex-col justify-center">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1E293B] mb-4">Contact <span className="text-[#0EA5E9]">Us</span></h1>
          <p className="text-lg text-gray-600">
            We're here to help you advance your IT career. Reach out to us for any inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Email Contact */}
          <a 
            href="mailto:info@clouditary.com" 
            className="group bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-[#0EA5E9]/30 transition-all flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 rounded-full bg-[#0EA5E9]/10 flex items-center justify-center mb-6 group-hover:bg-[#0EA5E9] transition-colors">
              <Mail className="w-8 h-8 text-[#0EA5E9] group-hover:text-white transition-colors" />
            </div>
            <h2 className="text-xl font-bold text-[#1E293B] mb-2">Email Us</h2>
            <p className="text-gray-500 mb-4 text-sm">Drop us a line anytime</p>
            <span className="text-[#0EA5E9] font-medium text-lg group-hover:underline">
              info@clouditary.com
            </span>
          </a>

          {/* Phone Contact */}
          <a 
            href="tel:+918287791155" 
            className="group bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-[#10B981]/30 transition-all flex flex-col items-center text-center touch-target"
          >
            <div className="w-16 h-16 rounded-full bg-[#10B981]/10 flex items-center justify-center mb-6 group-hover:bg-[#10B981] transition-colors">
              <Phone className="w-8 h-8 text-[#10B981] group-hover:text-white transition-colors" />
            </div>
            <h2 className="text-xl font-bold text-[#1E293B] mb-2">Call / WhatsApp</h2>
            <p className="text-gray-500 mb-4 text-sm">Speak with our advisors</p>
            <span className="text-[#10B981] font-medium text-lg group-hover:underline">
              +91 8287791155
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
