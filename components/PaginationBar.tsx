"use client";
import { useState } from "react";
import { DEFAULT_PAGE, ROOMS_PER_PAGE } from "@/config";
import useSetQueryParams from "@/hooks/useSetQueryParams";
import { Button } from "./ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";

export const PaginationBar = ({
  searchParams,
  totalRooms,
}: PaginationBarProps) => {
  const [page, setPage] = useState(Number(searchParams?.page) || 1);
  const setQueryParams = useSetQueryParams();

  const totalPages = Math.ceil(totalRooms / ROOMS_PER_PAGE);

  const handlePageChange = (newPage: number) => {
    setQueryParams({ page: newPage });
    setPage(newPage);
  };

  return (
    <Pagination className="bg-purple-3/10 dark:bg-dark-3 border dark:border-dark-2 border-purple-2 py-2.5 px-4 rounded-xl shadow-sm">
      <PaginationContent>
        <PaginationItem>
          <Button
            variant="secondary"
            onClick={() => handlePageChange(Math.max(1, page - 1))}
            disabled={page === DEFAULT_PAGE}
          >
            Previous
          </Button>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink isActive className="dark:bg-dark-1 dark:text-dark-4">
            {page}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <Button
            variant="secondary"
            onClick={() => handlePageChange(page + 1)}
            disabled={page === totalPages}
          >
            Next
          </Button>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
