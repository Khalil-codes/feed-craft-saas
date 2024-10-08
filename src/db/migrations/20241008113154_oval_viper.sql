CREATE TABLE IF NOT EXISTS "projects" (
	"id" uuid PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"url" text NOT NULL,
	"description" text,
	"created_at" date DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updated_at" date DEFAULT CURRENT_TIMESTAMP
);
