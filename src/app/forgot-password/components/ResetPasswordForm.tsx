"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { UpdatePasswordApi } from "../../auth/User/UserApi";
import axios from "axios";
import { Eye, EyeOff } from "lucide-react";

interface ResetPasswordFormProps {
  phone: string;
  code: string;
}

export default function ResetPasswordForm({
  phone,
  code,
}: ResetPasswordFormProps) {
  const router = useRouter();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const UpdatePassword = async () => {
    setErrorMessage("");

    if (password.length < 8) {
      setErrorMessage("كلمة السر يجب أن تكون 8 أحرف على الأقل");
      return;
    }

    if (!/(?=.*[A-Za-z])(?=.*\d)/.test(password)) {
      setErrorMessage("يجب أن تحتوي كلمة السر على أحرف وأرقام");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("كلمتا السر غير متطابقتين");
      return;
    }

    try {
      setLoading(true);

      const result = await UpdatePasswordApi(phone, password);

      if (result.status < 300) {
        router.push("/login");
      }
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        setErrorMessage(
          error.response?.data?.message ?? "حدث خطأ أثناء تغيير كلمة السر"
        );
      } else {
        setErrorMessage("حدث خطأ أثناء تغيير كلمة السر");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-6" >
      <div className="text-center">
        <h1 className="text-3xl font-bold text-[#432E1A]">
          إعادة كلمة السر
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          أدخل كلمة السر الجديدة وقم بتأكيدها
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="كلمة السر الجديدة"
            className="
              w-full rounded-xl
              border border-gray-300
              px-4 py-3 pl-12
              outline-none
              focus:border-[#432E1A]
            "
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="
              absolute left-3 top-1/2
              -translate-y-1/2
              text-gray-500
              hover:text-[#432E1A]
            "
            aria-label={
              showPassword ? "إخفاء كلمة السر" : "إظهار كلمة السر"
            }
          >
            {showPassword ? (
              <EyeOff className="h-5 w-5" />
            ) : (
              <Eye className="h-5 w-5" />
            )}
          </button>
        </div>

        <div className="relative">
          <input
            type={showConfirmPassword ? "text" : "password"}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="تأكيد كلمة السر"
            className="
              w-full rounded-xl
              border border-gray-300
              px-4 py-3 pl-12
              outline-none
              focus:border-[#432E1A]
            "
          />

          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="
              absolute left-3 top-1/2
              -translate-y-1/2
              text-gray-500
              hover:text-[#432E1A]
            "
            aria-label={
              showConfirmPassword
                ? "إخفاء تأكيد كلمة السر"
                : "إظهار تأكيد كلمة السر"
            }
          >
            {showConfirmPassword ? (
              <EyeOff className="h-5 w-5" />
            ) : (
              <Eye className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {errorMessage && (
        <div
          className="
            flex items-center gap-2
            rounded-lg border border-red-200
            bg-red-50 px-4 py-3
            text-sm text-red-700
          "
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
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 01-18 0z"
            />
          </svg>

          <p>{errorMessage}</p>
        </div>
      )}

      <button
        type="button"
        onClick={UpdatePassword}
        disabled={loading}
        className="
          w-full rounded-xl
          bg-[#432E1A]
          py-3
          font-bold text-white
          transition
          hover:bg-[#5B3F22]
          disabled:opacity-50
        "
      >
        {loading ? "جاري الحفظ..." : "إعادة كلمة السر"}
      </button>
    </div>
  );
}