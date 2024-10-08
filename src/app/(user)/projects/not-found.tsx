import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <section className="flex h-[calc(100vh-65px)] flex-col items-center justify-center gap-3">
      <h2 className="font-geist-mono text-3xl font-semibold">
        Project not found
      </h2>
      <Link href="/dashboard">
        <Button>Go back</Button>
      </Link>
    </section>
  );
};

export default NotFoundPage;
