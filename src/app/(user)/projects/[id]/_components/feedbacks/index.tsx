import { getFeedbacksByProjectId } from "@/services/project";
import React from "react";
import { DataTable } from "@/components/data-table";
import { columns } from "./columns";
import { Pagination } from "@/components/pagination";

type Props = {
  projectId: string;
  currentPage: number;
};

const Feedbacks = async ({ projectId, currentPage }: Props) => {
  const data = await getFeedbacksByProjectId(projectId, currentPage);

  if (!data?.feedbacks || data.feedbacks.length === 0) {
    return <div>No feedback found</div>;
  }

  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-xl font-bold">Feedbacks</h3>
      <DataTable
        columns={columns}
        data={data.feedbacks}
        currentPage={currentPage}
        hasNext={data.hasNext}
      />
      <Pagination currentPage={currentPage} hasNext={data.hasNext} />
    </div>
  );
};

export default Feedbacks;
