"use client";

interface TelegramInstructionsProps {
  onNext: () => void;
}

export default function TelegramInstructions({
  onNext,
}: TelegramInstructionsProps) {
  const handleTelegram = () => {
    window.open("https://t.me/tamraline_bot", "_blank");
    onNext();
  };

  return (
    <div className="flex flex-col gap-6" dir="rtl">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-[#432E1A]">
          استعادة كلمة السر
        </h1>

        <p className="mt-3 text-gray-600 leading-7">
          لاستعادة كلمة السر، سنرسل لك رمز تحقق إلى وسيلة التواصل
          المرتبطة بحسابك.
        </p>
      </div>

      <div className="bg-[#FFF4E8] border border-[#E5C9A8] rounded-xl p-4">
        <h2 className="font-bold text-[#432E1A] mb-2">
          ننصح بتفعيل بوت التليجرام
        </h2>

        <p className="text-sm text-gray-700 leading-7">
          يمكنك تفعيل بوت التليجرام لاستلام رمز التحقق بسهولة وسرعة.
          تفعيل البوت شرط لوصول الكود اعادة تعيين كلمة السر .
        </p>
      </div>

      <button
        type="button"
        onClick={handleTelegram}
        className="
          w-full
          bg-[#229ED9]
          text-white
          py-3
          rounded-xl
          font-bold
          hover:opacity-90
          cursor-pointer
        "
      >
        تفعيل بوت التليجرام
      </button>

      <button
        type="button"
        onClick={onNext}
        className="
          w-full
          border
          border-[#432E1A]
          text-[#432E1A]
          py-3
          rounded-xl
          font-bold
          hover:bg-[#432E1A]
          hover:text-white
          transition
          cursor-pointer

        "
      >
       تم تفعيل البوت سابقا
      </button>
    </div>
  );
}