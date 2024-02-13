"use server";

import { callApi, HttpMethod } from "fintech/utils/api";
import { Account } from "fintech/app/(shared)/types/Account";

export default async function GetPaymentsByAccountId(accountId: string) {
  let account: Account | null = null;
  const response = await callApi<Account[]>("payments/search", HttpMethod.POST);
  if (response) account = response.find((a) => a.id === accountId) || null;
  return account;
}
