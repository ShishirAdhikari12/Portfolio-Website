import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function SecondaryButton({ children, className }: CardProps) {
  return (
    <div className={cn(
      "bg-background hover:bg-primary/30 text-secondary-foreground text-sm hover:text-foreground px-3 py-2 rounded-md w-fit cursor-pointer flex gap-1 hover:translate-0.5 transition-default ",
      className
    )}>
      <span>
        {children}
      </span>
      <span><ArrowUpRight className="h-4 w-4"/></span>
    </div>
  );
}