import { db } from "@/db";
import { feedbacks, projects } from "@/db/schema";
import { auth } from "@clerk/nextjs/server";
import { and, count, eq } from "drizzle-orm";

export const getProjects = async () => {
  try {
    const userId = auth().userId;
    if (!userId) {
      throw new Error("Unauthorized");
    }
    const result = await db
      .select()
      .from(projects)
      .where(eq(projects.user_id, userId!));
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getFeedbacksByProjectId = async (id: string, page = 1) => {
  try {
    const userId = auth().userId;
    if (!userId) {
      throw new Error("Unauthorized");
    }
    const result = await db.query.feedbacks.findMany({
      limit: 10,
      offset: (page - 1) * 10,
      where: eq(feedbacks.project_id, id),
      orderBy: ({ created_at }, { desc }) => desc(created_at),
    });

    const feedbackCountResult = await db
      .select({ count: count() })
      .from(feedbacks)
      .where(eq(feedbacks.project_id, id));

    const total = feedbackCountResult[0].count;

    if (!result) {
      throw new Error("Project not found");
    }

    return {
      feedbacks: result,
      total,
      hasNext: total > (page - 1) * 10 + result.length,
    };
  } catch (error) {
    console.log(error);
    return null;
  }
};

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
