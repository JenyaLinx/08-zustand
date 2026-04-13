"use client";

interface PaginationProps {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
}

export default function Pagination({
  page,
  totalPages,
  onChange,
}: PaginationProps) {
  return (
    <div>
      {Array.from({ length: totalPages }, (_, i) => {
        const currentPage = i + 1;

        return (
          <button
            key={currentPage}
            onClick={() => onChange(currentPage)}
            disabled={currentPage === page}
          >
            {currentPage}
          </button>
        );
      })}
    </div>
  );
}
