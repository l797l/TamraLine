"use client";

import { updatePostImage } from "@/src/app/auth/post/postApi";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import Cropper, { Area } from "react-easy-crop";
import { Camera } from "lucide-react";

export default function EditImagePage() {
  const params = useParams();
  const router = useRouter();

  const id = params.id as string;

  const [imagePreview, setImagePreview] = useState<string | null>(
    "/headerLogo.png"
  );

  const [imageFile, setImageFile] = useState<File | null>(null);

  const [showCropper, setShowCropper] = useState(false);
  const [originalImage, setOriginalImage] = useState<string | null>(null);

  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);

  const [croppedAreaPixels, setCroppedAreaPixels] =
    useState<Area | null>(null);

  const [loading, setLoading] = useState(false);

  const handleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>
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

    const imageUrl = URL.createObjectURL(file);

    setOriginalImage(imageUrl);

    setShowCropper(true);

    setCrop({ x: 0, y: 0 });
    setZoom(1);

    e.target.value = "";
  };

  const onCropComplete = useCallback(
    (_croppedArea: Area, croppedAreaPixels: Area) => {
      setCroppedAreaPixels(croppedAreaPixels);
    },
    []
  );

  const createCroppedImage = async () => {
    if (!originalImage || !croppedAreaPixels) {
      return;
    }

    const img = new window.Image();

    img.src = originalImage;

    await new Promise<void>((resolve, reject) => {
      img.onload = () => resolve();
      img.onerror = () => reject(new Error("فشل تحميل الصورة"));
    });

    const canvas = document.createElement("canvas");

    const ctx = canvas.getContext("2d");

    if (!ctx) {
      alert("حدث خطأ أثناء معالجة الصورة");
      return;
    }

    canvas.width = croppedAreaPixels.width;
    canvas.height = croppedAreaPixels.height;

    ctx.drawImage(
      img,
      croppedAreaPixels.x,
      croppedAreaPixels.y,
      croppedAreaPixels.width,
      croppedAreaPixels.height,
      0,
      0,
      croppedAreaPixels.width,
      croppedAreaPixels.height
    );

    const blob = await new Promise<Blob | null>((resolve) => {
      canvas.toBlob(
        resolve,
        "image/jpeg",
        0.9
      );
    });

    if (!blob) {
      alert("فشل تجهيز الصورة");
      return;
    }

    const croppedFile = new File(
      [blob],
      "car-image.jpg",
      {
        type: "image/jpeg",
      }
    );

    const previewUrl = URL.createObjectURL(croppedFile);

    setImageFile(croppedFile);
    setImagePreview(previewUrl);

    setShowCropper(false);
    setOriginalImage(null);

    setCrop({ x: 0, y: 0 });
    setZoom(1);
  };

  const cancelCrop = () => {
    if (originalImage) {
      URL.revokeObjectURL(originalImage);
    }

    setShowCropper(false);
    setOriginalImage(null);

    setCrop({ x: 0, y: 0 });
    setZoom(1);
  };

  const handleSave = async () => {
    if (!imageFile) {
      alert("يرجى اختيار صورة جديدة");
      return;
    }

    setLoading(true);

    try {
      const response = await updatePostImage(imageFile);

      if (!response.ok) {
        throw new Error(
          `فشل تحديث الصورة: ${response.status}`
        );
      }

      alert("تم تحديث صورة السيارة بنجاح");

      localStorage.removeItem("GetProfile");

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
    <>
     

      {showCropper && originalImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">

          <div className="w-full max-w-2xl overflow-hidden rounded-3xl bg-[#432E1A] shadow-2xl">

            <div className="relative h-[400px] w-full bg-black sm:h-[500px]">

              <Cropper
                image={originalImage}
                crop={crop}
                zoom={zoom}
                aspect={16 / 9}
                onCropChange={setCrop}
                onZoomChange={setZoom}
                onCropComplete={onCropComplete}
              />

            </div>

            <div className="p-5">

              <div className="mb-2 flex items-center justify-between text-sm text-[#EFE1D1]/70">

                <span>
                  تكبير الصورة
                </span>

                <span>
                  {zoom.toFixed(1)}x
                </span>

              </div>

              <input
                type="range"
                min={1}
                max={3}
                step={0.1}
                value={zoom}
                onChange={(e) =>
                  setZoom(Number(e.target.value))
                }
                className="w-full accent-[#EFE1D1]"
              />

              <div className="mt-5 flex flex-col gap-3 sm:flex-row">

                <button
                  type="button"
                  onClick={createCroppedImage}
                  className="flex-1 rounded-2xl bg-[#EFE1D1] px-5 py-3 font-bold text-[#432E1A] transition hover:bg-white"
                >
                  قص الصورة
                </button>

                <button
                  type="button"
                  onClick={cancelCrop}
                  className="flex-1 rounded-2xl bg-[#5B3F22] px-5 py-3 font-bold text-[#EFE1D1] transition hover:bg-[#6B4A2A]"
                >
                  إلغاء
                </button>

              </div>

            </div>

          </div>

        </div>
      )}


      <main
        dir="rtl"
        className="min-h-screen bg-[#EFE1D1] px-4 py-10"
      >

        <div className="mx-auto max-w-2xl">


          <div className="mb-6 text-center">

            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#432E1A] text-[#EFE1D1]">

              <Camera
                className="h-10 w-10 text-[#EFE1D1]"
                strokeWidth={1.8}
              />

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

                  <Camera
                    className="h-16 w-16 text-[#EFE1D1]"
                    strokeWidth={1.5}
                  />

                </div>
              )}

            </div>


            <div className="mt-6">

              <label
                htmlFor="car-image"
                className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-[#5B3F22] p-8 text-center transition hover:bg-[#5B3F22]/50"
              >

                <Camera className="h-12 w-12 text-[#EFE1D1]" />

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
    </>
  );
}