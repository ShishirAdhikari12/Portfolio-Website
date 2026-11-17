import { useEffect, useState } from "react";

export default function Navbar() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // <header>
    //   <nav className="flex justify-between bg-background text-foreground font-bold px-4 sm:px-8 md:px-12 lg:px-20 py-14 h-fit border-b">
    //     <h2>Shishir Adhikari</h2>
    //     <div className="flex gap-6 text-secondary-foreground font-medium text-sm">
    //         <div>About</div>
    //         <div>Skills</div>
    //         <div>Projects</div>
    //         <div>Contact</div>
    //     </div>
    //   </nav>
    // </header>
    <header className="sticky top-0 z-50 border-b ">
      <nav
        className={`mx-auto flex items-center backdrop-blur-md justify-between px-4 sm:px-8 lg:px-20 py-5 transition-[height] duration-300 ease-in-out ${scrolled ? "h-16 bg-background/50 " : "h-36  bg-background"} `}
      >

        <a href="/" className="text-lg font-bold tracking-tight">
          Shishir Adhikari<span className="text-primary">.</span>
        </a>

        <div className="flex items-center gap-6 text-sm font-medium text-muted-foreground transition-default ">
          {["About", "Skills", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="transition-default hover:text-primary hover:scale-110 font-bold "
            >
              {item}
            </a>
          ))}
        </div>

      </nav>
    </header>
  );
}