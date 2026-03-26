
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Breadcrumb from '@/components/Breadcrumb';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import CertificationSubcategorySection from '@/components/CertificationSubcategorySection';
import { certificationsData } from '@/data/certificationsData';

const CertificationsPage = () => {
  const categories = [...new Set(certificationsData.map(c => c.category))];
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const breadcrumbItems = [
    { label: 'Certifications' }
  ];

  // Group certifications by subcategory for the active category
  const activeCerts = certificationsData.filter(c => c.category === activeCategory);
  const subcategories = [...new Set(activeCerts.map(c => c.subcategory))];

  return (
    <div className="min-h-screen pt-24 pb-20 bg-gradient-to-br from-[#0B1120] via-[#111827] to-[#1E293B]">
      <Helmet>
        <title>IT Certifications - Clouditary</title>
        <meta name="description" content="Explore top IT certifications in Azure, AWS, GCP, DevOps, Security, and AI/ML. Accelerate your career with industry-recognized credentials." />
      </Helmet>

      <div className="container mx-auto px-4 max-w-7xl">
        <div className="mb-8">
          <div className="bg-white/5 backdrop-blur-md px-4 py-2 rounded-lg inline-block border border-white/10">
             <Breadcrumb items={breadcrumbItems} className="!mb-0" />
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0EA5E9] to-[#10B981]">🎓 Master Your</span> Cloud Journey
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Elevate your career with industry-recognized certifications across top cloud providers and technology domains.
          </p>
        </motion.div>

        <Tabs defaultValue={categories[0]} onValueChange={setActiveCategory} className="w-full">
          <TabsList className="flex flex-wrap h-auto bg-white/5 backdrop-blur-md border border-white/10 p-2 rounded-xl mb-12 justify-center gap-2">
            {categories.map((category) => (
              <TabsTrigger 
                key={category} 
                value={category}
                className="px-6 py-3 rounded-lg text-sm md:text-base font-semibold data-[state=active]:bg-[#0EA5E9] data-[state=active]:text-white text-gray-400 hover:text-white transition-all"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category} value={category} className="mt-0 outline-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                {subcategories.map(subcategory => (
                  <CertificationSubcategorySection 
                    key={subcategory}
                    subcategory={subcategory}
                    certifications={activeCerts.filter(c => c.subcategory === subcategory)}
                  />
                ))}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default CertificationsPage;
