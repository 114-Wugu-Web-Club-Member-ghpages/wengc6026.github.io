import { Gamepad2 } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Gamepad2 className="w-6 h-6 text-primary" />
            <span className="font-bold text-lg" data-testid="text-nav-brand">
              遊戲玩家
            </span>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => scrollToSection("games-section")}
              className="text-muted-foreground hover:text-foreground transition-colors hover-elevate px-3 py-2 rounded-md"
              data-testid="button-nav-games"
            >
              遊戲存檔
            </button>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
