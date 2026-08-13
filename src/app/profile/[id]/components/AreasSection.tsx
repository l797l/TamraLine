import { GetProfileDto } from "../../../auth/post/postDto";
import EditButton from "./EditButton";

type AreasSectionProps = {
  post: GetProfileDto;
  userId: string;
  isUser: boolean;
};

export default function AreasSection({
  post,
  userId,
  isUser
}: AreasSectionProps) {

  return (
    <div className="mt-6 rounded-3xl bg-[#432E1A] p-6 text-[#EFE1D1] shadow-xl" dir="rtl">

      <div className="flex items-center justify-between gap-4">

        <p className="text-xl font-bold">
          مناطق المرور
        </p>

        {isUser &&
        <EditButton
          href={`/profile/${userId}/post/edit?section=areas`}
        />
        }
        

      </div>


      <div className="mt-5 flex flex-wrap gap-3">

        {post.area && post.area.length > 0 ? (

          post.area.map((area) => (
            <span
              key={area}
              className="rounded-full bg-[#5B3F22] px-5 py-2 text-sm"
            >
              {area}
            </span>
          ))

        ) : (

          <p className="text-sm text-[#EFE1D1]/60">
            لم تتم إضافة مناطق المرور
          </p>

        )}

      </div>

    </div>
  );
}