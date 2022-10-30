import * as yup from 'yup'
import 'yup-phone'

export function validatePhone (countryCode: string) {
  return yup.object().shape({
    phone: yup
      .string()
      .phone(countryCode.toUpperCase(), undefined, 'Digita um numero certo')
      .required('O campo celular é obrigátorio')
  })
}
