import React from "react";
import Header from "src/components/Header";
import HeroSection from "src/components/HeroSection";
import FeatureSection from "src/components/FeatureSection";
import Section1 from "src/components/Section1";
import Section2 from "src/components/Section2";
import PricingSection from "src/components/PricingSection";
import UserFormSection from "src/components/UserFormSection";
import PaymentSection from "src/components/PaymentSection";

import MobileAppSection from "src/components/MobileAppSection";
import Footer from "src/components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <FeatureSection />
      <Section1 />
      <Section2 />
      <PricingSection />
      <UserFormSection />
      <PaymentSection />
      <MobileAppSection />
      <Footer />
    </>
  );
};

export default Home;
