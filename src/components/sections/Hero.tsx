import ColoredTitle from "../common/ColoredTitle"
import HeroCard from "../common/HeroCard"
import MainButton from "../common/MainButton"
import MediumText from "../common/MediumText"
import SecondaryButton from "../common/SecondaryButton"
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
        <div className="w-full lg:w-4/7">

          {/* hero title */}
          <h1 className="text-foreground font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tighter my-4">
            <span>Backend-focused</span><br />
            <span>web developer</span>
          </h1>


          <h3 className="text-foreground font-semibold text-xl mb-4">Laravel & PHP</h3>
          <MediumText>I build practical web applications with Laravel, REST APIs, authentication, authorization, database design, and clean application structure.</MediumText>

          {/* primary buttons */}
          <div className="my-6 flex gap-4">
            <MainButton className="text-sm font-semibold py-4 px-6">
              View Projects
            </MainButton>
            <button className="text-sm font-medium py-3 px-5 bg-secondary hover:text-foreground transition-default text-secondary-foreground border rounded-md hover:translate-0.5">
              Contact Me
            </button>

          </div>

          {/* secondary buttons */}
          <div className="flex gap-3 mb-4">

            {/* github */}

            <a
              href="https://github.com/ShishirAdhikari12"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SecondaryButton>
              GitHub
              </SecondaryButton>
            </a>

            {/* linkedin */}
            <a
              href="https://www.linkedin.com/in/shishir--adhikari/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SecondaryButton>
              LinkedIn
              </SecondaryButton>
            </a>

            {/* email */}
            <a
              href="mailto:shishiradhikari1829@example.com"
            >
              <SecondaryButton>
              Email
              </SecondaryButton>
            </a>
          </div>
        </div>

        {/* right card */}
        <HeroCard className="w-full h-fit lg:w-2/7">
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