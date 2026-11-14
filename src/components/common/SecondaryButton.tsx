import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

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
      <span><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-up-right preview-icon"><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg></span>
    </div>
  );
}