import * as yup from 'yup';

const SignUpSchema = yup.object().shape({
  name: yup
    .string()
    .required('You must specify a name.')
    .matches(/^\D*$/i, 'The name must not have numbers.')
    .min(2, 'The name must be at least 2 characters.'),
  email: yup.string().required('You must specify an email.').email(),
  newPassword: yup
    .string()
    .required('You must specify a password.')
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{1,}$/i,
      'Your password must be have at least 1 uppercase, 1 lowercase character and 1 number.',
    )
    .min(8, 'The password must be at least 8 characters long.'),
  confirmPassword: yup
    .string()
    .required('Password confirmation required.')
    .oneOf(
      [yup.ref('newPassword'), null],
      "The confirmation password doesn't match.",
    ),
});

export default SignUpSchema;
