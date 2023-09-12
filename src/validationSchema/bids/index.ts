import * as yup from 'yup';

export const bidValidationSchema = yup.object().shape({
  amount: yup.number().integer().required(),
  user_id: yup.string().nullable().required(),
  gig_id: yup.string().nullable().required(),
});
