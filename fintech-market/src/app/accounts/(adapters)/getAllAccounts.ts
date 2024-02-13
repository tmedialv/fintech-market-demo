"use server";

import { callApi, HttpMethod } from "fintech/utils/api";
import { Account } from "fintech/app/(shared)/types/Account";

export default async function GetAllAccounts() {
  let accounts: Account[] = [];
  const response = await callApi<Account[]>("accounts/search", HttpMethod.POST);
  if (response) accounts = response;
  return accounts;
}
