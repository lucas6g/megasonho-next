import { validate } from 'gerador-validador-cpf'
import * as yup from 'yup'

export const editMeValidationSchemma = yup.object().shape({
  name: yup
    .string()
    .required('O campo nome é obrigátorio.')
    .matches(/^[A-zÀ-ú\s]+$/, 'Digite apenas seu nome.')
    .test('is-full-name', 'Digite seu nome completo', (inputValue: any) => {
      const name = inputValue?.split(' ')
      return !!name[1]
    }),

  document: yup
    .string()
    .test('len', 'Digite seu CPF', inputValue => {
      const inputValuelengthWhitOnlyNumbers = inputValue?.replace(
        /\D+/g,
        ''
      ).length

      return inputValuelengthWhitOnlyNumbers === 11
    })
    .test('test-invalid-cpf', 'CPF Inválido', cpf => {
      return validate(String(cpf))
    })
})
