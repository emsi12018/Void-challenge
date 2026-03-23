import Container from '@/components/ui/Container'
import facebookIcon from '@/assets/icons/facebook.svg'
import instagramIcon from '@/assets/icons/instagram.svg'
import linkedinIcon from '@/assets/icons/linkedin.svg'
import footerLinkedin from '@/assets/icons/footer_linkedin.png'
import footerSafety from '@/assets/icons/footer_safty.png'
import xIcon from '@/assets/icons/x.svg'
import logo from '@/assets/icons/logo.png'

const socialLinks = [
  { icon: 'facebook', defaultIcon: facebookIcon, label: 'Facebook', href: '#footer' },
  { icon: 'x', defaultIcon: xIcon, label: 'X', href: '#footer' },
  { icon: 'instagram', defaultIcon: instagramIcon, label: 'Instagram', href: '#footer' },
  { icon: 'linkedin', defaultIcon: linkedinIcon, label: 'LinkedIn', href: '#footer' },
]

const quickLinks = [
  { label: 'Nos offres', href: '#pricing-title' },
  { label: 'Nos jeux', href: '#catalogue-jeux' },
  { label: 'Album 2025', href: '#catalogue-jeux' },
  { label: 'À propos', href: '#backoffice-title' },
]

const legalLinks = [
  { label: 'Mentions légales', href: '#footer' },
  { label: "Conditions d'utilisation", href: '#footer' },
]

function SocialIcon({ name }) {
  if (name === 'facebook') {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[20px] w-[20px] fill-current">
        <path d="M13.35 20v-6.57h2.2l.33-2.56h-2.53V9.23c0-.74.2-1.25 1.26-1.25H15.8V5.7c-.2-.03-.92-.08-1.74-.08-1.73 0-2.9 1.06-2.9 3v2.25H9v2.56h2.16V20h2.2Z" />
      </svg>
    )
  }

  if (name === 'x') {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[20px] w-[20px] fill-current">
        <path d="M17.612 3.75h2.154l-4.706 5.378L20.596 20.25h-4.334l-3.394-4.426-3.872 4.426H6.839l5.154-5.887L6.69 3.75h4.334l3.067 4.005 3.521-4.005Zm-1.52 14.55h1.204L10.09 5.6H8.798l7.294 12.7Z" />
      </svg>
    )
  }

  if (name === 'instagram') {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-[20px] w-[20px]"
        fill="none"
      >
        <rect
          x="4.25"
          y="4.25"
          width="15.5"
          height="15.5"
          rx="4.25"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <circle cx="12" cy="12" r="3.45" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="17.2" cy="6.8" r="1.15" fill="currentColor" />
      </svg>
    )
  }

  if (name === 'linkedin') {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[20px] w-[20px] fill-current">
        <path d="M6.6 8.45a1.36 1.36 0 1 1 0-2.72 1.36 1.36 0 0 1 0 2.72ZM5.45 9.85h2.3v8.7h-2.3v-8.7Zm3.74 0h2.2v1.19h.03c.3-.58 1.06-1.43 2.42-1.43 2.59 0 3.06 1.7 3.06 3.91v5.03h-2.3v-4.46c0-1.06-.02-2.42-1.47-2.42-1.48 0-1.71 1.15-1.71 2.35v4.53h-2.23v-8.7Z" />
      </svg>
    )
  }

  return (
    <img
      src={footerLinkedin}
      alt=""
      aria-hidden="true"
      className="h-[20px] w-[20px] object-contain"
    />
  )
}

