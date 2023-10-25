import { NextPage } from 'next'
import Image from 'next/image'
import * as yup from 'yup'
import * as S from '@/modules/my-numbers/styles/MyNumbersStyles'
import { DashBoardHeader } from '@/modules/dashboard/components/DashBoardHeader/DashBoardHeader'
import { DashboardSubHeader } from '@/modules/dashboard/components/DashboardSubHeader/DashboardSubHeader'
import { Number } from '@/modules/my-numbers/components/Number/Number'
import { requireSSRAuth } from '@/shared/utils/requireSSRAuth'
import api from '@/shared/services/api'
import { SkeletonAnimation } from '@/shared/shimmer/SkeletonAnimation'
import { useInfiniteQuery } from 'react-query'
import { useContext, useEffect, useState } from 'react'
import { LuckyNumbersContext } from '@/shared/context/LuckyNumbersContext'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import Lottie from 'react-lottie'
import * as animationData from '@/shared/animations/floating-mickey-head.json'

interface FormData {
  searchInputValue: string
}

const MyNumbers: NextPage = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }
  const schemma = yup.object().shape({
    searchInputValue: yup
      .string()
      .test('len', 'Digite o número completo', (inputValue) => {
        return inputValue?.length === 11
      })
  })
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<FormData>({
    resolver: yupResolver(schemma),
    mode: 'all'
  })

  async function getLuckNumbers(page: number = 1) {
    const response = await api.get(
      `/lucky-numbers/my-numbers?page=${page}&size=40`
    )

    return response.data
  }
  const [luckyNumber, setLuckyNumber] = useState('')
  const [showData, setShowData] = useState(true)
  const { numbersTotalQuantity } = useContext(LuckyNumbersContext)
  let timeout: any

  const { data, hasNextPage, fetchNextPage } = useInfiniteQuery(
    'lucky-numbers',
    async ({ pageParam = 1 }) => await getLuckNumbers(pageParam),
    {
      getNextPageParam: (lastPage, allPages: any[]) => {
        const nextPage = allPages.length + 1
        return nextPage
      }
    }
  )

  useEffect(() => {
    let fetching = false
    const handleScroll = async (e: any) => {
      const { scrollHeight, scrollTop, clientHeight } =
        e.target.scrollingElement
      if (!fetching && scrollHeight - scrollTop <= clientHeight * 1.2) {
        fetching = true
        if (hasNextPage) await fetchNextPage()
        fetching = false
      }
    }
    document.addEventListener('scroll', handleScroll)
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [fetchNextPage, hasNextPage])

  async function handleSearchLuckyNumber(values: FormData) {
    try {
      clearTimeout(timeout)
      const response = await api.get(
        `/lucky-numbers/get-number?lucky_number=${values.searchInputValue}`
      )

      setShowData(false)
      setLuckyNumber(response.data.number)
    } catch (error) {
      setShowData(false)
      timeout = setTimeout(() => {
        setShowData(true)
      }, 3000)
    }
  }

  return (
    <>
      <DashBoardHeader />
      <DashboardSubHeader />

      <S.Content>
        <S.Header>
          <h1>Seus números da sorte</h1>

          <S.SearchInputContainer
            onSubmit={handleSubmit(handleSearchLuckyNumber)}
            isError={!!errors.searchInputValue}
          >
            <S.InputBlock>
              <S.StyledInput
                mask={'999.999.999'}
                maskChar={null}
                type="tel"
                placeholder="Digite aqui o número"
                {...register('searchInputValue')}
              />

              <button type="submit">
                <Image
                  src={'/icons/search-icon.svg'}
                  alt="Icone de Busca "
                  width={17.49}
                  height={17.49}
                />
              </button>
            </S.InputBlock>
            <span className="error-message">
              {errors.searchInputValue?.message}
            </span>
          </S.SearchInputContainer>
        </S.Header>

        <S.NumbersList>
          {!data && (
            <>
              {Array(numbersTotalQuantity < 40 ? numbersTotalQuantity : 40)
                .fill(0)
                .map((e: number, i) => {
                  return (
                    <SkeletonAnimation
                      key={e + i}
                      className="luck-number-shimmer"
                    />
                  )
                })}
            </>
          )}

          {data && !isSubmitting && showData && (
            <>
              {data.pages.map((page) => {
                return page.items.map((item: any, index: number) => {
                  return (
                    <>
                      <Number key={item.number} value={item.number} />
                      {(index + 1) % 5 === 0 && <S.Line className="line" />}
                    </>
                  )
                })
              })}
            </>
          )}

          {isSubmitting && (
            <SkeletonAnimation className="luck-number-shimmer" />
          )}
          {!!luckyNumber && !isSubmitting && <Number value={luckyNumber} />}
        </S.NumbersList>
        {numbersTotalQuantity === 0 && !isSubmitting && (
          <S.LoadingContainer>
            <Lottie options={defaultOptions} height={120} width={120} />
          </S.LoadingContainer>
        )}

        {!luckyNumber && !showData && !isSubmitting && (
          <span className="luck-number-not-found">
            Número da sorte não encontrado.
          </span>
        )}
      </S.Content>
    </>
  )
}

export default MyNumbers

export const getServerSideProps = requireSSRAuth(async () => {
  return {
    props: {}
  }
})
