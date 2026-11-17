import { useEffect, useState } from "react";

function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const links = ["About", "Skills", "Projects", "Contact"];

    return (
        <header className=" sticky top-0 z-50">
            <nav
                className={` flex flex-col justify-center sm:flex-row sm:items-center sm:justify-between
                gap-4 sm:gap-0 px-4 sm:px-8 md:px-12 lg:px-20 py-5 sm:py-0
                border-b backdrop-blur-md
                transition-all duration-300 ease-in-outt ${scrolled ? "h-16 bg-background/50 " : "h-36  bg-background"} `}
            >
                {/* Brand */}
                <a href="/" className={`text-lg font-bold tracking-tight shrink-0 transition-all duration-300 ease-in-out ${scrolled ? "hidden " : "block"}  sm:block `}>
                    Shishir Adhikari
                </a>

                {/* Navigation links */}
                <div className="flex items-center justify-center gap-6 sm:gap-6
                    overflow-x-auto whitespace-nowrap
                    -mx-4 px-4 sm:mx-0 sm:px-0
                    [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
                    text-sm font-medium text-muted-foreground"
                >
                    {links.map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="shrink-0 transition-colors duration-200
                            hover:text-primary"
                        >
                            {item}
                        </a>
                    ))}
                </div>
            </nav>
            
        </header>
    );
}

export default Navbar;
