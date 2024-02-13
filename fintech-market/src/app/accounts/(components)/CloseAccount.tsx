"use client";

import { useState } from "react";
import Modal from "fintech/app/(shared)/components/Modal";
import InputField from "fintech/app/(shared)/components/InputField";
import SpinnerIcon from "fintech/app/(shared)/icons/SpinnerIcon";
import { Account } from "fintech/app/(shared)/types/Account";
import closeAccount from "../(adapters)/closeAccount";
import { useRouter } from "next/navigation";

type CloseAccountProps = {
  account: Account;
};

export default function CloseAccount({ account }: CloseAccountProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [confirmationText, setConfirmationText] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleCreateAccount = async () => {
    if (confirmationText !== account.number) {
      setError("Please type your account number to confirm deletion");
      return;
    }

    setIsLoading(true);
    await closeAccount(account.id);
    setIsLoading(false);
    setIsModalOpen(false);
    setConfirmationText("");
    setError("");
    router.push("/");
    router.refresh();
  };

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="btn btn-primary my-10 float-end"
      >
        Close this account
      </button>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Close account"
      >
        <div className="my-8 flex flex-col gap-1 text-sm px-2">
          <span className="font-medium">Account number:</span>
          <span>{account.number}</span>
        </div>
        <InputField
          type="text"
          label="Confirm deletion by typing your account number"
          value={confirmationText}
          onChange={(e: any) => setConfirmationText(e.target.value)}
        />
        {error && <p className="text-sm text-red-500 px-2 my-1.5">{error}</p>}
        <button
          onClick={handleCreateAccount}
          className="mt-8 btn btn-danger w-full flex justify-center"
        >
          {isLoading ? <SpinnerIcon /> : <>Close account</>}
        </button>
      </Modal>
    </>
  );
}
