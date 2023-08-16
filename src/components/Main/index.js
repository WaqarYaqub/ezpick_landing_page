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
import UnsuccessPage from "../Pages/UnsuccessPage";
import UserAlreadyExist from "../Pages/UserAlreadyExist";
import { getPlans, getCMS } from "@/services";
import LocalesData from "@/locals/locals.json";

const Main = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [plans, setPlans] = useState([]);
  const [planDuration, setPlanDuration] = useState("yearly");
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [client, setClient] = useState(null);
  const [cmsData, setCmsData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUnSuccessModalOpen, setIsUnSuccessModalOpen] = useState(false);
  const [isUserAlreadyExistModalOpen, setIsUserAlreadyExistModalOpen] =
    useState(false);
  const [isVerifiedUser, setIsVerifiedUser] = useState(false);
  const [locales, setLocales] = useState({});

  const fetchCMS = async (lang) => {
    const result = await getCMS(lang);
    if (result?.success) {
      setCmsData(result?.cms[0]);
    }
  };

  useEffect(() => {
    const storedLanguage = localStorage.getItem("selectedLanguage");
    setLocales({});
    if (storedLanguage) {
      setSelectedLanguage(storedLanguage);
      setLocales(LocalesData[storedLanguage]);
    } else {
      setSelectedLanguage("en");
      setLocales(LocalesData[selectedLanguage]);
    }
  }, [selectedLanguage]);

  useEffect(() => {
    fetchCMS(selectedLanguage);
    setCmsData([]);
  }, [selectedLanguage]);

  const fetchPlans = async () => {
    const result = await getPlans(planDuration, selectedLanguage);
    if (result?.success) setPlans(result?.plans);
  };

  useEffect(() => {
    fetchPlans();
  }, [planDuration, selectedLanguage]);

  useEffect(() => {
    const targetSection = document.getElementById("user-form-section");

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectedPlan, isUserAlreadyExistModalOpen]);
  useEffect(() => {
    const targetSection = document.getElementById("payment-section");

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  }, [client, isUserAlreadyExistModalOpen]);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPlan(null);
    setClient(null);
    const targetSection = document.getElementById("header-section");

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openUnSuccessModal = () => {
    setIsUnSuccessModalOpen(true);
  };
  const closeUnSuccessModal = () => {
    setIsUnSuccessModalOpen(false);
  };
  const openUserAlreadyExistModal = () => {
    setIsUserAlreadyExistModalOpen(true);
  };
  const closeUserAlreadyExistModal = () => {
    setIsUserAlreadyExistModalOpen(false);
    if (!isVerifiedUser) {
      setClient(null);
    }
  };

  return (
    <div dir={selectedLanguage === "ar" ? "rtl" : "ltr"}>
      <Header
        setSelectedLanguage={setSelectedLanguage}
        selectedLanguage={selectedLanguage}
        locales={locales}
      />
      <HeroSection data={cmsData?.heroSection} lang={selectedLanguage} />
      <FeatureSection locales={locales} data={cmsData?.cmsFeatures} />
      <Section1 data={cmsData?.securitySection} />
      <Section2 data={cmsData?.realTimeUpdatesSection} />
      <PricingSection
        plans={plans}
        setPlanDuration={setPlanDuration}
        setSelectedPlan={setSelectedPlan}
        selectedPlan={selectedPlan}
        locales={locales}
      />
      {selectedPlan && !client && !isUserAlreadyExistModalOpen && (
        <UserFormSection
          locales={locales}
          selectedPlan={selectedPlan}
          setClient={setClient}
          openUserAlreadyExistModal={openUserAlreadyExistModal}
        />
      )}
      {client && !isUserAlreadyExistModalOpen && (
        <PaymentSection
          plans={plans}
          selectedPlan={selectedPlan}
          client={client}
          openModal={openModal}
          closeModal={closeModal}
          openUnSuccessModal={openUnSuccessModal}
          locales={locales}
        />
      )}
      <MobileAppSection
        lg={selectedLanguage}
        locales={locales}
        data={cmsData?.mobileAppSection}
      />
      <Footer locales={locales} lang={selectedLanguage} />
      <Modal isModalOpen={isModalOpen}>
        <SuccessPage
          closeModal={closeModal}
          email={client?.email}
          locales={locales?.SUCCESSFULL}
        />
      </Modal>
      <Modal isModalOpen={isUnSuccessModalOpen}>
        <UnsuccessPage
          closeModal={closeUnSuccessModal}
          email={client?.email}
          locales={locales?.UN_SUCCESSFULL}
        />
      </Modal>
      <Modal isModalOpen={isUserAlreadyExistModalOpen}>
        <UserAlreadyExist
          closeModal={closeUserAlreadyExistModal}
          client={client}
          locales={locales?.USER_ALREADY_EXIST}
          setIsVerifiedUser={setIsVerifiedUser}
          setClient={setClient}
        />
      </Modal>
    </div>
  );
};

export default Main;
