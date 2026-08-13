"use client";

import InputPhone from "@/src/components/Ui/login & register/InputPhone";
import type { ChangeEvent, Dispatch, SetStateAction } from "react";


interface PhoneFormProps {
  phone: string;
  setPhone: Dispatch<SetStateAction<string>>;
  onNext: () => void;
  loading: boolean;
  messageError:string;
}

export default function PhoneForm({
  phone,
  setPhone,
  onNext,
  loading,
  messageError
}: PhoneFormProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value.replace(/\D/g, ""));
  };

  const handleSubmit = () => {
    if (phone.length < 11) return;

    onNext();
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-[#432E1A]">
          رقم الهاتف
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          أدخل رقم الهاتف المرتبط بحسابك
        </p>
      </div>

         <InputPhone value={phone} setValue={setPhone} />

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
      </div>
      }
      <button
        type="button"
        onClick={handleSubmit}
        disabled={phone.length < 11 || loading}
        className="w-full bg-[#432E1A] text-white py-3 rounded-xl font-bold disabled:opacity-50 cursor-pointer"
        
      >
        {loading? "....حار ارسال الكود" :"إرسال كود التحقق"}
      </button>
    </div>
  );
}