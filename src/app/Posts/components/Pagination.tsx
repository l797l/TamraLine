"use client";

type PaginationProps = {
  currentPage: number;
  hasNextPage: boolean;
  onPageChange: (page: number) => void;
};

export default function Pagination({
  currentPage,
  hasNextPage,
  onPageChange,
}: PaginationProps) {
  if (currentPage === 1 && !hasNextPage) {
    return null;
  }

  return (
    <div className="mt-8 flex items-center justify-center gap-4">


      <button
        type="button"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="rounded-xl bg-[#432E1A] px-5 py-3 text-[#EFE1D1] transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
      >
        السابق
      </button>


      <div className="rounded-xl bg-[#EFE1D1] px-5 py-3 font-bold text-[#432E1A]">
        {currentPage}
      </div>


      <button
        type="button"
        disabled={!hasNextPage}
        onClick={() => onPageChange(currentPage + 1)}
        className="rounded-xl bg-[#432E1A] px-5 py-3 text-[#EFE1D1] transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
      >
        التالي
      </button>

    </div>
  );
}
