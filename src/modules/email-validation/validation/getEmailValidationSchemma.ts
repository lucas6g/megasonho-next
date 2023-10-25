import * as yup from 'yup'

export function getEmailValidationSchemma () {
  return yup.object().shape({
    email: yup
      .string()
      .required('E-mail obrigatório')
      .email('Digite um e-mail válido'),

    emailConfirmation: yup
      .string()
      .oneOf([yup.ref('email'), undefined], 'Os E-mails não correspondem')
      .required('Confirme seu E-email')
  })
}
