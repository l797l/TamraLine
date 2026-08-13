"use client";

import CardPost from "./CardPost";
import { Post } from "../postTypes";
import { CarFront, SearchX } from "lucide-react";

type PostsListProps = {
  posts: Post[];
  loading: boolean;
};

export default function PostsList({
  posts,
  loading,
}: PostsListProps) {
  if (loading) {
    return (
      <div
        dir="rtl"
        className="space-y-4"
      >
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="overflow-hidden rounded-[28px] border border-[#8A6339]/20 bg-[#432E1A] p-4 shadow-lg sm:p-5"
          >
            <div className="grid gap-3 lg:grid-cols-[1fr_1.35fr_0.7fr]">

              {/* Driver Skeleton */}
              <div className="rounded-[22px] bg-[#5A3D21] p-5">
                <div className="flex items-center gap-4">
                  <div className="h-[76px] w-[76px] shrink-0 animate-pulse rounded-full bg-[#EFE1D1]/10" />

                  <div className="flex-1 space-y-3">
                    <div className="h-3 w-16 animate-pulse rounded-full bg-[#EFE1D1]/10" />
                    <div className="h-5 w-32 animate-pulse rounded-full bg-[#EFE1D1]/10" />
                    <div className="h-3 w-24 animate-pulse rounded-full bg-[#EFE1D1]/10" />
                  </div>
                </div>

                <div className="mt-6 h-14 animate-pulse rounded-2xl bg-[#432E1A]/60" />
              </div>

              {/* Details Skeleton */}
              <div className="rounded-[22px] bg-[#5A3D21] p-5">
                <div className="h-3 w-24 animate-pulse rounded-full bg-[#EFE1D1]/10" />

                <div className="mt-4 space-y-2">
                  <div className="h-3 w-full animate-pulse rounded-full bg-[#EFE1D1]/10" />
                  <div className="h-3 w-4/5 animate-pulse rounded-full bg-[#EFE1D1]/10" />
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  {[1, 2, 3, 4].map((box) => (
                    <div
                      key={box}
                      className="h-20 animate-pulse rounded-2xl bg-[#432E1A]/60"
                    />
                  ))}
                </div>
              </div>

              {/* Button Skeleton */}
              <div className="flex flex-col justify-between rounded-[22px] bg-[#5A3D21] p-5">
                <div>
                  <div className="h-11 w-11 animate-pulse rounded-2xl bg-[#EFE1D1]/10" />

                  <div className="mt-5 h-5 w-24 animate-pulse rounded-full bg-[#EFE1D1]/10" />

                  <div className="mt-3 space-y-2">
                    <div className="h-3 w-full animate-pulse rounded-full bg-[#EFE1D1]/10" />
                    <div className="h-3 w-4/5 animate-pulse rounded-full bg-[#EFE1D1]/10" />
                  </div>
                </div>

                <div className="mt-6 h-12 animate-pulse rounded-2xl bg-[#EFE1D1]/10" />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div
        dir="rtl"
        className="flex min-h-[300px] flex-col items-center justify-center rounded-[28px] border border-[#8A6339]/20 bg-gradient-to-br from-[#49301B] to-[#362313] px-6 py-12 text-center shadow-lg"
      >
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#D9B98C]/10 text-[#D9B98C]">
          <SearchX size={30} strokeWidth={1.7} />
        </div>

        <h3 className="mt-5 text-lg font-extrabold text-[#FFF4E5]">
          لا توجد رحلات
        </h3>

        <p className="mt-2 max-w-sm text-sm leading-7 text-[#EFE1D1]/45">
          لم نعثر على أي رحلات متوفرة حاليًا. حاول تغيير خيارات البحث أو
          العودة لاحقًا.
        </p>
      </div>
    );
  }

  return (
    <div
      dir="rtl"
      className="space-y-4"
    >
      {/* Results Header */}
      <div className="flex items-center justify-between px-1">
        <div>
          <p className="text-xs text-[#EFE1D1]/40">
            الرحلات المتوفرة
          </p>

          <h2 className="mt-1 text-lg font-extrabold text-[#FFF4E5]">
            اختر الرحلة المناسبة لك
          </h2>
        </div>

        <div className="flex items-center gap-2 rounded-full border border-[#D9B98C]/10 bg-[#432E1A]/70 px-3 py-2">
          <CarFront
            size={15}
            className="text-[#D9B98C]"
          />

          <span className="text-xs font-bold text-[#D9B98C]">
            {posts.length} {posts.length === 1 ? "رحلة" : "رحلات"}
          </span>
        </div>
      </div>

      {/* Cards */}
      <div className="grid gap-4">
        {posts.map((post) => (
          <CardPost
            key={post.phoneNumber}
            post={post}
          />
        ))}
      </div>
    </div>
  );
}