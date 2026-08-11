"use client";

import { useEffect, useState } from "react";

import InputPassword from "@/src/components/Ui/login & register/InputPassword";
import InputPhone from "@/src/components/Ui/login & register/InputPhone";
import { loginApi } from "@/src/app/auth/User/UserApi";
import { useRouter } from "next/navigation";
import ButtonEnter from "@/src/components/Ui/login & register/ButtonEnter";

export default function Login() {
  const [phone, setPhone] = useState("07");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [dataEmpty, setDataEmpty] = useState(true);

  useEffect(() => {
    const checkDataEmpty = () => {
      const hasLettersAndNumbers = /^(?=.*[A-Za-z])(?=.*\d).+$/.test(password);

      if (password.trim() != "" && !hasLettersAndNumbers) {
        setErrorMessage("يجب أن تحتوي كلمة المرور على أحرف وأرقام");
      } else {
        if (password.trim() != "" && password.length < 8) {
          setErrorMessage("يجب أن تكون كلمة المرور أكثر من 8 أحرف");
        } else {
          setErrorMessage("");
        }
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
        setErrorMessage("");
      }
    };
    checkDataEmpty();
  }, [phone, password]);
  useEffect(() => {
    const userId = localStorage.getItem("userId");

    if (userId !== null && userId !== "") {
      router.push(`/profile/${userId}`);
    }
  }, [router]);
  const handleSubmit = async () => {
    setLoading(true);
    const data = {
      phone,
      password,
    };

    const result = await loginApi(data);
    if (result == null) return;
    if (result < 206) {
      const userId = localStorage.getItem("userId");
      if (userId !== null) {
        window.dispatchEvent(new Event("auth-change"));

        router.push(`/profile/${userId}`);
      } else {
        console.log("userId is null");
      }
    } else {
      setPassword("");
      setLoading(false);
      setErrorMessage("رقم الهاتف أو كلمة المرور غير صحيحة");
    }
  };

  return (
    <main
      className="
      min-h-screen
      flex
      items-center
      justify-center
      bg-[#EFE1D1]
      px-5
    "
    >
      <div
        className="
          w-full
          max-w-md
          bg-white
          rounded-2xl
          shadow-lg
          p-8
          flex
          flex-col
          gap-6
        "
      >
        <h1
          className="
          text-3xl
          font-bold
          text-center
          text-[#432E1A]
        "
        >
          تسجيل الدخول
        </h1>

        <InputPhone value={phone} setValue={setPhone} />

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
      </div>
    </main>
  );
}
