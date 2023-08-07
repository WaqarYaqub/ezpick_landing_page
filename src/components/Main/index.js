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
  const [selectedLanguage, setSelectedLanguage] = useState("");
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
  };
  console.log(process.env.STRIPE_PUBLIC_KEY,"process.env.STRIPE_PUBLIC_KEY")

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
        <button
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
          onClick={closeModal}
        >
          Close Modal
        </button>
      </ControlledModal>
    </div>
  );
};

export default Main;
