import type { ReactNode } from "react";
import Container from "./Container";

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export default function Section({
  id,
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-14 md:py-20 bg-background border-b  ${className}`}
    >
      <Container>
        {children}
      </Container>
    </section>
  );
}