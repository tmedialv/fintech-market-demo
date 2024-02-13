"use client";

import { useState } from "react";
import Modal from "fintech/app/(shared)/components/Modal";
import InputField from "fintech/app/(shared)/components/InputField";
import SpinnerIcon from "fintech/app/(shared)/icons/SpinnerIcon";
import createAccount from "../(adapters)/createAccount";
import { useRouter } from "next/navigation";

export default function CreateAccount() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [newAccountName, setNewAccountName] = useState("");

  const router = useRouter();

  const handleCreateAccount = async () => {
    setIsLoading(true);
    await createAccount(newAccountName);
    router.refresh();
    setIsLoading(false);
    setIsModalOpen(false);
    setNewAccountName("");
  };

  return (
    <>
      <button onClick={() => setIsModalOpen(true)} className="btn btn-primary">
        Create account
      </button>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Create account"
      >
        <InputField
          type="text"
          className="my-8"
          label="Account name"
          value={newAccountName}
          onChange={(e: any) => setNewAccountName(e.target.value)}
        />
        <button
          onClick={handleCreateAccount}
          className="btn btn-primary w-full flex justify-center"
        >
          {isLoading ? <SpinnerIcon /> : <>Continue</>}
        </button>
      </Modal>
    </>
  );
}
