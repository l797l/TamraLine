import { GetProfileDto } from "../../../auth/post/postDto";
import InfoItem from "./InfoItem";

type InformationSectionProps = {
  post: GetProfileDto;
  userId: string;
};

export default function InformationSection({
  post,
  userId,
}: InformationSectionProps) {

  return (
    <div className="mt-6 rounded-3xl bg-[#432E1A] p-6 text-[#EFE1D1] shadow-xl" dir="rtl">

      <h2 className="mb-5 text-xl font-bold">
        معلومات الرحلة
      </h2>


      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">


        <InfoItem
          title="الجامعة"
          value={post.university || "غير محددة"}
          editHref={`/profile/${userId}/post/edit?section=university`}
        />



        <InfoItem
          title="المحافظة"
          value={post.governorate || "غير محددة"}
          editHref={`/profile/${userId}/post/edit?section=governorate`}
        />



        <InfoItem
          title="الدوام"
          value={
            post.shift === 0
              ? "صباحي"
              : post.shift === 1
                ? "مسائي"
                : "غير محدد"
          }
          editHref={`/profile/${userId}/post/edit?section=shift`}
        />



        <InfoItem
          title="رقم الهاتف"
          value={
            <a
              href={`tel:${post.phoneNumber}`}
              className="transition hover:text-white"
            >
              {post.phoneNumber}
            </a>
          }
          editHref={`/profile/${userId}/edit?section=phone`}
        />



        <InfoItem
          title="رقم الحساب"
          value={
            <span className="break-all">
              {userId}
            </span>
          }
        />

      </div>

    </div>
  );
}