"use client";

import type { ChangeEvent, Dispatch, SetStateAction } from "react";

interface VerifyCodeFormProps {
  code: string;
  setCode: Dispatch<SetStateAction<string>>;
  onNext: () => void;
  loading:boolean,
  messageError:string
}

export default function VerifyCodeForm({
  code,
  setCode,
  onNext,
  loading,
  messageError
}: VerifyCodeFormProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    setCode(value.slice(0, 6));
  };

  const handleSubmit = () => {
    if (code.length !== 6) return;

    onNext();
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-[#432E1A]">
          رمز التحقق
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          أدخل رمز التحقق المرسل إلى بوت التليجرام
        </p>
      </div>

      <input
        type="text"
        inputMode="numeric"
        maxLength={6}
        value={code}
        onChange={handleChange}
        placeholder="00000000"
        className="w-full border border-gray-300 rounded-xl px-4 py-4 outline-none focus:border-[#432E1A] text-center text-2xl tracking-[0.5em]"
      />

      <p className="text-xs text-gray-500 text-center">
        {code.length}/6
      </p>
      {messageError&&
      <div className="mt-3 flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700" dir="rtl">
        <svg
          className="h-5 w-5 shrink-0 text-red-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>

        <p>{messageError}</p>
      </div>}
      <button
        type="button"
        onClick={handleSubmit}
        disabled={code.length !== 6|| loading}
        className="w-full bg-[#432E1A] text-white py-3 rounded-xl font-bold disabled:opacity-50"
      >
       {loading?  "جار التاكد من الرمز":"تأكيد الرمز"}
      </button>
    </div>
  );
}