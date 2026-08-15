import Link from "next/link";
    import { Car } from "lucide-react";

type NoPostProps = {
  userId: string;
};

export default function NoPost({
  userId,
}: NoPostProps) {

  return (
    <div className="mt-6 overflow-hidden rounded-3xl bg-[#432E1A] p-8 text-center text-[#EFE1D1] shadow-xl">


<div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-[#5B3F22]">
  <Car className="h-12 w-12 text-white" />
</div>


      <h2 className="mt-6 text-2xl font-bold">
        لا يوجد لديك منشور
      </h2>


      <p className="mx-auto mt-3 max-w-lg leading-8 text-[#EFE1D1]/60">
        لم تقم بإنشاء منشور رحلة حتى الآن.
        أنشئ منشورك حتى يتمكن الطلاب من العثور عليك والتواصل معك.
      </p>


      <Link
        href={`/profile/${userId}/post/create`}
        className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#EFE1D1] px-7 py-3 font-bold text-[#432E1A] transition hover:bg-white"
      >
        <span className="text-xl">
          ＋
        </span>

        إنشاء منشور

      </Link>

    </div>
  );
}