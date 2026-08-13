"use client";

import { GetUser, UpdateUser } from "@/src/app/auth/User/UserApi";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function EditProfilePage() {
  const params = useParams();
  const router = useRouter();

  const id = params.id as string;

  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState(0);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadingdata = async () => {
      setLoading(true);

      const result = await GetUser();
      setFullName(result.fullName);
      setPhoneNumber(result.phoneNumber);
      setGender(result.gender);

      setLoading(false);
    };
    loadingdata();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);

      await UpdateUser(fullName, phoneNumber, gender);

      alert("تم حفظ بيانات الحساب بنجاح");

      router.push(`/profile/${id}`);
    } catch (error) {
      console.error("Get user error:", error);

      alert("حدث خطأ أثناء تحميل بيانات الحساب");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#EFE1D1] px-4 py-10">
      <div className="mx-auto max-w-3xl">
        <div className="rounded-3xl bg-[#432E1A] p-6 shadow-xl sm:p-8" dir="rtl">
          <h1 className="text-3xl font-bold text-[#EFE1D1]">
            تعديل بيانات الحساب
          </h1>

          <p className="mt-2 text-[#EFE1D1]/60">
            قم بتعديل معلومات حسابك الشخصية
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div>
              <label className="mb-2 block text-sm text-[#EFE1D1]/70">
                الاسم الكامل
              </label>

              <input
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full rounded-2xl bg-[#5B3F22] px-4 py-3 text-[#EFE1D1] outline-none placeholder:text-[#EFE1D1]/40 focus:ring-2 focus:ring-[#EFE1D1]"
                placeholder="الاسم الكامل"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-[#EFE1D1]/70">
                رقم الهاتف
              </label>
              <input
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="cursor-not-allowed w-full rounded-2xl bg-[#5B3F22] px-4 py-3 text-[#EFE1D1] outline-none focus:ring-2 focus:ring-[#EFE1D1]"
                placeholder="07xxxxxxxxx"
                disabled
              />
              <div
                dir="rtl"
                className="mt-3 flex items-start gap-3 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-right text-red-400"
              >
                <span className="text-xl">⚠️</span>

                <p className="text-sm leading-6">
                  عذرًا، لا يمكنك تغيير رقم الهاتف في الوقت الحالي.
                  <br />
                  إذا كنت تريد تغييره، يرجى التواصل مع الدعم.
                </p>
              </div>{" "}
            </div>

            <div>
              <label className="mb-2 block text-sm text-[#EFE1D1]/70">
                الجنس
              </label>

              <select
                value={gender}
                onChange={(e) => setGender(Number(e.target.value))}
                className="w-full rounded-2xl bg-[#5B3F22] px-4 py-3 cursor-pointer text-[#EFE1D1] outline-none focus:ring-2 focus:ring-[#EFE1D1]"
              >
                <option value={1}>أنثى</option>
                <option value={0}>ذكر</option>
              </select>
            </div>

            <div className="flex flex-col gap-3 pt-4 sm:flex-row">
              <button
                type="submit"
                disabled={loading}
                className="flex-1 cursor-pointer rounded-2xl bg-[#EFE1D1] px-6 py-3 font-bold text-[#432E1A] transition hover:bg-white disabled:opacity-50"
              >
                {loading ? "جاري الحفظ..." : "حفظ التعديلات"}
              </button>

              <button
                type="button"
                onClick={() => router.back()}
                className="flex-1 rounded-2xl bg-[#5B3F22] px-6 py-3 font-bold text-[#EFE1D1] transition hover:bg-[#6B4A2A]
                cursor-pointer"
              >
                إلغاء
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
