import Container from '@/components/ui/Container'
import block9Icon1 from '@/assets/icons/block9_icon1.png'
import block9Icon2 from '@/assets/icons/block9_icon2.png'
import block9Icon3 from '@/assets/icons/block9_icon3.png'
import block9Icon4 from '@/assets/icons/block9_icon4.png'

const proofItems = [
  {
    icon: block9Icon1,
    value: '500K+',
    label: 'Interactions mensuelles',
  },
  {
    icon: block9Icon2,
    value: '50+',
    label: 'Marques partenaires',
  },
  {
    icon: block9Icon3,
    value: '98%',
    label: 'Taux de satisfaction',
  },
  {
    icon: block9Icon4,
    value: '24/7',
    label: 'Support technique',
  },
]

function SocialProofSection() {
  return (
    <section className="w-full border-y border-[#E5E7EB] bg-white">
      <Container className="max-w-[1440px] px-0">
        <div className="mx-auto max-w-[1248px] px-4 py-[65px] sm:px-6 lg:px-4">
          <div className="grid gap-[32px] sm:grid-cols-2 lg:grid-cols-4">
            {proofItems.map((item) => (
              <article
                key={item.value}
                className="flex min-h-[96px] flex-col items-center justify-start text-center"
              >
                <img
                  src={item.icon}
                  alt=""
                  aria-hidden="true"
                  className="h-[32px] w-[32px] object-contain"
                />

                <p className="mt-[8px] text-[30px] font-bold leading-[36px] text-[#0F172A]">
                  {item.value}
                </p>

                <p className="text-[14px] font-normal leading-[20px] text-[#475569]">
                  {item.label}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default SocialProofSection
