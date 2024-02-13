import SingleAccountView from "fintech/app/accounts/(components)/SingleAccountView";
import getAccountById from "../(adapters)/getAccountById";
import { redirect } from "next/navigation";

export default async function AccountPage({
  params,
}: {
  params: { id: string };
}) {
  const account = await getAccountById(params.id);
  if (!account) redirect("/");

  return <SingleAccountView account={account} />;
}
