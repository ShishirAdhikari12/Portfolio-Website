import ColoredTitle from "../common/ColoredTitle"
import MediumText from "../common/MediumText"
import Section from "../common/Section"
import SectionTitle from "../common/SectionTitle"
import { contacts } from "@/data/Contacts"
import { ArrowUpRight, Copy, Check, Download } from "lucide-react"
import { useState } from "react";
import SmallText from "../common/SmallText"
import SecondaryButton from "../common/SecondaryButton"

const Contact = () => {

  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(contacts.email);
    setCopied(true);

    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Section id="contact" className="bg-secondary">
      <SectionTitle>06 / CONTACT</SectionTitle>
      <h3 className="text-foreground font-extrabold text-4xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tighter mb-6 mt-8">Let’s talk about your next project.</h3>

      <MediumText>For role opportunities, collaborations, or project enquiries, get in touch below.</MediumText>
      <div className="m-8"></div>

      <div className="w-full flex flex-col xl:flex-row gap-8 xl:gap-0">

        {/* left half  */}
        <div className="w-full xl:w-1/2 ">

          <ColoredTitle>EMAIL</ColoredTitle>

          <div className=" w-fit flex items-center gap-6">
            <a
              href="mailto:shishiradhikari1829@example.com"
            >
              <div className="flex items-center text-foreground hover:text-primary/50 w-fit transition-default ">
                <div className="font-extrabold text-md sm:text-xl lg:2xl tracking-wide">{contacts.email}</div>
                <ArrowUpRight className="h-4 w-4 lg:h-6 lg:w-6" />
              </div>
            </a>

            <button
              onClick={handleCopy}
              className="relative group"
            >
              {!copied && <Copy size={18} className="text-foreground hover:text-primary/30 hover:scale-130 transition-default" />}
              {copied && <Check size={18} className="text-foreground hover:text-primary/30 hover:scale-130 transition-default" />}

              <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2
                whitespace-nowrap rounded-md bg-background px-3 py-1.5
                text-xs text-foreground opacity-0 group-hover:opacity-100
                transition-opacity transition-default ">
                {copied ? "Copied!" : "Copy email"}
              </span>
            </button>

          </div>

          <div className="flex items-baseline mt-6">
            <a href="/resume.pdf" download="Shishir_Adhikari_Resume.pdf">
              <button className="bg-primary/10 hover:bg-primary/30 text-secondary-foreground text-sm hover:text-foreground px-3 py-2 rounded-md w-fit cursor-pointer flex items-center gap-2 hover:translate-0.5 transition-default ">
                <span>Download Resume</span>
                <Download className="h-4 w-4" />
              </button>
            </a>
          </div>

        </div>

        {/* right half  */}
        <div className="w-full xl:w-1/2 flex flex-col gap-4">
          <div className="flex items-baseline">
            <a href={contacts.github}
              target="_blank"
              rel="noopener noreferrer">
              <SecondaryButton className="bg-primary/10">GitHub</SecondaryButton>
            </a>
            <a
              href={contacts.github}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 text-primary/40 underline text-sm text-nowrap truncate hover:text-primary/70 transition-default "
              title={contacts.github}
            >{contacts.github}</a>
          </div>

          <div className="flex items-baseline">
            <a href={contacts.linkedIn}
              target="_blank"
              rel="noopener noreferrer">
              <SecondaryButton className="bg-primary/10">LinkedIn</SecondaryButton>
            </a>
            <a
              href={contacts.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 text-primary/40 underline text-sm text-nowrap truncate hover:text-primary/70 transition-default "
              title={contacts.linkedIn}
            >{contacts.linkedIn}</a>
          </div>

          <div className="flex items-baseline">
            <a href={contacts.x}
              target="_blank"
              rel="noopener noreferrer">
              <SecondaryButton className="bg-primary/10">X</SecondaryButton>
            </a>
            <a
              href={contacts.x}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 text-primary/40 underline text-sm text-nowrap truncate hover:text-primary/70 transition-default "
              title={contacts.x}
            >{contacts.x}</a>
          </div>

          <div className="flex items-baseline">
            <a href={contacts.instagram}
              target="_blank"
              rel="noopener noreferrer">
              <SecondaryButton className="bg-primary/10">Instagram</SecondaryButton>
            </a>
            <a
              href={contacts.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 text-primary/40 underline text-sm text-nowrap truncate hover:text-primary/70 transition-default "
              title={contacts.instagram}
            >{contacts.instagram}</a>
          </div>


        </div>
      </div>


      <div className="mt-10"><SmallText>Contact links and resume should be connected in the final version.</SmallText></div>

    </Section>
  )
}

export default Contact