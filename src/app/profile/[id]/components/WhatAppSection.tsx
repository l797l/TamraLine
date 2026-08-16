import { MessageCircle } from "lucide-react";

export default function WhatAppSection({
  phoneNumber,
}: {
  phoneNumber: string;
}) {
  return (
    <a
      href={`https://wa.me/964${phoneNumber.replace(/\D/g, "").slice(1)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#5B3F22] px-5 py-3 font-bold text-[#EFE1D1] shadow-md transition hover:bg-[#432E1A]"
    >
      <MessageCircle className="h-5 w-5" />
      <span> WhatsApp تواصل عبر</span>
    </a>
  );
}