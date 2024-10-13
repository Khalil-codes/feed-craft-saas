import React from "react";
import PricingSection from "./_components/pricing-section";
import Hero from "./_components/hero";
import Features from "./_components/features";
import Footer from "./_components/footer";

const LandingPage = () => {
  return (
    <div className="mx-auto flex max-w-screen-xl flex-1 flex-col py-5">
      <Hero />
      <Features />
      <PricingSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
