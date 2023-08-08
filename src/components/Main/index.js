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
import ControlledModal from "../Modal";

import { getPlans, getCMS } from "@/services";

const Main = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [plans, setPlans] = useState([]);
  const [planDuration, setPlanDuration] = useState("monthly");
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
      <FeatureSection />
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
        />
      )}
      <MobileAppSection data={cmsData?.mobileAppSection} />
      <Footer />
      <ControlledModal isModalOpen={isModalOpen}>
        <h2 className="text-xl font-semibold mb-4">Purchase Successfully!</h2>
        <p>
          {
            "You have successfully get into the system.We have sent you an email on this"
          }
        </p>
        <div className="flex items-center justify-center mt-[20px]">
          <button
            className="w-[120px] h-[44.263px] lg:w-[120px] lg:h-[40px] bg-gradient-to-r from-[#FFB31A] to-[#FF8A0F] bg-no-repeat bg-padding-box shadow-md rounded-full cursor-pointer transition duration-250 ease-in-out text-[#EFF0FF] text-[12px] lg:text-[14px] font-semibold flex items-center justify-center uppercase hover:from-[#FF8A0F] hover:to-[#FFB31A]"
            onClick={closeModal}
          >
            Close
          </button>
        </div>
      </ControlledModal>
    </div>
  );
};

export default Main;
