"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import InputPassword from "@/src/components/Ui/login & register/InputPassword";
import InputPhone from "@/src/components/Ui/login & register/InputPhone";
import ButtonEnter from "@/src/components/Ui/login & register/ButtonEnter";
import { loginApi } from "@/src/app/auth/User/UserApi";

export default function Login() {
  const [phone, setPhone] = useState("07");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [dataEmpty, setDataEmpty] = useState(true);

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
      phone.length < 11 ||
      password.trim() === "" ||
      !hasLettersAndNumbers ||
      password.length < 8
    ) {
      setDataEmpty(true);
    } else {
      setDataEmpty(false);
    }
  }, [phone, password]);

  useEffect(() => {
    const userId = localStorage.getItem("userId");

    if (userId) {
      router.push(`/profile/${userId}`);
    }
  }, [router]);

  const handleSubmit = async () => {
    if (dataEmpty || loading) return;

    setLoading(true);
    setErrorMessage("");

    try {
      const data = {
        phone,
        password,
      };

      const result = await loginApi(data);

      if (result == null) {
        setLoading(false);
        setErrorMessage("رقم الهاتف أو كلمة المرور غير صحيحة");
        return;
      }

      if (result >= 200 && result < 300) {
        const userId = localStorage.getItem("userId");

        if (userId) {
          window.dispatchEvent(new Event("auth-change"));
          router.push(`/profile/${userId}`);
        } else {
          setLoading(false);
        setErrorMessage("رقم الهاتف أو كلمة المرور غير صحيحة");
        }
      } else {
        setLoading(false);
        setPassword("");
        setErrorMessage("رقم الهاتف أو كلمة المرور غير صحيحة");
      }
    } catch (error) {
      console.error("Login error:", error);
      setLoading(false);
      setErrorMessage("حدث خطأ أثناء الاتصال بالخادم");
    }
  };

  return (
    <main
      className="
        flex min-h-screen items-center justify-center
        bg-[#EFE1D1] px-5
      "
    >
      <div
        className="
          flex w-full max-w-md flex-col gap-6
          rounded-2xl bg-white p-8 shadow-lg
        "
      >
        <h1
          className="
            text-center text-3xl font-bold text-[#432E1A]
          "
        >
          تسجيل الدخول
        </h1>

        <InputPhone
          value={phone}
          setValue={setPhone}
        />

        <InputPassword
          value={password}
          setValue={setPassword}
          errorMessage={errorMessage}
          placeholder="أدخل كلمة المرور"
        />

        <ButtonEnter
          loading={loading}
          text="دخول"
          onClick={handleSubmit}
          dataEmpty={dataEmpty}
        />

        <div
          className="flex flex-col items-center gap-3"
          dir="rtl"
        >
          <button
            type="button"
            onClick={() => router.push("/forgot-password")}
            className="
              cursor-pointer text-sm text-[#432E1A]
              hover:underline
            "
          >
            هل نسيت كلمة السر؟
          </button>

          <p className="text-sm text-gray-600">
            ليس لديك حساب؟{" "}
            <button
              type="button"
              onClick={() => router.push("/register")}
              className="
                cursor-pointer font-bold text-[#432E1A]
                hover:underline
              "
            >
              إنشاء حساب
            </button>
          </p>
        </div>
      </div>
    </main>
  );
}