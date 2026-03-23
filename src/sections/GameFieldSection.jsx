import Container from '@/components/ui/Container'
import badgeDoneIcon from '@/assets/icons/icon_done.png'
import calendarIcon from '@/assets/icons/icon_calendar.png'
import featureIcon1 from '@/assets/icons/block2_icon1.png'
import featureIcon2 from '@/assets/icons/block2_icon2.png'
import featureIcon3 from '@/assets/icons/block2_icon3.png'
import featureIcon4 from '@/assets/icons/block2_icon4.png'
import footballFansImage from '@/assets/images/Fans de football avec smartphones.png'

const features = [
  {
    icon: featureIcon1,
    title: 'Activation instantanée',
    description: 'QR codes uniques sur chaque produit',
  },
  {
    icon: featureIcon2,
    title: 'Collection digitale',
    description: 'Cartes de joueurs, raretés, échanges',
  },
  {
    icon: featureIcon3,
    title: 'Récompenses exclusives',
    description: 'Tirages au sort, lots partenaires, expériences VIP',
  },
  {
    icon: featureIcon4,
    title: 'Analytics avancés',
    description: 'Dashboard temps réel, insights consommateurs',
  },
]

function GameFieldSection() {
  return (
    <section
      aria-labelledby="game-field-title"
      className="w-full border-t border-[#edf1f5] bg-[linear-gradient(180deg,#FFFFFF_0%,#F5F5F5_100%)]"
    >
      <Container className="max-w-[1280px] px-4 py-16 sm:px-6 sm:py-20 lg:px-[16px] lg:py-[81px]">
        <div className="mx-auto grid max-w-[1248px] items-center gap-12 xl:h-[597.23px] xl:grid-cols-[592px_592px] xl:gap-[64px]">
          <div className="flex justify-center xl:h-[597.23px] xl:w-[592px] xl:px-[72px]">
            <div className="w-full max-w-[448px] overflow-hidden rounded-[16px]">
              <img
                src={footballFansImage}
                alt="Pied de joueur sur un ballon de football"
                className="h-[520px] w-full object-cover sm:h-[560px] xl:h-[597.23px] xl:w-[448px]"
              />
            </div>
          </div>

          <div className="xl:flex xl:h-[597.23px] xl:w-[592px] xl:items-center">
            <div className="w-full max-w-[580px]">
              <div className="inline-flex h-[28px] items-center gap-[8px] rounded-full bg-[#DCFCE7] px-[12px] py-[4px]">
                <img
                  src={badgeDoneIcon}
                  alt=""
                  aria-hidden="true"
                  className="h-[16px] w-[16px]"
                />
                <span className="text-[14px] font-medium leading-[20px] text-[#0B6B3A]">
                  Solution complète
                </span>
              </div>

              <h2
                id="game-field-title"
                className="mt-[12px] max-w-[580px] text-[32px] font-bold leading-[38px] text-[#0F172A] sm:text-[34px] sm:leading-[40px] lg:text-[36px] lg:leading-[40px]"
              >
                Le terrain de jeu digital de votre marque
              </h2>

              <p className="mt-[16px] max-w-[580px] text-[18px] font-normal leading-[28px] text-[#475569]">
                YouCanWin transforme vos produits en expériences interactives.
                Chaque achat devient une opportunité d&apos;engagement avec vos
                consommateurs.
              </p>

              <ul className="mt-[24px] space-y-[10px]">
                {features.map((feature) => (
                  <li key={feature.title} className="flex items-start gap-[12px]">
                    <img
                      src={feature.icon}
                      alt=""
                      aria-hidden="true"
                      className="mt-[2px] h-[40px] w-[40px] flex-none"
                    />

                    <div>
                      <h3 className="text-[16px] font-semibold leading-[27px] text-[#0F172A]">
                        {feature.title}
                      </h3>
                      <p className="text-[14px] font-normal leading-[25px] text-[#475569]">
                        {feature.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-[24px]">
                <a
                  href="#demande-demo"
                  className="inline-flex h-[48px] min-w-[224px] items-center justify-center gap-[8px] rounded-[8px] bg-[#DC2626] px-[24px] py-[12px] text-[14px] font-medium leading-[24px] text-white transition hover:bg-[#c42020] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DC2626] focus-visible:ring-offset-2"
                >
                  Planifier une démo
                  <img
                    src={calendarIcon}
                    alt=""
                    aria-hidden="true"
                    className="h-[14px] w-[14px]"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default GameFieldSection
