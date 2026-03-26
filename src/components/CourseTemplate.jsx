
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { CheckCircle2, ChevronRight, PlayCircle, BookOpen, Clock, Shield, Star, Users, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useToast } from '@/hooks/use-toast';

const CourseTemplate = ({ course }) => {
  const { toast } = useToast();

  if (!course) return <div>Course not found</div>;

  const handleEnroll = () => {
    toast({
      title: "Enrollment Initiated",
      description: "For manual enrollment, contact us at info@clouditary.com or call 8287791155.",
    });
  };

  const getProviderColor = (provider) => {
    switch (provider) {
      case 'AWS': return 'bg-orange-500/20 text-orange-400';
      case 'Azure': return 'bg-blue-500/20 text-blue-400';
      case 'GCP': return 'bg-green-500/20 text-green-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  const getSidebarColor = (provider) => {
    switch (provider) {
      case 'AWS': return 'bg-orange-50 text-orange-700';
      case 'Azure': return 'bg-blue-50 text-blue-700';
      case 'GCP': return 'bg-green-50 text-green-700';
      default: return 'bg-gray-50 text-gray-700';
    }
  };

  return (
    <div className="pt-20 bg-gray-50 min-h-screen pb-20">
      <Helmet>
        <title>{course.title} | Clouditary</title>
        <meta name="description" content={course.description} />
      </Helmet>

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center flex-wrap text-sm text-gray-500">
            <Link to="/" className="hover:text-[#0EA5E9]">Home</Link>
            <ChevronRight className="h-4 w-4 mx-2 flex-shrink-0" />
            <Link to="/courses" className="hover:text-[#0EA5E9]">Courses</Link>
            <ChevronRight className="h-4 w-4 mx-2 flex-shrink-0" />
            <Link to={`/courses/${course.provider.toLowerCase()}`} className="hover:text-[#0EA5E9]">{course.provider}</Link>
            <ChevronRight className="h-4 w-4 mx-2 flex-shrink-0" />
            <span className="text-[#1E293B] font-medium truncate">{course.title}</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-[#1E293B] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <span className={`inline-block px-3 py-1 font-bold rounded-full text-sm mb-6 ${getProviderColor(course.provider)}`}>
              {course.provider} Certification
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{course.title}</h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">{course.description}</p>
            
            <div className="flex items-center gap-6 mb-10">
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span className="font-bold text-lg">{course.rating}/5</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-gray-400" />
                <span className="text-gray-300">{course.learners} Learners</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" onClick={handleEnroll} className="bg-[#0EA5E9] hover:bg-[#0284C7] text-white font-bold px-8 h-12 text-lg rounded-xl">Enroll Now</Button>
              <Button size="lg" variant="outline" onClick={() => window.location.href = 'mailto:info@clouditary.com'} className="border-white/20 hover:bg-white/10 text-white font-bold px-8 h-12 text-lg rounded-xl backdrop-blur-sm">Contact Us</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Main Content */}
            <div className="w-full lg:w-2/3 space-y-12">
              
              {/* Overview */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <h2 className="text-2xl font-bold text-[#1E293B] mb-4">Course Overview</h2>
                <p className="text-gray-600 mb-4">{course.overview}</p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3"><CheckCircle2 className="h-6 w-6 text-[#10B981] shrink-0" /> Master concepts aligned with official exam guides</li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="h-6 w-6 text-[#10B981] shrink-0" /> Hands-on experience with real cloud environments</li>
                </ul>
              </div>

              {/* Key Features */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <h2 className="text-2xl font-bold text-[#1E293B] mb-6">Key Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {course.keyFeatures?.map((feature, i) => (
                    <div key={i} className="flex gap-4">
                      {i === 0 && <PlayCircle className="h-8 w-8 text-[#0EA5E9]" />}
                      {i === 1 && <BookOpen className="h-8 w-8 text-[#0EA5E9]" />}
                      {i === 2 && <Clock className="h-8 w-8 text-[#0EA5E9]" />}
                      {i === 3 && <MessageCircle className="h-8 w-8 text-[#0EA5E9]" />}
                      <div>
                        <h4 className="font-bold text-gray-800">{feature.title}</h4>
                        <p className="text-sm text-gray-600">{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Audience & Prerequisites */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Who is this for?</h3>
                  <ul className="space-y-2 text-gray-600">
                    {course.whoIsThisFor?.map((item, i) => (
                      <li key={i} className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div> {item}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Prerequisites</h3>
                  <ul className="space-y-2 text-gray-600">
                    {course.prerequisites?.map((item, i) => (
                      <li key={i} className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div> {item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Skills */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <h2 className="text-2xl font-bold text-[#1E293B] mb-6">Skills You'll Gain</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {course.skillsYouWillGain?.map((skill, i) => (
                    <div key={i} className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg border border-gray-100">
                      <Shield className="h-5 w-5 text-[#10B981]" />
                      <span className="font-medium text-gray-700">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Exam Skills */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <h2 className="text-2xl font-bold text-[#1E293B] mb-6">Exam Objectives Covered</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {course.examSkills?.map((skill, i) => (
                    <div key={i} className="flex items-center gap-3 p-2">
                      <CheckCircle2 className="h-5 w-5 text-[#0EA5E9]" />
                      <span className="text-gray-600">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Labs */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <h2 className="text-2xl font-bold text-[#1E293B] mb-4">Labs & Practice Tests</h2>
                <p className="text-gray-600">{course.labsAndTests}</p>
              </div>

              {/* FAQ */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <h2 className="text-2xl font-bold text-[#1E293B] mb-6">Frequently Asked Questions</h2>
                <Accordion type="single" collapsible className="w-full">
                  {course.faqItems?.map((faq, i) => (
                    <AccordionItem key={i} value={`item-${i}`}>
                      <AccordionTrigger className="text-left font-bold text-gray-800">{faq.q}</AccordionTrigger>
                      <AccordionContent className="text-gray-600">{faq.a}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

            </div>

            {/* Sticky Sidebar */}
            <div className="w-full lg:w-1/3">
              <div className="sticky top-28 bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
                <div className="text-4xl font-bold text-[#1E293B] mb-6">{course.price}</div>
                <Button className="w-full bg-[#10B981] hover:bg-[#059669] text-white font-bold h-14 text-lg rounded-xl mb-4" onClick={handleEnroll}>Enroll Now</Button>
                <p className="text-center text-sm text-gray-500 mb-8">Questions? Call us at <a href="tel:8287791155" className="text-[#0EA5E9] font-medium">8287791155</a></p>
                
                <div className="space-y-4 mb-8">
                  <h4 className="font-bold text-gray-800 uppercase text-sm tracking-wider border-b pb-2">Course Includes:</h4>
                  <div className="flex items-center gap-3 text-gray-600"><Clock className="h-5 w-5 text-[#0EA5E9]" /> <span className="font-medium">Duration:</span> {course.duration}</div>
                  <div className="flex items-center gap-3 text-gray-600"><Star className="h-5 w-5 text-[#0EA5E9]" /> <span className="font-medium">Level:</span> {course.level}</div>
                  <div className="flex items-center gap-3 text-gray-600"><PlayCircle className="h-5 w-5 text-[#0EA5E9]" /> <span>Video Lectures & Labs</span></div>
                  <div className="flex items-center gap-3 text-gray-600"><MessageCircle className="h-5 w-5 text-[#0EA5E9]" /> <span>24/7 Support</span></div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseTemplate;
