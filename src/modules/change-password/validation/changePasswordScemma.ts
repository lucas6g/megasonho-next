import * as yup from 'yup'

export const changePasswordScemma = yup.object().shape({
  actualPassword: yup.string().required('Senha Atual obrigatória'),
  newPassword: yup
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
    })
    .notOneOf(
      [yup.ref('actualPassword'), undefined],
      'Sua nova senha não pode ser igual a antiga'
    ),
  newPasswordConfirmation: yup
    .string()
    .oneOf([yup.ref('newPassword'), undefined], 'As Senhas não correspondem')
    .required('Confirme sua nova Senha')
})
