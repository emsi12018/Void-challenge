import Container from '@/components/ui/Container'
import block6Icon1 from '@/assets/icons/block6_icon1.png'
import block6Icon2 from '@/assets/icons/block6_icon2.png'
import block6Icon3 from '@/assets/icons/block6_icon3.png'
import block6Icon4 from '@/assets/icons/block6_icon4.png'
import block6Icon5 from '@/assets/icons/block6_icon5.png'

const kpiItems = [
  {
    icon: block6Icon1,
    title: 'Utilisateurs',
    description: 'De 1K à illimité',
  },
  {
    icon: block6Icon2,
    title: 'QR Codes',
    description: 'Volume adapté',
  },
  {
    icon: block6Icon3,
    title: 'Couverture',
    description: 'Local à mondial',
  },
  {
    icon: block6Icon4,
    title: 'Albums',
    description: 'Standard ou custom',
  },
  {
    icon: block6Icon5,
    title: 'Infrastructure',
    description: 'Cloud ou On-Premise',
  },
]

function KpiStripSection() {
  return (
    <section className="w-full border-t border-[#E5E7EB] bg-white">
      <Container className="max-w-[1440px] px-0">
        <div className="mx-auto max-w-[1248px] px-4 pb-[48px] pt-[49px] sm:px-6 lg:px-4">
          <div className="grid gap-x-[24px] gap-y-[32px] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {kpiItems.map((item) => (
              <article
                key={item.title}
                className="flex min-h-[104px] flex-col items-center text-center"
              >
                <img
                  src={item.icon}
                  alt=""
                  aria-hidden="true"
                  className="h-[48px] w-[48px] object-contain"
                />

                <h3 className="mt-[12px] text-[16px] font-semibold leading-[24px] text-[#0F172A]">
                  {item.title}
                </h3>

                <p className="mt-[4px] text-[12px] font-normal leading-[16px] text-[#475569]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default KpiStripSection
