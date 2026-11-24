import { useEffect, useState } from "react";
import { ArrowUp, Moon, Sun } from "lucide-react";

export default function FloatingActions() {
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains("dark"),
  );
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 80);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextIsDark = !isDark;
    window.localStorage.setItem("theme", nextIsDark ? "dark" : "light");
    document.documentElement.classList.toggle("dark", nextIsDark);
    setIsDark(nextIsDark);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col gap-3">
      {showScrollTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
          title="Scroll to top"
          className="flex size-12 items-center justify-center rounded-full border border-border bg-background text-foreground shadow-lg transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <ArrowUp aria-hidden="true" className="size-5" />
        </button>
      )}
      <button
        type="button"
        onClick={toggleTheme}
        aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
        title={`Switch to ${isDark ? "light" : "dark"} theme`}
        aria-pressed={isDark}
        className="flex size-12 items-center justify-center rounded-full border border-border bg-background text-foreground shadow-lg transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        {isDark ? (
          <Sun aria-hidden="true" className="size-5" />
        ) : (
          <Moon aria-hidden="true" className="size-5" />
        )}
      </button>
    </div>
  );
}
