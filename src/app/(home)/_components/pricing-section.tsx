import React from "react";
import PricingCard from "./pricing-card";

export type Plan = {
  title: string;
  price: number;
  description: string;
  features: string[];
  isPopular?: boolean;
  url: string;
};

export const plans: Plan[] = [
  {
    title: "Free",
    price: 0,
    description: "For small teams or individuals",
    features: [
      "3 projects",
      "Unlimited users",
      "2GB storage",
      "Priority support",
    ],
    url: "/dashboard",
  },
  {
    title: "Monthly",
    price: 6.99,
    description: "For growing teams",
    features: [
      "Unlimited projects",
      "Unlimited users",
      "5GB storage",
      "Priority support",
    ],
    isPopular: true,
    url: "/payments/subscribe?plan=monthly",
  },
  {
    title: "Yearly",
    price: 39.99,
    description: "Upgrade to save more!",
    features: [
      "Unlimited users",
      "Unlimited projects",
      "50GB storage",
      "24/7 support",
    ],
    url: "/payments/subscribe?plan=yearly",
  },
];

const PricingSection = () => {
  return (
    <section>
      <h2 className="text-center text-3xl font-bold capitalize">Pricing</h2>
      <p className="mb-8 mt-3 text-center text-2xl font-extrabold">
        Flexible Pricing to fit your needs.
      </p>
      <ul className="mx-auto grid max-w-screen-xl grid-cols-1 items-center gap-3 md:grid-cols-3">
        {plans.map((plan) => (
          <li key={plan.title} className="h-full">
            <PricingCard plan={plan} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PricingSection;
