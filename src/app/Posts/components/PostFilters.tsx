"use client";

import { useState } from "react";

type PostFiltersProps = {
  onSearch: (
    area: number,
    universityId: number,
    governorateId: number,
    shift: number
  ) => void;
};

export default function PostFilters({
  onSearch,
}: PostFiltersProps) {
  const [area, setArea] = useState(0);
  const [universityId, setUniversityId] = useState(0);
  const [governorateId, setGovernorateId] = useState(0);
  const [shift, setShift] = useState(0);

  const areas = [
    { id: 1, name: "الجادرية" },
    { id: 2, name: "السيدية" },
    { id: 3, name: "الكرادة" },
    { id: 4, name: "المنصور" },
    { id: 5, name: "الأعظمية" },
  ];

  const universities = [
    { id: 1, name: "جامعة بغداد" },
    { id: 2, name: "جامعة النهرين" },
  ];

  const governorates = [
    { id: 1, name: "بغداد" },
    { id: 2, name: "البصرة" },
  ];

  const handleSearch = () => {
    onSearch(
      area,
      universityId,
      governorateId,
      shift
    );
  };

  return (
    <div
      className="mb-8 rounded-3xl bg-[#432E1A] p-6 shadow-xl"
      dir="rtl"
    >
      <div className="grid gap-4 md:grid-cols-4">

        <div>
          <label className="mb-2 block text-[#EFE1D1]">
            المنطقة
          </label>

          <select
            value={area}
            onChange={(e) =>
              setArea(Number(e.target.value))
            }
            className="w-full rounded-xl bg-[#EFE1D1] px-4 py-3 text-[#432E1A] outline-none"
          >
            <option value={0}>
              اختر المنطقة
            </option>

            {areas.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="mb-2 block text-[#EFE1D1]">
            الجامعة
          </label>

          <select
            value={universityId}
            onChange={(e) =>
              setUniversityId(Number(e.target.value))
            }
            className="w-full rounded-xl bg-[#EFE1D1] px-4 py-3 text-[#432E1A] outline-none"
          >
            <option value={0}>
              اختر الجامعة
            </option>

            {universities.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="mb-2 block text-[#EFE1D1]">
            المحافظة
          </label>

          <select
            value={governorateId}
            onChange={(e) =>
              setGovernorateId(Number(e.target.value))
            }
            className="w-full rounded-xl bg-[#EFE1D1] px-4 py-3 text-[#432E1A] outline-none"
          >
            <option value={0}>
              اختر المحافظة
            </option>

            {governorates.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="mb-2 block text-[#EFE1D1]">
            الدوام
          </label>

          <select
            value={shift}
            onChange={(e) =>
              setShift(Number(e.target.value))
            }
            className="w-full rounded-xl bg-[#EFE1D1] px-4 py-3 text-[#432E1A] outline-none"
          >
            <option value={0}>
              صباحي
            </option>

            <option value={1}>
              مسائي
            </option>
          </select>
        </div>

      </div>

      <div className="mt-5">
        <button
          type="button"
          onClick={handleSearch}
          className="w-full rounded-xl bg-[#EFE1D1] py-3 font-bold text-[#432E1A] transition hover:bg-white"
        >
          بحث
        </button>
      </div>
    </div>
  );
}
