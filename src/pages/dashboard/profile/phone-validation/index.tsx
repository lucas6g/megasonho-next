import { NextPage } from 'next'
import * as S from '@/modules/phone-validation/styles/PhoneValidationStyles'
import { DashBoardHeader } from '@/modules/dashboard/components/DashBoardHeader/DashBoardHeader'
import { DashboardSubHeader } from '@/modules/dashboard/components/DashboardSubHeader/DashboardSubHeader'
import { PhoneInput } from '@/shared/components/PhoneInput/PhoneInput'
import { yupResolver } from '@hookform/resolvers/yup'
import { Controller, useForm } from 'react-hook-form'
import { SelectedOptionContainer } from '@/modules/profile/components/SelectedOptionContainer/SelectedOptionContainer'
import { useState } from 'react'
import pt from 'react-phone-input-2/lang/pt.json'
import { getPhoneValidationSchemma } from '@/modules/phone-validation/validation/getPhoneValidationSchemma'
import { useRouter } from 'next/router'
import { requireSSRAuth } from '@/shared/utils/requireSSRAuth'
import api from '@/shared/services/api'

interface FormData {
  phone: string
  phoneConfirmation: string
}
const PhoneValidation: NextPage = () => {
  const [countryCode, setCountryCode] = useState('BR')
  const [isSelectingCountryCode, selectCoutryCode] = useState(true)
  const [dialCode, setDialCode] = useState(0)
  const [buttonLoading, setButtonLoading] = useState(false)
  const router = useRouter()
  const { formState, control, handleSubmit } = useForm<FormData>({
    resolver: yupResolver(getPhoneValidationSchemma(countryCode)),
    mode: 'all'
  })

  async function handleValidatePhone(values: FormData) {
    try {
      setButtonLoading(true)
      const response = await api.post('/two-factor/create/', {
        two_factor_type: 'WHATSAPP'
      })
      const token = response.data.token
      router.push({
        pathname: '/dashboard/profile/phone-validation/confirmation',
        query: { phone: `+${dialCode} ${values.phone}`, token }
      })
    } catch (error) {
      setButtonLoading(false)
    } finally {
      setButtonLoading(false)
    }
  }

  return (
    <S.Container>
      <DashBoardHeader />
      <DashboardSubHeader />

      <SelectedOptionContainer
        title="Validar o número de telefone"
        instructions="Informe seu número de telefone para que possamos enviar
        um código de verificação pelo Whatsapp."
        submitButtonText="Enviar"
        isSubmitButtonLoading={buttonLoading}
        onSubmit={handleSubmit(handleValidatePhone)}
      >
        <S.InputsContainer>
          <Controller
            control={control}
            name="phone"
            defaultValue=""
            render={({ field }) => (
              <PhoneInput
                error={formState.errors.phone}
                containerClassName="input-container"
                dropdownClass="input-phone-dropdown"
                buttonClass="input-phone-button"
                inputClass="phone-input"
                country={'br'}
                localization={pt}
                label="Número do Whatsapp:"
                masks={{ br: '(..) .....-....' }}
                inputProps={{
                  id: 'phone',
                  onBlur: field.onBlur,
                  ref: field.ref,
                  name: field.name,
                  ...(isSelectingCountryCode && { value: field.value })
                }}
                value={field.value}
                onChange={(value, data: any, event, formattedValue) => {
                  setCountryCode(data.countryCode.toUpperCase())
                  setDialCode(data.dialCode)
                  if (value === data.dialCode) {
                    field.onChange('')
                    selectCoutryCode(true)
                  } else {
                    selectCoutryCode(false)
                    field.onChange(formattedValue)
                  }
                }}
                disableCountryCode
                placeholder="Número do WhatsApp"
                disableCountryGuess
              />
            )}
          />

          <Controller
            control={control}
            name="phoneConfirmation"
            defaultValue=""
            render={({ field }) => (
              <PhoneInput
                error={formState.errors.phoneConfirmation}
                containerClassName="input-container"
                dropdownClass="input-phone-dropdown"
                buttonClass="input-phone-button"
                inputClass="phone-input"
                country={'br'}
                localization={pt}
                label="Confirme o seu número de telefone:"
                masks={{ br: '(..) .....-....' }}
                inputProps={{
                  id: 'phone',
                  onBlur: field.onBlur,
                  ref: field.ref,
                  name: field.name,
                  ...(isSelectingCountryCode && { value: field.value })
                }}
                value={field.value}
                onChange={(value, data: any, event, formattedValue) => {
                  setCountryCode(data.countryCode.toUpperCase())
                  setDialCode(data.dialCode)
                  if (value === data.dialCode) {
                    field.onChange('')
                    selectCoutryCode(true)
                  } else {
                    selectCoutryCode(false)
                    field.onChange(formattedValue)
                  }
                }}
                disableCountryCode
                placeholder="Confirme o seu número"
                disableCountryGuess
              />
            )}
          />
        </S.InputsContainer>
      </SelectedOptionContainer>
    </S.Container>
  )
}

export default PhoneValidation

export const getServerSideProps = requireSSRAuth(async () => {
  return {
    props: {}
  }
}, false)
