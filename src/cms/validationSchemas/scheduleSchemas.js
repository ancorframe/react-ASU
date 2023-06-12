import * as yup from 'yup';

export const scheduleSchema = yup
  .object({
    course: yup
      .object()
      .shape({
        value: yup.string().min(3).required(),
        label: yup.string().min(1).required(),
      })
      .nullable()
      .required(),
    group: yup
      .object()
      .shape({
        value: yup.string().min(3).required(),
        label: yup.string().min(1).required(),
      })
      .nullable()
      .required(),
    subgroup: yup
      .object()
      .shape({
        value: yup.string().min(3).required(),
        label: yup.string().min(1).required(),
      })
      .nullable()
      .required(),
    mon: yup
      .array()
      .of(
        yup.object().shape({
          time: yup.string().min(3).required(),
          tag: yup.string().min(1).required(),
          teacher: yup.string().min(1).required(),
          discipline: yup.string().min(1).required(),
        })
      )
      .min(1)
      .required(),
    tue: yup
      .array()
      .of(
        yup.object().shape({
          time: yup.string().min(3).required(),
          tag: yup.string().min(1).required(),
          teacher: yup.string().min(1).required(),
          discipline: yup.string().min(1).required(),
        })
      )
      .min(1)
      .required(),
    wed: yup
      .array()
      .of(
        yup.object().shape({
          time: yup.string().min(3).required(),
          tag: yup.string().min(1).required(),
          teacher: yup.string().min(1).required(),
          discipline: yup.string().min(1).required(),
        })
      )
      .min(1)
      .required(),
    thu: yup
      .array()
      .of(
        yup.object().shape({
          time: yup.string().min(3).required(),
          tag: yup.string().min(1).required(),
          teacher: yup.string().min(1).required(),
          discipline: yup.string().min(1).required(),
        })
      )
      .min(1)
      .required(),
    fri: yup
      .array()
      .of(
        yup.object().shape({
          time: yup.string().min(3).required(),
          tag: yup.string().min(1).required(),
          teacher: yup.string().min(1).required(),
          discipline: yup.string().min(1).required(),
        })
      )
      .min(1)
      .required(),
  })
  .required();
