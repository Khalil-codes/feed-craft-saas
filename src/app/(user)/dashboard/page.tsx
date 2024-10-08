import React from "react";
import Greetings from "./_components/greetings";
import NewProjectButton from "@/components/new-project-btn";

const DashboardPage = async () => {
  return (
    <main className="py-5">
      <div className="flex items-center justify-between gap-2">
        <Greetings />
        <NewProjectButton />
      </div>
    </main>
  );
};

export default DashboardPage;
