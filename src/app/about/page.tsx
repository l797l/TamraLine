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
      role: "Software Engineer",
      image: "/AliMahdi.png",
    },
    {
      name: "Sajad Mouid",
      role: "UI/UX Designer",
      image: "/headerLogo.png",
    },
  ];

  const features = [
    {
      title: "سهولة العثور على الخطوط",
      description:
        "يساعد تمرا لاين الطلاب على العثور على خطوط النقل المناسبة لهم بالقرب من مناطق سكنهم وبما يتناسب مع موقع جامعتهم.",
      icon: "🚌",
    },
    {
      title: "توفير الوقت والجهد",
      description:
        "بدلاً من البحث بين الطلاب والسائقين أو السؤال عن الخطوط المتوفرة، يستطيع الطالب الوصول إلى المعلومات التي يحتاجها بسهولة.",
      icon: "⏱️",
    },
    {
      title: "معرفة تفاصيل الرحلة",
      description:
        "يوفر الموقع معلومات تساعد الطالب على معرفة تفاصيل الخط، مساره، وأهم المعلومات المتعلقة بالرحلة قبل الاشتراك بها.",
      icon: "📍",
    },
    {
      title: "تجربة مخصصة للطلاب",
      description:
        "تم تصميم المنصة لتكون بسيطة وسهلة الاستخدام، مع التركيز على احتياجات طلاب الجامعات وطريقة تنقلهم اليومية.",
      icon: "🎓",
    },
    {
      title: "ربط الطلاب بالسائقين",
      description:
        "يسعى تمرا لاين إلى بناء حلقة وصل بين الطلاب وأصحاب خطوط النقل لتسهيل عملية الوصول إلى الخط المناسب.",
      icon: "🤝",
    },
    {
      title: "تنظيم عملية النقل",
      description:
        "يساعد الموقع على جعل عملية البحث عن وسائل النقل الجامعي أكثر تنظيماً ووضوحاً بدلاً من الاعتماد على الطرق التقليدية.",
      icon: "📋",
    },
  ];

  return (
    <div
      dir="rtl"
      className="min-h-screen bg-[#EFE1D1] px-4 py-12"
    >
      <div className="mx-auto max-w-6xl">

        {/* Hero */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-[#432E1A] md:text-5xl">
            من نحن
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-[#432E1A]/70">
            تمرا لاين هو موقع إلكتروني يهدف إلى تسهيل عملية نقل طلاب
            الجامعات، من خلال توفير منصة تساعد الطالب على العثور على
            خطوط النقل المناسبة له ومعرفة تفاصيلها بطريقة سهلة وسريعة.
          </p>
        </div>

        {/* About */}
        <section className="rounded-3xl bg-[#432E1A] p-7 text-[#EFE1D1] shadow-xl md:p-10">

          <div className="grid gap-10 md:grid-cols-2 md:items-center">

            <div>
              <span className="text-sm font-semibold text-[#D9B98C]">
                عن تمرا لاين
              </span>

              <h2 className="mt-3 text-3xl font-bold">
                نجعل رحلة الطالب إلى الجامعة أسهل
              </h2>

              <p className="mt-5 leading-8 text-[#EFE1D1]/80">
                يواجه الكثير من طلاب الجامعات صعوبة في العثور على خطوط
                نقل مناسبة لمناطق سكنهم ومواعيد دوامهم الجامعي. وفي
                كثير من الأحيان يعتمد الطالب على سؤال زملائه أو البحث
                بشكل عشوائي عن خط مناسب.
              </p>

              <p className="mt-4 leading-8 text-[#EFE1D1]/80">
                من هنا جاءت فكرة تمرا لاين، حيث نعمل على توفير منصة
                تجمع المعلومات المتعلقة بخطوط النقل وتساعد الطالب على
                الوصول إلى الخيارات المتاحة بسهولة، مما يوفر عليه
                الوقت والجهد ويجعل عملية البحث عن وسيلة النقل أكثر
                وضوحاً وتنظيماً.
              </p>
            </div>

            <div className="rounded-3xl bg-[#5B3F22] p-8 text-center">
              <div className="text-7xl">🎓</div>

              <h3 className="mt-5 text-2xl font-bold">
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
        <section className="mt-10 rounded-3xl bg-white/40 p-7 md:p-10">

          <div className="text-right">
            <span className="text-sm font-semibold text-[#8B5E34]">
              المشكلة التي نعمل على حلها
            </span>

            <h2 className="mt-2 text-3xl font-bold text-[#432E1A]">
              لماذا تم إنشاء تمرا لاين؟
            </h2>

            <p className="mt-4 max-w-4xl leading-8 text-[#432E1A]/70">
              البحث عن خط نقل مناسب قد يكون أمراً متعباً للطالب، خصوصاً
              عند الانتقال إلى جامعة جديدة أو السكن في منطقة بعيدة.
              لذلك نهدف إلى جمع هذه المعلومات في مكان واحد، بحيث يستطيع
              الطالب البحث عن الخط المناسب بدلاً من الاعتماد على
              الطرق التقليدية في البحث.
            </p>
          </div>

        </section>

        {/* Features */}
        <section className="mt-10">

          <div className="mb-7 text-right">
            <span className="text-sm font-semibold text-[#8B5E34]">
              ماذا نقدم؟
            </span>

            <h2 className="mt-2 text-3xl font-bold text-[#432E1A]">
              مميزات تمرا لاين
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-3xl bg-[#432E1A] p-6 text-[#EFE1D1] shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#5B3F22] text-2xl">
                  {feature.icon}
                </div>

                <h3 className="mt-5 text-xl font-bold">
                  {feature.title}
                </h3>

                <p className="mt-3 leading-7 text-[#EFE1D1]/70">
                  {feature.description}
                </p>
              </div>
            ))}

          </div>
        </section>

        {/* Vision */}
        <section className="mt-10 rounded-3xl bg-[#5B3F22] p-8 text-center text-[#EFE1D1] shadow-xl md:p-12">

          <div className="mx-auto max-w-3xl">

            <span className="text-sm font-semibold text-[#D9B98C]">
              رؤيتنا
            </span>

            <h2 className="mt-3 text-3xl font-bold">
              نقل جامعي أسهل وأكثر تنظيماً
            </h2>

            <p className="mt-5 leading-8 text-[#EFE1D1]/80">
              نطمح إلى أن يصبح تمرا لاين منصة يعتمد عليها طلاب
              الجامعات للعثور على خطوط النقل المناسبة لهم، وأن نساهم
              في تحسين تجربة التنقل اليومية للطالب من خلال التقنية
              وتوفير المعلومات بطريقة بسيطة وسهلة الوصول.
            </p>

          </div>
        </section>

        {/* Team */}
        <section className="mt-12">

          <div className="mb-7 text-right">
            <span className="text-sm font-semibold text-[#8B5E34]">
              فريقنا
            </span>

            <h2 className="mt-2 text-3xl font-bold text-[#432E1A]">
              الفريق الذي يقف خلف تمرا لاين
            </h2>

            <p className="mt-3 text-[#432E1A]/70">
              فريق يعمل على تطوير المنصة وتحسين تجربة المستخدم
              لتقديم حل عملي يخدم طلاب الجامعات.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {team.map((member) => (
              <div
                key={member.name}
                className="rounded-3xl bg-[#432E1A] p-6 text-center text-[#EFE1D1] shadow-lg transition duration-300 hover:-translate-y-1"
              >

                <Image
                  src={member.image}
                  alt={member.name}
                  width={128}
                  height={128}
                  className="mx-auto h-32 w-32 rounded-full border-4 border-[#EFE1D1] object-cover"
                />

                <h3 className="mt-5 text-xl font-bold">
                  {member.name}
                </h3>

                <p className="mt-2 text-sm text-[#EFE1D1]/70">
                  {member.role}
                </p>

              </div>
            ))}

          </div>
        </section>

        {/* Final CTA */}
        <section className="mt-12 text-center">

          <h2 className="text-3xl font-bold text-[#432E1A]">
            تمرا لاين... طريقك الأسهل إلى الجامعة
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-[#432E1A]/70">
            نؤمن أن الوصول إلى الجامعة لا يجب أن يكون أمراً معقداً.
            لذلك نعمل على جعل العثور على خط النقل المناسب أسرع وأسهل
            لكل طالب.
          </p>

        </section>

      </div>
    </div>
  );
}