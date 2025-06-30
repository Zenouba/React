import React, { useState } from "react";
import  Navbar from "../components/navbar";
import Header from "../components/Header";
import PricingToggle from "../components/PricingToggle";
import Save from "../components/savebutton";
import ChoiceCards from "../components/card";
import Faq from "../components/FAQSection";
import FaQItem from "../components/FaQitems";
import SiteFooter from "../components/SiteFooter";
import Footer from "../components/footer";

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState("yearly");

  return (
    <>
      <Navbar/>
      <Header />
      <PricingToggle onSelectPlan={setSelectedPlan} /> 
      <Save />
      <ChoiceCards selectedPlan={selectedPlan} />
      <Faq />
      <FaQItem />
      <SiteFooter />
      <Footer />
    </>
  );
}
