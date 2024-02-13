import { Dialog, Transition } from "@headlessui/react";
import { Fragment, PropsWithChildren } from "react";
import clsx from "clsx";
import CloseIcon from "fintech/app/(shared)/icons/CloseIcon";

export interface ModalProps extends PropsWithChildren {
  title?: string;
  isOpen: boolean;
  onClose: () => void;
  size?: keyof typeof ModalSize;
  overflowHidden?: boolean;
  hideCloseBtn?: boolean;
}

const ModalSize = {
  ExtraSmall: "max-w-sm",
  Small: "max-w-md",
  Medium: "max-w-lg",
  SemiLarge: "max-w-xl",
  Large: "max-w-3xl",
};

export default function Modal({
  children,
  isOpen,
  onClose,
  title,
  size = "Small",
  overflowHidden = true,
  hideCloseBtn = false,
}: ModalProps) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-[100]" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className={clsx(
                  "w-full transform rounded-xl bg-white p-6 text-left align-middle shadow-xl transition-all",
                  ModalSize[size],
                  {
                    "overflow-hidden": overflowHidden,
                  }
                )}
              >
                {!hideCloseBtn && (
                  <div className="absolute right-6 top-6">
                    <button onClick={onClose} aria-label="Close modal">
                      <CloseIcon />
                    </button>
                  </div>
                )}

                <Dialog.Title as="h4">{title}</Dialog.Title>
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
