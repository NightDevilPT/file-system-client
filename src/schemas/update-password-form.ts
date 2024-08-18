import * as Yup from 'yup';

export const updatePasswordValidationSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters long')
    .required('Password is required'),
});
