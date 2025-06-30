
import React from "react";
import  Navbar from "../components/navbar";
import HeroSection from "../components/HeroSection";
import WhyChooseUs from "../components/WhyChooseUs";
import FeaturesSection from "../components/FeaturesSection";
import PreFooter from "../components/PreFooter";
import Businesses from "../components/Businesses";
import CallToAction from "../components/CallToAction";
import SiteFooter from "../components/SiteFooter";
import Footer from "../components/footer";


export default function Home() {
  return (
    <>
      <Navbar/>
      <HeroSection />
      <WhyChooseUs />
      <FeaturesSection />
      <PreFooter />
      <Businesses />
      <CallToAction />
      <SiteFooter />
      <Footer />
    </>
  );
}
