import * as yup from 'yup';

export const teacherSchema = yup
  .object({
    image: yup.mixed().test('Image is required', 'Image is required', value => {
      return (
        yup.object().isValidSync(value) ||
        yup.string().min(10).isValidSync(value)
      );
    }),
    fullName: yup.string().min(3).required(),
    degree: yup.string().min(3).required(),
  })
  .required();
