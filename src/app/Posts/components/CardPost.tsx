import Link from "next/link";
import Image from "next/image";
import {
  Car,
  GraduationCap,
  MapPin,
  Clock3,
  ChevronLeft,
} from "lucide-react";

type Post = {
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
  gender: number;
};

type CardPostProps = {
  post: Post;
};

export default function CardPost({ post }: CardPostProps) {
  const driverImage =
    post.gender === 0 ? "/DriveBoy.png" : "/DriveGirl.png";

  const isAvailable = true;

  return (
    <Link
      href={`/profile/${post.userId}`}
      dir="rtl"
      className="group relative block w-full overflow-hidden rounded-[28px] border border-[#8A6339]/30 bg-gradient-to-br from-[#49301B] to-[#362313] p-3 text-[#EFE1D1] shadow-[0_10px_35px_rgba(35,20,8,0.25)] transition-all duration-300 hover:-translate-y-1 hover:border-[#C89A62]/40 hover:shadow-[0_18px_45px_rgba(35,20,8,0.4)] sm:p-4"
    >
      <div className="pointer-events-none absolute -left-16 -top-16 h-40 w-40 rounded-full bg-[#C89A62]/10 blur-3xl transition-all duration-500 group-hover:bg-[#C89A62]/20" />

      <div className="relative grid gap-3 lg:grid-cols-[1fr_1.35fr_0.7fr]">

        {/* ================= Driver ================= */}
        <div className="relative overflow-hidden rounded-[22px] border border-white/5 bg-[#5A3D21] p-5">
          
          <div className="absolute right-4 top-4 flex items-center gap-2 rounded-full border border-white/5 bg-black/10 px-3 py-1.5">
            <span
              className={`h-2 w-2 rounded-full ${
                isAvailable
                  ? "bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]"
                  : "bg-red-400"
              }`}
            />

            <span className="text-[11px] font-medium text-[#EFE1D1]/70">
              {isAvailable ? "متاح حالياً" : "غير متاح"}
            </span>
          </div>

          <div className="mt-7 flex items-center gap-4">
            <div className="relative shrink-0">
              <div className="absolute inset-0 rounded-full bg-[#C89A62]/20 blur-md" />

              <Image
                src={driverImage}
                alt={post.fullName}
                width={76}
                height={76}
                className="relative h-[76px] w-[76px] rounded-full border-2 border-[#D9B98C]/30 bg-[#432E1A] object-cover"
              />
            </div>

            <div className="min-w-0">
              <p className="text-[11px] text-[#D9B98C]/60">
                السائق
              </p>

              <h2 className="mt-1 truncate text-xl font-extrabold text-[#FFF4E5]">
                {post.fullName}
              </h2>

              <p className="mt-1 text-xs text-[#EFE1D1]/45">
                ملف السائق والرحلة
              </p>
            </div>
          </div>

          <div className="mt-6 flex items-center gap-3 rounded-2xl border border-white/5 bg-[#432E1A]/50 p-3.5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#D9B98C]/10 text-[#D9B98C]">
              <GraduationCap size={19} />
            </div>

            <div className="min-w-0">
              <p className="text-[10px] text-[#EFE1D1]/40">
                الجامعة
              </p>

              <p className="mt-1 truncate text-sm font-bold text-[#F4E7D5]">
                {post.university}
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-[22px] border border-white/5 bg-[#5A3D21] p-5">
          
          <div>
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold text-[#D9B98C]/70">
                تفاصيل الرحلة
              </p>

              <span className="h-px flex-1 bg-white/5 mr-4" />
            </div>

            <p className="mt-3 line-clamp-2 text-sm leading-7 text-[#EFE1D1]/80">
              {post.desciption || "لا يوجد وصف للرحلة"}
            </p>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-2.5">

            <div className="rounded-2xl border border-white/5 bg-[#432E1A]/45 p-3.5 transition-colors group-hover:bg-[#432E1A]/70">
              <div className="flex items-center gap-2 text-[#D9B98C]">
                <MapPin size={15} />

                <span className="text-[10px] text-[#EFE1D1]/45">
                  المحافظة
                </span>
              </div>

              <p className="mt-2 truncate text-sm font-bold">
                {post.governorate}
              </p>
            </div>
           <div className="rounded-2xl border border-white/5 bg-[#432E1A]/45 p-3.5 transition-colors group-hover:bg-[#432E1A]/70">
              <div className="flex items-center gap-2 text-[#D9B98C]">
                <Clock3 size={15} />

                <span className="text-[10px] text-[#EFE1D1]/45">
                  الدوام
                </span>
              </div>

              <p className="mt-2 text-sm font-bold">
                {post.shift === 0 ? "صباحي" : "مسائي"}
              </p>
            </div>

            <div className="rounded-2xl border border-white/5 bg-[#432E1A]/45 p-3.5 transition-colors group-hover:bg-[#432E1A]/70">
              <div className="flex items-center gap-2 text-[#D9B98C]">
                <Car size={15} />

                <span className="text-[10px] text-[#EFE1D1]/45">
                  السيارة
                </span>
              </div>

              <p className="mt-2 truncate text-sm font-bold">
                {post.nameCar}
              </p>
            </div>

            {/* Areas */}
            <div className="rounded-2xl border border-white/5 bg-[#432E1A]/45 p-3.5 transition-colors group-hover:bg-[#432E1A]/70">
              <div className="flex items-center gap-2">
                <MapPin size={15} className="text-[#D9B98C]" />

                <span className="text-[10px] text-[#EFE1D1]/45">
                  مناطق المرور
                </span>
              </div>

              <div className="mt-2 flex min-h-[20px] flex-wrap items-center gap-1.5">
                {post.area?.slice(0, 2).map((item, index) => (
                  <span
                    key={`${item}-${index}`}
                    className="text-xs font-bold"
                  >
                    {item}
                    {index < Math.min(post.area.length, 2) - 1 && (
                      <span className="mr-1 text-[#D9B98C]/50">
                        ،
                      </span>
                    )}
                  </span>
                ))}

                {post.area && post.area.length > 2 && (
                  <span className="rounded-full bg-[#D9B98C]/10 px-2 py-0.5 text-[10px] font-bold text-[#D9B98C]">
                    +{post.area.length - 2}
                  </span>
                )}

                {(!post.area || post.area.length === 0) && (
                  <span className="text-xs text-[#EFE1D1]/30">
                    غير محدد
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between rounded-[22px] border border-white/5 bg-gradient-to-b from-[#604426] to-[#51361E] p-5">

          <div>
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#D9B98C]/10 text-[#D9B98C]">
              <ChevronLeft size={22} />
            </div>

            <p className="mt-5 text-lg font-extrabold text-[#FFF4E5]">
              ملف السائق
            </p>

            <p className="mt-2 text-xs leading-6 text-[#EFE1D1]/50">
              تعرف على معلومات السائق وتفاصيل الرحلة قبل التواصل معه.
            </p>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2 rounded-2xl bg-[#EFE1D1] px-4 py-3.5 text-sm font-extrabold text-[#432E1A] shadow-lg transition-all duration-300 group-hover:bg-white group-hover:shadow-xl">
            <span>عرض الملف الشخصي</span>

            <ChevronLeft
              size={17}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
          </div>
        </div>
      </div>
    </Link>
  );
}