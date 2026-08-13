import Image from "next/image";
import Link from "next/link";

import { GetProfileDto } from "../../../auth/post/postDto";
import EditButton from "./EditButton";
import StatusBadge from "./StatusBadge";

type CarSectionProps = {
  post: GetProfileDto;
  userId: string;
};

export default function CarSection({
  post,
  userId,
}: CarSectionProps) {
  return (
    <div className="mt-6 overflow-hidden rounded-3xl bg-[#432E1A] shadow-xl">


      <div className="relative h-72 w-full sm:h-96" dir="rtl">

        <Image
          src={post.urlImagePost || "/headerLogo.png"}
          alt={post.nameCar ?? "السيارة"}
          fill
          unoptimized
          className="object-cover"
        />

        {/* Status */}

        <div className="absolute right-5 top-5">
          <StatusBadge status={post.status} />
        </div>

        {/* Edit Image */}

        <div className="absolute bottom-5 left-5">
          <Link
            href={`/profile/${userId}/post/edit/image`}
            className="rounded-xl bg-[#432E1A]/90 px-4 py-2 font-semibold text-[#EFE1D1] shadow-lg backdrop-blur-sm transition hover:bg-[#5B3F22]"
          >
            📷 تعديل الصورة
          </Link>
        </div>

      </div>



      <div className="flex items-center justify-between gap-4 p-6 text-[#EFE1D1]" dir="rtl">

        <div>

          <p className="text-sm text-[#EFE1D1]/60">
            السيارة
          </p>

          <h2 className="mt-1 text-2xl font-bold">
            {post.nameCar || "لم يتم تحديد السيارة"}
          </h2>

        </div>

        <EditButton
          href={`/profile/${userId}/post/edit?section=car`}
        />

      </div>

    </div>
  );
}