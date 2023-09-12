import * as yup from 'yup';

export const gigValidationSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().required(),
  startup_id: yup.string().nullable().required(),
});
