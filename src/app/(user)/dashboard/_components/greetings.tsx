"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { useUser } from "@clerk/nextjs";
import React from "react";

const Greetings = () => {
  const { user, isLoaded, isSignedIn } = useUser();

  if (!isSignedIn || !isLoaded) return <Skeleton className="h-8 w-40" />;

  return (
    <h3 className="font-geist-sans text-lg font-semibold">
      Welcome, {user?.firstName || "User"}
    </h3>
  );
};

export default Greetings;
