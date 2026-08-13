import Link from "next/link";
import Image from "next/image";

type Post = {
  id: number;
  userId: number;
  urlImagePost: string;
  nameCar: string;
  area: string[];
  status: number;
  university: string;
  governorate: string;
  desciption: string;
  shift: number;
  phoneNumber: string;
  fullName: string;
};

type CardPostProps = {
  post: Post;
};

export default function CardPost({ post }: CardPostProps) {
  return (
    <Link
      href={`/profile/${post.userId}`}
      dir="rtl"
      className="group block w-full rounded-3xl bg-[#432E1A] p-4 text-[#EFE1D1] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:p-5"
    >
      <div className="grid gap-4 lg:grid-cols-[1.2fr_1.5fr_0.8fr] lg:items-stretch">

        <div className="rounded-2xl bg-[#5B3F22] p-5">

          <div className="flex items-center gap-4">

            <Image
              src="/default-avatar.png"
              alt={post.fullName}
              width={72}
              height={72}
              className="h-[72px] w-[72px] shrink-0 rounded-full border-2 border-[#EFE1D1]/20 object-cover"
            />

            <div className="min-w-0">

              <p className="text-xs text-[#EFE1D1]/50">
                السائق
              </p>

              <h2 className="mt-1 truncate text-xl font-bold">
                {post.fullName}
              </h2>

              <div className="mt-2 flex items-center gap-2">

                <span
                  className={`h-2.5 w-2.5 rounded-full ${
                    post.status === 1
                      ? "bg-green-400"
                      : "bg-red-400"
                  }`}
                />

                <span className="text-xs text-[#EFE1D1]/70">
                  {post.status === 1 ? "متاح حالياً" : "غير متاح"}
                </span>

              </div>

            </div>

          </div>

          <div className="mt-5 rounded-xl bg-[#EFE1D1]/5 p-3">

            <p className="text-xs text-[#EFE1D1]/50">
              الجامعة
            </p>

            <p className="mt-1 font-semibold">
              {post.university}
            </p>

          </div>

        </div>

        <div className="rounded-2xl bg-[#5B3F22] p-5">

          <div className="mb-4">

            <p className="text-xs text-[#EFE1D1]/50">
              وصف الرحلة
            </p>

            <p className="mt-2 line-clamp-2 text-sm leading-7 text-[#EFE1D1]/90">
              {post.desciption}
            </p>

          </div>

          <div className="grid grid-cols-2 gap-3">

            <div className="rounded-xl bg-[#EFE1D1]/5 p-3">

              <p className="text-xs text-[#EFE1D1]/45">
                المحافظة
              </p>

              <p className="mt-1 text-sm font-semibold">
                {post.governorate}
              </p>

            </div>

            <div className="rounded-xl bg-[#EFE1D1]/5 p-3">

              <p className="text-xs text-[#EFE1D1]/45">
                الدوام
              </p>

              <p className="mt-1 text-sm font-semibold">
                {post.shift === 0 ? "صباحي" : "مسائي"}
              </p>

            </div>

            <div className="rounded-xl bg-[#EFE1D1]/5 p-3">

              <p className="text-xs text-[#EFE1D1]/45">
                السيارة
              </p>

              <p className="mt-1 text-sm font-semibold">
                {post.nameCar}
              </p>

            </div>

            <div className="rounded-xl bg-[#EFE1D1]/5 p-3">

              <p className="text-xs text-[#EFE1D1]/45">
                مناطق المرور
              </p>

              <div className="mt-1 flex flex-wrap gap-1">

                {post.area?.slice(0, 2).map((item, index) => (
                  <span
                    key={`${item}-${index}`}
                    className="text-xs font-semibold"
                  >
                    {item}
                    {index < Math.min(post.area.length, 2) - 1 && "،"}
                  </span>
                ))}

                {post.area && post.area.length > 2 && (
                  <span className="text-xs text-[#D9B98C]">
                    +{post.area.length - 2}
                  </span>
                )}

              </div>

            </div>

          </div>

        </div>

        <div className="flex flex-col justify-between rounded-2xl bg-[#5B3F22] p-5">

          <div className="text-center">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EFE1D1]/10 text-2xl">
              👤
            </div>

            <p className="mt-3 text-sm font-bold">
              ملف السائق
            </p>

            <p className="mt-2 text-xs leading-6 text-[#EFE1D1]/50">
              شاهد معلومات السائق وتفاصيله
            </p>

          </div>

          <div className="mt-5 rounded-xl bg-[#EFE1D1] px-4 py-3 text-center text-sm font-bold text-[#432E1A] transition group-hover:bg-white">
            عرض الملف الشخصي
          </div>

        </div>

      </div>
    </Link>
  );
}