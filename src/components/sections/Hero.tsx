import ColoredTitle from "../common/ColoredTitle"
import HeroCard from "../common/HeroCard"
import Section from "../common/Section"
import SectionTitle from "../common/SectionTitle"
import SmallText from "../common/SmallText"

const Hero = () => {
  return (
    <Section id="hero">

      {/* section title */}
      <SectionTitle>BACKEND DEVELOPMENT  /  PORTFOLIO</SectionTitle>

      {/* hero section */}
      <div className="flex flex-col lg:flex-row lg:justify-between gap-2 lg:gap-4">

        {/* left  */}
        <div className="w-full lg:w-5/7">
        
        </div>

        {/* right card */}
        <HeroCard className="w-full lg:w-2/7">
          <ColoredTitle>TECHNICAL DIRECTION</ColoredTitle>
          <ul className="flex flex-col gap-6">
            <li className="flex flex-col gap-1">
              <div className="flex gap-4 items-baseline">
              <p className="text-secondary-foreground text-xs">01</p>
              <span className="text-foreground text-md">Application Logic</span>
              </div>

              <div className="pl-8">
              <span className="text-secondary-foreground text-xs">Laravel / PHP</span>
              </div>
            </li>
            <li className="flex flex-col gap-1">
              <div className="flex gap-4 items-baseline">
              <p className="text-secondary-foreground text-xs">02</p>
              <span className="text-foreground text-md">API boundaries</span>
              </div>

              <div className="pl-8">
              <span className="text-secondary-foreground text-xs">REST / Auth / Permissions</span>
              </div>
            </li>
            <li className="flex flex-col gap-1">
              <div className="flex gap-4 items-baseline">
              <p className="text-secondary-foreground text-xs">03</p>
              <span className="text-foreground text-md">Data foundations</span>
              </div>

              <div className="pl-8">
              <span className="text-secondary-foreground text-xs">Relational design / Schema</span>
              </div>
            </li>
            
            
          </ul>
        </HeroCard>

      </div>

      <div>
        <ColoredTitle>PORTFOLIO OVERVIEW</ColoredTitle>
        <SmallText>Personal details, project evidence, and contact links are shown in the sections below.</SmallText>
      </div>
    </Section>
  )
}

export default Hero