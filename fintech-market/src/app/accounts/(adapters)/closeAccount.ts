"use server";

import { callApi, HttpMethod } from "fintech/utils/api";
import { Account } from "fintech/app/(shared)/types/Account";

export default async function CreateAccount(accountId: string) {
  return callApi<Account>(`accounts/${accountId}/close`, HttpMethod.PATCH);
}
