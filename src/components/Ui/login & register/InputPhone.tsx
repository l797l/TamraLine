"use client";

import { useState } from "react";
import Image from "next/image";

type InputPhoneProps = {
  value: string;
  setValue: (value: string) => void;
};

export default function InputPhone({ value, setValue }: InputPhoneProps) {
  const [error, setError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let phone = e.target.value;

    phone = phone.replace(/\D/g, "");

    if (!phone.startsWith("07")) {
      phone = "07";
    }

    if (phone.length > 11) {
      phone = phone.slice(0, 11);
    }

    setValue(phone);

    // التحقق
    if (phone.length === 11 && phone.startsWith("07")) {
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <div className="w-full flex flex-col gap-2">

      <label className="text-[#432E1A] font-semibold text-right">
        رقم الهاتف
      </label>

      <div
        className={`
          flex
          items-center
          bg-[#EFE1D1]
          rounded-xl
          border-2
          h-12
          transition
          ${error ? "border-red-500" : "border-[#432E1A]"}
        `}
      >

        <div className="shrink-0 border-l border-[#432E1A]/20 px-3">
            <Image
              src="/IQ-Flag.svg"
              alt="Iraq"
              width={28}
              height={20}
              className="block h-5 w-7 object-contain"
            />
      </div>

        <input
          value={value}
          onChange={handleChange}
          type="tel"
          placeholder="07700000000"
          className="
            flex-1
            bg-transparent
            outline-none
            px-4
            text-[#432E1A]
          "
        />

      </div>

      {error && (
        <p className="text-red-500 text-sm  text-right">
          يجب أن يبدأ الرقم بـ 07 ويتكون من 11 رقم
        </p>
      )}

    </div>
  );
}