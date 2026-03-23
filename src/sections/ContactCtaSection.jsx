import Container from '@/components/ui/Container'
import block10Icon1 from '@/assets/icons/block10_icon1.png'
import block10Icon2 from '@/assets/icons/block10_icon2.png'

function ContactCtaSection() {
  return (
    <section
      id="contact"
      className="w-full bg-[linear-gradient(135deg,#DC2626_0%,#B01219_100%)]"
    >
      <Container className="max-w-[1440px] px-0">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-[16px] px-4 py-[80px] text-center sm:px-6 lg:px-4">
          <h2 className="max-w-[1248px] text-[36px] font-bold leading-[40px] tracking-[-0.9px] text-white">
            Prêt à transformer votre marketing ?
          </h2>

          <p className="max-w-[1248px] text-[18px] font-normal leading-[28px] text-[#FEF2F2]">
            Rejoignez les marques qui engagent leurs fans avec YouCanWin
          </p>

          <div className="flex w-full max-w-[1248px] flex-col items-center justify-center gap-[16px] pt-[16px] sm:flex-row">
            <a
              id="demande-demo"
              href="#demande-demo"
              className="inline-flex h-[60px] w-full items-center justify-center gap-[8px] rounded-[8px] bg-white px-[32px] text-[16px] font-medium leading-[24px] text-[#B01219] shadow-[0_4px_6px_-4px_rgba(0,0,0,0.1),0_10px_15px_-3px_rgba(0,0,0,0.1)] transition-transform duration-200 hover:-translate-y-px sm:w-[312px]"
            >
              <img
                src={block10Icon1}
                alt=""
                aria-hidden="true"
                className="h-[20px] w-[20px] object-contain"
              />
              <span>Planifier une démo gratuite</span>
            </a>

            <a
              href="#contact"
              className="inline-flex h-[60px] w-full items-center justify-center gap-[8px] rounded-[8px] border-[2px] border-white/30 bg-white/10 px-[34px] text-[16px] font-medium leading-[24px] text-white backdrop-blur-[8px] transition-transform duration-200 hover:-translate-y-px sm:w-[225px]"
            >
              <img
                src={block10Icon2}
                alt=""
                aria-hidden="true"
                className="h-[20px] w-[20px] object-contain"
              />
              <span>Nous contacter</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default ContactCtaSection
