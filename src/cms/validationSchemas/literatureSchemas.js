import * as yup from 'yup';

export const literatureSchema = yup
  .object({
    image: yup.mixed().test('Image is required', 'Image is required', value => {
      return (
        yup.object().isValidSync(value) ||
        yup.string().min(10).isValidSync(value)
      );
    }),
    title: yup.string().min(3).required(),
    author: yup.string().min(3).required(),
    specialty: yup
      .array()
      .of(
        yup.object().shape({
          value: yup.string().min(3).required(),
          label: yup.string().min(1).required(),
        })
      )
      .min(1).required(),
    url: yup.string().url().required(),
  })
  .required();
