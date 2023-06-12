import * as yup from 'yup';

export const supportSchema = yup
  .object({
    books: yup
      .array()
      .of(
        yup.object().shape({
          title: yup.string().min(3).required(),
          author: yup.string().min(1).required(),
          source: yup.string().min(1).required(),
          content: yup.string().min(1).required(),
        })
      )
      .min(1)
      .required(),
  })
  .required();
