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
import Modal from "../Modal";
import SuccessPage from "../Pages/SuccessPage";
import { getPlans, getCMS } from "@/services";

const Main = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [plans, setPlans] = useState([]);
  const [planDuration, setPlanDuration] = useState("yearly");
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [client, setClient] = useState(null);
  const [cmsData, setCmsData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchCMS = async (lang) => {
    const result = await getCMS(lang);
    if (result?.success) {
      setCmsData(result?.cms[0]);
      console.log(result, "result");
    }
  };

  useEffect(() => {
    const storedLanguage = localStorage.getItem("selectedLanguage");
    if (storedLanguage) {
      setSelectedLanguage(storedLanguage);
    } else {
      setSelectedLanguage("en");
    }
  }, []);
  useEffect(() => {
    fetchCMS(selectedLanguage);
    setCmsData([]);
  }, [selectedLanguage]);

  const fetchPlans = async () => {
    const result = await getPlans(planDuration);
    if (result?.success) setPlans(result?.plans);
  };

  useEffect(() => {
    fetchPlans();
  }, [planDuration]);

  useEffect(() => {
    const targetSection = document.getElementById("user-form-section");

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectedPlan]);
  useEffect(() => {
    const targetSection = document.getElementById("payment-section");

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  }, [client]);
  client;
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPlan(null);
    setClient(null);
  };

  return (
    <div dir={selectedLanguage === "ar" ? "rtl" : "ltr"}>
      <Header
        setSelectedLanguage={setSelectedLanguage}
        selectedLanguage={selectedLanguage}
      />
      <HeroSection data={cmsData?.heroSection} lang={selectedLanguage} />
      <FeatureSection data={cmsData?.cmsFeatures} />
      <Section1 data={cmsData?.securitySection} />
      <Section2 data={cmsData?.realTimeUpdatesSection} />
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
          openModal={openModal}
          closeModal={closeModal}
        />
      )}
      <MobileAppSection data={cmsData?.mobileAppSection} />
      <Footer />
      <Modal isModalOpen={isModalOpen}>
        <SuccessPage closeModal={closeModal} email={client?.email} />
      </Modal>
    </div>
  );
};

export default Main;
