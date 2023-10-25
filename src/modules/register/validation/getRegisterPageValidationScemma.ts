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
    password: yup
      .string()
      .required('Senha obrigátoria')
      .test(
        'letra-maiuscula',
        'Tá faltando a letra maiuscula',
        (inputValue: any) => {
          const hasUperAtLeastOneUpperLetter = inputValue?.match(/(.*[A-Z].*)/)

          return hasUperAtLeastOneUpperLetter
        }
      )
      .test(
        'has-spetial-charactere',
        'Tá faltando um caractere especial',
        (inputValue: any) => {
          const hasSpecialCaractere = inputValue?.match(
            /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/
          )

          return hasSpecialCaractere
        }
      )
      .test('contains-number', 'Tá faltando um numero', (inputValue: any) => {
        const hasNumber = inputValue?.match(/[0-9]/)

        return hasNumber
      }),

    passwordConfirmation: yup
      .string()
      .oneOf([yup.ref('password'), undefined], 'As senhas não conencidem')
      .required('Confirme sua senha'),

    acceptTerms: yup.bool().oneOf([true])
  })
}
