interface SectionTitleProps {
  children: React.ReactNode;
}

export default function SmallText({
  children,
}: SectionTitleProps) {
  return (
    <p className="text-secondary-foreground text-sm">
      {children}
    </p>
  );
}