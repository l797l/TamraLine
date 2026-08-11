import Image from "next/image";
export default function About() {
  const team = [
    {
      name: "Abdullah Anas",
      role: "Frontend Developer",
      image: "/headerLogo.png",
    },
    {
      name: "Ali A. Aziz",
      role: "Software Enginner",
      image: "/AliMahdi.png",
    },
    {
      name: "Sajad Mouid",
      role: "UI/UX Designer",
      image: "/headerLogo.png",
    },
  ];

  return (
    <div className="min-h-screen bg-[#EFE1D1] px-4 py-12">

      <div className="mx-auto max-w-5xl">

        {/* Title */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-[#432E1A] text-right">
            من نحن
          </h1>

          <p className="mt-4 text-[#432E1A]/70 text-right">
            تمرا لاين منصة تهدف إلى تسهيل نقل طلاب الجامعات
            وتوفير رحلات آمنة وموثوقة.
          </p>
        </div>


        {/* About */}
        <div className="rounded-3xl bg-[#432E1A] p-8 text-[#EFE1D1] shadow-xl">

          <h2 className="mb-4 text-2xl font-bold text-right">
            عن التطبيق
          </h2>

          <p className="leading-8 text-[#EFE1D1]/80 text-right">
            نعمل على ربط الطلاب بالسائقين بطريقة سهلة وسريعة،
            مع توفير تجربة استخدام بسيطة تساعد الطلاب على الوصول
            إلى جامعاتهم بأمان وراحة.
          </p>


          {/* Team */}
          <h2 className="mb-6 mt-10 text-2xl font-bold text-right">
            فريق العمل
          </h2>


          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {team.map((member) => (
              <div
                key={member.name}
                className="rounded-2xl bg-[#5B3F22] p-5 text-center"
              >

                <Image
                    src={member.image}
                    alt={member.name}
                    width={128}
                    height={128}
                    className="mx-auto h-32 w-32 rounded-full border-4 border-[#EFE1D1] object-cover"
                />


                <h3 className="mt-4 text-xl font-bold">
                  {member.name}
                </h3>


                <p className="mt-2 text-sm text-[#EFE1D1]/70">
                  {member.role}
                </p>

              </div>
            ))}

          </div>

        </div>

      </div>

    </div>
  );
}