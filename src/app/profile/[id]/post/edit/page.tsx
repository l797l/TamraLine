"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { getProfile, updatePost } from "../../../../auth/post/postApi";

import { GetProfileDto } from "../../../../auth/post/postDto";
import { areasInf, universitiesInf } from "@/src/Information/information";


const mockAreas = areasInf


const mockUniversities = universitiesInf


export default function EditPostPage() {
  const params = useParams();
  const router = useRouter();

  const id = params.id as string;


  const [post, setPost] = useState<GetProfileDto | null>(null);

  const [nameCar, setNameCar] = useState("");

  const [description, setDescription] = useState("");

  const [universityId, setUniversityId] = useState<number>(0);

  const [shift, setShift] = useState<number>(0);

  const [governorateId, setGovernorateId] = useState<number>(1);

  const [areas, setAreas] = useState<number[]>([]);

  const [loading, setLoading] = useState(true);

  const [saving, setSaving] = useState(false);

  const [error, setError] = useState("");


  useEffect(() => {
    const loadProfile = async () => {
      const id = localStorage.getItem("userId")
      if(id)
      try {
        setLoading(true);
        setError("");

        const data = await getProfile(id);

        console.log("PROFILE DATA:", data);

        setPost(data);

        setNameCar(data.nameCar ?? "");

        setDescription(data.desciption ?? "");


        const university = mockUniversities.find(
        (item) => item.name === data.university
          );

setUniversityId(university?.id ?? 0);

        setGovernorateId(
          typeof data.governorate === "number" ? data.governorate : 1,
        );

        setShift(typeof data.shift === "number" ? data.shift : 0);

        const apiAreas = data.area ?? [];

        if (Array.isArray(apiAreas)) {
          const convertedAreas = apiAreas
            .map((area) => {
              if (typeof area === "number") {
                return area;
              }

              if (typeof area === "string") {
                const foundArea = mockAreas.find((item) => item.name === area);

                return foundArea?.id;
              }

              return undefined;
            })
            .filter((areaId): areaId is number => typeof areaId === "number");

          setAreas(convertedAreas);
        } else {
          setAreas([]);
        }
      } catch (error) {
        console.error("Get profile error:", error);

        setError("فشل في تحميل بيانات المنشور");
      } finally {
        setLoading(false);
      }
    };

    loadProfile();
  }, []);

  const toggleArea = (areaId: number) => {
    setAreas((current) => {
      if (current.includes(areaId)) {
        return current.filter((id) => id !== areaId);
      }

      return [...current, areaId];
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();


    if (!nameCar.trim()) {
      alert("يرجى إدخال اسم السيارة");
      return;
    }

    if (!description.trim()) {
      alert("يرجى إدخال وصف الرحلة");
      return;
    }

    if (universityId <= 0) {
      alert("يرجى اختيار الجامعة");
      return;
    }

    if (areas.length === 0) {
      alert("يرجى اختيار منطقة واحدة على الأقل");
      return;
    }

    try {
      setSaving(true);


      console.log("UPDATE DATA:", {
        nameCar,
        universityId,
        governorateId,
        areas,
        shift,
        description,
      });

  
      await updatePost(
        nameCar,
        description,
        universityId,
        governorateId,
        areas,
        shift,
      );

      alert("تم تعديل المنشور بنجاح");

      router.push(`/profile/${id}`);
    } catch (error) {
      console.error("Update post error:", error);

      alert("حدث خطأ أثناء تعديل المنشور");
    } finally {
      setSaving(false);
    }
  };


  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#EFE1D1]">
        <div className="text-xl font-bold text-[#432E1A]">
          جاري تحميل بيانات المنشور...
        </div>
      </main>
    );
  }



  if (error) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#EFE1D1]">
        <div className="rounded-2xl bg-red-100 px-6 py-4 font-bold text-red-700">
          {error}
        </div>
      </main>
    );
  }



  return (
    <main className="min-h-screen bg-[#EFE1D1] p-4 sm:p-8">
      <div className="mx-auto max-w-3xl">
        <div className="rounded-3xl bg-[#432E1A] p-6 shadow-xl sm:p-8">
       

          <h1 className="text-3xl font-bold text-[#EFE1D1]" dir="rtl">تعديل المنشور</h1>

          <p className="mt-2 text-[#EFE1D1]/60" dir="rtl">قم بتعديل معلومات الرحلة</p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
           

            <div>
              <label className="mb-2 block text-sm text-[#EFE1D1]/70" dir="rtl">
                اسم السيارة
              </label>

              <input
              dir="rtl"
                type="text"
                value={nameCar}
                onChange={(e) => setNameCar(e.target.value)}
                placeholder="مثال: تويوتا كورولا 2022"
                className="w-full rounded-2xl bg-[#5B3F22] px-4 py-3 text-[#EFE1D1] outline-none placeholder:text-[#EFE1D1]/40 focus:ring-2 focus:ring-[#EFE1D1]"
              />
            </div>

          

            <div>
              <label className="mb-2 block text-sm text-[#EFE1D1]/70" dir="rtl">
                وصف الرحلة
              </label>

              <textarea dir="rtl"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={5}
                placeholder="اكتب تفاصيل الرحلة..."
                className="w-full resize-none rounded-2xl bg-[#5B3F22] px-4 py-3 leading-7 text-[#EFE1D1] outline-none placeholder:text-[#EFE1D1]/40 focus:ring-2 focus:ring-[#EFE1D1]"
              />
            </div>

        
                   <div>
              <label className="mb-2 block text-sm text-[#EFE1D1]/70" dir="rtl">
                الجامعة
              </label>

              <select
              dir="rtl"
                value={universityId}
                onChange={(e) => {
                  const value = Number(e.target.value);

                  setUniversityId(value);
                }}
                className="w-full rounded-2xl bg-[#5B3F22] px-4 py-3 text-[#EFE1D1] outline-none focus:ring-2 focus:ring-[#EFE1D1]"
              >
                <option value={0} className="bg-[#5B3F22]" dir="rtl">
                  اختر الجامعة
                </option>

                {mockUniversities.map((university) => (
                  <option
                    key={university.id}
                    value={university.id}
                    className="bg-[#5B3F22]"
                  >
                    {university.name}
                  </option>
                ))}
              </select>

             
            </div>


            <div dir="rtl">
              <label className="mb-2 block text-sm text-[#EFE1D1]/70">
                المحافظة
              </label>

              <div className="rounded-2xl bg-[#5B3F22] px-4 py-3 text-[#EFE1D1]/60">
                بغداد
              </div>

              <p className="mt-2 text-xs text-[#EFE1D1]/40" dir="rtl">
                المحافظة لا يمكن تعديلها بالوقت الحالي
              </p>
            </div>

         

            <div>
              <label className="mb-2 block text-sm text-[#EFE1D1]/70" dir="rtl">
                الدوام
              </label>

              <select
              dir="rtl"
                value={shift}
                onChange={(e) => setShift(Number(e.target.value))}
                className="w-full rounded-2xl bg-[#5B3F22] px-4 py-3 text-[#EFE1D1] outline-none focus:ring-2 focus:ring-[#EFE1D1]"
              >
                <option value={0} hidden>اختيار الوقت</option>

                <option value={1}>مسائي</option>
                <option value={2}>صباحي</option>

              </select>
            </div>

            
            <div>
              <label className="mb-3 block text-sm text-[#EFE1D1]/70" dir="rtl">
                مناطق المرور
              </label>

              <div className="flex flex-wrap gap-3" dir="rtl">
                {mockAreas.map((area) => {
                  const selected = areas.includes(area.id);

                  return (
                    <button
                      key={area.id}
                      type="button"
                      onClick={() => toggleArea(area.id)}
                      className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                        selected
                          ? "bg-[#EFE1D1] text-[#432E1A]"
                          : "bg-[#5B3F22] text-[#EFE1D1] hover:bg-[#6B4A2A]"
                      }`}
                    >
                      {selected ? "✓ " : ""}

                      {area.name}
                    </button>
                  );
                })}
              </div>

              {areas.length > 0 && (
                <p className="mt-3 text-sm text-[#EFE1D1]/50" dir="rtl">
                  تم اختيار {areas.length} منطقة
                </p>
              )}
            </div>


            <div className="flex flex-col gap-3 pt-4 sm:flex-row" dir="rtl">
              <button
                type="submit"
                disabled={saving}
                className="flex-1 rounded-2xl bg-[#EFE1D1] px-6 py-3 font-bold text-[#432E1A] transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-50"
              >
                {saving ? "جاري الحفظ..." : "حفظ التعديلات"}
              </button>

              <button
                type="button"
                disabled={saving}
                onClick={() => router.back()}
                className="flex-1 rounded-2xl bg-[#5B3F22] px-6 py-3 font-bold text-[#EFE1D1] transition hover:bg-[#6B4A2A] disabled:opacity-50"
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
