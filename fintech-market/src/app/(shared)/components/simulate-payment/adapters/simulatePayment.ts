"use server";

import { callApi, HttpMethod } from "fintech/utils/api";
import { Account } from "fintech/app/(shared)/types/Account";
import { Payment } from "fintech/app/(shared)/types/Payment";
import { PaymentType } from "fintech/app/(shared)/types/PaymentType";

export default async function SimulatePayment(
  payment: Payment,
  type: PaymentType
) {
  return callApi<Payment>(
    "payments",
    HttpMethod.POST,
    JSON.stringify({ data: { ...payment, type_key: type } })
  );
}
