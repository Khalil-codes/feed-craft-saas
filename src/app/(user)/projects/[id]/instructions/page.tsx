import { getProjectById } from "@/services/project";
import { notFound } from "next/navigation";
import CopyButton from "@/components/copy-btn";
import React from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

type Props = {
  params: {
    id: string;
  };
};

const InstructionPage = async ({ params }: Props) => {
  const project = await getProjectById(params.id);

  if (!project) {
    notFound();
  }

  return (
    <section className="py-5">
      <Link
        href={`/projects/${project.id}`}
        className="mb-3 block w-fit py-2 text-sm text-muted-foreground hover:underline">
        <button className="flex items-center gap-1">
          <ChevronLeft className="h-4 w-4" /> Back
        </button>
      </Link>
      <h2 className="mb-2 text-2xl font-bold">Start Collecting Feedback</h2>
      <p className="mb-2 text-base text-muted-foreground">
        Embed the code on your website.
      </p>
      <div className="relative rounded-md bg-zinc-950 p-6 text-white shadow-sm dark:bg-zinc-900">
        <span className="absolute right-3 top-3">
          <CopyButton
            text={`<my-widget project="${project.id}"></my-widget>\n<script src="${process.env.WIDGET_URL}/widget.umd.js"></script>`}
          />
        </span>
        <code className="block w-[95%] text-sm">
          {`<my-widget project="${project.id}"></my-widget>`}
          <br />
          {`<script src="${process.env.WIDGET_URL}/widget.umd.js"></script>`}
        </code>
      </div>
      <div className="mt-3">
        <h3 className="mb-2 text-lg font-bold">How to use the widget:</h3>
        <ol className="list-decimal pl-5">
          <li>Copy and paste the code above into your website</li>
          <li>Open the widget in your browser</li>
          <li>
            Once the widget is open, fill the form and submit the feedback
          </li>
          <li>
            Check the feedbacks{" "}
            <Link
              href={`/projects/${project.id}`}
              className="text-blue-800 underline dark:text-blue-500">
              here
            </Link>
            !
          </li>
        </ol>
      </div>
    </section>
  );
};

export default InstructionPage;
