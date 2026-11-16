import ColoredTitle from "../common/ColoredTitle"
import MediumText from "../common/MediumText"
import Section from "../common/Section"
import SectionTitle from "../common/SectionTitle"
import { contacts } from "@/data/Contacts"
import { ArrowUpRight } from "lucide-react"

const Contact = () => {
  return (
    <Section id="contact" className="bg-secondary">
      <SectionTitle>06 / CONTACT</SectionTitle>
      <h3 className="text-foreground font-extrabold text-4xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tighter mb-6 mt-8">Let’s talk about your next project.</h3>

      <MediumText>For role opportunities, collaborations, or project enquiries, get in touch below.</MediumText>
      <div className="m-8"></div>
      <ColoredTitle>EMAIL</ColoredTitle>


      <div className="flex items-center">
        <div className="font-extrabold text-foreground text-xl sm:text-2xl tracking-wide my-4">{contacts.email}</div>
        <ArrowUpRight className="h-6 w-6" />
      </div>

    </Section>
  )
}

export default Contact