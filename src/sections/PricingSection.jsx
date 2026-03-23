import Container from '@/components/ui/Container'
import block7Icon1 from '@/assets/icons/block7_icon1.png'
import block7Icon2 from '@/assets/icons/block7_icon2.png'
import block7Icon3 from '@/assets/icons/block7_icon3.png'

const pricingPlans = [
  {
    icon: block7Icon1,
    title: 'Starter',
    subtitle: 'Campagne locale',
    description: 'Idéal pour tester sur un marché',
    pricingNote: 'Tarification sur mesure selon vos volumes',
    features: [
      "Jusqu'à 1 000 utilisateurs",
      "Jusqu'à 10K QR codes",
      '1 pays / région',
      'Album standard (équipe nationale)',
      'Hébergement Cloud sécurisé',
      'Backoffice simplifié',
      'Support par email',
      '1 marque',
    ],
    ctaLabel: 'Demander un devis',
    ctaHref: '#contact',
    ctaVariant: 'outline',
    tone: 'green',
  },
  {
    icon: block7Icon2,
    title: 'Scale',
    subtitle: 'Expansion nationale',
    description: "Pour des campagnes d'envergure",
    pricingNote: 'Tarification sur mesure selon vos volumes',
    features: [
      "Jusqu'à 50 000 utilisateurs",
      'QR codes illimités',
      "Multi-pays (jusqu'à 5)",
      'Album complet (toutes les équipes)',
      'Cloud ou On-Premise',
      'Backoffice avancé avec analytics',
      'Support prioritaire 24/7',
      "Jusqu'à 3 marques",
      'API REST disponible',
    ],
    ctaLabel: 'Planifier une démo',
    ctaHref: '#demande-demo',
    ctaVariant: 'solid',
    tone: 'red',
    isPopular: true,
  },
  {
    icon: block7Icon3,
    title: 'Enterprise',
    subtitle: 'Solution globale',
    description: 'Pour les groupes internationaux',
    pricingNote: 'Tarification sur mesure selon vos volumes',
    features: [
      'Utilisateurs illimités',
      'QR codes illimités',
      'Déploiement mondial',
      'Albums personnalisés par région',
      'Infrastructure dédiée (On-Premise)',
      'Multi-marques illimité',
      'Développements sur-mesure',
      'Account manager dédié',
      'SLA garanti 99.9%',
      'Formation et onboarding complet',
    ],
    ctaLabel: 'Contactez-nous',
    ctaHref: '#contact',
    ctaVariant: 'outline',
    tone: 'green',
  },
]

function CheckIcon({ tone }) {
  const color = tone === 'red' ? '#DC2626' : '#16A34A'

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className="mt-[1px] h-[16px] w-[16px] flex-none"
      fill="none"
    >
      <path
        d="M16.25 5.625 8.437 13.438 4.792 9.792"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  )
}

function PlanButton({ href, label, variant }) {
  const className =
    variant === 'solid'
      ? 'h-[44px] border-[#DC2626] bg-[#DC2626] px-[16px] py-[10px] text-[16px] font-medium leading-[24px] text-white hover:bg-[#C92020]'
      : 'h-[46px] border-[#CBD5E1] bg-white px-[17px] py-[11px] text-[14px] font-semibold leading-[20px] text-[#334155] hover:bg-[#F8FAFC]'

  return (
    <a
      href={href}
      className={`mt-auto inline-flex w-full items-center justify-center rounded-[8px] border text-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${className}`}
    >
      {label}
    </a>
  )
}

function PopularBadge() {
  return (
    <div className="absolute left-1/2 top-0 z-10 -translate-x-1/2 -translate-y-1/2">
      <div className="inline-flex min-w-[106.55px] items-center justify-center rounded-[9999px] bg-[linear-gradient(180deg,#DC2626_0%,#B01219_100%)] px-[16px] py-[6px] shadow-[0_4px_6px_-4px_rgba(0,0,0,0.1),0_10px_15px_-3px_rgba(0,0,0,0.1)]">
        <span className="text-[14px] font-semibold leading-[20px] text-white">
          POPULAIRE
        </span>
      </div>
    </div>
  )
}

