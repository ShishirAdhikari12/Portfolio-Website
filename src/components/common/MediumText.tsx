interface SectionTitleProps {
  children: React.ReactNode;
}

export default function MediumText({
  children,
}: SectionTitleProps) {
  return (
    <p className="text-secondary-foreground text-md">
      {children}
    </p>
  );
}