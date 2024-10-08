import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export const ProjectCardSkelton = () => {
  return (
    <Card className="w-full">
      <CardHeader className="space-y-3">
        <div className="flex items-center justify-between gap-2">
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-5 w-14" />
        </div>
        <Skeleton className="h-4 w-3/4" />
      </CardHeader>
      <CardContent className="space-y-2 pb-3">
        <Skeleton className="h-4 w-full" />
      </CardContent>
      <CardFooter>
        <Skeleton className="h-8 w-full" />
      </CardFooter>
    </Card>
  );
};

export const ProjectListSkeleton = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      <ProjectCardSkelton />
      <ProjectCardSkelton />
      <ProjectCardSkelton />
    </div>
  );
};
