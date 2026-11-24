import ColoredTitle from "../common/ColoredTitle"
import MediumText from "../common/MediumText"
import Section from "../common/Section"
import SectionHeading from "../common/SectionHeading"
import SectionTitle from "../common/SectionTitle"
import SmallText from "../common/SmallText"

const About = () => {
  return (
    <Section id="about" className="scroll-mt-24">
      <SectionTitle>
        01 / ABOUT
      </SectionTitle>

      <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-20">

        {/* Heading  */}
        <div className="w-full lg:w-2/7">
          <SectionHeading>
            Practical systems. Thoughtful implementation.
          </SectionHeading>
        </div>

        {/* personal summary  */}
        <div className="w-full lg:w-4/7 lg:pr-8">
          <MediumText>
            I am a backend-focused web developer building useful applications with Laravel and PHP. I care about clean architecture, reliable APIs, authentication, database design, and maintainable code. I also use React, Inertia, and Tailwind when a project needs a modern frontend.
          </MediumText>
          <ColoredTitle>
            ROLE DIRECTION
          </ColoredTitle>
          <div className="text-foreground text-md">Backend web development · Junior roles, internships, and freelance work</div>
          <br />
          <SmallText>
            Open to product-focused teams and practical real-world projects.
          </SmallText>
        </div>

      </div>
    </Section>
  )
}

export default About