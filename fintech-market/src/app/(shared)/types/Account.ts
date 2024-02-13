import { Payment } from "fintech/app/(shared)/types/Payment";

export type Account = {
  id: string;
  number: string;
  balance: number;
  name: string;
  payments: Payment[];
};
