"use server";

import { callApi, HttpMethod } from "fintech/utils/api";
import { Account } from "fintech/app/(shared)/types/Account";

export default async function CreateAccount(accountName: string) {
  return callApi<Account>(
    "accounts",
    HttpMethod.POST,
    JSON.stringify({ data: { name: accountName } })
  );
}
