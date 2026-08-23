"use client";

import { areasInf, governoratesInf, universitiesInf } from "@/src/Information/information";
import { useEffect, useState } from "react";

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
  const [isSearch,setIsSearch] = useState(true)
  const areas = areasInf

  const universities = universitiesInf
  const governorates = governoratesInf

  const handleSearch = () => {
    setIsSearch(true)
    onSearch(
      area,
      universityId,
      governorateId,
      shift
    );
  };

  useEffect(()=>{
    const change = ()=>{
      setIsSearch(false)
    }
    change();

  },[area,universityId,governorateId,shift,])

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
              اختيار الوقت
            </option>

            <option value={1}>
              مسائي
            </option>
            <option value={2}>
              صباحي
            </option>
          </select>
        </div>

      </div>

      <div className="mt-5">
        <button
          type="button"
          onClick={handleSearch}
          className={`w-full rounded-xl ${isSearch? "bg-[#efe1d185]":"bg-[#EFE1D1]"} py-3 font-bold text-[#432E1A] transition ${isSearch? "cursor-not-allowed":"hover:bg-white cursor-pointer"} `}
          disabled = {isSearch}
        >
          {isSearch? "اختار اولا من الاعلى" : "بحث"}
        </button>
      </div>
    </div>
  );
}
