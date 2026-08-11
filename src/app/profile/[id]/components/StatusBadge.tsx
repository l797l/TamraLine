type StatusBadgeProps = {
  status?: number | null;
};

export default function StatusBadge({
  status,
}: StatusBadgeProps) {
  const statusData = (() => {
    switch (status) {
      case 0:
        return {
          text: "قيد الانتظار",
          className: "bg-amber-500 text-white",
        };

      case 1:
        return {
          text: "تمت الموافقة",
          className: "bg-green-500 text-white",
        };

      case 2:
        return {
          text: "مرفوض",
          className: "bg-red-500 text-white",
        };

      case 3:
        return {
          text: "مؤرشف",
          className: "bg-gray-500 text-white",
        };

      default:
        return {
          text: "غير معروف",
          className: "bg-gray-500 text-white",
        };
    }
  })();

  return (
    <span
      className={`rounded-full px-5 py-2 text-sm font-bold shadow-lg ${statusData.className}`}
    >
      {statusData.text}
    </span>
  );
}