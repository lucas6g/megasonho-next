import * as yup from 'yup'

export const changeEmailScemma = yup.object().shape({
  actualEmail: yup
    .string()
    .required('E-mail obrigatório')
    .email('Digite um e-mail válido'),
  newEmail: yup
    .string()
    .required('E-mail obrigatório')
    .email('Digite um e-mail válido'),

  newEmailConfirmation: yup
    .string()
    .oneOf([yup.ref('newEmail'), undefined], 'Os E-mails não correspondem')
    .required('Confirme seu novo E-email')
})
