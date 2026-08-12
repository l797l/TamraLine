
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main
      dir="rtl"
      className="min-h-screen bg-[#EFE1D1] text-[#432E1A]"
    >

      {/* ================= Hero ================= */}
      <section className="relative overflow-hidden px-5 py-20 sm:py-28">

        {/* Background decoration */}
        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#432E1A]/5" />
        <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-[#432E1A]/5" />

        <div className="relative mx-auto max-w-6xl">

          <div className="grid items-center gap-12 md:grid-cols-2">

            {/* Text */}
            <div className="text-center md:text-right">

              <div className="mb-7">

                <span className="inline-block rounded-full bg-[#432E1A] px-5 py-2 text-sm font-semibold text-[#EFE1D1]">
                  أهلاً وسهلاً بك في تمرا لاين
                </span>

              </div>

              <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">

                رحلتك إلى الجامعة
                <span className="mt-3 block">
                  أصبحت أسهل
                </span>

              </h1>

              <p className="mt-7 max-w-xl text-lg leading-9 text-[#432E1A]/70">

                تمرا لاين منصة تساعد طلاب الجامعات في العراق
                على العثور على الرحلات المناسبة لهم بسهولة،
                من خلال اختيار المنطقة والجامعة ووقت الدوام،
                ثم الاطلاع على تفاصيل الرحلة والسائق.

              </p>


              {/* Main buttons */}
              <div className="mt-9 flex flex-col gap-4 sm:flex-row md:justify-start">

                <Link
                  href="/Posts"
                  className="rounded-2xl bg-[#432E1A] px-8 py-4 text-center font-bold text-[#EFE1D1] shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
                >
                  استعراض الرحلات
                </Link>

                <Link
                  href="/register"
                  className="rounded-2xl border-2 border-[#432E1A] px-8 py-4 text-center font-bold transition hover:bg-[#432E1A] hover:text-[#EFE1D1]"
                >
                  إنشاء حساب
                </Link>

              </div>

            </div>


            {/* Logo */}
            <div className="flex justify-center">

              <div className="relative">

                {/* Glow */}
                <div className="absolute inset-0 scale-75 rounded-full bg-[#432E1A]/10 blur-3xl" />

                <div className="relative flex h-72 w-72 items-center justify-center rounded-[4rem] bg-[#432E1A] p-10 shadow-2xl sm:h-80 sm:w-80">

                  <Image
                    src="/headerLogo.png"
                    alt="تمرا لاين"
                    width={260}
                    height={260}
                    className="h-auto w-full object-contain rounded-4xl"
                    priority
                  />

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= About ================= */}
      <section className="bg-[#432E1A] px-5 py-20 text-[#EFE1D1]">

        <div className="mx-auto max-w-6xl">

          <div className="mx-auto max-w-3xl text-center">

            <p className="text-sm font-semibold text-[#EFE1D1]/60">
              عن تمرا لاين
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              منصة واحدة لرحلتك اليومية
            </h2>

            <p className="mt-5 leading-8 text-[#EFE1D1]/70">

              صُممت تمرا لاين لتسهيل عملية الوصول إلى وسائل
              النقل الجامعي، وربط الطلاب بالسائقين بطريقة
              منظمة وواضحة، مع توفير المعلومات الأساسية
              التي يحتاجها الطالب قبل اختيار الرحلة.

            </p>

          </div>


          {/* Features */}
          <div className="mt-14 grid gap-6 md:grid-cols-3">

            <div className="rounded-3xl bg-[#5B3F22] p-7">

              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#EFE1D1] font-bold text-[#432E1A]">
                01
              </div>

              <h3 className="text-xl font-bold">
                ابحث بسهولة
              </h3>

              <p className="mt-3 leading-7 text-[#EFE1D1]/65">
                اختر منطقتك والجامعة والشفت للوصول إلى
                الرحلات التي تناسب احتياجاتك.
              </p>

            </div>


            <div className="rounded-3xl bg-[#5B3F22] p-7">

              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#EFE1D1] font-bold text-[#432E1A]">
                02
              </div>

              <h3 className="text-xl font-bold">
                تعرف على التفاصيل
              </h3>

              <p className="mt-3 leading-7 text-[#EFE1D1]/65">
                شاهد معلومات السيارة والسائق والجامعة
                والمناطق التي تمر بها الرحلة.
              </p>

            </div>


            <div className="rounded-3xl bg-[#5B3F22] p-7">

              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#EFE1D1] font-bold text-[#432E1A]">
                03
              </div>

              <h3 className="text-xl font-bold">
                اختر ما يناسبك
              </h3>

              <p className="mt-3 leading-7 text-[#EFE1D1]/65">
                تصفح الرحلات المتوفرة واختر الرحلة التي
                تتناسب مع منطقتك ووقت دوامك.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= Getting Started ================= */}
      <section className="px-5 py-20">

        <div className="mx-auto max-w-5xl">

          <div className="text-center">

            <h2 className="text-3xl font-bold sm:text-4xl">
              ابدأ الآن
            </h2>

            <p className="mt-4 text-[#432E1A]/65">
              اختر الطريقة التي تريد استخدامها للدخول إلى المنصة
            </p>

          </div>


          <div className="mt-12 grid gap-5 md:grid-cols-3">

            {/* Posts */}
            <Link
              href="/posts"
              className="group rounded-3xl border border-[#432E1A]/10 bg-white/40 p-7 text-center shadow-sm transition hover:-translate-y-1 hover:border-[#432E1A]/20 hover:shadow-xl"
            >

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#432E1A] text-sm font-bold text-[#EFE1D1]">
                بحث
              </div>

              <h3 className="mt-5 text-xl font-bold">
                تصفح الرحلات
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#432E1A]/60">
                شاهد الرحلات المتوفرة وابحث عن الرحلة
                المناسبة لك.
              </p>

              <span className="mt-5 block font-semibold">
                عرض الرحلات ←
              </span>

            </Link>


            {/* Register */}
            <Link
              href="/auth/register"
              className="group rounded-3xl bg-[#432E1A] p-7 text-center text-[#EFE1D1] shadow-lg transition hover:-translate-y-1 hover:shadow-2xl"
            >

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EFE1D1] text-sm font-bold text-[#432E1A]">
                حساب
              </div>

              <h3 className="mt-5 text-xl font-bold">
                إنشاء حساب جديد
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#EFE1D1]/65">
                أنشئ حسابك للاستفادة من خدمات المنصة
                وإدارة بياناتك.
              </p>

              <span className="mt-5 block font-semibold">
                إنشاء حساب ←
              </span>

            </Link>


            {/* Login */}
            <Link
              href="/auth/login"
              className="group rounded-3xl border border-[#432E1A]/10 bg-white/40 p-7 text-center shadow-sm transition hover:-translate-y-1 hover:border-[#432E1A]/20 hover:shadow-xl"
            >

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#432E1A] text-sm font-bold text-[#EFE1D1]">
                دخول
              </div>

              <h3 className="mt-5 text-xl font-bold">
                تسجيل الدخول
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#432E1A]/60">
                لديك حساب بالفعل؟ قم بتسجيل الدخول
                للوصول إلى حسابك.
              </p>

              <span className="mt-5 block font-semibold">
                تسجيل الدخول ←
              </span>

            </Link>

          </div>

        </div>

      </section>


      {/* ================= Footer ================= */}
      <footer className=" px-5 py-8 text-center text-[#EFE1D1]">


        <p className="text-sm text-[#432E1A]">
          تمرا لاين — رحلتك اليومية تبدأ من هنا
        </p>

      </footer>

    </main>
  );
}
