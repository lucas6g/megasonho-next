import { validate } from 'gerador-validador-cpf'
import * as yup from 'yup'

export const documentValidationSchema = yup.object().shape({
  document: yup
    .string()
    .test('len', 'Digite seu CPF', inputValue => {
      const inputValuelengthWhitOnlyNumbers = inputValue?.replace(/\D+/g, '')
        .length

      return inputValuelengthWhitOnlyNumbers === 11
    })
    .test('test-invalid-cpf', 'CPF Inválido', cpf => {
      return validate(String(cpf))
    })
})
