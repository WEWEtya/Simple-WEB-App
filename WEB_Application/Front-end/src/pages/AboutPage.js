import React from "react";

import MainBannerSection from '../components/AboutPageComponents/MainBannerSection';
import IntroductionSection from '../components/AboutPageComponents/IntroductionSection';
import BenefitsSection  from '../components/AboutPageComponents/BenefitsSection';
import TrendingProductsSection  from '../components/AboutPageComponents/TrendingProductsSection';
import CTASection  from '../components/AboutPageComponents/CTASection';

import '../styles/AboutUs/aboutUs.css'


const AboutPage = () => {
   return ( 
    <div>
        <MainBannerSection />
        <IntroductionSection />
        <BenefitsSection />
        <TrendingProductsSection />
        <h1>Trusted by top brands worldwide</h1>
        <CTASection />
    </div>
   )
}

export default AboutPage;
  