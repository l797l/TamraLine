
import Image from "next/image";

type Post = {
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
    <div
      dir="rtl"
      className="w-full overflow-hidden rounded-3xl bg-[#432E1A] shadow-xl"
    >

     

      <div className="relative h-56 w-full sm:h-72">

        <Image
          src={post.urlImagePost || "/headerLogo.png"}
          alt={post.nameCar}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 768px"
        />

        {/* Overlay */}

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

        {/* Car Name */}

        <div className="absolute bottom-4 right-4 left-4">
          <div className="rounded-2xl bg-black/40 px-4 py-3 text-right backdrop-blur-sm">

            <p className="text-xs text-white/70">
              السيارة
            </p>

            <h2 className="mt-1 text-xl font-bold text-white sm:text-2xl">
              {post.nameCar}
            </h2>

          </div>
        </div>

      </div>


      <div className="p-5 text-right text-[#EFE1D1] sm:p-7">

       

        <div className="mb-5 rounded-2xl bg-[#5B3F22] p-4">

          <p className="text-xs text-[#EFE1D1]/50">
            السائق
          </p>

          <p className="mt-1 text-lg font-bold">
            {post.fullName}
          </p>

        </div>


      

        <div className="mb-5 rounded-2xl bg-[#5B3F22] p-4">

          <p className="mb-2 text-sm text-[#EFE1D1]/60">
            وصف الرحلة
          </p>

          <p className="text-sm leading-7 text-[#EFE1D1]/90">
            {post.desciption}
          </p>

        </div>



        <div className="grid grid-cols-2 gap-3">


          <div className="rounded-2xl bg-[#5B3F22] p-4">

            <p className="text-xs text-[#EFE1D1]/50">
              الجامعة
            </p>

            <p className="mt-1 text-sm font-semibold leading-6">
              {post.university}
            </p>

          </div>



          <div className="rounded-2xl bg-[#5B3F22] p-4">

            <p className="text-xs text-[#EFE1D1]/50">
              المحافظة
            </p>

            <p className="mt-1 text-sm font-semibold">
              {post.governorate}
            </p>

          </div>



          <div className="rounded-2xl bg-[#5B3F22] p-4">

            <p className="text-xs text-[#EFE1D1]/50">
              الدوام
            </p>

            <p className="mt-1 text-sm font-semibold">
              {post.shift === 0 ? "صباحي" : "مسائي"}
            </p>

          </div>



          <div className="rounded-2xl bg-[#5B3F22] p-4">

            <p className="text-xs text-[#EFE1D1]/50">
              السيارة
            </p>

            <p className="mt-1 text-sm font-semibold">
              {post.nameCar}
            </p>

          </div>

        </div>


       

        <div className="mt-5 rounded-2xl bg-[#5B3F22] p-4">

          <p className="mb-3 text-sm text-[#EFE1D1]/60">
            مناطق المرور
          </p>

          <div className="flex flex-wrap gap-2">

            {post.area?.map((item, index) => (
              <span
                key={`${item}-${index}`}
                className="rounded-full bg-[#EFE1D1]/10 px-3 py-1.5 text-xs"
              >
                {item}
              </span>
            ))}

          </div>

        </div>


      

        <div className="mt-5">

          <a
            href={`https://wa.me/964${post.phoneNumber.replace(/^0/, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-3 rounded-2xl bg-[#25D366] px-5 py-4 text-sm font-bold text-white transition active:scale-[0.98] hover:bg-[#1ebe5d]"
          >

            <i className="fa-brands fa-whatsapp text-2xl" />

            <span>
              تواصل عبر واتساب
            </span>

          </a>

        </div>

      </div>

    </div>
  );
}
