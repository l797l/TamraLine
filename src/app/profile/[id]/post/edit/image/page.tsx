"use client";

import { updatePostImage } from "@/src/app/auth/post/postApi";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import {  useState } from "react";
import { Camera } from "lucide-react";


export default function EditImagePage() {
  const params = useParams();
  const router = useRouter();

  const id = params.id as string;

  const [imagePreview, setImagePreview] = useState<string | null>(
    "/headerLogo.png"
  );

  const [imageFile, setImageFile] = useState<File | null>(null);

  const [loading, setLoading] = useState(false);


  const handleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("يرجى اختيار صورة فقط");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      alert("حجم الصورة يجب أن يكون أقل من 5MB");
      return;
    }

    setImageFile(file);

    const imageUrl = URL.createObjectURL(file);
    setImagePreview(imageUrl);
  };

  
  const handleSave = async () => {
    if (!imageFile) {
      alert("يرجى اختيار صورة جديدة");
      return;
    }

    setLoading(true);

    try {
  

      const response = await updatePostImage(imageFile)

      if (!response.ok) {


        throw new Error(
          `فشل تحديث الصورة: ${response.status}`
        );
      }

      alert("تم تحديث صورة السيارة بنجاح");

      router.push(`/profile/${id}`);
      router.refresh();
    } catch (error) {
      console.error("Update image error:", error);

      alert("حدث خطأ أثناء تحديث الصورة");
    } finally {
      setLoading(false);
    }
  };


  return (
    <main
      dir="rtl"
      className="min-h-screen bg-[#EFE1D1] px-4 py-10"
    >
      <div className="mx-auto max-w-2xl">


        <div className="mb-6 text-center">


          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#432E1A] text-[#EFE1D1]">
            <Camera className="h-10 w-10 text-[#EFE1D1]" strokeWidth={1.8} />
          </div>

          <h1 className="mt-5 text-3xl font-bold text-[#432E1A]">
            تعديل صورة السيارة
          </h1>

          <p className="mt-2 text-[#432E1A]/60">
            اختر صورة جديدة للسيارة
          </p>

        </div>


        <div className="rounded-3xl bg-[#432E1A] p-6 shadow-xl sm:p-8">


          <div className="relative mx-auto aspect-video w-full overflow-hidden rounded-3xl bg-[#5B3F22]">

            {imagePreview ? (
              <Image
                src={imagePreview}
                alt="صورة السيارة"
                fill
                unoptimized
                className="object-cover"
              />
            ) : (
              <div className="flex h-full items-center justify-center text-[#EFE1D1]/40">
                  <Camera className="text-[#EFE1D1] h-16 w-16" strokeWidth={1.5} />
              </div>
            )}

          </div>


          <div className="mt-6">

            <label
              htmlFor="car-image"
              className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-[#5B3F22] p-8 text-center transition hover:bg-[#5B3F22]/50"
            >


              <div>
                <Camera className="h-12 w-12 text-[#EFE1D1]" />
              </div>
              <span className="mt-3 font-bold text-[#EFE1D1]">
                اختيار صورة
              </span>

              <span className="mt-1 text-sm text-[#EFE1D1]/50">
                PNG أو JPG أو WEBP — الحد الأقصى 5MB
              </span>

            </label>

            <input
              id="car-image"
              type="file"
              accept="image/png,image/jpeg,image/webp"
              onChange={handleImageChange}
              className="hidden"
            />

          </div>


          {imageFile && (
            <div className="mt-4 rounded-2xl bg-[#5B3F22] p-4 text-[#EFE1D1]">

              <p className="truncate font-semibold">
                {imageFile.name}
              </p>

              <p className="mt-1 text-sm text-[#EFE1D1]/50">
                {(imageFile.size / 1024 / 1024).toFixed(2)} MB
              </p>

            </div>
          )}


          <div className="mt-6 flex flex-col gap-3 sm:flex-row">

            <button
              type="button"
              onClick={handleSave}
              disabled={loading || !imageFile}
              className="flex-1 rounded-2xl bg-[#EFE1D1] px-6 py-3 font-bold text-[#432E1A] transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading
                ? "جاري الحفظ..."
                : "حفظ الصورة"}
            </button>

            <button
              type="button"
              disabled={loading}
              onClick={() => router.back()}
              className="flex-1 rounded-2xl bg-[#5B3F22] px-6 py-3 font-bold text-[#EFE1D1] transition hover:bg-[#6B4A2A] disabled:opacity-50"
            >
              إلغاء
            </button>

          </div>

        </div>

      </div>
    </main>
  );
}