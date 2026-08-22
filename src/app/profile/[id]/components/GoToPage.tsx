import Link  from "next/link";

export default function GoToPage({
  Role,
}: {
  Role: number;
}) {
  return (
    <Link
    href={Role === 3 ? "/admin/posts" :"/Posts"}
      className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#5B3F22] px-5 py-3 font-bold text-[#EFE1D1] shadow-md transition hover:bg-[#432E1A]"
    >
      <span> {Role ===3 ? "الانتقال لصفحة الادمن" : "الانتقال لصفحة الرحلات"}</span>
    </Link>
  );
}