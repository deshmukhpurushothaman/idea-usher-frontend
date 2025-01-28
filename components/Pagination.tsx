export default function Pagination({
  total,
  currentPage,
}: {
  total: number;
  currentPage: number;
}) {
  const totalPages = Math.ceil(total / 6);

  return (
    <div className="flex justify-center mt-4">
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          className={`mx-1 px-4 py-2 border rounded ${
            index + 1 === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
}
