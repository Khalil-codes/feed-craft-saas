import { db } from "@/db";
import { feedbacks, projects } from "@/db/schema";
import { eq } from "drizzle-orm";
import { headers as nextHeaders } from "next/headers";

type RequestBody = {
  name: string;
  email: string;
  feedback: string;
  rating: string;
  project_id: string;
};

const isDev = process.env.NODE_ENV !== "production";

export const POST = async (request: Request) => {
  const body: RequestBody = await request.json();
  const headers = nextHeaders();
  const { email, feedback, rating, name, project_id } = body;

  try {
    if (feedback.length >= 100) {
      throw new Error("Feedback is too long");
    }

    if (!email || !feedback || !name || !project_id) {
      throw new Error("Invalid Body");
    }

    if (parseInt(rating) < 1 || parseInt(rating) > 5) {
      throw new Error("Invalid Rating");
    }

    const project = await db.query.projects.findFirst({
      columns: { url: true },
      where: eq(projects.id, project_id),
    });

    if (
      !isDev &&
      (!project || new URL(project.url).origin !== headers.get("origin"))
    ) {
      throw new Error("Invalid Project/URL");
    }

    const result = await db
      .insert(feedbacks)
      .values({
        user_name: name,
        user_email: email,
        rating: parseInt(rating),
        project_id,
        feedback,
      })
      .returning({ id: feedbacks.id });

    return Response.json({
      id: result[0].id,
      success: true,
    });
  } catch (err) {
    const error = err as Error;
    return Response.json(
      { error: error.message, success: false },
      {
        status: 400,
      }
    );
  }
};
