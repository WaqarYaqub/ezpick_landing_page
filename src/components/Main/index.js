"use client";
import React, { useState, useEffect } from "react";

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

import { getPlans } from "@/services";

const Main = () => {
  const [plans, setPlans] = useState([]);
  const [planDuration, setPlanDuration] = useState("monthly");

  const [selectedPlan, setSelectedPlan] = useState(null);
  const [client, setClient] = useState(null);

  const fetchPlans = async () => {
    const result = await getPlans(planDuration);
    if (result?.success) setPlans(result?.plans);
  };

  useEffect(() => {
    fetchPlans();
  }, [planDuration]);

  console.log(selectedPlan, "selectedPlan");
  return (
    <>
      <Header />
      <HeroSection />
      <FeatureSection />
      <Section1 />
      <Section2 />
      <PricingSection
        plans={plans}
        setPlanDuration={setPlanDuration}
        setSelectedPlan={setSelectedPlan}
        selectedPlan={selectedPlan}
      />
      {selectedPlan && !client && (
        <UserFormSection selectedPlan={selectedPlan} setClient={setClient} />
      )}
      {client && (
        <PaymentSection
          plans={plans}
          selectedPlan={selectedPlan}
          client={client}
        />
      )}
      <MobileAppSection />
      <Footer />
    </>
  );
};

export default Main;
