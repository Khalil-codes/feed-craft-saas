import React from "react";
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
import { Plus } from "lucide-react";

const NewProjectButton = () => {
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
        <form className="flex flex-col gap-3">
          <div className="space-y-1">
            <Label className="font-semibold" htmlFor="name">
              Name
            </Label>
            <Input id="name" placeholder="Project name" />
          </div>
          <div className="space-y-1">
            <Label className="font-semibold" htmlFor="url">
              URL
            </Label>
            <Input id="url" placeholder="https://example.com" />
          </div>
          <div className="space-y-1">
            <Label className="font-semibold" htmlFor="description">
              Description
            </Label>
            <Textarea
              className="resize-none"
              id="description"
              rows={3}
              placeholder="Description (optional)"
            />
          </div>
          <DialogFooter className="mt-2">
            <Button type="submit">Create Project</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default NewProjectButton;
