
import React from 'react';
import { Helmet } from 'react-helmet';
import { Globe, Users, BookOpen, Award, Briefcase, Target, Shield, Cpu } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-gray-50">
      <Helmet>
        <title>About Us - Clouditary</title>
        <meta name="description" content="Learn about Clouditary, a global IT training and technology solutions company specializing in Cloud Training, Data Engineering, and Cyber Security." />
      </Helmet>

      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1E293B] mb-4">About <span className="text-[#0EA5E9]">Clouditary</span></h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Empowering professionals globally through industry-leading IT training and technology solutions.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 mb-12">
          <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
            <p>
              Clouditary is a premier global IT training and technology solutions company committed to bridging the gap between talent and opportunity. We specialize in comprehensive, industry-aligned training programs focusing on Cloud Computing (AWS, Azure, GCP), Data Engineering, Cyber Security, and IT Infrastructure.
            </p>
            <p>
              With a strong global footprint, we successfully deliver high-quality training and consulting services across the United States, UAE, Canada, United Kingdom, the Middle East, Spain, Portugal, and various African nations. Our international presence allows us to understand diverse market needs and tailor our programs to meet global industry standards.
            </p>
            <p>
              At Clouditary, we believe in learning by doing. Our curriculum goes beyond theoretical knowledge, emphasizing rigorous hands-on training, real-world project execution, and practical problem-solving. We are dedicated to your success, offering extensive career mentorship and robust job support to ensure our graduates are not just certified, but truly industry-ready.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-[#1E293B] mb-8 text-center">Why Choose Clouditary</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Globe, title: "Global Reach", desc: "Training delivery across North America, Europe, Middle East, and Africa.", color: "text-[#0EA5E9]", bg: "bg-[#0EA5E9]/10" },
              { icon: Users, title: "Expert Instructors", desc: "Learn from industry veterans with years of practical, real-world experience.", color: "text-[#10B981]", bg: "bg-[#10B981]/10" },
              { icon: BookOpen, title: "Hands-on Training", desc: "Focus on practical labs and real-world scenarios, not just theory.", color: "text-purple-500", bg: "bg-purple-500/10" },
              { icon: Briefcase, title: "Career Support", desc: "Comprehensive guidance including resume building and interview prep.", color: "text-orange-500", bg: "bg-orange-500/10" },
              { icon: Award, title: "Recognized Certifications", desc: "Curriculum aligned with top vendor certifications (AWS, Microsoft, Google).", color: "text-blue-600", bg: "bg-blue-600/10" },
              { icon: Target, title: "Mentorship Programs", desc: "1-on-1 guidance to help you navigate your IT career path.", color: "text-pink-500", bg: "bg-pink-500/10" },
              { icon: Shield, title: "Job Placement Assistance", desc: "Active support in connecting you with our global employer network.", color: "text-teal-500", bg: "bg-teal-500/10" },
              { icon: Cpu, title: "Real-world Projects", desc: "Build a strong portfolio by working on industry-relevant case studies.", color: "text-indigo-500", bg: "bg-indigo-500/10" }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className={`w-12 h-12 rounded-lg ${feature.bg} flex items-center justify-center mb-4`}>
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-bold text-[#1E293B] mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
