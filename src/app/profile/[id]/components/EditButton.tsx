import Link from "next/link";
import { Pencil } from "lucide-react";

type EditButtonProps = {
  href: string;
  children?: React.ReactNode;
  small?: boolean;
};

export default function EditButton({
  href,
  children,
  small = false,
}: EditButtonProps) {
  return (
    <Link
      href={href}
      className={
        small
          ? "inline-flex items-center gap-1.5 text-sm text-[#EFE1D1]/70 transition hover:text-white"
          : "inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#5B3F22] px-4 py-2 text-sm font-semibold text-[#EFE1D1] transition hover:bg-[#6B4A2A]"
      }
    >
      <Pencil className="h-4 w-4" />
      {children ?? "تعديل"}
    </Link>
  );
}