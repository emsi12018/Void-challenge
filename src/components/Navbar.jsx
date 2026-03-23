import { useEffect, useState } from 'react'
import logo from '@/assets/icons/logo.png'

const navLinks = [
  { label: 'Nos offres', href: '#pricing-title' },
  { label: 'Nos jeux', href: '#catalogue-jeux' },
  { label: 'Album 2025', href: '#catalogue-jeux' },
  { label: 'À propos', href: '#backoffice-title' },
]

function NavLink({ href, label, mobile = false, onClick }) {
  const className = mobile
    ? 'flex w-full items-center justify-between rounded-[12px] px-[14px] py-[12px] text-[15px] font-medium leading-[20px] text-[#334155] transition-[color,background-color,transform] duration-200 ease-out hover:bg-[#EEF9F1] hover:text-[#0B6B3A] hover:translate-x-[2px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16944d] focus-visible:ring-offset-2'
    : 'inline-flex items-center rounded-[10px] px-[12px] py-[10px] text-[14px] font-medium leading-[20px] text-[#334155] transition-[color,background-color,box-shadow] duration-200 ease-out hover:bg-[#EEF9F1] hover:text-[#0B6B3A] hover:shadow-[0_1px_2px_rgba(15,23,42,0.04)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16944d] focus-visible:ring-offset-2'

  return (
    <a href={href} onClick={onClick} className={className}>
      <span>{label}</span>
      {mobile ? (
        <svg
          aria-hidden="true"
          viewBox="0 0 20 20"
          className="h-[14px] w-[14px] fill-current"
        >
          <path d="M7.22 4.47a.75.75 0 0 1 1.06 0l4.47 4.47a.75.75 0 0 1 0 1.06l-4.47 4.47a.75.75 0 0 1-1.06-1.06L11.16 10 7.22 6.03a.75.75 0 0 1 0-1.06Z" />
        </svg>
      ) : null}
    </a>
  )
}

