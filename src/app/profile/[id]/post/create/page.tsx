"use client";

import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { createPost } from "../../../../auth/post/postApi";
import { areasInf, universitiesInf } from "@/src/Information/information";
import { Camera } from "lucide-react";
 import { CarFront } from "lucide-react";
import { getToken, setToken } from "@/src/app/auth/auth";



const mockUniversities = universitiesInf



const mockAreas = areasInf



export default function CreatePostPage() {
  const params = useParams();
  const router = useRouter();

  const id = params.id as string;



  const [nameCar, setNameCar] = useState("");
  const [description, setDescription] = useState("");
  const [part, setPart] = useState<number>(0);

  const [universityId, setUniversityId] = useState<number | "">("");

  const [shift, setShift] = useState(0);

  const [areas, setAreas] = useState<number[]>([]);

  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const [loading, setLoading] = useState(false);



  useEffect(() => {
    return () => {
      if (imagePreview) {
        URL.revokeObjectURL(imagePreview);
      }
    };
  }, [imagePreview]);


  useEffect(() => {
    const token =getToken()
    if(!token)
      router.push("/404")
  }, []);
  const toggleArea = (areaId: number) => {
    setAreas((current) =>
      current.includes(areaId)
        ? current.filter((id) => id !== areaId)
        : [...current, areaId],
    );
  };



  const handleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = e.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("يرجى اختيار صورة فقط");
      e.target.value = "";
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      alert("حجم الصورة يجب أن يكون أقل من 5MB");
      e.target.value = "";
      return;
    }

    const objectUrl = URL.createObjectURL(file);

    setImage(file);
    setImagePreview(objectUrl);
  };



  const removeImage = () => {
    setImage(null);
    setImagePreview(null);
  };


  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();



    if (!nameCar.trim()) {
      alert("يرجى إدخال اسم السيارة");
      return;
    }

    if (!description.trim()) {
      alert("يرجى إدخال وصف الرحلة");
      return;
    }

    if (universityId === "") {
      alert("يرجى اختيار الجامعة");
      return;
    }

    if (areas.length === 0) {
      alert("يرجى اختيار منطقة واحدة على الأقل");
      return;
    }

    if (!image) {
      alert("يرجى اختيار صورة السيارة");
      return;
    }

    setLoading(true);

    try {

      console.log("CREATE POST DATA:", {
        image,
        universityId,
        governorateId: 1,
        areas,
        nameCar,
        shift,
        description,
      });

      await createPost(
        image,
        universityId,
        1,
        areas,
        nameCar,
        shift,
        description,
      );

      alert("تم إنشاء المنشور بنجاح");

      router.push(`/profile/${id}`);
    } catch (error) {
      console.error(
        "Create post error:",
        error,
      );

      alert("حدث خطأ أثناء إنشاء المنشور");
    } finally {
      setLoading(false);
    }
  };


  return (
    <main className="min-h-screen bg-[#EFE1D1] px-4 py-10" dir="rtl">
      <div className="mx-auto max-w-3xl">
        <div className="rounded-3xl bg-[#432E1A] p-6 shadow-xl sm:p-8">



          <div className="text-center">


<div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#5B3F22] text-[#EFE1D1]">
  <CarFront className="h-10 w-10" />
</div>

            <h1 className="mt-5 text-3xl font-bold text-[#EFE1D1]">
              إنشاء منشور رحلة
            </h1>

            <p className="mt-2 text-[#EFE1D1]/60">
              أضف معلومات رحلتك حتى يتمكن الطلاب من العثور عليك
            </p>

          </div>


          <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-6"
          >

            <div>
              <label className="mb-2 block text-sm text-[#EFE1D1]/70 ">
                اسم السيارة
              </label>

              <input
                type="text"
                value={nameCar}
                onChange={(e) =>
                  setNameCar(e.target.value)
                }
                placeholder="مثال: تويوتا كورولا 2022"
                className="rtl w-full rounded-2xl bg-[#5B3F22] px-4 py-3 text-[#EFE1D1] outline-none placeholder:text-[#EFE1D1]/40 focus:ring-2 focus:ring-[#EFE1D1]"
              />
            </div>



            <div>
              <label className="mb-2 block text-sm text-[#EFE1D1]/70">
                وصف الرحلة
              </label>

              <textarea
                value={description}
                onChange={(e) =>
                  setDescription(e.target.value)
                }
                rows={5}
                placeholder="اكتب تفاصيل الرحلة..."
                className="w-full resize-none rounded-2xl bg-[#5B3F22] px-4 py-3 leading-7 text-[#EFE1D1] outline-none placeholder:text-[#EFE1D1]/40 focus:ring-2 focus:ring-[#EFE1D1]"
              />
            </div>


            <div>
              <label className="mb-2 block text-sm text-[#EFE1D1]/70">
                الجامعة
              </label>

              <select
                value={universityId}
                onChange={(e) => {
                  const value = e.target.value;

                  setUniversityId(
                    value === ""
                      ? ""
                      : Number(value),
                  );
                }}
                className="w-full rounded-2xl bg-[#5B3F22] px-4 py-3 text-[#EFE1D1] outline-none focus:ring-2 focus:ring-[#EFE1D1]"
              >

                <option
                  value=""
                  className="bg-[#5B3F22]"
                >
                  اختر الجامعة
                </option>

                {mockUniversities.map(
                  (university) => (
                    <option
                      key={university.id}
                      value={university.id}
                      className="bg-[#5B3F22]"
                    >
                      {university.name}
                    </option>
                  ),
                )}

              </select>
            </div>


            <div>
              <label className="mb-2 block text-sm text-[#EFE1D1]/70">
                المحافظة
              </label>

              <div className="rounded-2xl bg-[#5B3F22] px-4 py-3 text-[#EFE1D1]">
                بغداد
              </div>
            </div>


            <div>
              <label className="mb-2 block text-sm text-[#EFE1D1]/70">
                الدوام
              </label>

              <select
                value={shift}
                onChange={(e) =>
                  setShift(
                    Number(e.target.value),
                  )
                }
                className="w-full rounded-2xl bg-[#5B3F22] px-4 py-3 text-[#EFE1D1] outline-none focus:ring-2 focus:ring-[#EFE1D1]"
              >

                <option
                  value={0}
                  className="bg-[#5B3F22]"
                  disabled
                >
                  اختيار الوقت
                </option>

                <option
                  value={1}
                  className="bg-[#5B3F22]"
                >
                  مسائي
                </option>
                <option
                  value={2}
                  className="bg-[#5B3F22]"
                >
                  صباحي
                </option>
                <option
                  value={3}
                  className="bg-[#5B3F22]"
                >
                  صباحي - مسائي
                </option>

              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm text-[#EFE1D1]/70" dir="rtl">
                التقسيم
              </label>

              <select
              dir="rtl"
                value={part}
                onChange={(e) => setPart(Number(e.target.value))}
                className="w-full rounded-2xl bg-[#5B3F22] px-4 py-3 text-[#EFE1D1] outline-none focus:ring-2 focus:ring-[#EFE1D1]"
              >
                <option value={0} disabled>اختيار التقسيم</option>
                <option value={0}>الجميع</option>

                <option value={1}>الكرخ</option>
                <option value={2}>الرصافة</option>
               

              </select>
            </div>


            <div>

              <label className="mb-3 block text-sm text-[#EFE1D1]/70">
                مناطق المرور
              </label>

              <div className="flex flex-wrap gap-3">

                {mockAreas.filter((area)=> part ==area.part || part ==0).map((area) => {

                  const selected =
                    areas.includes(area.id);

                  return (
                    <button
                      key={area.id}
                      type="button"
                      onClick={() =>
                        toggleArea(area.id)
                      }
                      className={`rounded-full px-5 py-2 text-sm font-semibold transition ${selected
                          ? "bg-[#EFE1D1] text-[#432E1A]"
                          : "bg-[#5B3F22] text-[#EFE1D1] hover:bg-[#6B4A2A]"
                        }`}
                    >
                      {selected
                        ? "✓ "
                        : ""}

                      {area.name}
                    </button>
                  );

                })}

              </div>

              {areas.length > 0 && (
                <p className="mt-3 text-sm text-[#EFE1D1]/50">
                  تم اختيار{" "}
                  {areas.length} منطقة
                </p>
              )}

            </div>



            <div>

              <label className="mb-2 block text-sm text-[#EFE1D1]/70">
                صورة السيارة
              </label>

              {!imagePreview ? (

                <label
                  htmlFor="car-image"
                  className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-[#5B3F22] bg-[#5B3F22]/40 p-8 text-center transition hover:bg-[#5B3F22]"
                >


                  <div>
                    <Camera className="h-12 w-12 text-[#EFE1D1]" />
                  </div>

                  <p className="mt-3 font-semibold text-[#EFE1D1]">
                    اختر صورة السيارة
                  </p>

                  <p className="mt-1 text-sm text-[#EFE1D1]/50">
                    PNG أو JPG — الحد الأقصى 5MB
                  </p>

                  <input
                    id="car-image"
                    type="file"
                    accept="image/png,image/jpeg,image/jpg"
                    onChange={
                      handleImageChange
                    }
                    className="hidden"
                  />

                </label>

              ) : (

                <div className="overflow-hidden rounded-2xl bg-[#5B3F22]">


                  <div className="relative h-72 w-full">

                    <Image
                      src={imagePreview}
                      alt="معاينة صورة السيارة"
                      fill
                      unoptimized
                      className="object-cover"
                    />

                  </div>


                  <div className="flex items-center justify-between gap-3 p-4">

                    <div className="min-w-0">

                      <p className="truncate font-semibold text-[#EFE1D1]">
                        {image?.name}
                      </p>

                      <p className="mt-1 text-xs text-[#EFE1D1]/50">
                        {image
                          ? `${(
                            image.size /
                            1024 /
                            1024
                          ).toFixed(2)} MB`
                          : ""}
                      </p>

                    </div>

                    <div className="flex shrink-0 gap-2">


                      <label
                        htmlFor="change-image"
                        className="cursor-pointer rounded-xl bg-[#EFE1D1] px-4 py-2 text-sm font-bold text-[#432E1A] transition hover:bg-white"
                      >
                        تغيير
                      </label>

                      <input
                        id="change-image"
                        type="file"
                        accept="image/png,image/jpeg,image/jpg"
                        onChange={
                          handleImageChange
                        }
                        className="hidden"
                      />


                      <button
                        type="button"
                        onClick={removeImage}
                        className="rounded-xl bg-red-500/20 px-4 py-2 text-sm font-bold text-red-300 transition hover:bg-red-500 hover:text-white"
                      >
                        حذف
                      </button>

                    </div>

                  </div>

                </div>

              )}

            </div>



            <div className="flex flex-col gap-3 pt-4 sm:flex-row">

              <button
                type="submit"
                disabled={loading}
                className="flex-1 rounded-2xl bg-[#EFE1D1] px-6 py-3 font-bold text-[#432E1A] transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading
                  ? "جاري إنشاء المنشور..."
                  : "إنشاء المنشور"}
              </button>

              <button
                type="button"
                disabled={loading}
                onClick={() =>
                  router.back()
                }
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
