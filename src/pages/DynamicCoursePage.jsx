
import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import CourseTemplate from '@/components/CourseTemplate';
import { getCourseById } from '@/data/coursesData';

const DynamicCoursePage = () => {
  const { provider, courseId } = useParams();
  
  // Try to find the course by ID
  const course = getCourseById(courseId);
  
  // If course doesn't exist, redirect to courses listing
  if (!course) {
    return <Navigate to="/courses" replace />;
  }
  
  // Verify provider matches URL
  if (course.provider.toLowerCase() !== provider.toLowerCase()) {
    return <Navigate to={course.slug} replace />;
  }

  return <CourseTemplate course={course} />;
};

export default DynamicCoursePage;
