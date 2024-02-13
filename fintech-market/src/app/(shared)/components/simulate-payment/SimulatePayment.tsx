"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import InputField from "fintech/app/(shared)/components/InputField";
import SpinnerIcon from "fintech/app/(shared)/icons/SpinnerIcon";
import TextArea from "fintech/app/(shared)/components/TextArea";
import simulatePayment from "fintech/app/(shared)/components/simulate-payment/adapters/simulatePayment";
import { PaymentType } from "fintech/app/(shared)/types/PaymentType";
import { Payment } from "fintech/app/(shared)/types/Payment";
import { Account } from "fintech/app/(shared)/types/Account";
import PaymentTypeSelection from "fintech/app/(shared)/components/simulate-payment/PaymentTypeSelection";
import Select from "fintech/app/(shared)/components/Select";
import PaymentSimulationFeedback from "fintech/app/(shared)/components/simulate-payment/PaymentSimulationFeedback";
import {
  defaultPaymentValidationSchema,
  internalPaymentValidationSchema,
} from "fintech/app/(shared)/components/simulate-payment/validators/paymentValidationSchemas";

const MAX_SIMULATED_PAYMENT_AMOUNT = 500000;

type SimulatePaymentProps = {
  accounts: Account[];
};

export default function SimulatePayment({ accounts }: SimulatePaymentProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [payment, setPayment] = useState<Payment>();
  const [error, setError] = useState<string | null>(null);
  const [formErrors, setFormErrors] = useState([]);
  const [type, setType] = useState<PaymentType>(PaymentType.INCOMING);

  const router = useRouter();

  const handleCreatePayment = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const errors = await validateInputs();
    if (errors || !payment) {
      setIsLoading(false);
      return;
    }

    const paymentData = payment;

    if (type === PaymentType.INTERNAL) {
      const paymentFromAccount = accounts.find(
        (_) => _.number === paymentData.remitter_account_number
      );
      const paymentToAccount = accounts.find(
        (_) => _.number === paymentData.beneficiary_account_number
      );
      if (!paymentFromAccount || !paymentToAccount) {
        setIsLoading(false);
        return;
      }

      paymentData.remitter_account_id = paymentFromAccount.id;
      paymentData.remitter_name = paymentFromAccount.name;
      paymentData.beneficiary_account_id = paymentToAccount.id;
      paymentData.beneficiary_name = paymentToAccount.name;
    }

    const result = await simulatePayment(paymentData, type);
    if (!result) {
      setError("Payment failed. Please make sure you have enough funds.");
    } else {
      setPayment({} as Payment);
      router.refresh();
    }
    setIsLoading(false);
    setShowFeedback(true);
  };

  const validateInputs = async (): Promise<boolean> => {
    const error = await (type === PaymentType.INTERNAL
      ? internalPaymentValidationSchema
      : defaultPaymentValidationSchema
    )
      .validate(payment, { abortEarly: false })
      .then((_) => {
        setFormErrors([]);
        return false;
      })
      .catch((e) => {
        setFormErrors(e.errors);
        return true;
      });

    return error;
  };

  return (
    <>
      <h2>Simulate payment</h2>
      <div className="flex flex-col gap-4 mt-4 mb-8">
        <PaymentTypeSelection
          accountCount={accounts.length}
          value={type}
          onChange={(value) => {
            setPayment({} as Payment);
            setType(value);
          }}
        />
        {type === PaymentType.INTERNAL && (
          <>
            <Select
              required
              value={payment?.remitter_account_number}
              onChange={(value) =>
                setPayment({
                  ...payment,
                  remitter_account_number: value,
                } as Payment)
              }
              label="From account"
              items={accounts
                .filter((_) => _.number !== payment?.beneficiary_account_number)
                .map((_) => _.number)}
            />
            <Select
              required
              value={payment?.beneficiary_account_number}
              onChange={(value) =>
                setPayment({
                  ...payment,
                  beneficiary_account_number: value,
                } as Payment)
              }
              label="To account"
              items={accounts
                .filter((_) => _.number !== payment?.remitter_account_number)
                .map((_) => _.number)}
            />
          </>
        )}
        {type !== PaymentType.INTERNAL && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 justify-end">
            <InputField
              required
              type="text"
              label="From account ID"
              value={payment?.remitter_account_id ?? ""}
              onChange={(e: any) => {
                setPayment({
                  ...payment,
                  remitter_account_id: e.target.value,
                } as Payment);
              }}
            />
            <InputField
              required
              type="text"
              label="To account ID"
              value={payment?.beneficiary_account_id ?? ""}
              onChange={(e: any) => {
                setPayment({
                  ...payment,
                  beneficiary_account_id: e.target.value,
                } as Payment);
              }}
            />
            <InputField
              required
              type="text"
              label="From account number"
              value={payment?.remitter_account_number ?? ""}
              onChange={(e: any) => {
                setPayment({
                  ...payment,
                  remitter_account_number: e.target.value,
                } as Payment);
              }}
            />
            <InputField
              required
              type="text"
              label="To account number"
              value={payment?.beneficiary_account_number ?? ""}
              onChange={(e: any) => {
                setPayment({
                  ...payment,
                  beneficiary_account_number: e.target.value,
                } as Payment);
              }}
            />
            <InputField
              required
              type="text"
              label="Remitter name"
              value={payment?.remitter_name ?? ""}
              onChange={(e: any) => {
                setPayment({
                  ...payment,
                  remitter_name: e.target.value,
                } as Payment);
              }}
            />
            <InputField
              required
              type="text"
              label="Benificiary name"
              value={payment?.beneficiary_name ?? ""}
              onChange={(e: any) => {
                setPayment({
                  ...payment,
                  beneficiary_name: e.target.value,
                } as Payment);
              }}
            />
          </div>
        )}

        <InputField
          required
          type="number"
          label="Amount"
          value={payment?.amount?.toString() ?? "0"}
          step={0.1}
          onChange={(e: any) => {
            const amount = Number(e.target.value);
            if (amount > MAX_SIMULATED_PAYMENT_AMOUNT) return;
            setPayment({ ...payment, amount } as Payment);
          }}
        />
        <TextArea
          required
          label="Description"
          value={payment?.description ?? ""}
          onChange={(value) => {
            setPayment({ ...payment, description: value } as Payment);
          }}
        />
        {formErrors.map((error, index) => (
          <span key={`error-${index}`} className="text-xs text-red-800">
            {error}
          </span>
        ))}
        <button
          onClick={handleCreatePayment}
          className="btn btn-primary w-full flex justify-center"
        >
          {isLoading ? <SpinnerIcon /> : <>Continue</>}
        </button>
      </div>
      <PaymentSimulationFeedback
        isError={!!error}
        isOpen={showFeedback}
        onClose={() => setShowFeedback(false)}
        message={error ? error : "Thank you, payment has been made."}
      />
    </>
  );
}
