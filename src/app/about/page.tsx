
import Link from "next/dist/client/link";

export default function About() {
  const team = [
    {
      name: "Ali ِAbd-Almahdi",
      role: "Full Stack Developer",
      describtion: "القائد والمسئول عن تطوير المشروع والمسئول ايضا عن Backend",
    },
    {
      name: "Sajad Moayd",
      role: "Frontend Developer",
      describtion: "مسؤل عن تصميم الصفحات وجعل الموقع قيد الاستخدام",
    },
    {
      name: "Abdullah Anas",
      role: "Frontend Developer",
      describtion: "مسؤل عن تصميم الصفحات وجعل الموقع قيد الاستخدام",
    },
    {
      name: "Fahad Loay",
      role: "Marketing",
      describtion: " مسؤل عن التسويق",
    },
  ];
  return (
    <main className="min-h-screen px-6 py-16">
        <section className="mx-auto max-w-4xl text-center">
<h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl"> About Us</h1>
<p className="text-lg leading-8 text-gray-600">
نحن فريق من طلاب علوم الحاسوب نعمل على تطوير منصة تساعد الطلاب على إيجاد وتنظيم خطوط النقل من المنزل إلى الجامعة بطريقة سهلة وسريعة
</p>
        </section>
        <section className="mx-auto mt-16 max-w-6xl">
<div className="grid gap-8 md:grid-cols-2">
    <div className="rounded-2xl bg-white p-8 shadow-md">
<h2 className="mb-4 text-2xl font-bold text-gray-900">فكرتنا</h2>
<p className="leading-8 text-gray-600">جائت فكرة المشروع بسبب حاجة الكثير من الطلاب إلى وسيلة نقل منظمة تساعدهم على الوصول إلى الجامعة والعودة إلى المنزل بسهولة، دون الحاجة إلى البحث بشكل مستمر عن خطوط نقل مناسبة</p>
</div>
<div className="rounded-2xl bg-white p-8 shadow-md">
    <h2 className="mb-4 text-2xl font-bold text-gray-900">هدفنا</h2>
    <p className="leading-8 text-gray-600">هدفنا هو إنشاء منصة تجمع الطلاب مع خطوط النقل وتوفر لهم المعلومات التي يحتاجونها مثل المنطقة، الجامعة، وقت الانطلاق والعودة، مما يجعل عملية التنقل أكثر سهولة وتنظيماً</p>
</div>
</div>
        </section>
<section className="mx-auto mt-20 max-w-6xl text-center">
<h2 className="mb-10 text-3xl font-bold text-gray-900">ماذا نقدم؟</h2>
<div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
<div className="rounded-2xl bg-white p-6 shadow-md">
    <h3 className="mb-2 text-xl font-semibold">تحديد المنطقة</h3>
    <p className="text-gray-600">العثور على خطوط النقل التي تمر بالقرب من منطقة سكنك</p>
</div>
<div className="rounded-2xl bg-white p-6 shadow-md">
    <h3 className="mb-2 text-xl font-semibold">اختيار الجامعة</h3>
    <p className="text-gray-600">البحث عن خطوط النقل المتجهة إلى جامعتك</p>
</div>
<div className="rounded-2xl bg-white p-6 shadow-md">
    <h3 className="mb-2 text-xl font-semibold">أوقات الرحلات</h3>
    <p className="text-gray-600">معرفة أوقات الذهاب والعودة الخاصة بكل خط</p>
</div>
<div className="rounded-2xl bg-white p-6 shadow-md">
    <h3 className="mb-2 text-xl font-semibold">سهولة التواصل</h3>
    <p className="text-gray-600">تسهيل التواصل بين الطلاب ومسؤولي خطوط النقل</p>
</div>
</div>
</section>
<section className="mx-auto mt-20 max-w-6xl">
    <div className="mb-10 text-center">
        <h2 className="mb-4 text-3xl font-bold text-gray-900">Our Team</h2>
        <p className="text-gray-600">تعرف على أعضاء الفريق الذين يعملون على تطوير المشروع</p>
    </div>
    <div className="grid gap-8 md:grid-cols-3">
        {team.map((member) => (
            <div key = {member.name} className="rounded-2xl bg-white p-8 text-center shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl" >
                <div className="mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-blue-100 text-4xl">👨‍💻</div>
                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="mt-2 font-medium text-blue-600">{member.role}</p>
                <p className="mt-4 leading-7 text-gray-600">{member.describtion}</p>
            </div>
        ))}
    </div>
</section>
<section className="mx-auto mt-20 max-w-4xl rounded-3xl bg-blue-600 px-8 py-12 text-center text-white shadow-lg">
<h2 className="mb-5 text-3xl font-bold">رؤيتنا</h2>
<p className="text-lg leading-8 text-blue-50">نطمح إلى تطوير منصة متكاملة تجعل عملية نقل الطلاب أكثر تنظيماً وسهولة، وتساعد الطلاب على الوصول إلى جامعاتهم بأمان وراحة، مع إمكانية توسيع المشروع ليشمل المزيد من الجامعات والمناطق مستقبلاً</p>
</section>
    </main>
  );
}


