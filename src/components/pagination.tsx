"use client";

import Link, { LinkProps } from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";

export const Pagination = ({
  currentPage,
  hasNext,
}: {
  currentPage: number;
  hasNext: boolean;
}) => {
  const pathname = usePathname();
  return (
    <div className="flex justify-end">
      <div className="flex items-center gap-2">
        <PaginationButton
          href={{ pathname, query: { page: currentPage - 1 } }}
          disabled={currentPage === 1}>
          Previous
        </PaginationButton>
        <PaginationButton
          href={{ pathname, query: { page: currentPage + 1 } }}
          disabled={!hasNext}>
          Next
        </PaginationButton>
      </div>
    </div>
  );
};

export const PaginationButton = ({
  href,
  children,
  disabled,
}: {
  href: LinkProps["href"];
  children: React.ReactNode;
  disabled?: boolean;
}) => {
  if (disabled) {
    return (
      <Button variant="outline" size="sm" disabled>
        {children}
      </Button>
    );
  }

  return (
    <Button variant="outline" size="sm" asChild>
      <Link href={href} scroll={false}>
        {children}
      </Link>
    </Button>
  );
};
