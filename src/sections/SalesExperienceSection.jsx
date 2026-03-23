import Container from '@/components/ui/Container'
import block4Icon1 from '@/assets/icons/block4_icon1.png'
import block4Icon2 from '@/assets/icons/block4_icon2.png'
import block4Icon3 from '@/assets/icons/block4_icon3.png'

const benefits = [
  {
    icon: block4Icon1,
    title: 'Engagement immédiat',
    description: 'Chaque produit devient une opportunité de jeu',
  },
  {
    icon: block4Icon2,
    title: 'Fidélisation naturelle',
    description: 'Les clients reviennent pour compléter leur collection',
  },
  {
    icon: block4Icon3,
    title: 'Viralité organique',
    description: 'Les fans partagent et échangent entre eux',
  },
]

function SalesExperienceSection() {
  return (
    <section
      aria-labelledby="sales-experience-title"
      className="w-full bg-[linear-gradient(180deg,#16A34A_0%,#0B6B3A_100%)]"
    >
      <Container className="max-w-[1440px] px-6 py-[64px] sm:px-10 sm:py-[72px] lg:px-[96px] lg:py-[80px]">
        <div className="mx-auto flex max-w-[1248px] flex-col gap-[24px]">
          <div className="text-center">
            <h2
              id="sales-experience-title"
              className="text-[32px] font-bold leading-[38px] text-white sm:text-[34px] sm:leading-[40px] lg:text-[36px] lg:leading-[40px]"
            >
              Transformez vos ventes en expérience mémorable
            </h2>

            <p className="mx-auto mt-[16px] max-w-[768px] text-[18px] font-normal leading-[28px] text-[#F0FDF4]">
              YouCanWin offre à vos clients plus qu&apos;un produit : une
              expérience interactive complète autour du football
            </p>
          </div>

          <div className="grid gap-[24px] pt-[24px] lg:grid-cols-3">
            {benefits.map((benefit) => (
              <article
                key={benefit.title}
                className="flex min-h-[228px] flex-col items-center rounded-[16px] bg-white/10 px-[32px] pb-[32px] pt-[24px] text-center backdrop-blur-[8px]"
              >
                <img
                  src={benefit.icon}
                  alt=""
                  aria-hidden="true"
                  className="h-[64px] w-[64px] object-contain"
                />

                <h3 className="mt-[24px] text-[20px] font-semibold leading-[28px] text-white">
                  {benefit.title}
                </h3>

                <p className="mt-[8px] max-w-[336px] text-[16px] font-normal leading-[24px] text-[#F0FDF4]">
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default SalesExperienceSection
