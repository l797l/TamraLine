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
      <div className="flex flex-col md:flex-row">

        {/* الصورة - اليمين */}
        <div className="w-full md:w-[35%]">
          <div className="relative h-64 w-full md:h-full md:min-h-[420px]">
            <Image
              src={"/headerLogo.png"}
              alt={post.nameCar}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* المعلومات - اليسار */}
        <div className="flex flex-1 flex-col p-6 text-right text-[#EFE1D1]">

          {/* Header */}
          <div className="mb-5 flex items-center justify-between gap-4">

            <h2 className="text-2xl font-bold">
              {post.nameCar}
            </h2>

            <span
              className={`shrink-0 rounded-full px-4 py-1 text-sm font-bold ${
                post.status === 0
                  ? "bg-green-500 text-white"
                  : "bg-red-500 text-white"
              }`}
            >
              {post.status === 0 ? "متوفر" : "محجوز"}
            </span>

          </div>

          {/* الوصف */}
          <p className="leading-8 text-[#EFE1D1]/80">
            {post.desciption}
          </p>

          {/* Information */}
          <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2">

            <div>
              <p className="mb-1 text-sm text-[#EFE1D1]/60">
                الجامعة
              </p>

              <p className="font-semibold">
                {post.university}
              </p>
            </div>

            <div>
              <p className="mb-1 text-sm text-[#EFE1D1]/60">
                المحافظة
              </p>

              <p className="font-semibold">
                {post.governorate}
              </p>
            </div>

            <div>
              <p className="mb-1 text-sm text-[#EFE1D1]/60">
                الشفت
              </p>

              <p className="font-semibold">
                {post.shift === 0 ? "صباحي" : "مسائي"}
              </p>
            </div>

            <div>
              <p className="mb-1 text-sm text-[#EFE1D1]/60">
                السائق
              </p>

              <p className="font-semibold">
                {post.fullName}
              </p>
            </div>

          </div>

          {/* المناطق */}
          <div className="mt-7">

            <p className="mb-3 text-sm text-[#EFE1D1]/60">
              المناطق
            </p>

            <div className="flex flex-wrap gap-2">

              {post.area.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-[#5B3F22] px-4 py-2 text-sm"
                >
                  {item}
                </span>
              ))}

            </div>

          </div>

          {/* WhatsApp */}
          <div className="mt-8">

            <a
              href={`https://wa.me/964${post.phoneNumber.replace(/^0/, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#25D366] px-6 py-3 font-bold text-white transition hover:bg-[#1ebe5d]"
            >
              <i className="fa-brands fa-whatsapp text-2xl" />

              <span>
                تواصل عبر واتساب
              </span>
            </a>

          </div>

        </div>
      </div>
    </div>
  );
}