import Link from "next/link";

type EditButtonProps = {
  href: string;
  children?: React.ReactNode;
  small?: boolean;
};

export default function EditButton({
  href,
  children = "✏️ تعديل",
  small = false,
}: EditButtonProps) {
  return (
    <Link
      href={href}
      className={
        small
          ? "text-sm text-[#EFE1D1]/70 transition hover:text-white"
          : "shrink-0 rounded-xl bg-[#5B3F22] px-4 py-2 text-sm font-semibold text-[#EFE1D1] transition hover:bg-[#6B4A2A]"
      }
    >
      {children}
    </Link>
  );
}