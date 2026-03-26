
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { CheckCircle2, ChevronRight, PlayCircle, BookOpen, Clock, Shield, Star, Users, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useToast } from '@/hooks/use-toast';

const CourseDetailPage = () => {
  const { toast } = useToast();

  const handleEnroll = () => {
    toast({
      title: "Enrollment Coming Soon",
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
      <Helmet>
        <title>AWS Certified Cloud Practitioner Training | Clouditary</title>
        <meta name="description" content="Master the fundamentals of AWS with our comprehensive AWS Certified Cloud Practitioner course. Hands-on labs and practice exams included." />
      </Helmet>

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center text-sm text-gray-500">
            <Link to="/" className="hover:text-[#0EA5E9]">Home</Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <button onClick={handleEnroll} className="hover:text-[#0EA5E9]">Courses</button>
            <ChevronRight className="h-4 w-4 mx-2" />
            <button onClick={handleEnroll} className="hover:text-[#0EA5E9]">AWS</button>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="text-[#1E293B] font-medium">AWS Certified Cloud Practitioner</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-[#1E293B] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <span className="inline-block px-3 py-1 bg-orange-500/20 text-orange-400 font-bold rounded-full text-sm mb-6">AWS Certification</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">AWS Certified Cloud Practitioner (CLF-C02)</h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">The ultimate beginner-friendly course to start your AWS cloud journey. Learn cloud concepts, core services, security, architecture, and pricing.</p>
            
            <div className="flex items-center gap-6 mb-10">
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span className="font-bold text-lg">4.8/5</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-gray-400" />
                <span className="text-gray-300">15,200+ Learners</span>
              </div>
            </div>

            <div className="flex gap-4">
              <Button size="lg" onClick={handleEnroll} className="bg-[#0EA5E9] hover:bg-[#0284C7] text-white font-bold px-8 h-12 text-lg rounded-xl">Enroll Now</Button>
              <Button size="lg" variant="outline" onClick={handleEnroll} className="border-white/20 hover:bg-white/10 text-white font-bold px-8 h-12 text-lg rounded-xl backdrop-blur-sm">Contact Us</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Main Content */}
            <div className="w-full lg:w-2/3 space-y-12">
              
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-[#1E293B] mb-4">Course Overview</h2>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3"><CheckCircle2 className="h-6 w-6 text-[#10B981] shrink-0" /> Entry-level certification ideal for non-technical or beginner IT professionals</li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="h-6 w-6 text-[#10B981] shrink-0" /> Comprehensive coverage of AWS fundamentals and cloud computing concepts</li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="h-6 w-6 text-[#10B981] shrink-0" /> Deep dive into core AWS services (EC2, S3, RDS, VPC)</li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="h-6 w-6 text-[#10B981] shrink-0" /> Understanding AWS pricing models and support plans</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-[#1E293B] mb-6">Key Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex gap-4"><PlayCircle className="h-8 w-8 text-[#0EA5E9]" /><div><h4 className="font-bold">Video Lectures</h4><p className="text-sm text-gray-600">15+ hours of content</p></div></div>
                  <div className="flex gap-4"><BookOpen className="h-8 w-8 text-[#0EA5E9]" /><div><h4 className="font-bold">Practice Exams</h4><p className="text-sm text-gray-600">3 full-length tests</p></div></div>
                  <div className="flex gap-4"><Clock className="h-8 w-8 text-[#0EA5E9]" /><div><h4 className="font-bold">Hands-on Labs</h4><p className="text-sm text-gray-600">20+ practical exercises</p></div></div>
                  <div className="flex gap-4"><MessageCircle className="h-8 w-8 text-[#0EA5E9]" /><div><h4 className="font-bold">24/7 Support</h4><p className="text-sm text-gray-600">Instructor Q&A access</p></div></div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold mb-4">Who is this for?</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div> IT Beginners</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div> Sales & Marketing in Tech</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div> Project Managers</li>
                  </ul>
                </div>
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold mb-4">Prerequisites</h3>
                  <p className="text-gray-600 mb-4">No prior AWS experience is required. Basic IT knowledge is helpful but not mandatory.</p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div> Basic computer skills</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div> Eagerness to learn cloud</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-[#1E293B] mb-6">Skills You'll Gain</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {['AWS Cloud Concepts', 'Security & Compliance', 'Core AWS Services', 'Billing & Pricing', 'Cloud Architecture Basics', 'Deployment Models'].map((skill, i) => (
                    <div key={i} className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg border border-gray-100">
                      <Shield className="h-5 w-5 text-[#10B981]" />
                      <span className="font-medium text-gray-700">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-[#1E293B] mb-6">Frequently Asked Questions</h2>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-left font-bold text-gray-800">Do I need coding experience?</AccordionTrigger>
                    <AccordionContent className="text-gray-600">No, the Cloud Practitioner exam does not require any programming knowledge. It focuses on conceptual understanding of cloud services.</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-left font-bold text-gray-800">Is the exam fee included?</AccordionTrigger>
                    <AccordionContent className="text-gray-600">No, the AWS certification exam fee ($100 USD) must be paid directly to AWS when you schedule your test.</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-left font-bold text-gray-800">How long do I have access?</AccordionTrigger>
                    <AccordionContent className="text-gray-600">You get lifetime access to the course content, including all future updates made to match new exam versions.</AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

            </div>

            {/* Sticky Sidebar */}
            <div className="w-full lg:w-1/3">
              <div className="sticky top-28 bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
                <div className="text-4xl font-bold text-[#1E293B] mb-6">$99 <span className="text-lg text-gray-400 line-through font-normal ml-2">$199</span></div>
                <Button className="w-full bg-[#10B981] hover:bg-[#059669] text-white font-bold h-14 text-lg rounded-xl mb-4" onClick={handleEnroll}>Enroll Now</Button>
                <p className="text-center text-sm text-gray-500 mb-8">30-Day Money-Back Guarantee</p>
                
                <div className="space-y-4 mb-8">
                  <h4 className="font-bold text-gray-800 uppercase text-sm tracking-wider">Course Includes:</h4>
                  <div className="flex items-center gap-3 text-gray-600"><Clock className="h-5 w-5 text-[#0EA5E9]" /> <span>Duration: 6 weeks</span></div>
                  <div className="flex items-center gap-3 text-gray-600"><Star className="h-5 w-5 text-[#0EA5E9]" /> <span>Level: Beginner</span></div>
                  <div className="flex items-center gap-3 text-gray-600"><PlayCircle className="h-5 w-5 text-[#0EA5E9]" /> <span>Video Lectures & Labs</span></div>
                  <div className="flex items-center gap-3 text-gray-600"><MessageCircle className="h-5 w-5 text-[#0EA5E9]" /> <span>24/7 Support</span></div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1E293B] mb-8">Related AWS Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "AWS Solutions Architect Associate", price: "$149", rating: "4.9" },
              { title: "AWS Developer Associate", price: "$129", rating: "4.7" },
              { title: "AWS SysOps Administrator", price: "$139", rating: "4.8" }
            ].map((c, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-shadow">
                <span className="px-3 py-1 bg-orange-100 text-orange-700 text-xs font-bold rounded-full mb-4 inline-block">AWS</span>
                <h3 className="font-bold text-lg mb-2">{c.title}</h3>
                <div className="flex justify-between items-center mt-4">
                  <span className="font-bold text-[#1E293B]">{c.price}</span>
                  <Button variant="outline" size="sm" onClick={handleEnroll}>View</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseDetailPage;
