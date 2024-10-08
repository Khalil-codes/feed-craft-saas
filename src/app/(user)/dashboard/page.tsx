import React, { Suspense } from "react";
import Greetings from "./_components/greetings";

const DashboardPage = async () => {
  return (
    <main className="py-5">
      <Suspense fallback={<Greetings.Sekeleton />}>
        <Greetings />
      </Suspense>
    </main>
  );
};

export default DashboardPage;
