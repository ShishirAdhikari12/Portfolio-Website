import { cn } from "@/lib/utils";
import ColoredTitle from "./ColoredTitle";
// import type { ReactNode } from "react";

interface CardProps {
  className?: string;
  skillTitle: string;
  skillHeading: string;
  skillList: string[];
}

export default function SkillCard({ className, skillTitle, skillHeading, skillList }: CardProps) {
  return (
    <div className={cn(
      "bg-card rounded-xl border py-4 px-6 w-full hover:scale-101 transition-default ",
      className
    )}>
      <div className=" mb-6">
        <ColoredTitle>{skillTitle}</ColoredTitle>
      </div>
      <h3 className="text-foreground font-bold text-2xl ">{skillHeading}</h3>

      {/* skill list  */}
      <div>
        {skillList.map((eachSkill, index) => (
          <div key={index} className="my-5 text-secondary-foreground text-sm">
            {eachSkill}
          </div>
        ))}
      </div>
    </div>
  );
}