import Container from '@/components/ui/Container'
import block8Image1 from '@/assets/images/block8_image1.png'
import block8Image2 from '@/assets/images/block8_image2.png'
import block8Image3 from '@/assets/images/block8_image3.png'
import block8Image4 from '@/assets/images/block8_image4.png'
import bientotIcon from '@/assets/icons/bientot_icon.png'
import startIcon from '@/assets/icons/start_icon.png'

const gameCards = [
  {
    image: block8Image1,
    title: 'Album Digital 2025',
    description: 'Collection de cartes avec échanges et défis.',
    badgeIcon: startIcon,
    badgeLabel: 'STAR',
    ctaLabel: 'Découvrir',
    ctaHref: '#catalogue-jeux',
  },
  {
    image: block8Image2,
    title: 'Quiz Football',
    description: "Questions sur l'actualité et l'histoire du foot.",
    badgeIcon: bientotIcon,
    badgeLabel: 'BIENTÔT',
  },
  {
    image: block8Image3,
    title: 'Tombola digitale',
    description: 'Tirages au sort avec lots sponsorisés.',
  },
  {
    image: block8Image4,
    title: 'Pronostics',
    description: 'Prédictions de matchs et classements.',
  },
]

function DiscoverArrow() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 6 10"
      className="h-[10px] w-[6px] stroke-current"
      fill="none"
    >
      <path
        d="M1 1 5 5 1 9"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.33"
      />
    </svg>
  )
}

function GameCatalogSection() {
  return (
    <section
      id="catalogue-jeux"
      aria-labelledby="game-catalog-title"
      className="w-full bg-[#F8FAFC]"
    >
      <Container className="max-w-[1440px] px-0">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-[48px] px-4 py-[80px] sm:px-6 lg:px-4">
          <div className="mx-auto flex max-w-[1248px] flex-col items-center gap-[16px] text-center">
            <h2
              id="game-catalog-title"
              className="w-full text-[32px] font-bold leading-[38px] text-[#0F172A] sm:text-[34px] sm:leading-[40px] lg:text-[36px] lg:leading-[40px]"
            >
              Catalogue de jeux
            </h2>

            <p className="max-w-[768px] text-[18px] font-normal leading-[28px] text-[#475569]">
              Des mécaniques éprouvées pour engager vos audiences
            </p>
          </div>

          <div className="mx-auto grid max-w-[1248px] gap-[24px] sm:grid-cols-2 lg:grid-cols-4">
            {gameCards.map((game) => (
              <article
                key={game.title}
                className="group overflow-hidden rounded-[16px] border border-[#E2E8F0] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.05)] transition-[transform,box-shadow,border-color] duration-200 ease-out hover:-translate-y-[4px] hover:border-[#DCEBDD] hover:shadow-[0_18px_32px_-20px_rgba(22,163,74,0.16),0_16px_28px_-18px_rgba(15,23,42,0.18)]"
              >
                <div className="relative aspect-[292/219] w-full overflow-hidden rounded-t-[16px]">
                  <img
                    src={game.image}
                    alt=""
                    aria-hidden="true"
                    className="h-full w-full object-cover transition-transform duration-200 ease-out group-hover:scale-[1.045]"
                  />

                  {game.badgeIcon ? (
                    <img
                      src={game.badgeIcon}
                      alt={game.badgeLabel}
                      className="absolute right-0 top-0 h-[24px] w-auto"
                    />
                  ) : null}
                </div>

                <div className="flex min-h-[156px] flex-col px-[24px] py-[24px]">
                  <h3 className="text-[16px] font-semibold leading-[24px] text-[#0F172A] transition-colors duration-200 ease-out group-hover:text-[#14803D]">
                    {game.title}
                  </h3>

                  <p className="mt-[8px] max-w-[244px] text-[14px] font-normal leading-[20px] text-[#475569] transition-colors duration-200 ease-out group-hover:text-[#526177]">
                    {game.description}
                  </p>

                  {game.ctaLabel ? (
                    <a
                      href={game.ctaHref}
                      className="mt-auto inline-flex items-center gap-[8px] pt-[8px] text-[14px] font-medium leading-[20px] text-[#16A34A] transition-colors duration-200 ease-out hover:text-[#14803D]"
                    >
                      {game.ctaLabel}
                      <span className="transition-transform duration-200 ease-out group-hover:translate-x-[2px]">
                        <DiscoverArrow />
                      </span>
                    </a>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default GameCatalogSection
