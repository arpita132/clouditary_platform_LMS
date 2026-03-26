
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/lib/customSupabaseClient';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const courses = [
    { value: 'AWS', label: 'AWS' },
    { value: 'Azure', label: 'Azure' },
    { value: 'GCP', label: 'GCP' },
    { value: 'Data Engineering', label: 'Data Engineering' },
    { value: 'AI/ML', label: 'AI/ML' },
  ];

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10,}$/.test(formData.phone.replace(/[\s-]/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number (at least 10 digits)';
    }

    if (!formData.course) newErrors.course = 'Please select a course of interest';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleCourseChange = (value) => {
    setFormData((prev) => ({ ...prev, course: value }));
    if (errors.course) setErrors((prev) => ({ ...prev, course: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // 1. Save to Supabase
      const { error: dbError } = await supabase.from('enquiry_forms').insert([{
        student_name: formData.name,
        email: formData.email,
        phone_number: formData.phone,
        course_interest: formData.course,
        message: formData.message
      }]);

      if (dbError) throw dbError;

      // 2. Call Edge Function (Emails)
      const { error: fnError } = await supabase.functions.invoke('send-enquiry-confirmation-emails', {
        body: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          course_interest: formData.course
        }
      });
      
      if (fnError) {
        console.error("Function error:", fnError);
        // Continue anyway since DB succeeded
      }

      // 3. Submit to Google Form
      try {
        const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLScK6PBJCGAMDZmB9rjtBOsCWufuUAgYIKov_xwgM3NFovt3mw/formResponse';
        const googleFormData = new FormData();
        
        googleFormData.append('entry.1000001', formData.name);      
        googleFormData.append('entry.1000002', formData.email);     
        googleFormData.append('entry.1000003', formData.phone);     
        googleFormData.append('entry.1000004', formData.course);    
        if (formData.message) {
          googleFormData.append('entry.1000005', formData.message); 
        }

        await fetch(googleFormUrl, {
          method: 'POST',
          mode: 'no-cors',
          body: googleFormData
        });
        
        console.log("Google Form submitted successfully");
      } catch (gfError) {
        console.error("Google Form submission error:", gfError);
      }

      toast({
        title: 'Thank you! We\'ll contact you soon.',
        description: "Your enquiry has been successfully submitted.",
      });

      setFormData({ name: '', email: '', phone: '', course: '', message: '' });
      setErrors({});
    } catch (error) {
      console.error('Error submitting enquiry:', error);
      toast({
        variant: "destructive",
        title: "Submission Failed",
        description: error.message || "There was an error submitting your enquiry. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'info@clouditary.com',
      href: 'mailto:info@clouditary.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '8287791155',
      href: 'tel:8287791155',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'India',
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about our courses? We're here to help you start your cloud computing journey
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="order-2 lg:order-1">
            <div className="bg-white rounded-2xl shadow-sm p-8 space-y-8 border border-gray-100 h-full">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <info.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-600">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}

              <div className="pt-8 border-t border-gray-100">
                <p className="text-gray-900 font-semibold mb-4">Office Hours</p>
                <div className="space-y-2 text-gray-600">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Course Enquiry</h3>
              <div className="space-y-5">
                <div>
                  <Label htmlFor="name" className="text-gray-900 font-medium">
                    Student Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className={`mt-2 bg-white text-gray-900 border ${errors.name ? 'border-red-500 focus-visible:ring-red-500' : 'border-gray-200'}`}
                    placeholder="John Doe"
                    disabled={isSubmitting}
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <Label htmlFor="email" className="text-gray-900 font-medium">
                    Email Address <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`mt-2 bg-white text-gray-900 border ${errors.email ? 'border-red-500 focus-visible:ring-red-500' : 'border-gray-200'}`}
                    placeholder="info@clouditary.com"
                    disabled={isSubmitting}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <Label htmlFor="phone" className="text-gray-900 font-medium">
                    Phone Number <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`mt-2 bg-white text-gray-900 border ${errors.phone ? 'border-red-500 focus-visible:ring-red-500' : 'border-gray-200'}`}
                    placeholder="8287791155"
                    disabled={isSubmitting}
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <Label htmlFor="course" className="text-gray-900 font-medium">
                    Course Interest <span className="text-red-500">*</span>
                  </Label>
                  <div className="mt-2">
                    <Select value={formData.course} onValueChange={handleCourseChange} disabled={isSubmitting}>
                      <SelectTrigger className={`w-full bg-white text-gray-900 border ${errors.course ? 'border-red-500 focus:ring-red-500' : 'border-gray-200'}`}>
                        <SelectValue placeholder="Select a course" />
                      </SelectTrigger>
                      <SelectContent>
                        {courses.map((course) => (
                          <SelectItem key={course.value} value={course.value}>
                            {course.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  {errors.course && <p className="text-red-500 text-sm mt-1">{errors.course}</p>}
                </div>

                <div>
                  <Label htmlFor="message" className="text-gray-900 font-medium">
                    Message / Comments
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="mt-2 bg-white text-gray-900 border-gray-200 resize-none"
                    placeholder="Tell us about your background or specific requirements..."
                    disabled={isSubmitting}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#0EA5E9] hover:bg-[#0284C7] text-white py-6 text-lg rounded-xl shadow-md hover:shadow-lg transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting Enquiry...' : 'Submit Enquiry'}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
