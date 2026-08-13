export default function About() {
  const team = [
    {
      name: "Ali Abd-Almahdi",
      role: "Full Stack Developer",
      description:
        "القائد والمسؤول عن تطوير المشروع والمسؤول أيضًا عن Backend.",
    },
    {
      name: "Sajad Moayd",
      role: "Frontend Developer",
      description:
        "مسؤول عن تصميم الصفحات وتطوير واجهة المستخدم وتجربة الاستخدام.",
    },
    {
      name: "Abdullah Anas",
      role: "Frontend Developer",
      description:
        "مسؤول عن تصميم الصفحات وتطوير واجهة المستخدم وتجربة الاستخدام.",
    },
    {
      name: "Fahad Loay",
      role: "Marketing",
      description: "مسؤول عن التسويق والتعريف بالمشروع.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#F8F5F0] px-6 py-16 text-gray-800">

      {/* Hero Section */}
      <section className="mx-auto max-w-5xl text-center">

        <span className="inline-block rounded-full bg-[#E8DED0] px-5 py-2 text-sm font-semibold text-[#432E1A]">
          من نحن
        </span>

        <h1 className="mt-5 text-4xl font-extrabold text-[#2D2118] md:text-6xl">
          نسهّل طريقك إلى الجامعة
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-gray-600">
          نحن فريق من طلاب علوم الحاسوب نعمل على تطوير منصة تساعد الطلاب
          على إيجاد وتنظيم خطوط النقل من المنزل إلى الجامعة بطريقة سهلة
          وسريعة ومنظمة.
        </p>

      </section>

      {/* Idea & Goal */}
      <section className="mx-auto mt-20 max-w-6xl">

        <div className="grid gap-8 md:grid-cols-2">

          {/* Idea */}
          <div
            dir="rtl"
            className="group rounded-3xl border border-[#E8DED0] bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#432E1A] text-2xl">
              💡
            </div>

            <h2 className="mb-4 text-2xl font-bold text-[#2D2118]">
              فكرتنا
            </h2>

            <p className="leading-8 text-gray-600">
              جاءت فكرة المشروع بسبب حاجة الكثير من الطلاب إلى وسيلة نقل
              منظمة تساعدهم على الوصول إلى الجامعة والعودة إلى المنزل بسهولة،
              دون الحاجة إلى البحث بشكل مستمر عن خطوط نقل مناسبة.
            </p>
          </div>

          {/* Goal */}
          <div
            dir="rtl"
            className="group rounded-3xl border border-[#D6E4E8] bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#527D8B] text-2xl">
              🎯
            </div>

            <h2 className="mb-4 text-2xl font-bold text-[#2D2118]">
              هدفنا
            </h2>

            <p className="leading-8 text-gray-600">
              هدفنا هو إنشاء منصة تجمع الطلاب مع خطوط النقل وتوفر لهم
              المعلومات التي يحتاجونها مثل المنطقة، الجامعة، وقت الانطلاق
              والعودة، مما يجعل عملية التنقل أكثر سهولة وتنظيمًا.
            </p>
          </div>

        </div>
      </section>

      {/* Features */}
      <section className="mx-auto mt-24 max-w-6xl text-center">

        <span className="text-sm font-bold text-[#527D8B]">
          خدماتنا
        </span>

        <h2 className="mt-2 text-3xl font-extrabold text-[#2D2118] md:text-4xl">
          ماذا نقدم؟
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-gray-600">
          نوفر لك الأدوات التي تحتاجها للوصول إلى خط النقل المناسب بسهولة.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-4">

          {/* Card 1 */}
          <div className="group rounded-3xl border border-gray-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#E8DED0] text-3xl transition duration-300 group-hover:scale-110">
              📍
            </div>

            <h3 className="mb-3 text-xl font-bold text-[#2D2118]">
              تحديد المنطقة
            </h3>

            <p className="text-sm leading-7 text-gray-600">
              العثور على خطوط النقل التي تمر بالقرب من منطقة سكنك.
            </p>

          </div>

          {/* Card 2 */}
          <div className="group rounded-3xl border border-gray-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#D6E4E8] text-3xl transition duration-300 group-hover:scale-110">
              🎓
            </div>

            <h3 className="mb-3 text-xl font-bold text-[#2D2118]">
              اختيار الجامعة
            </h3>

            <p className="text-sm leading-7 text-gray-600">
              البحث عن خطوط النقل المتجهة إلى جامعتك.
            </p>

          </div>

          {/* Card 3 */}
          <div className="group rounded-3xl border border-gray-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#E8DED0] text-3xl transition duration-300 group-hover:scale-110">
              🕐
            </div>

            <h3 className="mb-3 text-xl font-bold text-[#2D2118]">
              أوقات الرحلات
            </h3>

            <p className="text-sm leading-7 text-gray-600">
              معرفة أوقات الذهاب والعودة الخاصة بكل خط.
            </p>

          </div>

          {/* Card 4 */}
          <div className="group rounded-3xl border border-gray-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#D6E4E8] text-3xl transition duration-300 group-hover:scale-110">
              📞
            </div>

            <h3 className="mb-3 text-xl font-bold text-[#2D2118]">
              سهولة التواصل
            </h3>

            <p className="text-sm leading-7 text-gray-600">
              تسهيل التواصل بين الطلاب ومسؤولي خطوط النقل.
            </p>

          </div>

        </div>
      </section>

      {/* Team */}
      <section className="mx-auto mt-24 max-w-6xl">

        <div className="mb-12 text-center">

          <span className="text-sm font-bold text-[#527D8B]">
            فريق العمل
          </span>

          <h2 className="mt-2 text-3xl font-extrabold text-[#2D2118] md:text-4xl">
            تعرف على فريقنا
          </h2>

          <p className="mt-4 text-gray-600">
            مجموعة من الطلاب يعملون معًا لبناء وتطوير المشروع.
          </p>

        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {team.map((member) => (
            <div
              key={member.name}
              className="group rounded-3xl border border-gray-100 bg-white p-8 text-center shadow-sm transition duration-300 hover:-translate-y-3 hover:shadow-2xl"
            >

              {/* Avatar */}
              <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-[#432E1A] to-[#76583D] text-4xl shadow-lg transition duration-300 group-hover:scale-110">
                👨‍💻
              </div>

              <h3 className="text-xl font-bold text-[#2D2118]">
                {member.name}
              </h3>

              <span className="mt-2 inline-block rounded-full bg-[#E8DED0] px-4 py-1 text-sm font-semibold text-[#432E1A]">
                {member.role}
              </span>

              <p
                dir="rtl"
                className="mt-5 leading-7 text-gray-600"
              >
                {member.description}
              </p>

            </div>
          ))}

        </div>
      </section>

      {/* Vision */}
      <section className="mx-auto mt-24 max-w-5xl">

        <div
          dir="rtl"
          className="relative overflow-hidden rounded-[2rem] bg-[#432E1A] px-8 py-14 text-center text-white shadow-2xl md:px-16"
        >

          {/* Decorative circles */}
          <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-white/10"></div>
          <div className="absolute -bottom-24 -left-20 h-56 w-56 rounded-full bg-white/10"></div>

          <div className="relative">

            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-3xl">
              🚀
            </div>

            <h2 className="mb-5 text-3xl font-extrabold md:text-4xl">
              رؤيتنا
            </h2>

            <p className="mx-auto max-w-3xl text-lg leading-9 text-[#F5EEE6]">
              نطمح إلى تطوير منصة متكاملة تجعل عملية نقل الطلاب أكثر تنظيمًا
              وسهولة، وتساعد الطلاب على الوصول إلى جامعاتهم بأمان وراحة،
              مع إمكانية توسيع المشروع ليشمل المزيد من الجامعات والمناطق
              مستقبلًا.
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}