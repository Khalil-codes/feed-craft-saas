import React, { Suspense } from "react";
import {
  FeedbackTableSkeleton,
  ProjectInfoSkeleton,
} from "./_components/skeletons";
import ProjectInfo from "./_components/project-info";
import Feedbacks from "./_components/feedbacks";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { getProjectById } from "@/services/project";
import { notFound } from "next/navigation";

type Props = {
  params: {
    id: string;
  };
  searchParams: {
    page?: string;
  };
};

export const generateMetadata = async ({ params }: Props) => {
  const id = params.id;
  const project = await getProjectById(id);

  if (!project) {
    notFound();
  }

  return {
    title: `${project.name} | Feed Craft`,
    description: project.description,
    robots: { index: false },
  };
};

const ProjectPage = async ({ params, searchParams }: Props) => {
  const id = params.id;
  const page = parseInt(searchParams.page || "1");

  return (
    <main className="flex flex-col gap-6 py-6">
      <div>
        <Link
          href={`/dashboard`}
          className="flex w-fit items-center gap-2 text-sm text-muted-foreground hover:underline">
          <ChevronLeft size={16} /> Back to projects
        </Link>
      </div>
      <Suspense fallback={<ProjectInfoSkeleton />}>
        <ProjectInfo id={id} />
      </Suspense>
      <div>
        <Suspense key={page} fallback={<FeedbackTableSkeleton />}>
          <Feedbacks projectId={id} currentPage={page} />
        </Suspense>
      </div>
    </main>
  );
};

export default ProjectPage;
