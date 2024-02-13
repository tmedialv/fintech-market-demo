import Link from "next/link";
import CloseAccount from "fintech/app/accounts/(components)/CloseAccount";
import { Account } from "fintech/app/(shared)/types/Account";
import PaymentHistory from "fintech/app/accounts/(components)/PaymentHistory";
import ArrowIcon from "fintech/app/(shared)/icons/ArrowIcon";

type SingleAccountViewProps = {
  account: Account;
};

export default function SingleAccountView({ account }: SingleAccountViewProps) {
  return (
    <div className="my-10">
      <div className="relative flex gap-4 items-center">
        <Link
          href="/"
          className="absolute -left-16 p-2 rounded-full border bg-white hover:bg-neutral-50"
        >
          <ArrowIcon direction="left" />
        </Link>
        <div className="flex flex-col gap-0.5 grow">
          <h2>{account.name}</h2>
          <span className="text-xs lg:text-sm text-gray-700">
            Account number: {account.number}
          </span>
        </div>
        <div className="float-end flex flex-col gap-0.5 text-right justify-center">
          <span className="text-sm lg:text-lg">Your balance</span>
          <span className="font-semibold">€{account.balance}</span>
        </div>
      </div>
      <PaymentHistory accountId={account.id} payments={account.payments} />
      {account.balance === 0 && <CloseAccount account={account} />}
    </div>
  );
}
