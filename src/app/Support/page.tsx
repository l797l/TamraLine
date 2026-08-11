export default function Support() {
  return (
    <div className="min-h-screen bg-[#EFE1D1] px-4 py-10">
      <div className="mx-auto max-w-4xl">

        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-[#432E1A]">
            الدعم والمساعدة
          </h1>

          <p className="mt-3 text-[#432E1A]/70">
            هل لديك مشكلة؟ نحن هنا لمساعدتك
          </p>
        </div>


        {/* Support Card */}
        <div className="rounded-3xl bg-[#432E1A] p-6 shadow-xl">

          <div className="grid gap-6 md:grid-cols-2">

            {/* Contact */}
            <div className="rounded-2xl bg-[#5B3F22] p-5 text-[#EFE1D1]">

              <h2 className="mb-4 text-xl font-bold">
                تواصل معنا
              </h2>

              <div className="space-y-4">

                <a
                  href="tel:07771902257"
                  className="flex items-center gap-3 rounded-xl bg-[#EFE1D1] p-3 font-semibold text-[#432E1A]"
                >
                  📞
                  <span>
                    07771902257
                  </span>
                </a>


                <a
                  href="mailto:support@waselni.com"
                  className="flex items-center gap-3 rounded-xl border border-[#EFE1D1]/30 p-3"
                >
                  ✉️
                  <span>
                    support@waselni.com
                  </span>
                </a>


                <a
                  href="#"
                  className="flex items-center gap-3 rounded-xl border border-[#EFE1D1]/30 p-3"
                >
                  💬
                  <span>
                    واتساب الدعم
                  </span>
                </a>

              </div>

            </div>


            {/* FAQ */}
            <div className="text-[#EFE1D1]">

              <h2 className="mb-4 text-xl font-bold">
                الأسئلة الشائعة
              </h2>


              <div className="space-y-3">

                <div className="rounded-xl bg-[#5B3F22] p-4">
                  <p className="font-bold">
                    كيف أحجز رحلة؟
                  </p>

                  <p className="mt-2 text-sm text-[#EFE1D1]/70">
                    اختر الرحلة المناسبة ثم تواصل مع السائق.
                  </p>
                </div>


                <div className="rounded-xl bg-[#5B3F22] p-4">
                  <p className="font-bold">
                    كيف أضيف رحلة جديدة؟
                  </p>

                  <p className="mt-2 text-sm text-[#EFE1D1]/70">
                    من حسابك اختر إضافة منشور جديد.
                  </p>
                </div>


                <div className="rounded-xl bg-[#5B3F22] p-4">
                  <p className="font-bold">
                    لدي مشكلة في التطبيق
                  </p>

                  <p className="mt-2 text-sm text-[#EFE1D1]/70">
                    تواصل مع فريق الدعم وسيتم الرد عليك.
                  </p>
                </div>

              </div>

            </div>

          </div>


          {/* Message */}
          <div className="mt-6">

            <textarea
              placeholder="اكتب مشكلتك هنا..."
              className="h-32 w-full rounded-2xl bg-[#EFE1D1] p-4 text-[#432E1A] outline-none placeholder:text-[#432E1A]/50"
            />

            <button
              className="mt-4 w-full rounded-xl bg-[#EFE1D1] py-3 font-bold text-[#432E1A] transition hover:bg-white"
            >
              إرسال الطلب
            </button>

          </div>

        </div>

      </div>
    </div>
  );
}