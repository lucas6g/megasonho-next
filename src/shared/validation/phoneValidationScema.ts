import * as yup from 'yup'
import 'yup-phone'

export function validatePhone (countryCode: string) {
  return yup.object().shape({
    phone: yup
      .string()
      .phone(countryCode.toUpperCase(), undefined, 'Digite um número correto')
      .required('O campo celular é obrigátorio')
  })
}
