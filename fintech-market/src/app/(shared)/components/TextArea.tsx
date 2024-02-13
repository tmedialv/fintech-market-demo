import clsx from "clsx";

type TextAreaProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  className?: string;
};

export default function TextArea({
  label,
  value,
  onChange,
  required = false,
  className = "",
}: TextAreaProps) {
  return (
    <div className={clsx("flex flex-col", className)}>
      <span className="text-sm px-1.5 py-1">
        {label}
        {required && <span className="text-red-500 pl-0.5">*</span>}
      </span>
      <textarea
        value={value}
        required
        onChange={(e) => onChange(e.target.value)}
        className="resize-none w-full rounded-xl bg-white hover:bg-neutral-50 px-4 py-2 border text-sm h-40"
      />
    </div>
  );
}
