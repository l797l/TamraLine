"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { registerApi } from "@/src/app/auth/User/UserApi";
import InputPhone from "@/src/components/Ui/login & register/InputPhone";
import InputPassword from "@/src/components/Ui/login & register/InputPassword";
import ButtonEnter from "@/src/components/Ui/login & register/ButtonEnter";
import { setToken } from "../auth/auth";

export default function Register() {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("07");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState(0);
  const [gender, setGender] = useState(5);

  const [loading, setLoading] = useState(false);
  const [dataEmpty, setDataEmpty] = useState(true);

  const [errorMessage, setErrorMessage] = useState("");
  const [errorMessageConfirm, setErrorMessageConfirm] = useState("");
  const [serverError, setServerError] = useState("");

  const router = useRouter();

  useEffect(() => {
    const hasLettersAndNumbers =
      /^(?=.*[A-Za-z])(?=.*\d).+$/.test(password);

    if (password.trim() !== "" && !hasLettersAndNumbers) {
      setErrorMessage("يجب أن تحتوي كلمة المرور على أحرف وأرقام");
    } else if (password.trim() !== "" && password.length < 8) {
      setErrorMessage("يجب أن تكون كلمة المرور 8 أحرف على الأقل");
    } else {
      setErrorMessage("");
    }

    if (
      confirmPassword.trim() !== "" &&
      password !== confirmPassword
    ) {
      setErrorMessageConfirm("كلمة المرور غير متطابقة");
    } else {
      setErrorMessageConfirm("");
    }

    const isEmpty =
      phone.length < 11 ||
      fullName.trim() === "" ||
      password.trim() === "" ||
      confirmPassword.trim() === "" ||
      !hasLettersAndNumbers ||
      password.length < 8 ||
      password !== confirmPassword ||
      role === 0 ||
      gender === 5;

    setDataEmpty(isEmpty);
  }, [
    phone,
    password,
    confirmPassword,
    fullName,
    role,
    gender,
  ]);

  const handleSubmit = async () => {
    if (dataEmpty || loading) return;

    setServerError("");

    if (password !== confirmPassword) {
      setErrorMessageConfirm("كلمة المرور غير متطابقة");
      return;
    }

    setLoading(true);

    try {
      const data = {
        fullName,
        phone,
        password,
        role,
        gender,
      };

      const result = await registerApi(data);

      if (result == null) {
        setLoading(false);
        setServerError("حدث خطأ أثناء إنشاء الحساب");
        return;
      }

      if (result >= 200 && result < 300) {
        setLoading(false);
        router.push("/login");
        setToken("");
        localStorage.removeItem("userId");
      } else {
        setLoading(false);
        setServerError("حدث خطأ أثناء إنشاء الحساب");
      }
    } catch (error) {
      console.error("Register error:", error);
      setLoading(false);
      setServerError("حدث خطأ أثناء الاتصال بالخادم");
    }
  };

  return (
    <main
      className="
        flex min-h-screen items-center justify-center
        bg-[#EFE1D1] px-5 py-10
      "
    >
      <div
        className="
          flex w-full max-w-md flex-col gap-5
          rounded-2xl bg-white p-8 shadow-lg
        "
      >
        <h1
          className="
            text-center text-3xl font-bold
            text-[#432E1A]
          "
        >
          إنشاء حساب
        </h1>

        <div className="flex flex-col gap-2">
          <label
            className="
              text-right font-semibold
              text-[#432E1A]
            "
          >
            الاسم الكامل
          </label>

          <input
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="ادخل الاسم الكامل"
            className="
              h-12 rounded-xl
              border border-[#432E1A]
              bg-[#EFE1D1]
              px-4
              text-right
              outline-none
              focus:ring-2
              focus:ring-[#8B5E34]
            "
          />
        </div>

        <InputPhone
          value={phone}
          setValue={setPhone}
        />

        <InputPassword
          value={password}
          setValue={setPassword}
          title="كلمة المرور"
          errorMessage={errorMessage}
          placeholder="أدخل كلمة المرور"
        />

        <InputPassword
          value={confirmPassword}
          setValue={setConfirmPassword}
          title="تأكيد كلمة المرور"
          placeholder="أعد كتابة كلمة المرور"
          errorMessage={errorMessageConfirm}
        />

        <div className="flex flex-col gap-2">
          <label
            className="
              text-right font-semibold
              text-[#432E1A]
            "
          >
            نوع الحساب
          </label>

          <select
            value={role}
            required
            onChange={(e) => setRole(Number(e.target.value))}
            className="
              h-12 rounded-xl
              border border-[#432E1A]
              bg-[#EFE1D1]
              px-4
              text-right
              outline-none
              focus:ring-2
              focus:ring-[#8B5E34]
            "
          >
            <option disabled hidden value={0}>
              اختر نوع الحساب
            </option>

            <option value={1}>
              مستخدم
            </option>

            <option value={2}>
              سائق
            </option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label
            className="
              text-right font-semibold
              text-[#432E1A]
            "
          >
            حدد الجنس
          </label>

          <select
            value={gender}
            required
            onChange={(e) => setGender(Number(e.target.value))}
            className="
              h-12 rounded-xl
              border border-[#432E1A]
              bg-[#EFE1D1]
              px-4
              text-right
              outline-none
              focus:ring-2
              focus:ring-[#8B5E34]
            "
          >
            <option disabled hidden value={5}>
              اختر نوع الجنس
            </option>

            <option value={0}>
              ذكر
            </option>

            <option value={1}>
              أنثى
            </option>
          </select>
        </div>
          {serverError && (
            <p className="text-center text-sm font-medium text-red-600">
              {serverError}
            </p>
          )}
        <ButtonEnter
          loading={loading}
          text="إنشاء حساب"
          onClick={handleSubmit}
          dataEmpty={dataEmpty}
        />

        <div
          className="flex flex-col items-center gap-3"
          dir="rtl"
        >
          

          <p className="text-sm text-gray-600">
            هل لديك حساب؟{" "}

            <button
              type="button"
              onClick={() => router.push("/login")}
              className="
                cursor-pointer
                font-bold
                text-[#432E1A]
                hover:underline
              "
            >
              تسجيل دخول
            </button>
          </p>
        </div>
      </div>
    </main>
  );
}