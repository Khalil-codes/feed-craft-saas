"use client";

import { Badge } from "@/components/ui/badge";
import { feedbacks } from "@/db/schema";
import { cn } from "@/lib/utils";
import { ColumnDef, Column } from "@tanstack/react-table";
import { InferSelectModel } from "drizzle-orm";
import { ArrowUpDown } from "lucide-react";
import { format } from "date-fns";

export const columns: ColumnDef<InferSelectModel<typeof feedbacks>>[] = [
  {
    accessorKey: "user_name",
    id: "name",
    header: "Name",
    cell: ({ getValue }) => {
      const value = getValue<string>();
      return <span className="whitespace-nowrap">{value}</span>;
    },
    footer: (info) => info.column.id,
  },
  {
    accessorKey: "user_email",
    header: ({ column }) => {
      return <ColumnHeader column={column} title="Email" />;
    },
    id: "email",
    footer: (info) => info.column.id,
  },
  {
    accessorKey: "rating",
    header: "Rating",
    id: "rating",
    cell: ({ getValue }) => {
      const value = getValue<number>();
      return <Badge variant="secondary">{value}</Badge>;
    },
    footer: (info) => info.column.id,
  },
  {
    accessorKey: "feedback",
    header: () => <span className="block w-[250px]">Feedback</span>,
    id: "feedback",
    footer: (info) => info.column.id,
    size: 400,
  },
  {
    accessorKey: "created_at",
    header: "Date",
    id: "date",
    footer: (info) => info.column.id,
    cell: ({ getValue }) => {
      const value = getValue<string>();
      return (
        <span suppressHydrationWarning className="whitespace-nowrap">
          {format(new Date(value), "dd-MM-yyyy HH:mm a")}
        </span>
      );
    },
  },
];

interface ColumnHeaderProps<TData, TValue>
  extends React.HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>;
  title: string;
}

function ColumnHeader<TData, TValue>({
  column,
  title,
  className,
}: ColumnHeaderProps<TData, TValue>) {
  if (!column.getCanSort()) {
    return <div className={cn(className)}>{title}</div>;
  }
  return (
    <div className="flex items-center gap-2">
      <span>{title}</span>
      {column.getIsSorted() === "asc" ? (
        <ArrowUpDown className="h-4 w-4" />
      ) : column.getIsSorted() === "desc" ? (
        <ArrowUpDown className="h-4 w-4 rotate-180" />
      ) : null}
    </div>
  );
}
