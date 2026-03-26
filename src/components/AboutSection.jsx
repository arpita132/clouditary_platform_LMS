
import React from 'react';
import { Target, Award, Users, TrendingUp } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To empower professionals with cutting-edge cloud computing skills and industry-relevant certifications',
    },
    {
      icon: Award,
      title: '10+ Years Experience',
      description: 'Delivering world-class IT training and cloud certification programs across the globe',
    },
    {
      icon: Users,
      title: '5000+ Students Trained',
      description: 'Successfully trained and certified thousands of professionals in cloud technologies',
    },
    {
      icon: TrendingUp,
      title: 'Industry-Relevant Curriculum',
      description: 'Continuously updated courses aligned with latest industry trends and certification requirements',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About CLOUDITARY
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leading the way in cloud computing education and professional IT training
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16 space-y-4">
          <p className="text-lg text-gray-700 text-center leading-relaxed">
            CLOUDITARY is a premier IT training institute specializing in cloud certifications and cutting-edge technology education. With over a decade of experience, we've established ourselves as industry leaders in preparing professionals for success in the digital transformation era.
          </p>
          <p className="text-lg text-gray-700 text-center leading-relaxed">
            Our commitment to excellence is reflected in our comprehensive curriculum, expert instructors with real-world industry experience, and dedicated placement support that has helped thousands of students advance their careers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-blue-50 rounded-xl p-6 text-center"
            >
              <div className="inline-flex p-4 bg-blue-600 rounded-full mb-4">
                <highlight.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{highlight.title}</h3>
              <p className="text-gray-600">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
