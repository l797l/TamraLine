"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { UpdatePasswordApi } from "../../auth/User/UserApi";
import axios from "axios";

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
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

const UpdatePassword= async()=>{

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

    try{
    setLoading(true)
   const result = await UpdatePasswordApi(phone,password);  

    if(result.status <300)
      router.push("/login")
   
    }catch(error:unknown){
      if(axios.isAxiosError(error))
 setErrorMessage(
        error.response?.data?.message ?? "هناك خطا في الكود"
      );    }
    finally{
       setLoading(false);

    }
   
  }
    

    
    

  return (
    <div className="flex flex-col gap-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-[#432E1A]">
          إعادة كلمة السر
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          أدخل كلمة السر الجديدة وقم بتأكيدها
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="كلمة السر الجديدة"
          className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-[#432E1A]"
        />

        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="تأكيد كلمة السر"
          className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-[#432E1A]"
        />
      </div>

       {errorMessage&&
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

        <p>{errorMessage}</p>
      </div>
      }

      <button
        type="button"
        onClick={UpdatePassword}
        disabled={loading}
        className="w-full bg-[#432E1A] text-white py-3 rounded-xl font-bold disabled:opacity-50"
      >
        {loading ? "جاري الحفظ..." : "إعادة كلمة السر"}
      </button>
    </div>
  );
}