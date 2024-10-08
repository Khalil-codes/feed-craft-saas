"use client";

import React from "react";
import { Button } from "./ui/button";
import { Check, Clipboard } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

const CopyButton = ({ text }: { text: string }) => {
  const [isCopied, setIsCopied] = React.useState(false);

  const onClick = () => {
    navigator.clipboard.writeText(text).then(() => {
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    });
  };

  return (
    <TooltipProvider>
      <Tooltip delayDuration={100}>
        <TooltipTrigger asChild>
          <Button
            variant={"ghost"}
            onClick={onClick}
            className={
              "p-2 text-white transition hover:bg-white/20 hover:text-white"
            }>
            {isCopied ? <Check size={16} /> : <Clipboard size={16} />}
          </Button>
        </TooltipTrigger>
        <TooltipContent sideOffset={10}>
          {isCopied ? "Copied!" : "Copy"}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default CopyButton;
