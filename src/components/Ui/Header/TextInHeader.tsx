import Link from "next/link";

type TextInHeaderProps = {
  text: string;
  className?: string;
  active?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  toLink: string
};

export default function TextInHeader({
  text,
  className = "",
  active = false,
  disabled = false,
  onClick,
  toLink
}: TextInHeaderProps) {
  return (
   <Link  href={toLink}>
    <p
      onClick={!disabled ? onClick : undefined}
      className={`
        relative
        cursor-pointer
        select-none
        text-[1.25rem]
        font-medium
        transition-all
        duration-300
        ease-in-out

        ${
          active
            ? "text-white after:w-full"
            : "text-[#EFE1D1] after:w-0 hover:text-white hover:after:w-full"
        }

        after:absolute
        after:left-0
        after:-bottom-1
        after:h-0.5
        after:bg-[#EFE1D1]
        after:transition-all
        after:duration-300

        ${
          disabled
            ? "cursor-not-allowed opacity-50"
            : ""
        }

        ${className}
      `}
    >
      {text}
    </p>
    </Link>
  );
}