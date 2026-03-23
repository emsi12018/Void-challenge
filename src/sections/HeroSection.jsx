import Container from '@/components/ui/Container'
import rewardIcon from '@/assets/icons/block1_icon1.png'
import qrCodeIcon from '@/assets/icons/block1_icon2.png'
import lampIcon from '@/assets/icons/lampe.png'
import vectorUnderline from '@/assets/icons/Vector.png'

const heroStats = [
  {
    value: '500K+',
    label: 'Interactions/mois',
    accent: 'text-[#0B6B3A]',
    widthClass: 'xl:w-[181.33px]',
  },
  {
    value: '50+',
    label: 'Marques actives',
    accent: 'text-[#B01219]',
    widthClass: 'xl:w-[181.33px]',
  },
  {
    value: 'x3.5',
    label: 'ROI moyen',
    accent: 'text-[#0B6B3A]',
    widthClass: 'xl:w-[181.33px]',
  },
]

const trustedBrands = ['Maroc Telecom', 'Inwi', 'Orange', 'Carrefour']

const collectionStats = [
  { value: '127', label: 'Cartes', widthClass: 'w-[40px]' },
  { value: '76%', label: 'Complet', widthClass: 'w-[53px]' },
  { value: '#12', label: 'Rang', widthClass: 'w-[48px]' },
]

const collectionCards = Array.from({ length: 6 }, (_, index) => ({
  id: index + 1,
}))

const bottomNavItems = [
  { label: 'Récompense', hidden: true },
  { label: 'Scanner' },
  { label: 'Échanges' },
  { label: 'Profil' },
]

