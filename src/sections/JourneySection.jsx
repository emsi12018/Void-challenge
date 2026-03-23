import Container from '@/components/ui/Container'
import block3Icon1 from '@/assets/icons/block3_icon1.png'
import block3Icon2 from '@/assets/icons/block3_icon2.png'
import block3Icon3 from '@/assets/icons/block3_icon3.png'
import block3Icon4 from '@/assets/icons/block3_icon4.png'
import block3Icon5 from '@/assets/icons/block3_icon5.png'
import step1Badge from '@/assets/icons/step_1.png'
import step2Badge from '@/assets/icons/step_2.png'
import step3Badge from '@/assets/icons/step_3.png'
import step4Badge from '@/assets/icons/step_4.png'
import step5Badge from '@/assets/icons/step_5.png'

const steps = [
  {
    badge: step1Badge,
    title: 'Achat produit',
    description: 'Le client achète votre produit en magasin',
    tone: 'green',
    icon: block3Icon1,
  },
  {
    badge: step2Badge,
    title: 'Scan QR Code',
    description: "Il scanne le code sur l'emballage",
    tone: 'green',
    icon: block3Icon2,
  },
  {
    badge: step3Badge,
    title: 'Déblocage carte',
    description: 'Une carte digitale est débloquée',
    tone: 'green',
    icon: block3Icon3,
  },
  {
    badge: step4Badge,
    title: 'Collection',
    description: 'Il complète sa collection',
    tone: 'red',
    icon: block3Icon4,
  },
  {
    badge: step5Badge,
    title: 'Récompenses',
    description: 'Participe aux tirages',
    tone: 'red',
    icon: block3Icon5,
  },
]

function JourneySection() {
  return (
    <section
      aria-labelledby="journey-title"
      className="w-full border-t border-[#edf1f5] bg-white"
    >
      <Container className="max-w-[1280px] px-4 py-16 sm:px-6 sm:py-20 lg:px-[16px] lg:py-[80px]">
        <div className="mx-auto max-w-[1248px]">
          <div className="text-center">
            <h2
              id="journey-title"
              className="text-[32px] font-bold leading-[38px] text-[#0F172A] sm:text-[34px] sm:leading-[40px] lg:text-[36px] lg:leading-[40px]"
            >
              Un parcours client simple et engageant
            </h2>
            <p className="mt-[8px] text-[18px] font-normal leading-[28px] text-[#475569]">
              De l&apos;achat du produit à la récompense, en 5 étapes
            </p>
          </div>

          <div className="mt-[44px] flex flex-wrap justify-center gap-x-[32px] gap-y-10 lg:mt-[40px] xl:flex-nowrap xl:items-start">
            {steps.map((step) => (
              <div
                key={step.title}
                className="relative flex h-[148px] w-[224px] flex-col items-center text-center"
              >
                <img
                  src={step.badge}
                  alt=""
                  aria-hidden="true"
                  className="absolute left-[190px] top-[-10px] h-[28px] w-[28px]"
                />

                
                  <img
                    src={step.icon}
                    alt=""
                    aria-hidden="true"
                    className="h-[64px] w-[64px] object-contain"
                  />
                

                <h3 className="mt-[12px] text-[16px] font-semibold leading-[24px] text-[#0F172A]">
                  {step.title}
                </h3>

                <p className="mt-[2px] w-[204px] text-[14px] font-normal leading-[20px] text-[#475569]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default JourneySection
