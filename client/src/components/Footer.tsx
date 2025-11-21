import { SiSteam, SiNintendoswitch, SiPlaystation } from "react-icons/si";
import { Mail, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4" data-testid="text-footer-contact">
              聯絡資訊
            </h3>
            <div className="space-y-2 text-muted-foreground">
              <a
                href="mailto:gamer@example.com"
                className="flex items-center gap-2 hover:text-foreground transition-colors hover-elevate w-fit px-2 py-1 rounded-md"
                data-testid="link-email"
              >
                <Mail className="w-4 h-4" />
                <span>gamer@example.com</span>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-foreground transition-colors hover-elevate w-fit px-2 py-1 rounded-md"
                data-testid="link-github"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4" data-testid="text-footer-platforms">
              遊戲平台
            </h3>
            <div className="flex flex-wrap gap-4">
              <a
                href="#"
                className="p-2 rounded-md hover-elevate active-elevate-2 transition-colors"
                data-testid="link-steam"
                onClick={(e) => {
                  e.preventDefault();
                  console.log("Steam clicked");
                }}
              >
                <SiSteam className="w-6 h-6 text-muted-foreground hover:text-foreground transition-colors" />
              </a>
              <a
                href="#"
                className="p-2 rounded-md hover-elevate active-elevate-2 transition-colors"
                data-testid="link-playstation"
                onClick={(e) => {
                  e.preventDefault();
                  console.log("PlayStation clicked");
                }}
              >
                <SiPlaystation className="w-6 h-6 text-muted-foreground hover:text-foreground transition-colors" />
              </a>
              <a
                href="#"
                className="p-2 rounded-md hover-elevate active-elevate-2 transition-colors"
                data-testid="link-switch"
                onClick={(e) => {
                  e.preventDefault();
                  console.log("Nintendo Switch clicked");
                }}
              >
                <SiNintendoswitch className="w-6 h-6 text-muted-foreground hover:text-foreground transition-colors" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p data-testid="text-copyright">
            © 2024 遊戲玩家部落格. 用心記錄每一個遊戲時刻.
          </p>
          <p className="mt-2" data-testid="text-last-updated">
            最後更新: {new Date().toLocaleDateString("zh-TW")}
          </p>
        </div>
      </div>
    </footer>
  );
}
