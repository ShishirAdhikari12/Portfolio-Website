import ColoredTitle from "../common/ColoredTitle"
import Section from "../common/Section"
import SectionHeading from "../common/SectionHeading"
import SectionTitle from "../common/SectionTitle"
import SkillCard from "../common/SkillCard"
import SmallText from "../common/SmallText"
import { skills } from "@/data/skills"

const Skills = () => {
  return (
    <Section id="skills">
      <SectionTitle>
        02 / SKILLS
      </SectionTitle>
      <SectionHeading>
        A focused technical toolkit.
      </SectionHeading>
      <SmallText>
        The stack below reflects the user’s actual development direction. Do not add unnecessary tools or unrelated technologies.
      </SmallText>


      {/* skill cards  */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 mt-6">
        {skills.map((skill, index) => (
          <SkillCard key={index} skillTitle={skill.title} skillHeading={skill.Heading} skillList={skill.skillList} />
        ))}
      </div>

      <br />
      <ColoredTitle>
        WORKING STYLE
      </ColoredTitle>
      <SmallText>
        Clear communication, ownership, adaptability, attention to detail, consistency, learning agility, collaboration, and problem solving.
      </SmallText>
    </Section>
  )
}

export default Skills