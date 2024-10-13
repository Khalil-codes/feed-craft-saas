import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignUpButton } from "@clerk/nextjs";
import { LogIn } from "lucide-react";
import Link from "next/link";
import React from "react";
import Demo from "@/assets/feed-craft.gif";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="flex grow flex-col gap-4 py-10 md:min-h-[min(60vh,600px)] md:flex-row md:items-center md:justify-center">
      <div>
        <div className="mb-3 text-center md:mb-8 md:max-w-sm md:text-start lg:max-w-md">
          <h1 className="mb-2 text-balance text-4xl font-extrabold leading-tight md:mb-5 md:text-5xl">
            Collect your product feedback seamlessly
          </h1>
          <p className="text-balance text-lg text-muted-foreground">
            Integrate FeedCraft on your website to collect feedback today
          </p>
        </div>
        <div className="flex justify-center gap-4 md:justify-start">
          <SignedIn>
            <Button asChild>
              <Link href="/dashboard">Dashboard</Link>
            </Button>
          </SignedIn>
          <SignedOut>
            <SignUpButton>
              <Button className="flex gap-2">
                <LogIn size={14} />
                Get Started
              </Button>
            </SignUpButton>
          </SignedOut>
          <Button variant="secondary" asChild>
            <Link href={"#features"}>Learn More</Link>
          </Button>
        </div>
      </div>
      <div className="mx-auto md:mx-0">
        <Image src={Demo} alt="Feedcraft Demo" width={450} height={450} />
      </div>
    </section>
  );
};

export default Hero;
