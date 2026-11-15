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
      "bg-background text-secondary-foreground text-sm hover:text-foreground hover:bg-secondary px-2 py-1 rounded-md w-fit cursor-pointer flex gap-1 hover:translate-0.5 transition-default ",
      className
    )}>
      <span>
        {children}
      </span>
      <span><ArrowUpRight className="h-4 w-4"/></span>
    </div>
  );
}