import ColoredTitle from "../common/ColoredTitle"
import MediumText from "../common/MediumText"
import Section from "../common/Section"
import SectionTitle from "../common/SectionTitle"
import { contacts } from "@/data/Contacts"
import { ArrowUpRight, Copy, Check } from "lucide-react"
import { useState } from "react";
import SmallText from "../common/SmallText"

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

      <div className="w-full flex ">

        {/* left half  */}
        <div className="w-1/2 ">

          <ColoredTitle>EMAIL</ColoredTitle>

          <div className=" w-fit flex items-center gap-6">
            <a
              href="mailto:shishiradhikari1829@example.com"
            >
              <div className="flex items-center text-foreground hover:text-primary/50 w-fit">
                <div className="font-extrabold text-xl sm:text-2xl tracking-wide">{contacts.email}</div>
                <ArrowUpRight className="h-6 w-6" />
              </div>
            </a>

            <button
              onClick={handleCopy}
              className="relative group"
            >
              <Copy size={18} className="text-foreground hover:text-primary/30 hover:scale-130" />

              <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2
                whitespace-nowrap rounded-md bg-background px-3 py-1.5
                text-xs text-foreground opacity-0 group-hover:opacity-100
                transition-opacity">
                {copied ? "Copied!" : "Copy email"}
              </span>
            </button>

          </div>

          <div className="mt-10"><SmallText>Contact links and resume should be connected in the final version.</SmallText></div>
        </div>

        {/* right half  */}
        <div className="w-1/2">

        </div>
      </div>

    </Section>
  )
}

export default Contact