import { relations } from "drizzle-orm";
import {
  integer,
  pgTable,
  text,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";

export const projects = pgTable("projects", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  url: text("url").notNull(),
  description: text("description"),
  user_id: varchar("user_id").notNull(),
  created_at: timestamp("created_at", { mode: "string" })
    .notNull()
    .defaultNow(),
  updated_at: timestamp("updated_at", { mode: "string" }).defaultNow(),
});

export const projectsRelations = relations(projects, ({ many }) => {
  return {
    feedbacks: many(feedbacks),
  };
});

export const feedbacks = pgTable("feedbacks", {
  id: uuid("id").primaryKey().defaultRandom(),
  project_id: uuid("project_id")
    .references(() => projects.id, { onDelete: "cascade" })
    .notNull(),
  user_name: text("user_name").notNull(),
  user_email: text("user_email").notNull(),
  rating: integer("rating").notNull().default(0),
  feedback: text("feedback").notNull(),
  created_at: timestamp("created_at", { mode: "string" })
    .notNull()
    .defaultNow(),
});

export const feedbacksRelations = relations(feedbacks, ({ one }) => {
  return {
    projects: one(projects, {
      fields: [feedbacks.project_id],
      references: [projects.id],
    }),
  };
});
