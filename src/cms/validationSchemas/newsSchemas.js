import * as yup from 'yup';

export const newsSchema = yup
  .object({
    image: yup.mixed().test('Image is required', 'Image is required', value => {
      return (
        yup.object().isValidSync(value) ||
        yup.string().min(10).isValidSync(value)
      );
    }),
    date: yup.date().required().nullable(),
    title: yup.string().min(3).required(),
  })
  .required();
