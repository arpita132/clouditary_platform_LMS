
import React from 'react';
import CourseCard from '@/components/CourseCard';
import { coursesData } from '@/data/coursesData';

const CoursesSection = () => {
  // Show first 6 courses from the real data (includes batchStartDate)
  const courses = coursesData.slice(0, 6);

  return (
    <section id="courses" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Certification Courses
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Industry-recognized certifications designed to transform your career in cloud computing and IT
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
