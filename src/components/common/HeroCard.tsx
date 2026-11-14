import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function HeroCard({ children, className }: CardProps) {
  return (
    <div className={cn(
        "bg-card rounded-xl border py-4 px-6 ",
        className
      )}>
      {children}
    </div>
  );
}