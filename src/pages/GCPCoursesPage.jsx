
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Cloud, ChevronRight } from 'lucide-react';
import CourseCard from '@/components/CourseCard';
import { getCoursesByProvider } from '@/data/coursesData';

const GCPCoursesPage = () => {
  const gcpCourses = getCoursesByProvider('GCP');

  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
      <Helmet>
        <title>Google Cloud Certification Courses | Clouditary</title>
        <meta name="description" content="Master Google Cloud Platform with our expert-led GCP certification training courses." />
      </Helmet>

      {/* Provider Hero */}
      <section className="bg-green-50 py-16 border-b border-green-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm text-gray-500 mb-6">
            <Link to="/" className="hover:text-green-600">Home</Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <Link to="/courses" className="hover:text-green-600">Courses</Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="text-green-800 font-medium">Google Cloud</span>
          </div>

          <div className="flex items-center gap-6 mb-6">
            <div className="w-20 h-20 bg-white rounded-2xl shadow-sm flex items-center justify-center">
              <Cloud className="h-10 w-10 text-green-600" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">Google Cloud Courses</h1>
              <p className="text-xl text-gray-600">Innovate faster with Google's secure, open, and intelligent cloud.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-900">Available GCP Paths ({gcpCourses.length})</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gcpCourses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GCPCoursesPage;
