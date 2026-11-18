
import { useEffect, useState } from "react";

function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 80);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const links = ["About", "Skills", "Projects", "Contact"];

    return (
        <header className="sticky top-0 z-50 bg-background">
            <nav
                className={`flex flex-col sm:flex-row sm:items-center sm:justify-between
                justify-center gap-3 sm:gap-0 px-4 sm:px-8 md:px-12 lg:px-20
                border-b transition-[padding] duration-300 ease-in-out
                ${scrolled
                        ? "py-3 sm:py-5"
                        : "py-4 sm:py-14"
                    }`}
            >
                {/* Brand */}
                <a
                    href="/"
                    className={`text-lg font-bold tracking-tight shrink-0
                    transition-all duration-300
                    ${scrolled ? "hidden sm:block" : "block"}`}
                >
                    Shishir Adhikari
                </a>

                {/* Navigation links */}
                <div className="flex items-center justify-center gap-6
                    overflow-x-auto whitespace-nowrap
                    scrollbar-none [&::-webkit-scrollbar]:hidden
                    text-sm font-medium text-muted-foreground"
                >
                    {links.map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="shrink-0 transition-colors duration-200 hover:text-primary"
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