function FooterSection() {
  return (
    <footer id="footer" className="w-full border-t border-[#E5E7EB] bg-[#F8FAFC]">
      <Container className="max-w-[1440px] px-0">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-[32px] px-4 py-[48px] sm:px-6 lg:px-4">
          <div className="grid gap-[32px] md:grid-cols-2 lg:grid-cols-[minmax(0,608px)_minmax(0,288px)_minmax(0,288px)]">
            <div className="flex flex-col gap-[16px] md:col-span-2 lg:col-span-1">
              <a
                href="#accueil"
                className="inline-flex h-[32px] w-fit items-center gap-[8px]"
                aria-label="Retour à l'accueil"
              >
                <img src={logo} alt="Youcanwin" className="h-[32px] w-auto object-contain" />
              </a>

              <p className="max-w-[608px] text-[14px] font-normal leading-[20px] text-[#475569]">
                Plateforme de jeux digitaux pour engager vos communautés autour du football. Un
                service d&apos;Agency.Africa.
              </p>

              <div className="flex items-center gap-[8px]">
                {socialLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    aria-label={item.label}
                    className="group relative inline-flex h-[32px] w-[32px] items-center justify-center overflow-hidden rounded-[8px] bg-[#E2E8F0] text-[#64748B] transition-[transform,background-color,box-shadow,color] duration-200 ease-out hover:-translate-y-px hover:bg-[#16A34A] hover:text-white hover:shadow-[0_10px_20px_-14px_rgba(22,163,74,0.7)]"
                  >
                    <img
                      src={item.defaultIcon}
                      alt=""
                      aria-hidden="true"
                      className="absolute inset-0 h-full w-full object-contain transition-opacity duration-150 ease-out group-hover:opacity-0"
                    />
                    <span className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-150 ease-out group-hover:opacity-100">
                      <SocialIcon name={item.icon} />
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <nav
              aria-labelledby="footer-quick-links-title"
              className="flex flex-col gap-[12px] md:w-auto lg:w-[288px]"
            >
              <h2
                id="footer-quick-links-title"
                className="text-[16px] font-semibold leading-[24px] text-[#0F172A]"
              >
                Liens rapides
              </h2>

              <ul className="flex flex-col gap-[8px]">
                {quickLinks.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-[14px] font-normal leading-[20px] text-[#475569] transition-colors duration-200 hover:text-[#16A34A]"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <nav
              aria-labelledby="footer-contact-legal-title"
              className="flex flex-col gap-[12px] md:w-auto lg:w-[288px]"
            >
              <h2
                id="footer-contact-legal-title"
                className="text-[16px] font-semibold leading-[24px] text-[#0F172A]"
              >
                Contact &amp; Légal
              </h2>

              <ul className="flex flex-col gap-[8px]">
                <li>
                  <a
                    href="mailto:games@agency.africa"
                    className="text-[14px] font-normal leading-[20px] text-[#475569] transition-colors duration-200 hover:text-[#16A34A]"
                  >
                    games@agency.africa
                  </a>
                </li>

                <li>
                  <a
                    href={legalLinks[0].href}
                    className="text-[14px] font-normal leading-[20px] text-[#475569] transition-colors duration-200 hover:text-[#16A34A]"
                  >
                    {legalLinks[0].label}
                  </a>
                </li>

                <li>
                  <a
                    href="#footer"
                    className="inline-flex items-center gap-[2px] text-[14px] font-normal leading-[20px] text-[#475569] transition-colors duration-200 hover:text-[#16A34A]"
                  >
                    <span>Protection des données (CNDP)</span>
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 8 8"
                      className="mt-px h-[10px] w-[10px] shrink-0"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 1H1.75C1.336 1 1 1.336 1 1.75v4.5c0 .414.336.75.75.75h4.5c.414 0 .75-.336.75-.75V5M4.5 1H7v2.5M7 1L3.75 4.25"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </li>

                <li>
                  <a
                    href={legalLinks[1].href}
                    className="text-[14px] font-normal leading-[20px] text-[#475569] transition-colors duration-200 hover:text-[#16A34A]"
                  >
                    {legalLinks[1].label}
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex flex-col gap-[24px] border-t border-[#E5E7EB] pt-[33px]">
            <div className="flex flex-col items-center justify-between gap-[16px] text-center md:flex-row md:text-left">
              <p className="text-[14px] font-normal leading-[20px] text-[#475569]">
                © 2025 Youcanwin. Tous droits réservés.
              </p>

              <p className="flex flex-wrap items-center justify-center gap-[4px] text-[14px] font-normal leading-[20px] text-[#475569] md:justify-end">
                <span>Un service de</span>
                <span className="font-semibold text-[#0B6B3A]">Agency.Africa</span>
                <span aria-hidden="true">—</span>
                <a
                  href="https://games.agency.africa"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-[#475569] transition-colors duration-200 hover:text-[#16A34A]"
                >
                  games.agency.africa
                </a>
              </p>
            </div>

            <div className="flex justify-center">
              <div className="inline-flex h-[38px] items-center gap-[8px] rounded-[8px] border border-[#BBF7D0] bg-[#F0FDF4] px-[17px] py-[9px]">
                <img
                  src={footerSafety}
                  alt=""
                  aria-hidden="true"
                  className="h-[20px] w-[20px] object-contain"
                />
                <span className="text-[14px] font-medium leading-[20px] text-[#0B6B3A]">
                  Site conforme CNDP Maroc
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default FooterSection
