import React, { Suspense } from "react";
import NewProjectButton from "@/components/new-project-btn";
import ProjectList from "./_components/project-list";
import { ProjectListSkeleton } from "./_components/skeletons";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | Feed Craft",
  description: "Dashboard for your projects",
  robots: { index: false },
};

const DashboardPage = async () => {
  return (
    <main className="py-5">
      <section>
        <div className="mb-4 flex items-center justify-between gap-2">
          <h2 className="text-2xl font-bold">Your projects</h2>
          <NewProjectButton />
        </div>
        <Suspense fallback={<ProjectListSkeleton />}>
          <ProjectList />
        </Suspense>
      </section>
    </main>
  );
};

export default DashboardPage;
