import Navbar from '@/components/Navbar'
import MainLayout from '@/layouts/MainLayout'
import BackofficeSection from '@/sections/BackofficeSection'
import ContactCtaSection from '@/sections/ContactCtaSection'
import FooterSection from '@/sections/FooterSection'
import GameFieldSection from '@/sections/GameFieldSection'
import GameCatalogSection from '@/sections/GameCatalogSection'
import HeroSection from '@/sections/HeroSection'
import JourneySection from '@/sections/JourneySection'
import KpiStripSection from '@/sections/KpiStripSection'
import PricingSection from '@/sections/PricingSection'
import SalesExperienceSection from '@/sections/SalesExperienceSection'
import SocialProofSection from '@/sections/SocialProofSection'

function HomePage() {
  return (
    <MainLayout>
      <Navbar />
      <main className="w-full" aria-label="Landing page">
        <HeroSection />
        <GameFieldSection />
        <JourneySection />
        <SalesExperienceSection />
        <BackofficeSection />
        <KpiStripSection />
        <PricingSection />
        <GameCatalogSection />
        <SocialProofSection />
        <ContactCtaSection />
        <FooterSection />
      </main>
    </MainLayout>
  )
}

export default HomePage
