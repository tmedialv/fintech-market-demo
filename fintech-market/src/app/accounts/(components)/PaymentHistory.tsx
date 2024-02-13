import { Payment } from "fintech/app/(shared)/types/Payment";
import EmptyState from "fintech/app/(shared)/components/EmptyState";

export type PaymentHistoryProps = {
  accountId: string;
  payments: Payment[];
};

export default function PaymentHistory({
  accountId,
  payments,
}: PaymentHistoryProps) {
  return (
    <div className="flex flex-col gap-2 my-8">
      <h3>Payment history</h3>
      {payments.length > 0 && (
        <div className="rounded-xl mt-4 overflow-hidden border">
          <table className="w-full text-left text-sm rounded">
            <thead>
              <tr>
                <th>Account name</th>
                <th>Description</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {payments.reverse().map((payment) => (
                <tr key={payment.id}>
                  <td>
                    {payment.beneficiary_account_id === accountId
                      ? payment.remitter_name
                      : payment.beneficiary_name}
                  </td>
                  <td>{payment.description}</td>
                  <td>
                    {payment.beneficiary_account_id === accountId ? (
                      <>+</>
                    ) : (
                      <>-</>
                    )}
                    €{payment.amount}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {payments.length === 0 && (
        <EmptyState info="There is no payment history for this account yet." />
      )}
    </div>
  );
}
