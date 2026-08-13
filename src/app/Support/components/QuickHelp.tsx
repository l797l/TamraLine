const helpItems = [
  {
    icon: "🔎",
    title: "ابحث عن خطك",
    description:
      "استعرض الخطوط المتاحة وابحث عن الخط الأنسب لك.",
  },
  {
    icon: "📍",
    title: "تعرف على المسار",
    description:
      "اطلع على تفاصيل ومسار الخط قبل اختياره.",
  },
  {
    icon: "🛠️",
    title: "أبلغ عن مشكلة",
    description:
      "ساعدنا على تحسين الموقع من خلال إرسال ملاحظاتك.",
  },
];

export default function QuickHelp() {
  return (
    <div className="mb-8 grid gap-5 md:grid-cols-3">
      {helpItems.map((item) => (
        <div
          key={item.title}
          className="rounded-3xl bg-[#432E1A] p-6 text-center text-[#EFE1D1] shadow-lg"
        >
          <div className="text-3xl">{item.icon}</div>

          <h3 className="mt-4 font-bold">
            {item.title}
          </h3>

          <p className="mt-2 text-sm leading-6 text-[#EFE1D1]/65">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}