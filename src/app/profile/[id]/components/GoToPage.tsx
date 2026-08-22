import Link from "next/link";

export default function GoToPage({
  Role,
}: {
  Role: number;
}) {
  const isAdmin = Role === 3;

  return (
    <Link
      href={isAdmin ? "/admin/posts" : "/Posts"}
      className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#5B3F22] px-5 py-3 font-bold text-[#EFE1D1] shadow-md transition hover:bg-[#432E1A]"
    >
      <span>
        {isAdmin ? "الانتقال إلى صفحة الأدمن" : "الانتقال إلى صفحة الرحلات"}
      </span>
    </Link>
  );
}