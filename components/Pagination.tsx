import Link from 'next/link';

export default function Pagination({
  total,
  currentPage,
}: {
  total: number;
  currentPage: number;
}) {
  const totalPages = Math.max(1, Math.ceil(total / 15)); // Ensure at least 1 page

  // Display a maximum of 5 pages around the current page
  const range = 7;
  const startPage = Math.max(1, currentPage - Math.floor(range / 2));
  const endPage = Math.min(totalPages, currentPage + Math.floor(range / 2));

  return (
    <div className="flex justify-center my-14 space-x-1">
      {/* First Button */}
      {currentPage > 1 && (
        <Link
          href={`?page=1`}
          className="px-4 py-2 border rounded-md text-sm text-gray-700 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-700 hover:bg-gray-200"
        >
          First
        </Link>
      )}

      {/* Previous Button */}
      {currentPage > 1 && (
        <Link
          href={`?page=${currentPage - 1}`}
          className="px-4 py-2 border rounded-md text-sm text-gray-700 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-700 hover:bg-gray-200"
        >
          Previous
        </Link>
      )}

      {/* Page Numbers */}
      {startPage > 1 && (
        <Link
          href={`?page=1`}
          className="px-4 py-2 border rounded-md text-sm text-gray-700 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-700 hover:bg-gray-200"
        >
          1
        </Link>
      )}
      {startPage > 2 && (
        <span className="px-4 py-2 mx-1 border rounded-md text-sm text-gray-700 dark:text-gray-300 dark:border-gray-600 dark:bg-gray-800">
          ...
        </span>
      )}
      {[...Array(endPage - startPage + 1)].map((_, index) => (
        <Link
          key={startPage + index}
          href={`?page=${startPage + index}`}
          className={`px-4 py-2 mx-1 border rounded-md text-sm ${
            currentPage === startPage + index
              ? 'bg-gray-200 dark:bg-gray-700'
              : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
          }`}
        >
          {startPage + index}
        </Link>
      ))}
      {endPage < totalPages - 1 && (
        <span className="px-4 py-2 mx-1 border rounded-md text-sm text-gray-700 dark:text-gray-300 dark:border-gray-600 dark:bg-gray-800">
          ...
        </span>
      )}
      {endPage < totalPages && (
        <Link
          href={`?page=${totalPages}`}
          className="px-4 py-2 border rounded-md text-sm text-gray-700 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-700 hover:bg-gray-200"
        >
          {totalPages}
        </Link>
      )}

      {/* Next Button */}
      {currentPage < totalPages && (
        <Link
          href={`?page=${currentPage + 1}`}
          className="px-4 py-2 border rounded-md text-sm text-gray-700 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-700 hover:bg-gray-200"
        >
          Next
        </Link>
      )}

      {/* Last Button */}
      {currentPage < totalPages && (
        <Link
          href={`?page=${totalPages}`}
          className="px-4 py-2 border rounded-md text-sm text-gray-700 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-700 hover:bg-gray-200"
        >
          Last
        </Link>
      )}
    </div>
  );
}
