import React from 'react';
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
 * HomePage — scrolls through the full storytelling narrative:
 *
 * 1.  HeroSection         → Hook + split layout, animated dashboard
 * 2.  HeroSlideshow       → Featured certs with animated progress bar
 * 3.  StatsSection        → Animated counters — build credibility
 * 4.  FeaturedCertifications → Choose your cloud provider (staggered cards)
 * 5.  PopularCoursesCarousel → Course cards with batch badges + ratings
 * 6.  CategoriesSection   → Browse by topic (staggered grid)
 * 7.  WhyChooseUsSection  → Differentiators + checkmarks
 * 8.  StudentBenefitsSection → Career outcomes (dark glassmorphism)
 * 9.  TestimonialsSection → Social proof
 * 10. CTABanner           → Final conversion push
 */
const HomePage = () => (
  <div className="bg-[#0A192F]">
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