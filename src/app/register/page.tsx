"use client";

import { useState , useEffect} from "react";
import { registerApi } from "@/src/app/auth/User/UserApi";

import InputPhone from "@/src/components/Ui/login & register/InputPhone";
import InputPassword from "@/src/components/Ui/login & register/InputPassword";
import ButtonEnter from "@/src/components/Ui/login & register/ButtonEnter";
import { useRouter } from "next/navigation";

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
  const router = useRouter();




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
        if (confirmPassword.trim() != "" && password !== confirmPassword) {
          setErrorMessageConfirm("كلمة المرور غير متطابقة");
        }
        else {
          setErrorMessageConfirm("");
        }
        if (
          phone.length < 11 ||
          password.trim() === "" ||
          !hasLettersAndNumbers ||
          password.length < 8 ||
          fullName.trim() === "" ||
          confirmPassword.trim() === "" ||
          password !== confirmPassword ||
          role === 0 ||
          gender == 5
        ) {
          setDataEmpty(true);
        } else {
          setDataEmpty(false);
          setErrorMessage("");
        }
      };
      checkDataEmpty();
    }, [phone, password, confirmPassword, fullName, role,gender]);
  const handleSubmit = async () => {

    setLoading(true);
    if (password !== confirmPassword) {
      alert("كلمة المرور غير متطابقة");
      setLoading(false);
      return;
    }

    const data = {
      fullName,
      phone,
      password,
      role,
      gender
    };

    const result = await registerApi(data);
    if (result == null) return;
    if (result < 206) {
        router.push("/login");
    } else {
      alert("حدث خطأ أثناء إنشاء الحساب");
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
      py-10
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
          gap-5
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
          إنشاء حساب
        </h1>

        <div className="flex flex-col gap-2">
          <label className="text-right text-[#432E1A] font-semibold">
            الاسم الكامل
          </label>

          <input
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="ادخل الاسم الكامل"
            className="
              h-12
              rounded-xl
              bg-[#EFE1D1]
              border
              border-[#432E1A]
              px-4
              outline-none
            "
          />
        </div>

        <InputPhone value={phone} setValue={setPhone} />

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
          placeholder="اعد كتابة كلمة المرور"
          errorMessage={errorMessageConfirm}
        />

        {/* Role */}
        <div className="flex flex-col gap-2">
          <label className="text-right text-[#432E1A] font-semibold">
            نوع الحساب
          </label>

          <select
            value={role}
            required
            onChange={(e) => setRole(Number(e.target.value))}
            className="
              h-12
              rounded-xl
              bg-[#EFE1D1]
              border
              border-[#432E1A]
              px-4
              outline-none
            "
          >
            <option disabled  hidden value={0}>اختار نوع الحساب</option>
            <option value={1}>مستخدم</option>
            <option value={2}>سائق</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-right text-[#432E1A] font-semibold">
            حدد الجنس
          </label>

          <select
            value={gender}
            required
            onChange={(e) => setGender(Number(e.target.value))}
            className="
              h-12
              rounded-xl
              bg-[#EFE1D1]
              border
              border-[#432E1A]
              px-4
              outline-none
            "
          >
            <option disabled  hidden value={5}>اختار نوع الجنس</option>
            <option value={0}>ذكر</option>
            <option value={1}>انثى</option>
          </select>
        </div>

        <ButtonEnter
          loading={loading}
          text="إنشاء حساب"
          onClick={ handleSubmit}
           dataEmpty={dataEmpty}
          
        />
      </div>
    </main>
  );
}
