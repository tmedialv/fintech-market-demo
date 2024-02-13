import Link from "next/link";
import ArrowIcon from "fintech/app/(shared)/icons/ArrowIcon";
import { Account } from "fintech/app/(shared)/types/Account";

export type AccountCardProps = {
  account: Account;
};

export default function AccountCard({ account }: AccountCardProps) {
  return (
    <Link
      href={`/accounts/${account.id}`}
      className="bg-white rounded-2xl border border-neutral-200 p-4 hover:bg-neutral-100 hover:cursor-pointer hover:border-neutral-300 flex flex-col gap-4 lg:gap-0 lg:flex-row justify-between items-center"
    >
      <div className="w-full lg:w-1/3 flex flex-col gap-0.5 text-sm">
        <span className="text-gray-700">Account</span>
        <span className="font-semibold">{account.name}</span>
      </div>
      <div className="w-full lg:w-1/3 flex flex-col gap-0.5 text-sm">
        <span className="text-gray-700">Account number</span>
        <span className="font-semibold">{account.number}</span>
      </div>
      <div className="w-full lg:w-1/3 flex flex-col gap-0.5 text-sm">
        <span className="text-gray-700">Balance</span>
        <span className="font-semibold">€{account.balance.toFixed(2)}</span>
      </div>
      <ArrowIcon />
    </Link>
  );
}
