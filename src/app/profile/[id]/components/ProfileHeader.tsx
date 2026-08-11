import Image from "next/image";

import { GetProfileDto } from "../../../auth/Post/postDto";
import EditButton from "./EditButton";

type ProfileHeaderProps = {
  post: GetProfileDto;
  userId: string;
};

export default function ProfileHeader({
  post,
  userId,
}: ProfileHeaderProps) {

  const profileImage =
    post.role === 2
      ? post.gender === 1
        ? "/DriveGirl.png"
        : "/DriveBoy.png"
      : post.gender === 1
        ? "/studentGirl.png"
        : "/headerLogo.png";

  const roleName =
    post.role === 2
      ? "سائق"
      :post.role === 1? "طالب": "أدمن";

  return (
    <div className="overflow-hidden rounded-3xl bg-[#432E1A] shadow-xl" dir="rlt">


      <div className="relative h-48 w-full">

        <Image
          src="/headerLogo.png"
          alt="صورة الغلاف"
          fill
          className="object-cover opacity-70"
        />

        <div className="absolute inset-0 bg-black/20" />

      </div>



      <div className="relative px-6 pb-8">


        <div className="-mt-16 flex justify-center">

          <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-[#EFE1D1] bg-[#5B3F22] shadow-lg">

            <Image
              src={profileImage}
              alt={post.fullName ?? "المستخدم"}
              fill
              className="object-cover"
            />

          </div>

        </div>



        <div className="mt-4 text-center text-[#EFE1D1]">

          <h1 className="text-3xl font-bold">
            {post.fullName}
          </h1>

          <p className="mt-2 text-[#EFE1D1]/60">
            {roleName}
          </p>

        </div>



        <div className="mt-6 flex justify-center">

          <EditButton
            href={`/profile/${userId}/edit?section=profile`}
          >
            ✏️ تعديل بيانات الحساب
          </EditButton>

        </div>

      </div>

    </div>
  );
}