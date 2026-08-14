import {
  Clock3,
  CheckCircle2,
  XCircle,
  Archive,
  HelpCircle,
} from "lucide-react";

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
          icon: Clock3,
          className: "bg-amber-500 text-white",
        };

      case 1:
        return {
          text: "تمت الموافقة",
          icon: CheckCircle2,
          className: "bg-green-500 text-white",
        };

      case 2:
        return {
          text: "مرفوض",
          icon: XCircle,
          className: "bg-red-500 text-white",
        };

      case 3:
        return {
          text: "مؤرشف",
          icon: Archive,
          className: "bg-gray-500 text-white",
        };

      default:
        return {
          text: "غير معروف",
          icon: HelpCircle,
          className: "bg-gray-500 text-white",
        };
    }
  })();

  const Icon = statusData.icon;

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-bold shadow-lg ${statusData.className}`}
    >
      <Icon className="h-4 w-4" strokeWidth={2.5} />
      <span>{statusData.text}</span>
    </span>
  );
}