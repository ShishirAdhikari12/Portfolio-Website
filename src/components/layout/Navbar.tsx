export default function Navbar() {
  return (
    <header>
      <nav className="flex justify-between bg-background text-foreground font-bold px-4 sm:px-8 md:px-12 lg:px-20 py-14 h-fit border-b">
        <div>Shishir Adhikari</div>
        <div className="flex gap-6 text-secondary-foreground font-medium text-sm">
            <div>About</div>
            <div>Skills</div>
            <div>Projects</div>
            <div>Contact</div>
        </div>
      </nav>
    </header>
  );
}