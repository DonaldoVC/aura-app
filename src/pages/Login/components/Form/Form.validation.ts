import * as yup from 'yup';

export const formSchema = yup.object().shape({
  email: yup.string().email('invalid user').required(),
  password: yup.string().required(),
});
