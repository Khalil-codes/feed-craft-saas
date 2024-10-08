import { db } from "@/db";
import { projects } from "@/db/schema";
import { auth } from "@clerk/nextjs/server";
import { and, eq } from "drizzle-orm";

export const getProjectById = async (id: string) => {
  try {
    const userId = auth().userId;
    if (!userId) {
      throw new Error("Unauthorized");
    }
    const project = await db
      .select()
      .from(projects)
      .where(and(eq(projects.id, id), eq(projects.user_id, userId!)));

    return project[0];
  } catch (error) {
    console.log(error);
    return null;
  }
};
