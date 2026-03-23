import Container from '@/components/ui/Container'
import block5Icon1 from '@/assets/icons/block5_icon1.png'
import block5Icon2 from '@/assets/icons/block5_icon2.png'
import block5Icon3 from '@/assets/icons/block5_icon3.png'
import block5Icon4 from '@/assets/icons/block5_icon4.png'
import block5Icon5 from '@/assets/icons/block5_icon5.png'
import block5Icon6 from '@/assets/icons/block5_icon6.png'
import block5Icon7 from '@/assets/icons/block5_icon7.png'
import block5Icon8 from '@/assets/icons/block5_icon8.png'
import settingIcon from '@/assets/icons/setting_icon.png'

const backofficeFeatures = [
  {
    icon: block5Icon1,
    title: 'Generateur QR Codes',
    description: 'Creez et telechargez vos QR codes uniques en masse',
  },
  {
    icon: block5Icon2,
    title: 'CRM Participants',
    description: 'Collectez et gerez vos participants avec segmentation avancee',
  },
  {
    icon: block5Icon3,
    title: 'Configuration jeux',
    description: 'Parametrez entierement vos jeux : regles, lots, duree, visuels',
  },
  {
    icon: block5Icon4,
    title: 'Analytics temps reel',
    description: 'Suivez vos KPIs : scans, conversions, engagement, ROI',
  },
  {
    icon: block5Icon5,
    title: 'Gestion des lots',
    description: 'Definissez vos recompenses et gerez les tirages au sort',
  },
  {
    icon: block5Icon6,
    title: 'Notifications',
    description: 'Envoyez des push, emails et SMS a vos participants',
  },
  {
    icon: block5Icon7,
    title: 'Export donnees',
    description: 'Telechargez vos donnees en CSV, Excel ou via API',
  },
  {
    icon: block5Icon8,
    title: 'Multi-campagnes',
    description: 'Gerez plusieurs campagnes simultanement',
  },
]

function BackofficeSection() {
  return (
    <section
      aria-labelledby="backoffice-title"
      className="w-full border-y border-black/10 bg-[linear-gradient(180deg,#FFFFFF_0%,#F5F5F5_100%)]"
    >
      <Container className="max-w-[1440px] px-0">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-[48px] px-4 py-[80px] sm:px-6 lg:px-4">
          <div className="flex flex-col items-center gap-[16px] text-center">
            <span className="inline-flex h-[32px] items-center gap-[8px] rounded-full bg-[#DCFCE7] px-[16px] py-[6px] text-[14px] font-medium leading-[20px] text-[#0B6B3A]">
              <img
                src={settingIcon}
                alt=""
                aria-hidden="true"
                className="h-[14px] w-[14px] object-contain"
              />
              Backoffice tout-en-un
            </span>

            <h2
              id="backoffice-title"
              className="w-full text-[32px] font-bold leading-[38px] tracking-[0] text-[#0F172A] sm:text-[34px] sm:leading-[40px] lg:text-[36px]"
            >
              Gerez tout depuis une interface unique
            </h2>

            <p className="max-w-[672px] text-[18px] font-normal leading-[28px] tracking-[0] text-[#475569]">
              Notre backoffice intuitif vous permet de creer, configurer et
              piloter vos campagnes en toute autonomie
            </p>
          </div>

          <div className="flex flex-col gap-[48px]">
            <div className="grid gap-[24px] sm:grid-cols-2 lg:grid-cols-4">
              {backofficeFeatures.map((feature) => (
                <article
                  key={feature.title}
                  className="group relative min-h-[186px] overflow-hidden rounded-[12px] border border-[#E2E8F0] bg-white px-[20px] pb-[20px] pt-[20px] transition-[transform,box-shadow,border-color,background-color] duration-300 ease-out hover:-translate-y-[6px] hover:border-[#D7E1EC] hover:bg-[#FFFFFF] hover:shadow-[0_12px_20px_-10px_rgba(15,23,42,0.18),0_20px_28px_-16px_rgba(15,23,42,0.14)]"
                >
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(220,252,231,0.32),rgba(255,255,255,0)_42%)] opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100"
                  />
                  <img
                    src={feature.icon}
                    alt=""
                    aria-hidden="true"
                    className="relative z-10 h-[48px] w-[48px] object-contain transition-transform duration-300 ease-out group-hover:-translate-y-[2px] group-hover:scale-[1.04]"
                  />

                  <h3 className="relative z-10 mt-[16px] text-[16px] font-semibold leading-[24px] tracking-[0] text-[#0F172A] transition-colors duration-300 ease-out group-hover:text-[#111B34]">
                    {feature.title}
                  </h3>

                  <p className="relative z-10 mt-[8px] max-w-[250px] text-[14px] font-normal leading-[20px] tracking-[0] text-[#475569] transition-colors duration-300 ease-out group-hover:text-[#526177]">
                    {feature.description}
                  </p>
                </article>
              ))}
            </div>

            <div className="flex justify-center">
              <a
                href="#demande-demo"
                className="inline-flex h-[48px] items-center justify-center gap-[8px] rounded-[8px] bg-[#16A34A] px-[24px] py-[12px] text-[16px] font-medium leading-[24px] tracking-[0] text-white transition hover:bg-[#128A3F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A] focus-visible:ring-offset-2"
              >
                Demander un acces au backoffice
                <svg
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                  className="h-[16px] w-[16px] fill-current"
                >
                  <path d="M7.22 4.47a.75.75 0 0 1 1.06 0l4.47 4.47a.75.75 0 0 1 0 1.06l-4.47 4.47a.75.75 0 0 1-1.06-1.06L11.16 10 7.22 6.03a.75.75 0 0 1 0-1.06Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default BackofficeSection
