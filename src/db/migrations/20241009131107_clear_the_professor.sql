ALTER TABLE "feedbacks" DROP CONSTRAINT "feedbacks_project_id_projects_id_fk";
--> statement-breakpoint
ALTER TABLE "feedbacks" ADD COLUMN "rating" integer DEFAULT 0 NOT NULL;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "feedbacks" ADD CONSTRAINT "feedbacks_project_id_projects_id_fk" FOREIGN KEY ("project_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