function PricingSection() {
  return (
    <section
      aria-labelledby="pricing-title"
      className="w-full bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FAFC_100%)]"
    >
      <Container className="max-w-[1440px] px-0">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-[48px] px-4 py-[80px] sm:px-6 lg:px-4">
          <div className="mx-auto flex max-w-[1248px] flex-col items-center gap-[16px] text-center">
            <h2
              id="pricing-title"
              className="w-full text-[32px] font-bold leading-[38px] text-[#0F172A] sm:text-[34px] sm:leading-[40px] lg:text-[36px] lg:leading-[40px]"
            >
              Des formules adaptées à votre échelle
            </h2>

            <p className="max-w-[768px] text-[18px] font-normal leading-[28px] text-[#475569]">
              Choisissez la solution qui correspond à vos besoins et votre
              ambition
            </p>
          </div>

          <div className="mx-auto grid max-w-[1248px] gap-[32px] md:grid-cols-2 lg:grid-cols-3">
            {pricingPlans.map((plan) => {
              const articleClassName = plan.isPopular
                ? 'border-[#FECACA] shadow-[0_14px_24px_-12px_rgba(220,38,38,0.18),0_26px_34px_-18px_rgba(15,23,42,0.14)]'
                : 'border-[#E2E8F0] shadow-none'
              const defaultHoverClassName = !plan.isPopular
                ? 'hover:-translate-y-[8px] hover:border-[#D7E1EC] hover:shadow-[0_12px_20px_-10px_rgba(15,23,42,0.18),0_22px_30px_-18px_rgba(15,23,42,0.14)]'
                : ''

              const glowClassName = plan.isPopular
                ? 'bg-[radial-gradient(circle_at_top_left,rgba(254,226,226,0.5),rgba(255,255,255,0)_42%)]'
                : 'bg-[radial-gradient(circle_at_top_left,rgba(220,252,231,0.32),rgba(255,255,255,0)_42%)]'

              const glowOpacityClassName = plan.isPopular
                ? 'opacity-100'
                : 'opacity-0 group-hover:opacity-100'

              const layoutClassName =
                plan.title === 'Enterprise'
                  ? 'md:col-span-2 md:max-w-[608px] md:justify-self-center lg:col-span-1 lg:max-w-none'
                : ''

              return (
                <article
                  key={plan.title}
                  className={`group relative flex min-h-[706px] w-full flex-col rounded-[16px] border bg-white px-[26px] pb-[26px] pt-[33px] transition-[transform,box-shadow,border-color,background-color] duration-300 ease-out sm:px-[33px] sm:pb-[33px] ${articleClassName} ${defaultHoverClassName} ${layoutClassName}`}
                >
                  {plan.isPopular ? <PopularBadge /> : null}

                  <div
                    aria-hidden="true"
                    className={`pointer-events-none absolute inset-0 rounded-[16px] transition-opacity duration-300 ease-out ${glowClassName} ${glowOpacityClassName}`}
                  />

                  <img
                    src={plan.icon}
                    alt=""
                    aria-hidden="true"
                    className="relative z-10 h-[48px] w-[48px] object-contain transition-transform duration-300 ease-out group-hover:-translate-y-[2px] group-hover:scale-[1.04]"
                  />

                  <div className="relative z-10 mt-[20px]">
                    <h3 className="text-[20px] font-semibold leading-[28px] text-[#0F172A] transition-colors duration-300 ease-out group-hover:text-[#111B34]">
                      {plan.title}
                    </h3>

                    <p className="text-[14px] font-medium leading-[20px] text-[#16A34A] transition-colors duration-300 ease-out group-hover:text-[#14803D]">
                      {plan.subtitle}
                    </p>
                  </div>

                  <p className="relative z-10 mt-[16px] text-[16px] font-normal leading-[24px] text-[#475569] transition-colors duration-300 ease-out group-hover:text-[#526177]">
                    {plan.description}
                  </p>

                  <div className="relative z-10 mt-[24px] border-y border-[#F1F5F9] py-[17px] transition-colors duration-300 ease-out group-hover:border-[#E6EDF5]">
                    <p className="text-[14px] font-normal leading-[20px] text-[#64748B]">
                      {plan.pricingNote}
                    </p>
                  </div>

                  <ul className="relative z-10 mt-[16px] flex flex-col gap-[12px] pt-[8px]">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-[8px]">
                        <CheckIcon tone={plan.tone} />
                        <span className="text-[14px] font-normal leading-[20px] text-[#475569] transition-colors duration-300 ease-out group-hover:text-[#526177]">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="relative z-10 mt-[24px] pt-[24px]">
                    <PlanButton
                      href={plan.ctaHref}
                      label={plan.ctaLabel}
                      variant={plan.ctaVariant}
                    />
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default PricingSection
