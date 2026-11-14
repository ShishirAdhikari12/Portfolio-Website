interface SectionTitleProps {
  children: React.ReactNode;
}

export default function ColoredTitle({
  children,
}: SectionTitleProps) {
  return (
    <h2 className="font-semibold text-primary text-xs my-4">
      {children}
    </h2>
  );
}