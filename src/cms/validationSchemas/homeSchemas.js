import * as yup from 'yup';

export const homeSchema = yup
  .object({
    image: yup
      .mixed()
      .test(
          'Image is required',
          'Image is required',
        value => {
          return (
            yup.object().isValidSync(value) || yup.string().min(10).isValidSync(value)
          );
        }
      ),
    promoUrl: yup.string().url().required(),
    promoAlt: yup.string().min(3).required(),
  })
  .required();
