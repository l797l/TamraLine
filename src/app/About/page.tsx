import Image from "next/image";
import {
  Bus,
  Clock3,
  MapPin,
  GraduationCap,
  Handshake,
  ClipboardList,
} from "lucide-react";

export default function About() {
  const team = [
     {
      name: "Fahd Louay",
      role: "Frontend Developer",
      image: "/headerLogo.png",
    },
    {
      name: "Abdullah Anas",
      role: "Frontend Developer",
      image: "/headerLogo.png",
    },
    {
      name: "Ali Abdul-Mahdi Aziz",
      role: "CEO & Software Engineer",
      image: "/AliMahdi.png",
    },
    {
      name: "Sajad Moayad",
      role: "Frontend Developer",
      image: "/headerLogo.png",
    },
     {
      name: "Hussain Humdan",
      role: "Frontend Developer",
      image: "/headerLogo.png",
    },
  ];

  const features = [
    {
      title: "سهولة العثور على الخطوط",
      description:
        "يساعد تمرا لاين الطلاب على العثور على خطوط النقل المناسبة لهم بالقرب من مناطق سكنهم وبما يتناسب مع موقع جامعتهم.",
      icon: Bus,
    },
    {
      title: "توفير الوقت والجهد",
      description:
        "بدلاً من البحث بين الطلاب والسائقين أو السؤال عن الخطوط المتوفرة، يستطيع الطالب الوصول إلى المعلومات التي يحتاجها بسهولة.",
      icon: Clock3,
    },
    {
      title: "معرفة تفاصيل الرحلة",
      description:
        "يوفر الموقع معلومات تساعد الطالب على معرفة تفاصيل الخط، مساره، وأهم المعلومات المتعلقة بالرحلة قبل الاشتراك بها.",
      icon: MapPin,
    },
    {
      title: "تجربة مخصصة للطلاب",
      description:
        "تم تصميم المنصة لتكون بسيطة وسهلة الاستخدام، مع التركيز على احتياجات طلاب الجامعات وطريقة تنقلهم اليومية.",
      icon: GraduationCap,
    },
    {
      title: "ربط الطلاب بالسائقين",
      description:
        "يسعى تمرا لاين إلى بناء حلقة وصل بين الطلاب وأصحاب خطوط النقل لتسهيل عملية الوصول إلى الخط المناسب.",
      icon: Handshake,
    },
    {
      title: "تنظيم عملية النقل",
      description:
        "يساعد الموقع على جعل عملية البحث عن وسائل النقل الجامعي أكثر تنظيماً ووضوحاً بدلاً من الاعتماد على الطرق التقليدية.",
      icon: ClipboardList,
    },
  ];

  return (
    <div
      dir="rtl"
      className="min-h-screen bg-[#EFE1D1] px-3 py-8 sm:px-4 sm:py-10 md:py-12"
    >
      <div className="mx-auto max-w-6xl">

        {/* Hero */}
        <div className="mb-8 text-center sm:mb-12">
          <h1 className="text-3xl font-bold text-[#432E1A] sm:text-4xl md:text-5xl">
            من نحن
          </h1>

          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-[#432E1A]/70 sm:mt-5 sm:text-lg sm:leading-8">
            تمرا لاين هو موقع إلكتروني يهدف إلى تسهيل عملية نقل طلاب
            الجامعات، من خلال توفير منصة تساعد الطالب على العثور على
            خطوط النقل المناسبة له ومعرفة تفاصيلها بطريقة سهلة وسريعة.
          </p>
        </div>

        {/* About */}
        <section className="rounded-3xl bg-[#432E1A] p-5 text-[#EFE1D1] shadow-xl sm:p-7 md:p-10">
          <div className="grid gap-8 md:grid-cols-2 md:items-center md:gap-10">

            <div>
              <span className="text-sm font-semibold text-[#D9B98C]">
                عن تمرا لاين
              </span>

              <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
                نجعل رحلة الطالب إلى الجامعة أسهل
              </h2>

              <p className="mt-4 leading-7 text-[#EFE1D1]/80 sm:mt-5 sm:leading-8">
                يواجه الكثير من طلاب الجامعات صعوبة في العثور على خطوط
                نقل مناسبة لمناطق سكنهم ومواعيد دوامهم الجامعي. وفي
                كثير من الأحيان يعتمد الطالب على سؤال زملائه أو البحث
                بشكل عشوائي عن خط مناسب.
              </p>

              <p className="mt-4 leading-7 text-[#EFE1D1]/80 sm:leading-8">
                من هنا جاءت فكرة تمرا لاين، حيث نعمل على توفير منصة
                تجمع المعلومات المتعلقة بخطوط النقل وتساعد الطالب على
                الوصول إلى الخيارات المتاحة بسهولة، مما يوفر عليه
                الوقت والجهد ويجعل عملية البحث عن وسيلة النقل أكثر
                وضوحاً وتنظيماً.
              </p>
            </div>

            <div className="rounded-3xl bg-[#5B3F22] p-6 text-center sm:p-8">
              <div className="flex justify-center">
                <GraduationCap className="h-14 w-14 text-[#EFE1D1] sm:h-16 sm:w-16" />
              </div>

              <h3 className="mt-5 text-xl font-bold sm:text-2xl">
                للطلاب... وبأيدي الطلاب
              </h3>

              <p className="mt-4 leading-7 text-[#EFE1D1]/70">
                صُمم تمرا لاين ليكون حلاً عملياً لمشكلة يومية يواجهها
                طلاب الجامعات، مع التركيز على البساطة وسهولة الوصول
                إلى المعلومات.
              </p>
            </div>

          </div>
        </section>

        {/* Problem */}
        <section className="mt-8 rounded-3xl bg-white/40 p-5 sm:mt-10 sm:p-7 md:p-10">
          <div className="text-right">
            <span className="text-sm font-semibold text-[#8B5E34]">
              المشكلة التي نعمل على حلها
            </span>

            <h2 className="mt-2 text-2xl font-bold text-[#432E1A] sm:text-3xl">
              لماذا تم إنشاء تمرا لاين؟
            </h2>

            <p className="mt-4 max-w-4xl leading-7 text-[#432E1A]/70 sm:leading-8">
              البحث عن خط نقل مناسب قد يكون أمراً متعباً للطالب، خصوصاً
              عند الانتقال إلى جامعة جديدة أو السكن في منطقة بعيدة.
              لذلك نهدف إلى جمع هذه المعلومات في مكان واحد، بحيث يستطيع
              الطالب البحث عن الخط المناسب بدلاً من الاعتماد على
              الطرق التقليدية في البحث.
            </p>
          </div>
        </section>

        {/* Features */}
        <section className="mt-8 sm:mt-10">
          <div className="mb-6 text-right sm:mb-7">
            <span className="text-sm font-semibold text-[#8B5E34]">
              ماذا نقدم؟
            </span>

            <h2 className="mt-2 text-2xl font-bold text-[#432E1A] sm:text-3xl">
              مميزات تمرا لاين
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="rounded-3xl bg-[#432E1A] p-5 text-[#EFE1D1] shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-6"
                >
                  {/* Icon */}
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#5B3F22]">
                    <Icon className="h-7 w-7 text-[#EFE1D1]" />
                  </div>

                  <h3 className="mt-5 text-center text-lg font-bold sm:text-xl">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-center leading-7 text-[#EFE1D1]/70">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Vision */}
        <section className="mt-8 rounded-3xl bg-[#5B3F22] p-6 text-center text-[#EFE1D1] shadow-xl sm:mt-10 sm:p-8 md:p-12">
          <div className="mx-auto max-w-3xl">
            <span className="text-sm font-semibold text-[#D9B98C]">
              رؤيتنا
            </span>

            <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
              نقل جامعي أسهل وأكثر تنظيماً
            </h2>

            <p className="mt-4 leading-7 text-[#EFE1D1]/80 sm:mt-5 sm:leading-8">
              نطمح إلى أن يصبح تمرا لاين منصة يعتمد عليها طلاب
              الجامعات للعثور على خطوط النقل المناسبة لهم، وأن نساهم
              في تحسين تجربة التنقل اليومية للطالب من خلال التقنية
              وتوفير المعلومات بطريقة بسيطة وسهلة الوصول.
            </p>
          </div>
        </section>

        {/* Team */}
        <section className="mt-10 sm:mt-12">
          <div className="mb-6 text-right sm:mb-7">
            <span className="text-sm font-semibold text-[#8B5E34]">
              فريقنا
            </span>

            <h2 className="mt-2 text-2xl font-bold text-[#432E1A] sm:text-3xl">
              الفريق الذي يقف خلف تمرا لاين
            </h2>

            <p className="mt-3 text-sm leading-7 text-[#432E1A]/70 sm:text-base">
              فريق يعمل على تطوير المنصة وتحسين تجربة المستخدم
              لتقديم حل عملي يخدم طلاب الجامعات.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {team.map((member) => (
              <div
                key={member.name}
                className="rounded-3xl bg-[#432E1A] p-5 text-center text-[#EFE1D1] shadow-lg transition duration-300 hover:-translate-y-1 sm:p-6"
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={128}
                  height={128}
                  className="mx-auto h-28 w-28 rounded-full border-4 border-[#EFE1D1] object-cover sm:h-32 sm:w-32"
                />

                <h3 className="mt-5 text-lg font-bold sm:text-xl">
                  {member.name}
                </h3>

                <p className="mt-2 text-sm text-[#EFE1D1]/70">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom */}
        <section className="mt-10 px-2 text-center sm:mt-12">
          <h2 className="text-2xl font-bold text-[#432E1A] sm:text-3xl">
            تمرا لاين... طريقك الأسهل إلى الجامعة
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#432E1A]/70 sm:text-base">
            نؤمن أن الوصول إلى الجامعة لا يجب أن يكون أمراً معقداً.
            لذلك نعمل على جعل العثور على خط النقل المناسب أسرع وأسهل
            لكل طالب.
          </p>
        </section>

      </div>
    </div>
  );
}