import EditButton from "./EditButton";

type InfoItemProps = {
  title: string;
  value: React.ReactNode;
  editHref?: string;
   isUser: boolean

};

export default function InfoItem({
  title,
  value,
  editHref,
  isUser
}: InfoItemProps) {
  return (
    <div className="rounded-2xl bg-[#5B3F22] p-4">

      <div className="flex items-start justify-between gap-3">

        <div className="min-w-0">

          <p className="text-sm text-[#EFE1D1]/60">
            {title}
          </p>

          <div className="mt-1 break-words font-semibold">
            {value}
          </div>

        </div>

        {editHref && isUser&& (
          <EditButton
            href={editHref}
            small
          />
        )}

      </div>

    </div>
  );
}