function DemoButton({ mobile = false, onClick }) {
  const baseClassName = mobile
    ? 'h-[48px] w-full justify-center rounded-[12px] px-[20px] text-[15px] leading-[20px]'
    : 'h-[40px] min-w-[215px] rounded-[8px] px-[20px] text-[14px] leading-[20px]'

  return (
    <a
      href="#demande-demo"
      onClick={onClick}
      className={`group relative inline-flex items-center gap-[8px] overflow-hidden bg-[linear-gradient(180deg,#16A34A_0%,#0B6B3A_100%)] font-medium text-white shadow-[0_2px_4px_-2px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.1)] transition-[transform,box-shadow,filter] duration-300 ease-out hover:-translate-y-[2px] hover:brightness-[1.02] hover:shadow-[0_10px_14px_-6px_rgba(11,107,58,0.28),0_20px_24px_-8px_rgba(0,0,0,0.16)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16944d] focus-visible:ring-offset-2 ${baseClassName}`}
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.16)_45%,rgba(255,255,255,0)_100%)] opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100"
      />
      <span className="relative z-10">Demander une démo</span>
      <svg
        aria-hidden="true"
        viewBox="0 0 20 20"
        className="relative z-10 h-[14px] w-[14px] fill-current transition-transform duration-300 ease-out group-hover:translate-x-[3px]"
      >
        <path d="M7.22 4.47a.75.75 0 0 1 1.06 0l4.47 4.47a.75.75 0 0 1 0 1.06l-4.47 4.47a.75.75 0 0 1-1.06-1.06L11.16 10 7.22 6.03a.75.75 0 0 1 0-1.06Z" />
      </svg>
    </a>
  )
}

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  function closeMobileMenu() {
    setMobileOpen(false)
  }

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 w-full">
        <div className="border-b border-black/5 bg-[rgba(255,255,255,0.95)] shadow-[0_1px_2px_rgba(0,0,0,0.05)] backdrop-blur-[12px]">
          <div className="mx-auto flex min-h-[72px] w-full max-w-[1440px] items-center px-4 sm:px-6 lg:px-[80px]">
            <div className="relative flex w-full items-center justify-between gap-[16px] py-[16px]">
              <a
                href="#accueil"
                className="inline-flex h-[40px] items-center gap-[12px] rounded-[10px] transition-transform duration-200 ease-out hover:-translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16944d] focus-visible:ring-offset-2"
                aria-label="Retour à l'accueil"
              >
                <img
                  src={logo}
                  alt="Youcanwin"
                  className="h-[32px] w-auto object-contain"
                />
                <span className="inline-flex h-[18px] items-center rounded-full bg-[#DCFCE7] px-[8px] text-[9px] font-semibold uppercase leading-none tracking-[0.72px] text-[#15803D]">
                  Games
                </span>
              </a>

              <div className="hidden items-center gap-[16px] lg:flex">
                <ul className="flex items-center gap-[4px]">
                  {navLinks.map((link) => (
                    <li key={link.label}>
                      <NavLink href={link.href} label={link.label} />
                    </li>
                  ))}
                </ul>

                <DemoButton />
              </div>

              <div className="relative lg:hidden">
                <button
                  type="button"
                  aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
                  aria-expanded={mobileOpen}
                  aria-controls="mobile-nav-panel"
                  onClick={() => setMobileOpen((open) => !open)}
                  className="inline-flex h-[40px] w-[40px] items-center justify-center rounded-[10px] border border-[#E2E8F0] bg-white text-[#334155] shadow-[0_1px_2px_rgba(15,23,42,0.06)] transition-[border-color,background-color,box-shadow,color] duration-200 ease-out hover:border-[#C7D8C9] hover:bg-[#EEF9F1] hover:text-[#0B6B3A] hover:shadow-[0_8px_16px_-12px_rgba(22,163,74,0.24)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16944d] focus-visible:ring-offset-2"
                >
                  <span className="relative h-[16px] w-[18px]">
                    <span
                      className={`absolute left-0 top-0 h-[2px] w-[18px] rounded-full bg-current transition-transform duration-300 ease-out ${mobileOpen ? 'translate-y-[7px] rotate-45' : ''}`}
                    />
                    <span
                      className={`absolute left-0 top-[7px] h-[2px] w-[18px] rounded-full bg-current transition-opacity duration-200 ease-out ${mobileOpen ? 'opacity-0' : 'opacity-100'}`}
                    />
                    <span
                      className={`absolute left-0 top-[14px] h-[2px] w-[18px] rounded-full bg-current transition-transform duration-300 ease-out ${mobileOpen ? '-translate-y-[7px] -rotate-45' : ''}`}
                    />
                  </span>
                </button>

                <div
                  id="mobile-nav-panel"
                  className={`absolute right-0 top-[calc(100%+12px)] z-50 w-[320px] max-w-[calc(100vw-2rem)] rounded-[20px] border border-[#E2E8F0] bg-[rgba(255,255,255,0.98)] p-[12px] shadow-[0_20px_38px_-18px_rgba(15,23,42,0.28),0_14px_24px_-16px_rgba(15,23,42,0.18)] backdrop-blur-[18px] transition-[opacity,transform,visibility] duration-250 ease-out ${mobileOpen ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-[8px] opacity-0 pointer-events-none'}`}
                >
                  <div className="flex flex-col gap-[4px]">
                    {navLinks.map((link) => (
                      <NavLink
                        key={link.label}
                        href={link.href}
                        label={link.label}
                        mobile
                        onClick={closeMobileMenu}
                      />
                    ))}
                  </div>

                  <div className="mt-[12px] border-t border-[#E8EDF2] pt-[12px]">
                    <DemoButton mobile onClick={closeMobileMenu} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div aria-hidden="true" className="h-[72px] w-full" />

      <button
        type="button"
        aria-hidden="true"
        tabIndex={-1}
        onClick={closeMobileMenu}
        className={`fixed inset-0 z-40 bg-[rgba(15,23,42,0.08)] backdrop-blur-[2px] transition-opacity duration-200 lg:hidden ${mobileOpen ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
      />
    </>
  )
}

export default Navbar
