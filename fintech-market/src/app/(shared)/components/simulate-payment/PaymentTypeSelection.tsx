import Image from "next/image";
import { PaymentType } from "fintech/app/(shared)/types/PaymentType";
import clsx from "clsx";

type PaymentTypeSelectionProps = {
  value: PaymentType;
  onChange: (value: PaymentType) => void;
  accountCount: number;
};

export default function PaymentTypeSelection({
  value,
  onChange,
  accountCount,
}: PaymentTypeSelectionProps) {
  return (
    <div className="flex gap-2">
      <PaymentTypeCard
        label="Incoming"
        icon="incoming.png"
        isSelected={value === PaymentType.INCOMING}
        onClick={() => onChange(PaymentType.INCOMING)}
      />
      <PaymentTypeCard
        label="Outgoing"
        icon="outgoing.png"
        isSelected={value === PaymentType.OUTGOING}
        onClick={() => onChange(PaymentType.OUTGOING)}
      />
      <PaymentTypeCard
        label="Internal"
        icon="internal.png"
        disabled={accountCount < 2}
        isSelected={value === PaymentType.INTERNAL}
        onClick={() => onChange(PaymentType.INTERNAL)}
      />
    </div>
  );
}

type PaymentTypeCardProps = {
  label: string;
  icon: string;
  isSelected: boolean;
  onClick: () => void;
  disabled?: boolean;
};

function PaymentTypeCard({
  label,
  icon,
  isSelected,
  onClick,
  disabled = false,
}: PaymentTypeCardProps) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "w-1/3 border rounded-2xl bg-white items-center justify-center flex flex-col py-4 cursor-pointer text-sm",
        { "border-transparent ring-2 ring-inset ring-blue-600": isSelected },
        { "hover:bg-neutral-100 hover:border-gray-300 ": !isSelected },
        { "pointer-events-none opacity-40": disabled }
      )}
    >
      <Image
        src={`/images/${icon}`}
        alt={`${label} payment`}
        width={32}
        height={32}
      />
      {label}
    </button>
  );
}
