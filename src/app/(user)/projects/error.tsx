"use client";

import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useTransition } from "react";

const Error = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <section className="flex h-[calc(100vh-65px)] flex-col items-center justify-center gap-3">
      <h2 className="font-geist-mono text-3xl font-semibold">
        Something went wrong
      </h2>
      <Button
        disabled={isPending}
        onClick={() =>
          startTransition(() => {
            reset();
            router.refresh();
          })
        }>
        {isPending ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Retrying...
          </>
        ) : (
          "Try again"
        )}
      </Button>
    </section>
  );
};

export default Error;
