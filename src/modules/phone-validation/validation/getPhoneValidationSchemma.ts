import * as yup from 'yup'
import 'yup-phone'

export function getPhoneValidationSchemma (countryCode: string) {
  return yup.object().shape({
    phone: yup
      .string()
      .phone(countryCode.toUpperCase(), undefined, 'Digite um número correto')
      .required('O campo celular é obrigátorio'),

    phoneConfirmation: yup
      .string()
      .oneOf([yup.ref('phone'), undefined], 'Os Telefones não correspondem')
      .required('Confirme seu Telefone')
  })
}
