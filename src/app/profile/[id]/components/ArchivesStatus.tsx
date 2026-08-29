import { useEffect, useState } from "react";
import {
  Archive,
  ArchiveRestore,
  Loader2,
} from "lucide-react";
import { ChangeArchive } from "@/src/app/auth/post/postApi";

export default function ArchivesStatus({
  status,
}: {
  status: number;
}) {
  const [isArchived, setIsArchived] = useState(status === 3);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setIsArchived(status === 3);
  }, [status]);

  const sendApi = async () => {
    if (loading) return;

    try {
      setLoading(true);

     const result = await ChangeArchive();

     if(result < 300){
      setIsArchived((prev) => !prev);
      localStorage.removeItem("GetProfile")
      window.location.reload();
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      type="button"
      onClick={sendApi}
      disabled={loading}
      className={`
        group mt-4 flex w-full items-center justify-center gap-3
        rounded-2xl px-5 py-3.5
        font-bold
        shadow-md
        cursor-pointer
        transition-all duration-200
        active:scale-[0.97]
        disabled:cursor-not-allowed disabled:opacity-60
        ${
          isArchived
            ? "bg-emerald-600 text-white hover:bg-emerald-700"
            : "bg-[#5B3F22] text-[#EFE1D1] hover:bg-[#432E1A]"
        }
      `}
    >
      <span
        className="
          flex h-9 w-9 items-center justify-center
          rounded-xl bg-white/15
          transition-transform duration-200
          group-hover:scale-110
        "
      >
        {loading ? (
          <Loader2 className="h-5 w-5 animate-spin" />
        ) : isArchived ? (
          <ArchiveRestore className="h-5 w-5" />
        ) : (
          <Archive className="h-5 w-5" />
        )}
      </span>

      <span>
        {loading
          ? "جاري التحديث..."
          : isArchived
          ? "تفعيل المنشور"
          : "أرشفة المنشور"}
      </span>
    </button>
  );
}