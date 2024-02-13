export type Payment = {
  id: string;
  amount: number;
  description: string;
  remitter_account_id: string;
  beneficiary_account_id: string;
  remitter_account_number: string;
  beneficiary_account_number: string;
  remitter_name: string;
  beneficiary_name: string;
};
