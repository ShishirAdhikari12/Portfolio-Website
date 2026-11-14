import SmallText from "../common/SmallText"

export default function Footer() {
  return (
    <footer className="bg-background text-secondary-foreground px-4 sm:px-8 md:px-12 lg:px-20 pt-8 pb-20">
      <div className="flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-4 text-sm">
        <SmallText>Shishir Adhikari / Portfolio</SmallText>
        <SmallText>Backend web development</SmallText>
      </div>
    </footer>
  );
}