function HeroSection() {
  return (
    <section id="accueil" className="w-full">
      <div className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 border-y border-[#eef2f4] bg-[radial-gradient(145%_180%_at_0%_0%,_#edf8f2_0%,_#ffffff_40%,_#ffffff_100%)] shadow-[0_44px_92px_-70px_rgba(15,23,42,0.4)]">
        <Container className="max-w-[1280px] px-4 py-16 sm:px-6 sm:py-20 lg:px-[16px] lg:py-[96px] xl:py-[128px]">
          <div className="grid gap-y-12 xl:min-h-[797px] xl:grid-cols-[607.99px_608px] xl:gap-x-[32px]">
            <div className="mx-auto flex w-full max-w-[607.99px] flex-col xl:mx-0 xl:h-[797px] xl:w-[607.99px]">
              <div className="max-w-[540.1px]">
                <h1 className="max-w-[440px] text-[46px] font-bold leading-[46px] tracking-[-1.2px] text-[#0F172A] sm:max-w-[520px] sm:text-[58px] sm:leading-[58px] sm:tracking-[-1.45px] lg:max-w-[540.1px] lg:text-[72px] lg:leading-[72px] lg:tracking-[-1.8px]">
                  <span className="block">Transformez</span>
                  <span className="block sm:whitespace-nowrap">
                    chaque{' '}
                    <span className="relative inline-block align-baseline">
                      <span className="bg-[linear-gradient(180deg,#16A34A_0%,#0B6B3A_100%)] bg-clip-text text-transparent">
                        produit
                      </span>
                      <img
                        src={vectorUnderline}
                        alt=""
                        aria-hidden="true"
                        className="pointer-events-none absolute left-[-5px] top-[102%] w-[168px] max-w-none select-none sm:left-[-7px] sm:top-[84%] sm:w-[214px] lg:left-[-8px] lg:top-[111%] lg:w-[274.33px]"
                      />
                    </span>
                  </span>
                  <span className="block sm:whitespace-nowrap">en expérience de</span>
                  <span className="block">jeu</span>
                </h1>

                <p className="mt-[18px] max-w-[470px] text-[18px] font-normal leading-[26px] text-[#516075] sm:mt-[22px] sm:text-[21px] sm:leading-[30px] lg:mt-[24px] lg:max-w-[569px] lg:text-[24px] lg:leading-[32px]">
                  YouCanWin connecte vos marques aux fans de football à travers
                  des mécaniques de gamification innovantes.{' '}
                  <strong className="font-semibold text-[#0F172A]">
                    Codes QR, cartes digitales, défis et récompenses.
                  </strong>
                </p>
              </div>

              <dl className="mt-[28px] grid w-full max-w-[480px] grid-cols-3 gap-x-[14px] gap-y-[16px] sm:max-w-[520px] sm:gap-x-[24px] lg:mt-[32px] lg:max-w-[569px] lg:gap-x-[28px]">
                {heroStats.map((stat) => (
                  <div key={stat.label} className={stat.widthClass}>
                    <dt
                      className={`text-[32px] font-bold leading-[36px] tracking-[-0.8px] sm:text-[34px] sm:leading-[38px] lg:text-[36px] lg:leading-[40px] ${stat.accent}`}
                    >
                      {stat.value}
                    </dt>
                    <dd className="mt-[3px] text-[13px] font-medium leading-[18px] text-[#5F6D82] lg:text-[14px] lg:leading-[20px]">
                      {stat.label}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-[16px] flex flex-col gap-[12px] py-[12px] sm:flex-row sm:flex-wrap lg:w-full lg:flex-row lg:gap-[16px] lg:py-[16px]">
                <a
                  href="#demande-demo"
                  className="group relative inline-flex h-[48px] min-w-[154px] items-center justify-center gap-[9px] overflow-hidden rounded-[11px] bg-[#16944D] px-[24px] text-[15px] font-medium leading-[20px] text-white transition-[transform,box-shadow,filter] duration-300 ease-out hover:-translate-y-[2px] hover:brightness-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16944d] focus-visible:ring-offset-2 lg:h-[64px] lg:w-[211px] lg:gap-[8px] lg:rounded-[12px] lg:bg-[linear-gradient(180deg,#16A34A_0%,#0B6B3A_100%)] lg:px-[32px] lg:text-[18px] lg:leading-[28px] lg:shadow-[0_4px_6px_-4px_rgba(0,0,0,0.1),0_10px_15px_-3px_rgba(0,0,0,0.1)] lg:hover:shadow-[0_10px_14px_-6px_rgba(11,107,58,0.28),0_20px_24px_-8px_rgba(0,0,0,0.16)]"
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.16)_45%,rgba(255,255,255,0)_100%)] opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100"
                  />
                  <span className="relative z-10">Voir la démo</span>
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 20 20"
                    className="relative z-10 h-[14px] w-[14px] fill-current transition-transform duration-300 ease-out group-hover:translate-x-[3px] lg:h-[20px] lg:w-[20px]"
                  >
                    <path d="M7.22 4.47a.75.75 0 0 1 1.06 0l4.47 4.47a.75.75 0 0 1 0 1.06l-4.47 4.47a.75.75 0 0 1-1.06-1.06L11.16 10 7.22 6.03a.75.75 0 0 1 0-1.06Z" />
                  </svg>
                </a>

                <a
                  href="#comment-ca-marche"
                  className="group relative inline-flex h-[48px] min-w-[220px] items-center justify-center gap-[8px] overflow-hidden rounded-[11px] border border-[#CBD5E1] bg-white px-[22px] text-[15px] font-medium leading-[20px] text-[#334155] transition-[transform,border-color,box-shadow,background-color] duration-300 ease-out hover:-translate-y-[2px] hover:border-[#94A3B8] hover:bg-[#FBFDFF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16944d] focus-visible:ring-offset-2 lg:h-[64px] lg:w-[310px] lg:justify-start lg:gap-[8px] lg:rounded-[12px] lg:border-2 lg:px-[34px] lg:text-[18px] lg:leading-[28px] lg:hover:shadow-[0_4px_6px_-4px_rgba(0,0,0,0.08),0_10px_15px_-3px_rgba(15,23,42,0.08)]"
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 bg-[radial-gradient(circle_at_left_center,rgba(148,163,184,0.08),rgba(255,255,255,0)_55%)] opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100"
                  />
                  <img
                    src={lampIcon}
                    alt=""
                    aria-hidden="true"
                    className="relative z-10 h-[16px] w-[16px] shrink-0 transition-transform duration-300 ease-out group-hover:-rotate-[8deg] group-hover:scale-110 lg:h-[20px] lg:w-[20px]"
                  />
                  <span className="relative z-10 transition-colors duration-300 ease-out group-hover:text-[#0F172A]">
                    Comment ça marche
                  </span>
                </a>
              </div>

              <div className="mt-[16px] w-full border-t border-[#E8EDF2] pt-[24px]">
                <p className="text-[10px] font-medium uppercase leading-[16px] tracking-[1.35px] text-[#9AA8BA]">
                  ILS NOUS FONT CONFIANCE
                </p>
                <div className="mt-[13px] flex flex-wrap items-center gap-x-[24px] gap-y-[10px] text-[14px] font-normal leading-[20px] text-[#9AA8BA] lg:gap-x-[27px]">
                  {trustedBrands.map((brand) => (
                    <span key={brand}>{brand}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[608px] xl:mx-0 xl:h-[796.44px] xl:w-[608px] xl:pl-[32px]">
              <div className="relative mx-auto aspect-[372/686] w-full max-w-[372px] sm:h-[760px] sm:w-[474px] sm:max-w-none sm:aspect-auto xl:mx-0 xl:h-[796.44px] xl:w-[544px]">
                <div className="absolute left-0 top-[2.624%] box-border h-[93.295%] w-[90.323%] overflow-hidden rounded-t-[34px] border-x-[6px] border-t-[6px] border-[#0f172a] bg-white shadow-[0_22px_44px_-12px_rgba(0,0,0,0.22)] sm:top-[12px] sm:h-[726px] sm:w-[412px] sm:rounded-t-[38px] sm:border-x-[7px] sm:border-t-[7px] sm:shadow-[0_24px_48px_-12px_rgba(0,0,0,0.24)] xl:top-0 xl:h-[796.44px] xl:w-[448px] xl:rounded-t-[40px] xl:border-x-[8px] xl:border-t-[8px] xl:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] relative">
                  <div className="flex h-full flex-col overflow-hidden rounded-t-[28px] bg-white sm:rounded-t-[31px] xl:rounded-t-[32px]">
                    <div className="h-[148px] bg-[linear-gradient(180deg,#16A34A_0%,#0B6B3A_100%)] px-[18px] py-[24px] text-white sm:h-[170px] sm:px-[22px] sm:py-[28px] xl:h-[184px] xl:px-[24px] xl:pb-[32px] xl:pt-[32px]">
                      <p className="text-[10px] font-medium uppercase leading-[14px] tracking-[0.25px] text-white sm:text-[11px] sm:leading-[15px] xl:text-[12px] xl:leading-[16px] xl:tracking-[0.3px]">
                        ALBUM DIGITAL 2025
                      </p>
                      <h2 className="mt-[8px] text-[22px] font-bold leading-[30px] tracking-[-0.45px] text-white sm:text-[23px] sm:leading-[31px] xl:text-[24px] xl:leading-[32px]">
                        Ma Collection
                      </h2>

                      <dl className="mt-[8px] flex w-full gap-[14px] pt-[8px] sm:gap-[15px] xl:gap-[16px]">
                        {collectionStats.map((stat) => (
                          <div
                            key={stat.label}
                            className={`${stat.widthClass} flex h-[48px] flex-none flex-col justify-start`}
                          >
                            <dt className="text-[20px] font-bold leading-[28px] tracking-[-0.4px] text-white sm:text-[22px] sm:leading-[30px] xl:text-[24px] xl:leading-[32px]">
                              {stat.value}
                            </dt>
                            <dd className="text-[11px] font-normal leading-[14px] text-white/75 sm:text-[11px] sm:leading-[15px] xl:text-[12px] xl:leading-[16px]">
                              {stat.label}
                            </dd>
                          </div>
                        ))}
                      </dl>
                    </div>

                    <div className="bg-white px-[12px] pt-[12px] sm:px-[14px] sm:pt-[14px] xl:px-[16px] xl:pt-[16px]">
                      <div className="grid grid-cols-3 gap-[6px] sm:gap-[7px] xl:gap-[8px]">
                        {collectionCards.map((card) => (
                          <div
                            key={card.id}
                            className="h-[112px] rounded-[8px] bg-[linear-gradient(135deg,_#F1F5F9_0%,_#E2E8F0_100%)] sm:h-[152px] xl:h-[170.66px]"
                          />
                        ))}
                      </div>
                    </div>

                    <div className="flex-1 bg-white" />

                    <div className="h-[52px] border-t border-[#E5E7EB] bg-white px-[18px] pb-[9px] pt-[10px] sm:h-[58px] sm:px-[22px] sm:pb-[10px] sm:pt-[11px] xl:h-[64px] xl:px-[24px] xl:pb-[12px] xl:pt-[13px]">
                      <div className="grid grid-cols-4 justify-items-center">
                        {bottomNavItems.map((item) => (
                          <div
                            key={item.label}
                            className={`flex h-[34px] w-[36px] flex-col items-center gap-[3px] text-center sm:h-[37px] sm:w-[40px] sm:gap-[4px] xl:h-[39px] xl:w-[42px] ${
                              item.hidden ? 'opacity-0' : ''
                            }`}
                          >
                            <div className="h-[18px] w-[18px] rounded-[4px] bg-[#CBD5E1] sm:h-[19px] sm:w-[19px] xl:h-[20px] xl:w-[20px]" />
                            <span className="text-[9px] font-normal leading-[13px] text-[#475569] sm:text-[10px] sm:leading-[14px] xl:text-[10px] xl:leading-[15px]">
                              {item.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-[52px] sm:h-[58px] xl:h-[64px]"
                    >
                      <div className="absolute inset-y-0 left-0 w-[6px] bg-white sm:w-[7px] xl:w-[8px]" />
                      <div className="absolute inset-y-0 right-0 w-[6px] bg-white sm:w-[7px] xl:w-[8px]" />
                    </div>
                  </div>
                </div>

                <div className="absolute right-[-2px] top-[-6px] z-20 w-[180px] rounded-[16px] border border-[#F1F5F9] bg-white px-[15px] py-[15px] shadow-[0_8px_10px_-6px_rgba(0,0,0,0.1),0_20px_25px_-5px_rgba(0,0,0,0.1)] sm:right-[8px] sm:top-[-8px] sm:w-[194px] sm:px-[16px] sm:py-[16px] xl:right-[22px] xl:top-[-18px] xl:w-[218px] xl:px-[17px] xl:py-[17px]">
                  <div className="flex items-center gap-[12px]">
                    <img
                      src={qrCodeIcon}
                      alt=""
                      aria-hidden="true"
                      className="h-[36px] w-[36px] shrink-0 sm:h-[38px] sm:w-[38px] xl:h-[40px] xl:w-[40px]"
                    />

                    <div className="min-w-0">
                      <p className="text-[13px] font-semibold leading-[18px] text-[#0F172A] sm:text-[14px] sm:leading-[19px] xl:text-[14px] xl:leading-[20px]">
                        Scan QR Code
                      </p>
                      <p className="whitespace-nowrap text-[11px] font-normal leading-[16px] text-[#64748B] sm:text-[12px] sm:leading-[18px] xl:text-[12px] xl:leading-[20px]">
                        Débloquer une carte
                      </p>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-[6px] left-[-8px] z-20 w-[188px] rounded-[16px] border border-[#F1F5F9] bg-white px-[15px] py-[15px] shadow-[0_8px_10px_-6px_rgba(0,0,0,0.1),0_20px_25px_-5px_rgba(0,0,0,0.1)] sm:bottom-[4px] sm:left-[-14px] sm:w-[202px] sm:px-[16px] sm:py-[16px] xl:bottom-[-14px] xl:left-[-72px] xl:w-[218px] xl:px-[17px] xl:py-[17px]">
                  <div className="flex items-center gap-[12px]">
                    <img
                      src={rewardIcon}
                      alt=""
                      aria-hidden="true"
                      className="h-[36px] w-[36px] shrink-0 sm:h-[38px] sm:w-[38px] xl:h-[40px] xl:w-[40px]"
                    />

                    <div className="min-w-0">
                      <p className="text-[13px] font-semibold leading-[18px] text-[#0F172A] sm:text-[14px] sm:leading-[19px] xl:text-[14px] xl:leading-[20px]">
                        Récompense
                      </p>
                      <p className="whitespace-nowrap text-[11px] font-normal leading-[16px] text-[#64748B] sm:text-[12px] sm:leading-[18px] xl:text-[12px] xl:leading-[20px]">
                        Tirage hebdomadaire
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  )
}

export default HeroSection
