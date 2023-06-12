import * as yup from 'yup';

export const partnershipSchema = yup
  .object({
    image: yup.mixed().test('Image is required', 'Image is required', value => {
      return (
        yup.object().isValidSync(value) ||
        yup.string().min(10).isValidSync(value)
      );
    }),
    title: yup.string().min(3).required(),
  })
  .required();

export const partnershipDetailSchema = yup
  .object({
    image: yup.mixed().test('Image is required', 'Image is required', value => {
      return (
        yup.object().isValidSync(value) ||
        yup.string().min(10).isValidSync(value)
      );
    }),
    logo: yup.mixed().test('Logo is required', 'Logo is required', value => {
      return (
        yup.object().isValidSync(value) ||
        yup.string().min(10).isValidSync(value)
      );
    }),
    title: yup.string().min(3).required(),
    url: yup.string().url().required(),
  })
  .required();
