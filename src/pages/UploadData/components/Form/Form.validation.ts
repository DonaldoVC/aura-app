import * as yup from 'yup';

export const formSchema = yup.object().shape({
  name: yup.string().required(),
  type: yup.string().required(),
  companies: yup.string().when('type', {
    is: 'Company Research',
    then: schema => schema.required(),
    otherwise: schema => schema.optional(),
  }),
  description: yup.string().optional(),
  scope: yup.string().optional(),
  expert: yup.array().min(1).required(),
});
