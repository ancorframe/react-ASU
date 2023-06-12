import * as yup from 'yup';

export const registerSchema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
    fullName: yup.string().min(5).required(),
  })
  .required();
