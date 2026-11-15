interface SectionTitleProps {
  children: React.ReactNode;
}

export default function SectionHeading({
  children,
}: SectionTitleProps) {
  return (
    <h2 className="font-extrabold text-foreground text-3xl sm:text-4xl tracking-wide my-4">
      {children}
    </h2>
  );
}