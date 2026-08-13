import { GetProfileDto } from "../../../auth/post/postDto";
import EditButton from "./EditButton";

type DescriptionSectionProps = {
  post: GetProfileDto;
  userId: string;
};

export default function DescriptionSection({
  post,
  userId,
}: DescriptionSectionProps) {

  return (
    <div className="mt-6 rounded-3xl bg-[#432E1A] p-6 text-[#EFE1D1] shadow-xl" dir="rtl">

      <div className="flex items-center justify-between gap-4">

        <p className="text-sm text-[#EFE1D1]/60">
          نبذة عن الرحلة
        </p>


        <EditButton
          href={`/profile/${userId}/post/edit?section=description`}
        />

      </div>


      <p className="mt-4 leading-8">

        {post.desciption || "لا يوجد وصف للرحلة"}

      </p>

    </div>
  );
}