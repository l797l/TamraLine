"use client";

import {
  useEffect,
  useState,
  type ChangeEvent,
  type Dispatch,
  type SetStateAction,
} from "react";

interface VerifyCodeFormProps {
  code: string;
  setCode: Dispatch<SetStateAction<string>>;
  onNext: () => void | Promise<void>;
  loading: boolean;
  messageError: string;
}

export default function VerifyCodeForm({
  code,
  setCode,
  onNext,
  loading,
  messageError,
}: VerifyCodeFormProps) {
  const [attempts, setAttempts] = useState(0);
  const [blockedUntil, setBlockedUntil] = useState<number | null>(null);
  const [remainingTime, setRemainingTime] = useState(0);

  useEffect(() => {
    if (!blockedUntil) return;

    const updateTimer = () => {
      const remaining = Math.max(
        0,
        Math.ceil((blockedUntil - Date.now()) / 1000)
      );

      setRemainingTime(remaining);

      if (remaining === 0) {
        setBlockedUntil(null);
        setAttempts(0);
      }
    };

    updateTimer();

    const timer = setInterval(updateTimer, 1000);

    return () => clearInterval(timer);
  }, [blockedUntil]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (blockedUntil) return;

    const value = e.target.value.replace(/\D/g, "");
    setCode(value.slice(0, 8));
  };

  const handleSubmit = async () => {
    if (code.length !== 8 || loading || blockedUntil) return;

      await onNext();

    

    const newAttempts = attempts + 1;
    setAttempts(newAttempts);

    setCode("");

    if (newAttempts >= 3) {
      const fiveMinutes = 2 * 60 * 1000;
      setBlockedUntil(Date.now() + fiveMinutes);
    }
  };

  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;

  const isBlocked = blockedUntil !== null;

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
        maxLength={8}
        value={code}
        onChange={handleChange}
        disabled={isBlocked}
        placeholder="00000000"
        className="
          w-full rounded-xl border border-gray-300
          px-4 py-4 text-center text-2xl
          tracking-[0.5em] outline-none
          focus:border-[#432E1A]
          disabled:cursor-not-allowed
          disabled:bg-gray-100
        "
      />

      <p className="text-center text-xs text-gray-500">
        {code.length}/8
      </p>

      {messageError && !isBlocked && (
        <div
          className="
            mt-3 flex items-center gap-2
            rounded-lg border border-red-200
            bg-red-50 px-4 py-3
            text-sm text-red-700
          "
          dir="rtl"
        >
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
      )}

      {isBlocked && (
        <div
          className="
            rounded-xl border border-red-200
            bg-red-50 px-4 py-4
            text-center text-sm text-red-700
          "
          dir="rtl"
        >
          <p className="font-bold">
            تم تجاوز عدد المحاولات المسموح بها
          </p>

          <p className="mt-1">
            حاول مرة أخرى بعد{" "}
            <span className="font-bold">
              {minutes}:{seconds.toString().padStart(2, "0")}
            </span>
          </p>
        </div>
      )}

      {!isBlocked && attempts > 0 && (
        <p
          className="text-center text-sm text-gray-500"
          dir="rtl"
        >
          المحاولات المتبقية: {3 - attempts}
        </p>
      )}

      <button
        type="button"
        onClick={handleSubmit}
        disabled={
          code.length !== 8 ||
          loading ||
          isBlocked
        }
        className="
          w-full rounded-xl
          bg-[#432E1A]
          py-3 font-bold text-white
          cursor-pointer
          disabled:cursor-not-allowed
          disabled:opacity-50
        "
      >
        {isBlocked
          ? "تم إيقاف المحاولات مؤقتًا"
          : loading
          ? "جار التاكد من الرمز"
          : "تأكيد الرمز"}
      </button>
    </div>
  );
}