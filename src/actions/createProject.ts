"use server";

import { db } from "@/db";
import { projects } from "@/db/schema";
import { auth } from "@clerk/nextjs/server";

export async function createProject(formData: FormData) {
  const { userId } = auth();

  if (!userId) {
    throw new Error("Unauthorized");
  }

  const body = {
    name: formData.get("name") as string,
    description: formData.get("description") as string,
    url: formData.get("url") as string,
    user_id: userId,
  };

  if (!body.name || !body.url) {
    throw new Error("Name and URL are required");
  }

  const [result] = await db
    .insert(projects)
    .values(body)
    .returning({ insertedId: projects.id });

  return result;
}
