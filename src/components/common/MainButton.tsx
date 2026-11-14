import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function MainButton({ children, className }: CardProps) {
  return (
    <div className={cn(
        "bg-primary text-primary-foreground px-4 py-3 rounded-md w-fit cursor-pointer hover:translate-0.5 transition-default ",
        className
      )}>
      {children}
    </div>
  );
}