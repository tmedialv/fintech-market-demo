"use server";

import { callApi, HttpMethod } from "fintech/utils/api";
import { Account } from "fintech/app/(shared)/types/Account";
import { Payment } from "fintech/app/(shared)/types/Payment";

export default async function GetAccountById(accountId: string) {
  let account: Account | null = null;
  const incomingPaymentsQuery = { data: { beneficiary_account_id: accountId } };
  const outgoingPaymentsQuery = { data: { remitter_account_id: accountId } };

  const response = await Promise.all([
    callApi<Account[]>("accounts/search", HttpMethod.POST),
    callApi<Payment[]>(
      "payments/search",
      HttpMethod.POST,
      JSON.stringify(incomingPaymentsQuery)
    ),
    callApi<Payment[]>(
      "payments/search",
      HttpMethod.POST,
      JSON.stringify(outgoingPaymentsQuery)
    ),
  ]);

  const accounts = response[0];
  const incomingPayments = response[1];
  const outgoingPayments = response[2];

  if (accounts) {
    account = accounts.find((a) => a.id === accountId) || null;
  }

  if (account) {
    account.payments = [
      ...(incomingPayments ?? []),
      ...(outgoingPayments ?? []),
    ];
  }

  return account;
}
