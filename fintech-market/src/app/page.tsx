import AccountList from "fintech/app/accounts/(components)/AccountList";
import searchAccounts from "./accounts/(adapters)/getAllAccounts";
import SimulatePayment from "fintech/app/(shared)/components/simulate-payment/SimulatePayment";

export default async function Home() {
  const accounts = await searchAccounts();

  return (
    <main>
      <AccountList accounts={accounts} />
      <SimulatePayment accounts={accounts} />
    </main>
  );
}
