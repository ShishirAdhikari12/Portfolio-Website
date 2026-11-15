import ProjectCard from "../common/ProjectCard"
import Section from "../common/Section"
import SectionHeading from "../common/SectionHeading"
import SectionTitle from "../common/SectionTitle"
import SmallText from "../common/SmallText"
import { projects } from "@/data/projects"

const Project = () => {

  // console.log(projects);
  const selectedProjects = `Selected Laravel projects: ${projects
    .map((project) => project.title)
    .join(", ")}.`;

  return (
    <Section id="project">
      <SectionTitle>
        03 / FEATURED PROJECTS
      </SectionTitle>
      <SectionHeading>
        The work behind the skills.
      </SectionHeading>
      <SmallText>
        {selectedProjects}
      </SmallText>

      {/* project cards  */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index}/>
        ))}
      </div>


    </Section>
  )
}

export default Project