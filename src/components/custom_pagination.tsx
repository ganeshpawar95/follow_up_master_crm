import React from "react";

interface CustomPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  maxVisiblePages?: number;
}

function getPageNumbers(current: number, total: number, maxVisible: number) {
  const pages = [];
  const half = Math.floor(maxVisible / 2);
  let start = Math.max(1, current - half);
  let end = Math.min(total, current + half);

  if (end - start + 1 < maxVisible) {
    if (start === 1) {
      end = Math.min(total, start + maxVisible - 1);
    } else if (end === total) {
      start = Math.max(1, end - maxVisible + 1);
    }
  }

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }
  return pages;
}

const CustomPagination: React.FC<CustomPaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  maxVisiblePages = 5,
}) => {
  const pages = getPageNumbers(currentPage, totalPages, maxVisiblePages);

  return (
    <div className="flex items-center justify-center p-4">
      <button
        className="flex size-10 items-center justify-center cursor-pointer"
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        aria-label="Previous"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18px"
          height="18px"
          fill="currentColor"
          viewBox="0 0 256 256"
        >
          <path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"></path>
        </svg>
      </button>
      {pages[0] > 1 && (
        <>
          <button
            className={`text-sm font-normal flex size-10 items-center justify-center text-white rounded-full cursor-pointer`}
            onClick={() => onPageChange(1)}
          >
            1
          </button>
          {pages[0] > 2 && (
            <span className="text-sm font-normal flex size-10 items-center justify-center text-white rounded-full">
              ...
            </span>
          )}
        </>
      )}
      {pages.map((page) => (
        <button
          key={page}
          className={`text-sm flex size-10 items-center justify-center rounded-full cursor-pointer ${
            page === currentPage
              ? "font-bold bg-[#2b3630] text-white"
              : "font-normal text-white"
          }`}
          onClick={() => onPageChange(page)}
          disabled={page === currentPage}
        >
          {page}
        </button>
      ))}
      {pages[pages.length - 1] < totalPages && (
        <>
          {pages[pages.length - 1] < totalPages - 1 && (
            <span className="text-sm font-normal flex size-10 items-center justify-center text-white rounded-full">
              ...
            </span>
          )}
          <button
            className={`text-sm font-normal flex size-10 items-center justify-center text-white rounded-full cursor-pointer`}
            onClick={() => onPageChange(totalPages)}
          >
            {totalPages}
          </button>
        </>
      )}
      <button
        className="flex size-10 items-center justify-center cursor-pointer"
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        aria-label="Next"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18px"
          height="18px"
          fill="currentColor"
          viewBox="0 0 256 256"
        >
          <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
        </svg>
      </button>
    </div>
  );
};

export default CustomPagination;
