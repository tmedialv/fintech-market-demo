import clsx from "clsx";
import { HTMLProps } from "react";

type InputFieldProps = {
  label: string;
  type: string;
  value: string;
  className?: string;
};

export default function InputField(
  props: InputFieldProps & HTMLProps<HTMLInputElement>
) {
  return (
    <div className={clsx("flex flex-col", props.className)}>
      <span className="text-sm px-1.5 py-1">
        {props.label}
        {props.required && <span className="text-red-500 pl-0.5">*</span>}
      </span>
      <input
        {...props}
        className="w-full rounded-3xl bg-white px-4 py-2 border hover:bg-neutral-50 text-sm"
      />
    </div>
  );
}
