"use client";

import { useState } from "react";
import TextInHeader from "./../Ui/Header/TextInHeader";
import ButtonInHeader from "./../Ui/Header/ButtonInHeader";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative bg-[#432E1A] text-white px-4 md:px-8 py-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="relative">
          <Image
            src="/logo.png"
            alt="Logo"
            width={220}
            height={220}
            className="
              w-32
              h-32
              sm:w-36
              sm:h-36
              md:w-44
              md:h-44
              object-contain
              -my-10
              sm:-my-12
              md:-my-14
              relative
              z-20
            "
          />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          <TextInHeader text="كيف الاستخدام" toLink="/Usage" />
          <TextInHeader text="الدعم" toLink="/Support" />
          <TextInHeader text="عن الفريق" toLink="/About" />
          <TextInHeader text="الرئيسية" toLink="/" />
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/login">
            <ButtonInHeader
              text="تسجيل الدخول"
              className="bg-transparent text-[#EFE1D1] border border-[#EFE1D1]"
            />
          </Link>
          <Link href="/register">
            <ButtonInHeader text="إنشاء حساب" />
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="md:hidden relative z-50 text-[#EFE1D1] text-4xl cursor-pointer"
        >
          {open ? "×" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          className="
          md:hidden
          mt-5
          flex
          flex-col
          gap-5
          items-center
          border-t
          border-[#EFE1D1]/30
          pt-4
          absolute
          bg-[#432E1A]
          w-full
          left-0
          top-15
          z-10
          py-5
        "
        >
          <TextInHeader
            text="كيفية الاستخدام"
            toLink="/Usage"
            onClick={() => setOpen(false)}
          />

          <TextInHeader
            text="الدعم"
            toLink="/Support"
            onClick={() => setOpen(false)}
          />

          <TextInHeader
            text="عن الفريق"
            toLink="/About"
            onClick={() => setOpen(false)}
          />

          <TextInHeader
            text="الرئيسية"
            toLink="/"
            onClick={() => setOpen(false)}
          />

          <Link href="/login">
            <ButtonInHeader
              onClick={() => setOpen(false)}
              text="تسجيل الدخول"
              className="bg-transparent text-[#EFE1D1]   border border-[#EFE1D1]"
            />
          </Link>

          <Link href="/register">
            <ButtonInHeader text="إنشاء حساب" onClick={() => setOpen(false)} />
          </Link>
        </div>
      )}
    </header>
  );
}
