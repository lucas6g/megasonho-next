import * as S from './LimitedOfferBannerStyles'
import { LimitedOfferBannerTimer } from './LimitedOfferBannerTimer/LimitedOfferBannerTimer'
import Image from 'next/image'
export function LimitedOfferBanner() {
  return (
    <S.LimitedTimeOfferBanner>
      <img
        height={171}
        className="banner-img"
        src={'/images/banners/limited-time-offer-banner-desk.jpg'}
        alt="Banner Oferta Limitada MEGASONHO"
      />

      <S.LimitedOfferBannerContentMobile>
        <div className="row-1">
          <strong>
            Oferta por <br /> tempo limitado
          </strong>

          <LimitedOfferBannerTimer />
        </div>
        <div className="row-2">
          <p>
            Compre o <span>Guia de Viagem Disney</span> exclusivo da{' '}
            <span>MEGASONHO</span> e ganhe mais números da sorte.
          </p>
        </div>
        <div className="row-3">
          <span className="more">
            Saiba mais
            <Image
              className="arrow"
              src={'/icons/arrow-rigth-opacity.svg'}
              alt="Icone de uma Seta para direita"
              width={12}
              height={12}
            />
          </span>
        </div>
      </S.LimitedOfferBannerContentMobile>
      <S.LimitedOfferBannerContentDesktop>
        <div className="column-1">
          <strong>Oferta por tempo limitado</strong>
          <p>
            Compre o <span> Guia de Viagem Disney </span> exclusivo <br />
            <span>MEGASONHO</span> e ganhe mais números da <br />
            sorte.
          </p>
          <span className="more">
            Saiba mais
            <Image
              className="arrow"
              src={'/icons/arrow-rigth-opacity.svg'}
              alt="Icone de uma Seta para direita"
              width={12}
              height={12}
            />
          </span>
        </div>
        <div className="column-2">
          <LimitedOfferBannerTimer />
        </div>
      </S.LimitedOfferBannerContentDesktop>
    </S.LimitedTimeOfferBanner>
  )
}
