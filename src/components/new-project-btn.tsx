"use client";

import React, { useRef, useState } from "react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Loader2, Plus } from "lucide-react";
import { createProject } from "@/actions/createProject";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const NewProjectButton = () => {
  const ref = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(event.currentTarget);
    toast.promise(async () => await createProject(formData), {
      loading: "Creating project",
      success: (data) => {
        ref.current?.reset();
        router.push(`/projects/${data.insertedId}/instructions`);
        return "Project created";
      },
      error: (error) => {
        const message = error.message;
        return message || "Failed to create project";
      },
      finally: () => setIsSubmitting(false),
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <Plus size={20} className="mr-2" /> Create
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>New Project</DialogTitle>
          <DialogDescription>
            Create a new project to get started
          </DialogDescription>
        </DialogHeader>
        <form className="flex flex-col gap-3" onSubmit={handleSubmit} ref={ref}>
          <div className="space-y-1">
            <Label className="font-semibold" htmlFor="name">
              Name
            </Label>
            <Input id="name" name="name" placeholder="Project name" />
          </div>
          <div className="space-y-1">
            <Label className="font-semibold" htmlFor="url">
              URL
            </Label>
            <Input id="url" name="url" placeholder="https://example.com" />
          </div>
          <div className="space-y-1">
            <Label className="font-semibold" htmlFor="description">
              Description
            </Label>
            <Textarea
              className="resize-none"
              id="description"
              name="description"
              rows={3}
              placeholder="Description (optional)"
            />
          </div>
          <DialogFooter className="mt-2">
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 animate-spin" size={16} />{" "}
                  Creating...
                </>
              ) : (
                "Create"
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default NewProjectButton;
