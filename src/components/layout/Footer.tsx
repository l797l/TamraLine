"use client";

import Image from "next/image";
import Link from "next/link";
import TextInFooter from "./../Ui/Footer/TextInFooter";

export default function Footer() {
  return (
    <footer
      dir="rtl"
      className="bg-[#432E1A] px-5 py-14 text-[#EFE1D1]"
    >
      <div className="mx-auto max-w-7xl">

        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">

          {/* ================= Logo ================= */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-right">

            <Link href="/" className="inline-block">
              <Image
                src="/logo.png"
                alt="تمرا لاين"
                width={170}
                height={170}
                className="h-auto w-40 object-contain"
              />
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-8 text-[#EFE1D1]/70">
              تمرا لاين منصة تساعد الطلاب والسائقين على الوصول
              إلى الرحلات المناسبة بسهولة وأمان، مع تجربة استخدام
              بسيطة وسريعة تجعل التنقل اليومي أكثر راحة.
            </p>

          </div>


          {/* ================= Quick Links ================= */}
          <div className="flex flex-col items-center">

            <h2 className="mb-6 text-xl font-bold">
              روابط سريعة
            </h2>

            <nav className="flex flex-col items-center gap-4">

              <Link href="/">
                <TextInFooter text="الرئيسية" />
              </Link>

              <Link href="/About">
                <TextInFooter text="عن الفريق" />
              </Link>

              <Link href="/how-to-use">
                <TextInFooter text="كيفية الاستخدام" />
              </Link>

              <Link href="/Posts">
                <TextInFooter text="الرحلات" />
              </Link>

              <Link href="/Support">
                <TextInFooter text="الدعم" />
              </Link>

            </nav>

          </div>


          {/* ================= Contact ================= */}
          <div className="flex flex-col items-center lg:items-start">

            <h2 className="mb-6 text-xl font-bold">
              تواصل معنا
            </h2>


            {/* Email */}
            <Link
              href="mailto:tamrayaaa@gmail.com"
              className="group flex items-center gap-3 text-[#EFE1D1]/80 transition hover:text-white"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#5B3F22] transition group-hover:bg-[#EFE1D1] group-hover:text-[#432E1A]">
                <i className="fa-solid fa-envelope" />
              </span>

              <span className="text-sm">
                tamrayaaa@gmail.com
              </span>
            </Link>


            {/* Social Media */}
            <div className="mt-7 flex items-center gap-3">

              <Link
                href="https://t.me/tamrayaa"
                aria-label="Telegram"
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#5B3F22] text-lg transition hover:-translate-y-1 hover:bg-[#1877F2] hover:text-white"
              >
                <i className="fa-brands fa-telegram"></i>
              </Link>


              <Link
                href="https://www.instagram.com/tamrayaa.iq?igsh=MXAzOWl0cHZkY2Q3Yg=="
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#5B3F22] text-lg transition hover:-translate-y-1 hover:bg-[#E1306C] hover:text-white"
              >
                <i className="fa-brands fa-instagram" />
              </Link>


              <Link
                href="https://tamrayaa.com"
                aria-label="X"
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#5B3F22] text-lg transition hover:-translate-y-1 hover:bg-black hover:text-white"
              >
                <i className="fa-brands fa-x-twitter" />
              </Link>


              <Link
                href="https://linkedin.com"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#5B3F22] text-lg transition hover:-translate-y-1 hover:bg-[#0A66C2] hover:text-white"
              >
                <i className="fa-brands fa-linkedin-in" />
              </Link>


              

            </div>

          </div>

        </div>


        {/* ================= Divider ================= */}
        <div className="my-10 border-t border-[#EFE1D1]/10" />


        {/* ================= Bottom ================= */}
        <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-right">

          <p className="text-sm text-[#EFE1D1]/60">
            © 2026{" "}
            <span className="font-semibold text-[#EFE1D1]">
              TamraLine
            </span>
            . جميع الحقوق محفوظة.
          </p>

          <p className="text-xs text-[#EFE1D1]/40">
            صُنع لتسهيل التنقل بين الطلاب والسائقين.
          </p>

        </div>

      </div>
    </footer>
  );
}