import * as yup from 'yup'
import 'yup-phone'

export function getRegisterPageValidationScemma (countryCode: string) {
  return yup.object().shape({
    name: yup
      .string()
      .required('O campo nome é obrigátorio.')
      .matches(/^[A-zÀ-ú\s]+$/, 'Digite apenas seu nome.')
      .test('is-full-name', 'Digite seu nome completo', (inputValue: any) => {
        const name = inputValue?.split(' ')
        return !!name[1]
      }),

    phone: yup
      .string()
      .phone(countryCode.toUpperCase(), undefined, 'Digite um número correto')
      .required('O campo celular é obrigátorio'),

    email: yup
      .string()
      .required('E-mail obrigatório')
      .email('Digite um e-mail válido'),
    password: yup.string().required('Senha obrigátoria'),

    passwordConfirmation: yup
      .string()
      .oneOf([yup.ref('password'), undefined], 'As senhas não conencidem')
      .required('Confirme sua senha'),

    acceptTerms: yup.bool().oneOf([true])
  })
}
