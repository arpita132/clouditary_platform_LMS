
import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { Search, Filter, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import CourseCard from '@/components/CourseCard';
import { coursesData } from '@/data/coursesData';
import { Link } from 'react-router-dom';

const CoursesListingPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProviders, setSelectedProviders] = useState([]);
  const [selectedLevels, setSelectedLevels] = useState([]);
  
  const handleProviderChange = (provider) => {
    setSelectedProviders(prev => 
      prev.includes(provider) ? prev.filter(p => p !== provider) : [...prev, provider]
    );
  };

  const handleLevelChange = (level) => {
    setSelectedLevels(prev => 
      prev.includes(level) ? prev.filter(l => l !== level) : [...prev, level]
    );
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedProviders([]);
    setSelectedLevels([]);
  };

  const filteredCourses = useMemo(() => {
    return coursesData.filter(course => {
      const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            course.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesProvider = selectedProviders.length === 0 || selectedProviders.includes(course.provider);
      const matchesLevel = selectedLevels.length === 0 || selectedLevels.includes(course.level);
      
      return matchesSearch && matchesProvider && matchesLevel;
    });
  }, [searchTerm, selectedProviders, selectedLevels]);

  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
      <Helmet>
        <title>All Cloud Courses | Clouditary</title>
        <meta name="description" content="Browse our comprehensive catalog of AWS, Azure, and Google Cloud certification courses." />
      </Helmet>

      <div className="container mx-auto px-4">
        {/* Breadcrumb inline */}
        <div className="flex items-center text-sm text-gray-500 mb-6">
            <Link to="/" className="hover:text-[#0EA5E9]">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-[#1E293B] font-medium">All Courses</span>
        </div>
        
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-[#1E293B] mb-4">Explore Our Courses</h1>
          <p className="text-gray-600 text-lg max-w-2xl">Find the perfect certification path to accelerate your tech career. Filter by provider, level, and more.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="w-full lg:w-1/4 space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 sticky top-28">
              <div className="flex justify-between items-center mb-6">
                <h2 className="font-bold text-lg flex items-center gap-2"><Filter className="w-5 h-5"/> Filters</h2>
                {(selectedProviders.length > 0 || selectedLevels.length > 0 || searchTerm) && (
                  <button onClick={clearFilters} className="text-sm text-red-500 hover:text-red-700 flex items-center">
                    <X className="w-3 h-3 mr-1" /> Clear All
                  </button>
                )}
              </div>

              <div className="relative mb-8">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input 
                  type="text" 
                  placeholder="Search courses..." 
                  className="pl-9 bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-4">Cloud Provider</h3>
                  <div className="space-y-3">
                    {['AWS', 'Azure', 'GCP'].map(provider => (
                      <div key={provider} className="flex items-center space-x-3">
                        <Checkbox 
                          id={`provider-${provider}`} 
                          checked={selectedProviders.includes(provider)}
                          onCheckedChange={() => handleProviderChange(provider)}
                        />
                        <Label htmlFor={`provider-${provider}`} className="text-gray-700 font-normal cursor-pointer">{provider}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-800 mb-4">Skill Level</h3>
                  <div className="space-y-3">
                    {['Beginner', 'Intermediate', 'Advanced'].map(level => (
                      <div key={level} className="flex items-center space-x-3">
                        <Checkbox 
                          id={`level-${level}`}
                          checked={selectedLevels.includes(level)}
                          onCheckedChange={() => handleLevelChange(level)}
                        />
                        <Label htmlFor={`level-${level}`} className="text-gray-700 font-normal cursor-pointer">{level}</Label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Course Grid */}
          <div className="w-full lg:w-3/4">
            <div className="mb-6 flex justify-between items-center bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
              <p className="text-gray-600 font-medium">Showing <span className="font-bold text-[#1E293B]">{filteredCourses.length}</span> results</p>
            </div>

            {filteredCourses.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredCourses.map(course => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-white rounded-xl border border-gray-100 shadow-sm">
                <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-10 h-10 text-gray-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">No courses found</h3>
                <p className="text-gray-500 mb-6 max-w-md mx-auto">We couldn't find any courses matching your current filters. Try adjusting your search criteria.</p>
                <Button onClick={clearFilters} variant="outline">Clear All Filters</Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesListingPage;
