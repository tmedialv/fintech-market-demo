import EmptyIcon from "fintech/app/(shared)/icons/EmptyIcon";

type EmptyStateProps = {
  info: string;
};

export default function EmptyState({ info }: EmptyStateProps) {
  return (
    <div className="w-full flex flex-col gap-3 bg-neutral-100 rounded-2xl p-10 my-8 items-center justify-center text-xs font-medium">
      <EmptyIcon />
      <p>{info}</p>
    </div>
  );
}
