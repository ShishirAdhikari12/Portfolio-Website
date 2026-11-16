interface SectionTitleProps {
  children: React.ReactNode;
}

export default function SectionTitle({
  children,
}: SectionTitleProps) {
  return (
    <h2 className="font-semibold text-primary text-xs tracking-wider mb-4">
      {children}
    </h2>
  );
}