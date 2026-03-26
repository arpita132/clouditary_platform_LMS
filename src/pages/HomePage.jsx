
import React from 'react';
import { Helmet } from 'react-helmet';
import HeroSection from '@/components/HeroSection';
import HeroSlideshow from '@/components/HeroSlideshow';
import StatsSection from '@/components/StatsSection';
import FeaturedCertifications from '@/components/FeaturedCertifications';
import PopularCoursesCarousel from '@/components/PopularCoursesCarousel';
import CategoriesSection from '@/components/CategoriesSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import StudentBenefitsSection from '@/components/StudentBenefitsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTABanner from '@/components/CTABanner';

/**
 * HomePage — storytelling scroll narrative:
 * 1. HeroSection          → Hook + split layout, animated dashboard
 * 2. HeroSlideshow        → Featured certs with animated progress bar
 * 3. StatsSection         → Count-up stats — social proof
 * 4. FeaturedCertifications → Cloud provider cards (staggered)
 * 5. PopularCoursesCarousel → Course cards with batch badges
 * 6. CategoriesSection    → Browse by topic (staggered grid)
 * 7. WhyChooseUsSection   → Differentiators + checkmarks
 * 8. StudentBenefitsSection → Career outcomes
 * 9. TestimonialsSection  → Student reviews
 * 10. CTABanner           → Final conversion push
 */
const HomePage = () => (
  <div className="bg-[#0A192F]">
    <Helmet>
      <title>Clouditary – Master Cloud Certifications | AWS · Azure · GCP</title>
      <meta name="description" content="Industry-leading training for AWS, Azure, and Google Cloud certifications. Expert-led courses, hands-on labs, and live mentorship." />
    </Helmet>
    <HeroSection />
    <HeroSlideshow />
    <StatsSection />
    <FeaturedCertifications />
    <PopularCoursesCarousel />
    <CategoriesSection />
    <WhyChooseUsSection />
    <StudentBenefitsSection />
    <TestimonialsSection />
    <CTABanner />
  </div>
);

export default HomePage;
