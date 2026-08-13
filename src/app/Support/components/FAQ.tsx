const faqs = [
  {
    question: "كيف أبحث عن خط مناسب لجامعتي؟",
    answer:
      "يمكنك الدخول إلى صفحة الخطوط واستعراض الخطوط المتوفرة، ثم اختيار الخط الذي يناسب موقع سكنك والجامعة التي تدرس فيها.",
  },
  {
    question: "كيف أعرف تفاصيل الخط؟",
    answer:
      "عند اختيار أي خط ستظهر لك معلوماته مثل المسار والمناطق التي يمر بها والجامعة المستهدفة وباقي التفاصيل المتوفرة.",
  },
  {
    question: "هل أستطيع إضافة خط جديد؟",
    answer:
      "نعم، يمكنك إضافة خط جديد من خلال الخيارات المخصصة لذلك داخل الموقع، ومشاركة معلومات الخط ليستفيد منه باقي الطلاب.",
  },
  {
    question: "وجدت معلومات غير صحيحة، ماذا أفعل؟",
    answer:
      "يمكنك إرسال بلاغ من نموذج الدعم، مع توضيح المعلومات غير الصحيحة حتى يتم مراجعتها والعمل على تصحيحها.",
  },
  {
    question: "واجهت مشكلة أثناء استخدام الموقع",
    answer:
      "اكتب تفاصيل المشكلة في نموذج الدعم، ويفضل توضيح الصفحة أو الخطوة التي ظهرت فيها المشكلة حتى نستطيع فهمها بشكل أفضل.",
  },
];

export default function FAQ() {
  return (
    <section>
      <div className="mb-6">
        <span className="text-sm font-semibold text-[#D9B98C]">
          الأسئلة الشائعة
        </span>

        <h2 className="mt-2 text-2xl font-bold text-[#EFE1D1]">
          كيف يمكننا مساعدتك؟
        </h2>
      </div>

      <div className="space-y-3">
        {faqs.map((faq) => (
          <details
            key={faq.question}
            className="group rounded-2xl bg-[#5B3F22] p-4 text-[#EFE1D1]"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold">
              <span>{faq.question}</span>

              <span className="text-xl transition-transform group-open:rotate-45">
                +
              </span>
            </summary>

            <p className="mt-3 border-t border-[#EFE1D1]/10 pt-3 text-sm leading-7 text-[#EFE1D1]/65">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}