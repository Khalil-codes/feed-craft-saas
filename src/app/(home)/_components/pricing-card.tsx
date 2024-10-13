import React from "react";
import { Plan } from "./pricing-section";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const PricingCard = ({ plan }: { plan: Plan }) => {
  return (
    <div className="tarnsition relative flex h-full flex-col justify-between rounded-md border bg-white/5 p-6 backdrop-blur-sm hover:shadow">
      {plan.isPopular && (
        <div className="absolute right-0 top-0 rounded-bl-lg rounded-tr-lg bg-primary px-2 py-1 text-sm text-primary-foreground">
          Popular
        </div>
      )}
      <div>
        <div className="items-end">
          <h4 className="text-3xl font-extrabold">${plan.price}</h4>
          <p className="my-2 text-xl font-bold">{plan.title}</p>
        </div>
        <p className="text-balance">{plan.description}</p>
      </div>
      <div>
        <div className="my-4 flex-grow border-t border-gray-400 opacity-25" />
        <ul>
          {plan.features.map((feature) => (
            <li
              key={feature}
              className="my-2 flex flex-row items-center gap-2 text-muted-foreground">
              <div className="mr-2 rounded-full bg-primary p-1 text-primary-foreground">
                <Check size={14} className="text-primary-foreground" />
              </div>
              {feature}
            </li>
          ))}
        </ul>
        <Button className="mt-4 w-full" asChild>
          <Link href={plan.url}>Get Started</Link>
        </Button>
      </div>
    </div>
  );
};

export default PricingCard;
