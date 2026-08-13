export default function WhatAppSection({
  phoneNumber,
}: {
  phoneNumber: string;
}) {
  return (
    <a
      href={`https://wa.me/${phoneNumber.replace(/\D/g, "")}`}
      target="_blank"
      rel="noopener noreferrer"
className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#5B3F22] px-5 py-3 font-bold text-[#EFE1D1] shadow-md transition hover:bg-[#432E1A]"    >
      <span className="text-xl">💬</span>
      <span>تواصل عبر WhatsApp</span>
    </a>
  );
}