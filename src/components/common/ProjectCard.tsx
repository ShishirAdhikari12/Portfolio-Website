import { cn } from "@/lib/utils";
import type { Project } from "@/types/project";
import Status from "./Status";
import MediumText from "./MediumText";
import ColoredTitle from "./ColoredTitle";
import SmallText from "./SmallText";
import SecondaryButton from "./SecondaryButton";
// import type { ReactNode } from "react";

interface CardProps {
  // children: ReactNode;
  project: Project;
  index: number;
  className?: string;
}

export default function ProjectCard({ project, index, className }: CardProps) {
  return (
    <div className={cn(
      "bg-card rounded-xl border py-4 px-6 w-full h-fit hover:scale-101 transition-default ",
      className
    )}>

      <div className="flex justify-between">
        <p className="text-primary text-2xl">0{index + 1}</p>
        <Status status={project.status} />
      </div>

      <h3 className="text-foreground font-semibold text-xl my-6 ">{project.title}</h3>
      <MediumText>{project.description}</MediumText>
      <br />
      <ColoredTitle>STACK</ColoredTitle>
      <SmallText>{project.stack}</SmallText>
      <br />
      <ColoredTitle>KEY FEATURE</ColoredTitle>
      <SmallText>{project.keyFeatures}</SmallText>
      <br />
      <ColoredTitle>PURPOSE / OUTCOME</ColoredTitle>
      <SmallText>{project.purpose}</SmallText>
      <br />

      <div className="flex gap-3 flex-col w-full">
        <div className="flex items-center">
          <a href={project.links.github}
            target="_blank"
            rel="noopener noreferrer">
            <SecondaryButton className="bg-secondary">GitHub</SecondaryButton>
          </a>
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 text-primary/40 underline text-sm text-nowrap truncate hover:text-primary/70 "
            title={project.links.github}
          >{project.links.github}</a>
        </div>

        {project.links.liveDemo && <div className="flex items-center">
          <a
            href={project.links.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
          >
            <SecondaryButton className="bg-secondary text-nowrap ">Live Demo</SecondaryButton>
          </a>
          <a
            href={project.links.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 text-primary/40 underline text-sm text-nowrap truncate  hover:text-primary/70 "
            title={project.links.liveDemo}
          >{project.links.liveDemo}</a>
        </div>}
      </div>

    </div>
  );
}