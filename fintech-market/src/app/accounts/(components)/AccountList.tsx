import AccountCard from "fintech/app/accounts/(components)/AccountCard";
import EmptyState from "fintech/app/(shared)/components/EmptyState";
import { Account } from "fintech/app/(shared)/types/Account";
import CreateAccount from "fintech/app/accounts/(components)/CreateAccount";

type AccountListProps = {
  accounts: Account[];
};

export default function AccountList({ accounts }: AccountListProps) {
  return (
    <div className="my-10">
      <div className="flex justify-between items-center">
        <h2>Your accounts</h2>
        <CreateAccount />
      </div>
      {accounts.length > 0 && (
        <div className="flex flex-col gap-2 my-4">
          {accounts.map((account) => (
            <AccountCard key={account.id} account={account} />
          ))}
        </div>
      )}
      {accounts.length === 0 && (
        <EmptyState info="You don't have any accounts yet" />
      )}
    </div>
  );
}
