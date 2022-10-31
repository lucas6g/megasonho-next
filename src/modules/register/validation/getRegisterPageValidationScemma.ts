import * as yup from 'yup'
import 'yup-phone'

export function getRegisterPageValidationScemma (countryCode: string) {
  return yup.object().shape({
    name: yup
      .string()
      .required('O campo nome é obrigátorio.')
      .matches(/^[A-zÀ-ú\s]+$/, 'Digite apenas seu nome.'),

    phone: yup
      .string()
      .phone(countryCode.toUpperCase(), undefined, 'Digita um numero certo')
      .required('O campo celular é obrigátorio'),

    email: yup
      .string()
      .required('E-mail obrigatório')
      .email('Digite um e-mail válido'),
    password: yup.string().required('Senha obrigátoria'),

    passwordConfirmation: yup
      .string()
      .oneOf([yup.ref('password'), undefined], 'As senhas não conencidem')
      .required('Ta faltalndo esse'),

    acceptTerms: yup.bool().oneOf([true])
  })
}
