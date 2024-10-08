import React from "react";
import Link from "next/link";
import { projects } from "@/db/schema";
import type { InferSelectModel } from "drizzle-orm";
import { Calendar, ExternalLink } from "lucide-react";
import { intlFormatDistance } from "date-fns/intlFormatDistance";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Props = {
  project: InferSelectModel<typeof projects>;
};

const ProjectCard = ({ project }: Props) => {
  return (
    <Card className="w-full transition-shadow duration-300 hover:shadow-lg">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between gap-2">
          <CardTitle className="truncate text-xl font-bold">
            {project.name}
          </CardTitle>
          <Badge variant="secondary" className="text-xs">
            <Calendar className="mr-1 h-3 w-3" />
            {intlFormatDistance(new Date(project.created_at), new Date())}
          </Badge>
        </div>
        <CardDescription className="mt-2">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-blue-500 hover:text-blue-700">
            {project.url}
            <ExternalLink className="ml-1 h-3 w-3" />
          </a>
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-3 text-sm">
        {project.description ? (
          <p className="line-clamp-2 text-gray-600 dark:text-gray-300">
            {project.description}
          </p>
        ) : (
          <p className="italic text-gray-400">No description available</p>
        )}
      </CardContent>
      <CardFooter>
        <Button className="w-full" asChild>
          <Link href={`/projects/${project.id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
