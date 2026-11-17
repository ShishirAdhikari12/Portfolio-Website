import HeroCard from "../common/HeroCard"
import MediumText from "../common/MediumText"
import Section from "../common/Section"
import SectionHeading from "../common/SectionHeading"
import SectionTitle from "../common/SectionTitle"
import { Rocket, Dot, BookOpen, Check, Compass } from "lucide-react"

const DeveloperSnapshot = () => {
  return (
    <Section id="developerSnapshot">
      <SectionTitle>
        04 / DEVELOPER SNAPSHOT
      </SectionTitle>
      <SectionHeading>
        Always building.<br />
        <span className="text-secondary-foreground">Always learning.</span>
      </SectionHeading>

      <div className="max-w-5xl mb-6">
        <MediumText>A snapshot of my current development journey, what I'm actively building, what I'm learning, and the opportunities I'm seeking as I continue growing as a backend developer.</MediumText>
      </div>

      {/* three cards  */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 ">

        {/* first card  */}
        <HeroCard>
          <div className="mb-4"><Rocket className="text-foreground" /></div>
          <div className="flex flex-col justify-between gap-6 h-full pb-6">
            <div>
              <div className="mb-4"><span className="text-foreground text-xl">What I Enjoy Building</span></div>
              <div className="text-secondary-foreground text-sm pb-4 border-b">I enjoy building backend-focused web applications that solve practical problems through clean architecture, scalable database design.</div>

              <div>
                <ul className="text-sm text-secondary-foreground py-4 flex flex-col gap-4">
                  <div className="flex gap-2"><Dot /><li>Clean Architecture</li></div>

                  <div className="flex gap-2"><Dot /><li>Maintainable Software</li></div>

                  <div className="flex gap-2"><Dot /><li>Scalable Systems</li></div>

                  <div className="flex gap-2"><Dot /><li>Secure by Design</li></div>

                </ul>
              </div>
            </div>

            <div className="mt-6 py-6 border-t text-secondary-foreground text-sm">Built with purpose, not just for practice.</div>
          </div>
        </HeroCard>

        {/* second card */}
        <HeroCard>
          <div className="mb-4"><BookOpen className="text-foreground" /></div>
          <div className="flex flex-col justify-between gap-6 h-full pb-6">
            <div>
              <div className="mb-4"><span className="text-foreground text-xl">Currently Learning</span></div>
              <div className="text-secondary-foreground text-sm pb-4 border-b">Continuously expanding my knowledge through practical development rather than isolated tutorials.</div>

              <div>
                <ul className="text-sm text-secondary-foreground py-4 flex flex-wrap gap-3">
                  <div className="rounded-full border bg-secondary text-secondary-foreground px-4 py-2 w-fit cursor-pointer hover:bg-primary/30 transition-default"><li>Laravel Testing</li></div>

                  <div className="rounded-full border bg-secondary text-secondary-foreground px-4 py-2 w-fit cursor-pointer hover:bg-primary/30 transition-default"><li>REST API Design</li></div>

                  <div className="rounded-full border bg-secondary text-secondary-foreground px-4 py-2 w-fit cursor-pointer hover:bg-primary/30 transition-default"><li>Docker</li></div>

                  <div className="rounded-full border bg-secondary text-secondary-foreground px-4 py-2 w-fit cursor-pointer hover:bg-primary/30 transition-default"><li>PostgreSQL</li></div>
                  <div className="rounded-full border bg-secondary text-secondary-foreground px-4 py-2 w-fit cursor-pointer hover:bg-primary/30 transition-default"><li>System Design</li></div>
                  <div className="rounded-full border bg-secondary text-secondary-foreground px-4 py-2 w-fit cursor-pointer hover:bg-primary/30 transition-default"><li>Performance Optimization</li></div>
                  <div className="rounded-full border bg-secondary text-secondary-foreground px-4 py-2 w-fit cursor-pointer hover:bg-primary/30 transition-default"><li>Git Workflows</li></div>
                  <div className="rounded-full border bg-secondary text-secondary-foreground px-4 py-2 w-fit cursor-pointer hover:bg-primary/30 transition-default"><li>UI/UX Fundamentals</li></div>

                </ul>
              </div>
            </div>


            <div className="mt-6 py-6 border-t text-secondary-foreground text-sm">Learning by building</div>
          </div>
        </HeroCard>

        {/* third card  */}
        <HeroCard>
          <div className="mb-4"><Compass className="text-foreground" /></div>
          <div className="flex flex-col justify-between gap-6 h-full pb-6">
            <div>
              <div className="mb-4"><span className="text-foreground text-xl">Open To</span></div>
              <div className="text-secondary-foreground text-sm pb-4 border-b">Looking for opportunities where I can continue growing while contributing to meaningful products.</div>

              <div>
                <ul className="text-sm text-secondary-foreground py-4 flex flex-col gap-4">
                  <div className="flex items-center gap-4"><Check className="w-4 h-4" /><li>Backend Developer Internship</li></div>

                  <div className="flex items-center gap-4"><Check className="w-4 h-4" /><li>Junior Laravel Developer Role</li></div>

                  <div className="flex items-center gap-4"><Check className="w-4 h-4" /><li>Product-focused Teams</li></div>

                  <div className="flex items-center gap-4"><Check className="w-4 h-4" /><li>Open Source Collaboration</li></div>

                </ul>
              </div>
            </div>



            <div className="mt-6 py-6 border-t text-secondary-foreground text-sm">Available for opportunities</div>
          </div>
        </HeroCard>


      </div>

    </Section>

  )
}

export default DeveloperSnapshot