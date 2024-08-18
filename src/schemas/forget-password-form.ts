import * as Yup from 'yup';

export const forgetPasswordValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
});
