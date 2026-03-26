
import React from 'react';
import InstructorCard from '@/components/InstructorCard';

const TeamSection = () => {
  const instructors = [
    {
      name: 'Rajesh Kumar',
      expertise: 'AWS Specialist',
      credentials: 'AWS Certified Solutions Architect - Professional',
      experience: '15+ years in cloud architecture and AWS implementation',
    },
    {
      name: 'Priya Sharma',
      expertise: 'Azure Expert',
      credentials: 'Microsoft Certified: Azure Administrator Expert',
      experience: '12+ years in enterprise cloud solutions and DevOps',
    },
    {
      name: 'Amit Patel',
      expertise: 'GCP Specialist',
      credentials: 'Google Cloud Professional Cloud Architect',
      experience: '10+ years in Google Cloud Platform and data engineering',
    },
    {
      name: 'Sneha Reddy',
      expertise: 'Data Engineering Lead',
      credentials: 'AWS Certified Data Analytics - Specialty',
      experience: '13+ years in big data and cloud-based analytics',
    },
    {
      name: 'Vikram Singh',
      expertise: 'AI/ML Instructor',
      credentials: 'Google Cloud Professional ML Engineer',
      experience: '11+ years in machine learning and AI applications',
    },
    {
      name: 'Ananya Iyer',
      expertise: 'DevOps Trainer',
      credentials: 'AWS Certified DevOps Engineer - Professional',
      experience: '14+ years in CI/CD and cloud automation',
    },
  ];

  return (
    <section
      id="team"
      className="py-20 bg-gray-900 text-white relative overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-10 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1562893492-afd14ae24913')`,
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Meet Our Expert Instructors</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Learn from industry veterans with proven track records in cloud computing and IT certifications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {instructors.map((instructor, index) => (
            <InstructorCard key={index} instructor={instructor} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
