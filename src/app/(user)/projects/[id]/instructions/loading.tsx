import { Loader } from "lucide-react";
import React from "react";

const Loading = () => {
  return (
    <section className="flex h-[calc(100vh-65px)] flex-col items-center justify-center gap-3">
      <Loader size={48} className="animate-spin" />
      <p className="text-xl font-semibold">Loading...</p>
    </section>
  );
};

export default Loading;
