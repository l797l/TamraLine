"use client";

import { useState } from "react";

export default function SupportForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [type, setType] = useState("technical");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const inputClass =
    "w-full rounded-2xl border border-[#EFE1D1]/10 bg-[#5B3F22] p-4 text-[#EFE1D1] outline-none placeholder:text-[#EFE1D1]/35 focus:border-[#D9B98C]";

  const labelClass =
    "mb-2 block text-sm font-semibold text-[#EFE1D1]";

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name.trim() || !phone.trim() || !message.trim()) {
      return;
    }

    const supportRequest = {
      name,
      phone,
      type,
      message,
      createdAt: new Date().toISOString(),
    };


    setSent(true);
    setName("");
    setPhone("");
    setType("technical");
    setMessage("");

    setTimeout(() => {
      setSent(false);
    }, 4000);
  };

  return (
    <section>
      <div className="mb-6">
        <span className="text-sm font-semibold text-[#D9B98C]">
          تواصل مع فريق الموقع
        </span>

        <h2 className="mt-2 text-2xl font-bold text-[#EFE1D1]">
          هل واجهت مشكلة؟
        </h2>

        <p className="mt-2 leading-7 text-[#EFE1D1]/65">
          أرسل لنا تفاصيل المشكلة مع معلوماتك حتى نستطيع
          معرفة صاحب الطلب ومراجعة المشكلة بشكل أفضل.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className={labelClass}>
              الاسم
            </label>

            <input
              disabled
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="اكتب اسمك"
              required
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>
              رقم الهاتف
            </label>

            <input
              disabled
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="07xxxxxxxxx"
              required
              className={inputClass}
            />
          </div>
        </div>

        <label className={`${labelClass} mt-5`}>
          نوع الطلب
        </label>

        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className={inputClass}
          disabled
        >
          <option value="technical">مشكلة تقنية</option>
          <option value="route">مشكلة في معلومات خط</option>
          <option value="account">مشكلة في الحساب</option>
          <option value="suggestion">اقتراح أو ملاحظة</option>
          <option value="other">مشكلة أخرى</option>
        </select>

        <label className={`${labelClass} mt-5`}>
          تفاصيل المشكلة
        </label>

        <textarea
          disabled
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="اكتب تفاصيل المشكلة أو الملاحظة هنا..."
          required
          className={`${inputClass} h-40 resize-none`}
        />

        <button
          type="submit"
          className="mt-4 w-full rounded-2xl bg-[#EFE1D1] py-4 font-bold text-[#432E1A] transition hover:bg-white active:scale-[0.99]"
        >
          إرسال الطلب
        </button>

        {/*sent && (
          <div className="mt-4 rounded-2xl border border-green-300/20 bg-green-500/10 p-4 text-center text-sm text-green-200">
            ✓ تم استلام طلبك بنجاح، شكراً لتواصلك معنا.
          </div>
        )*/}
        <div className="mt-4 rounded-2xl border border-red-300/20 bg-red-500/10 p-4 text-center text-sm text-red-200">
             الخدمة غير متوفرة حاليا .
          </div>
      </form>
    </section>
  );
}