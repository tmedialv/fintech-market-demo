import * as yup from "yup";

export let internalPaymentValidationSchema = yup.object().shape({
  beneficiary_account_number: yup
    .string()
    .required("Beneficiary account number is required"),
  remitter_account_number: yup
    .string()
    .required("Remitter account number is required"),
  amount: yup.number().required("Amount must be at least 0.01"),
  description: yup.string().required("Description is required"),
});

export let defaultPaymentValidationSchema = yup.object().shape({
  beneficiary_account_id: yup
    .string()
    .required("Beneficiary account ID is required"),
  beneficiary_account_number: yup
    .string()
    .required("Beneficiary account number is required"),
  beneficiary_name: yup.string().required("Beneficiary name is required"),
  remitter_account_number: yup
    .string()
    .required("Remitter account number is required"),
  remitter_account_id: yup.string().required("Remitter account ID is required"),
  remitter_name: yup.string().required("Remitter name is required"),
  amount: yup.number().required("Amount must be at least 0.01"),
  description: yup.string().required("Description is required"),
});
