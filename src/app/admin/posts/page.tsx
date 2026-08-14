"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  getPostsStatus,
  updateStatus,
} from "../../auth/admin/adminApi";
import { AdminPost } from "../../auth/admin/adminDto";

export default function AdminPostsPage() {
  const router = useRouter();

  const [posts, setPosts] = useState<AdminPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState<string | null>(null);
  const [error, setError] = useState("");


  const getPosts = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await getPostsStatus();

      setPosts(response);
    } catch (error: any) {
      console.error("Get admin posts error:", error);
      if (
        error?.response?.status === 401 ||
        error?.response?.status === 403
      ) {
        router.replace("/404");
        return;
      }

      setError("فشل في تحميل المنشورات");
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    let cancelled = false;

    const fetchPosts = async () => {
      try {
        const response = await getPostsStatus();

        if (!cancelled) {
          setPosts(response);
          setError("");
          setLoading(false);
        }
      } catch (error: any) {
        console.error("Get admin posts error:", error);

        if (!cancelled) {
          if (
            error?.response?.status === 401 ||
            error?.response?.status === 403
          ) {
            router.replace("/404");
            return;
          }

          setError("فشل في تحميل المنشورات");
          setLoading(false);
        }
      }
    };

    fetchPosts();

    return () => {
      cancelled = true;
    };
  }, [router]);



  const handleUpdateStatus = async (
    status: number,
    phoneNumber: string
  ) => {
    try {
      setActionLoading(phoneNumber);

      await updateStatus(status, phoneNumber);

      setPosts((currentPosts) =>
        currentPosts.filter(
          (post) => post.phoneNumber !== phoneNumber
        )
      );
    } catch (error: any) {
      console.error("Update post status error:", error);

      if (
        error?.response?.status === 401 ||
        error?.response?.status === 403
      ) {
        router.replace("/404");
        return;
      }

      setError("فشل في تحديث حالة المنشور");
    } finally {
      setActionLoading(null);
    }
  };

 

  if (loading) {
    return (
      <main
        dir="rtl"
        className="min-h-screen bg-[#2F2115] px-4 py-10 text-[#EFE1D1]"
      >
        <div className="flex min-h-[60vh] items-center justify-center">
          <div className="text-center">

            <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-[#EFE1D1]/20 border-t-[#EFE1D1]" />

            <p className="mt-5 text-lg text-[#EFE1D1]/70">
              جاري تحميل المنشورات...
            </p>

          </div>
        </div>
      </main>
    );
  }



  if (error) {
    return (
      <main
        dir="rtl"
        className="min-h-screen bg-[#2F2115] px-4 py-10 text-[#EFE1D1]"
      >
        <div className="flex min-h-[60vh] items-center justify-center">
          <div className="rounded-3xl bg-[#432E1A] p-10 text-center">

            <div className="text-5xl">
              ⚠️
            </div>

            <h2 className="mt-5 text-2xl font-bold">
              {error}
            </h2>

            <button
              type="button"
              onClick={getPosts}
              className="mt-6 rounded-2xl bg-[#EFE1D1] px-6 py-3 font-bold text-[#432E1A] transition hover:opacity-90"
            >
              إعادة المحاولة
            </button>

          </div>
        </div>
      </main>
    );
  }

  

  return (
    <main
      dir="rtl"
      className="min-h-screen bg-[#2F2115] px-4 py-10 text-[#EFE1D1]"
    >
      <div className="mx-auto max-w-6xl">

       
        <div className="mb-10 text-right">

          <h1 className="text-3xl font-bold sm:text-4xl">
            مراجعة المنشورات
          </h1>

          <p className="mt-3 text-[#EFE1D1]/60">
            راجع منشورات السائقين وقم بالموافقة عليها أو رفضها
          </p>

          <div className="mt-5 inline-flex items-center rounded-full bg-[#5B3F22] px-5 py-2 text-sm">

            <span>
              عدد المنشورات:
            </span>

            <span className="mr-2 font-bold">
              {posts.length}
            </span>

          </div>

        </div>

      

        {posts.length === 0 ? (
          <div className="rounded-3xl bg-[#432E1A] p-12 text-center">

            <div className="text-6xl">
              📭
            </div>

            <h2 className="mt-5 text-2xl font-bold">
              لا توجد منشورات
            </h2>

            <p className="mt-2 text-[#EFE1D1]/60">
              لا توجد منشورات تحتاج إلى مراجعة حاليًا
            </p>

          </div>
        ) : (

         

          <div className="grid gap-6">

            {posts.map((post, index) => {

              const isLoading =
                actionLoading === post.phoneNumber;

              return (
                <div
                  key={`${post.phoneNumber}-${index}`}
                  className="overflow-hidden rounded-3xl bg-[#432E1A] shadow-xl"
                >

                  <div className="grid lg:grid-cols-[320px_1fr]">

           

                    <div className="relative min-h-[280px] bg-[#5B3F22] lg:min-h-full">

                      <Image
                        src={post.urlImagePost}
                        alt={post.nameCar}
                        fill
                        unoptimized
                        className="object-cover"
                      />


                      <div className="absolute right-4 top-4">

                        <span className="rounded-full bg-yellow-500/80 px-4 py-2 text-sm font-bold text-white backdrop-blur-sm">
                          قيد المراجعة
                        </span>

                      </div>

                    </div>

                   
                    <div className="p-6 text-right sm:p-8">


                      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

                        <div>

                          <p className="text-sm text-[#EFE1D1]/50">
                            السائق
                          </p>

                          <h2 className="mt-1 text-2xl font-bold">
                            {post.fullName}
                          </h2>

                        </div>

                        <div className="rounded-2xl bg-[#5B3F22] px-4 py-3">

                          <p className="text-xs text-[#EFE1D1]/50">
                            رقم الهاتف
                          </p>

                          <p
                            dir="ltr"
                            className="mt-1 font-semibold"
                          >
                            {post.phoneNumber}
                          </p>

                        </div>

                      </div>


                      <div className="mb-6 rounded-2xl bg-[#5B3F22] p-5">

                        <p className="text-sm text-[#EFE1D1]/50">
                          السيارة
                        </p>

                        <p className="mt-1 text-xl font-bold">
                          🚗 {post.nameCar}
                        </p>

                      </div>


                      <div className="grid gap-4 sm:grid-cols-2">


                        <div className="rounded-2xl bg-[#5B3F22] p-4">

                          <p className="text-sm text-[#EFE1D1]/50">
                            الجامعة
                          </p>

                          <p className="mt-1 font-semibold">
                            {post.university}
                          </p>

                        </div>


                        <div className="rounded-2xl bg-[#5B3F22] p-4">

                          <p className="text-sm text-[#EFE1D1]/50">
                            المحافظة
                          </p>

                          <p className="mt-1 font-semibold">
                            {post.governorate}
                          </p>

                        </div>


                        <div className="rounded-2xl bg-[#5B3F22] p-4">

                          <p className="text-sm text-[#EFE1D1]/50">
                            الدوام
                          </p>

                          <p className="mt-1 font-semibold">
                            {post.shift === 0
                              ? "صباحي"
                              : "مسائي"}
                          </p>

                        </div>


                        <div className="rounded-2xl bg-[#5B3F22] p-4">

                          <p className="text-sm text-[#EFE1D1]/50">
                            مناطق المرور
                          </p>

                          <div className="mt-2 flex flex-wrap gap-2">

                            {post.area.map(
                              (area, areaIndex) => (
                                <span
                                  key={`${area}-${areaIndex}`}
                                  className="rounded-full bg-[#EFE1D1]/10 px-3 py-1 text-sm"
                                >
                                  {area}
                                </span>
                              )
                            )}

                          </div>

                        </div>

                      </div>


                      <div className="mt-4 rounded-2xl bg-[#5B3F22] p-5">

                        <p className="text-sm text-[#EFE1D1]/50">
                          وصف الرحلة
                        </p>

                        <p className="mt-2 leading-8 text-[#EFE1D1]/90">
                          {post.desciption}
                        </p>

                      </div>

                   

                      <div className="mt-6 flex flex-col gap-3 sm:flex-row">


                        <button
                          type="button"
                          disabled={isLoading}
                          onClick={() =>
                            handleUpdateStatus(
                              1,
                              post.phoneNumber
                            )
                          }
                          className="flex-1 rounded-2xl bg-green-600 px-6 py-3 font-bold text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-50"
                        >

                          {isLoading ? (
                            <span className="flex items-center justify-center gap-2">

                              <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />

                              جاري التنفيذ...

                            </span>
                          ) : (
                            "✓ الموافقة على المنشور"
                          )}

                        </button>


                        <button
                          type="button"
                          disabled={isLoading}
                          onClick={() =>
                            handleUpdateStatus(
                              2,
                              post.phoneNumber
                            )
                          }
                          className="flex-1 rounded-2xl bg-red-600 px-6 py-3 font-bold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-50"
                        >

                          {isLoading ? (
                            <span className="flex items-center justify-center gap-2">

                              <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />

                              جاري التنفيذ...

                            </span>
                          ) : (
                            "✕ رفض المنشور"
                          )}

                        </button>

                      </div>

                    </div>
                  </div>
                </div>
              );
            })}

          </div>
        )}
      </div>
    </main>
  );
}
