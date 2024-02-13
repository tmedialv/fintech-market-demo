import CheckCircleIcon from "fintech/app/(shared)/icons/CheckCircleIcon";
import Modal from "fintech/app/(shared)/components/Modal";
import ErrorIcon from "fintech/app/(shared)/icons/ErrorIcon";

type PaymentSimulationFeedbackProps = {
  isOpen: boolean;
  isError: boolean;
  message: string;
  onClose: () => void;
};

export default function PaymentSimulationFeedback({
  isOpen,
  isError,
  message,
  onClose,
}: PaymentSimulationFeedbackProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="py-6 flex flex-col items-center justify-center gap-4 text-n600 text-center text-sm">
        <div className="w-[2.65rem] h-[2.65rem] rounded-full flex items-center justify-center bg-n200">
          {isError ? <ErrorIcon /> : <CheckCircleIcon />}
        </div>
        <p>{message}</p>
      </div>
    </Modal>
  );
}
