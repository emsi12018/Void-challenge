import Container from '@/components/ui/Container'
import lampIcon from '@/assets/icons/lampe.png'
import vectorUnderline from '@/assets/icons/Vector.png'
import block1PhoneImage from '@/assets/images/block1_phone.png'

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
              <div className="mx-auto w-full max-w-[380px] sm:w-[474px] sm:max-w-none xl:mx-0 xl:w-[600px]">
                <img
                  src={block1PhoneImage}
                  alt=""
                  aria-hidden="true"
                  className="h-auto w-full object-contain"
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  )
}

export default HeroSection
