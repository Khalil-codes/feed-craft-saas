import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getProjectById } from "@/services/project";
import { currentUser } from "@clerk/nextjs/server";
import { Calendar, Code, LinkIcon, User } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

type Props = {
  id: string;
};

const ProjectInfo = async ({ id }: Props) => {
  const project = await getProjectById(id);
  const user = await currentUser();

  if (!project || !user) {
    notFound();
  }

  return (
    <Card className="shadow-none">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">{project.name}</CardTitle>
        <CardDescription>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-blue-500 hover:text-blue-700">
            <LinkIcon className="mr-1 h-3 w-3" />
            {project.url}
          </a>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="text-muted-foreground">{project.description}</p>
          <div className="flex flex-wrap gap-4">
            <Link href={`/projects/${project.id}/instructions`}>
              <Badge
                variant="secondary"
                className="flex items-center font-normal">
                <Code className="mr-1 h-4 w-4" /> Embed Code
              </Badge>
            </Link>
            <Badge
              variant="secondary"
              className="flex items-center font-normal">
              <Calendar className="mr-1 h-4 w-4" />
              Created: {new Date(project.created_at).toLocaleDateString()}
            </Badge>
            <Badge
              variant="secondary"
              className="flex items-center font-normal">
              <User className="mr-1 h-4 w-4" />
              Owner: {user.fullName}
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectInfo;
