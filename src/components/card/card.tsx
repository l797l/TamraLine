
import React from "react";
import data from "../../app/auth/post/postApi";
import picterForCard from "../../pictures/Driver.png";

async function Card() {
  const response = await data();

  console.log(response);

  return (
    <div className="w-full px-4 py-8">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {response.map((item: any) => {
          return (
            <div
              key={item.id}
              className="
                group
                overflow-hidden
                rounded-2xl
                border border-[#432E1A]/10
                bg-white
                shadow-md
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-xl
              "
            >
              {/* Driver Information */}
              <div className="flex items-center justify-between px-5 pt-5">
                <div className="flex items-center gap-3">
                  {/* Driver Image */}
                  <div className="h-14 w-14 overflow-hidden rounded-full border-2 border-[#432E1A]/20">
                    <img
                      src={picterForCard.src}
                      alt="Driver"
                      className="h-full w-full object-cover"
                    />
                  </div>

                  {/* Name & University */}
                  <div>
                    <h3 className="text-base font-bold text-[#432E1A]">
                      {item.fullName}
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                      {item.university}
                    </p>
                  </div>
                </div>

                {/* Shift */}
                <span
                  className="
                    rounded-full
                    bg-[#432E1A]/10
                    px-3
                    py-1
                    text-xs
                    font-semibold
                    text-[#432E1A]
                  "
                >
                  {item.shift === 1 ? "الصباح" : "المساء"}
                </span>
              </div>

              {/* Divider */}
              <div className="mx-5 my-5 h-px bg-[#432E1A]/10" />

              {/* University */}
              <div className="px-5">
                <div className="flex items-center justify-between rounded-xl bg-[#432E1A]/5 px-4 py-3">
                  <span className="text-sm text-gray-500">
                    الجامعة
                  </span>

                  <span className="text-sm font-semibold text-[#432E1A]">
                    {item.university}
                  </span>
                </div>
              </div>

              {/* Areas */}
              <div dir="rtl" className="px-5">
                <div className="mt-4">
                  <div className="mb-2 flex items-center gap-2">
                    <span className="text-lg">📍</span>

                    <span className="text-sm font-bold text-[#432E1A]">
                      مناطق الانطلاق
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {item.area?.map(
                      (area: string, index: number) => (
                        <span
                          key={index}
                          className="
                            rounded-full
                            border
                            border-[#432E1A]/15
                            bg-[#432E1A]/5
                            px-3
                            py-1.5
                            text-xs
                            font-medium
                            text-[#432E1A]
                            transition-all
                            duration-200
                            hover:bg-[#432E1A]
                            hover:text-white
                          "
                        >
                          {area}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>

              {/* Button */}
              <div className="p-5">
                <button
                  className="
                    w-full
                    rounded-xl
                    bg-[#432E1A]
                    px-5
                    py-3
                    text-sm
                    font-bold
                    text-white
                    shadow-sm
                    transition-all
                    duration-300
                    hover:bg-[#5a3d24]
                    hover:shadow-lg
                    active:scale-95
                  "
                >
                  عرض التفاصيل
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Card;

