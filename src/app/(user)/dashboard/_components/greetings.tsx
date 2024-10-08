import NewProjectButton from "@/components/new-project-btn";
import { Skeleton } from "@/components/ui/skeleton";
import { currentUser } from "@clerk/nextjs/server";
import React from "react";

const Greetings = async () => {
  const user = await currentUser();
  return (
    <div className="flex items-center justify-between">
      <h3 className="font-geist-sans text-lg font-semibold">
        Welcome, {user?.firstName || "User"}
      </h3>
      <NewProjectButton />
    </div>
  );
};

Greetings.Sekeleton = function GreetingsSkeleton() {
  return (
    <div className="flex items-center justify-between">
      <Skeleton className="h-7 w-44" />
      <NewProjectButton />
    </div>
  );
};

export default Greetings;
