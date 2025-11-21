import GameCard from "./GameCard";
import zeldaImg from "@assets/generated_images/Zelda_game_screenshot_94d59746.png";
import eldenRingImg from "@assets/generated_images/Elden_Ring_screenshot_51187c3a.png";
import cyberpunkImg from "@assets/generated_images/Cyberpunk_game_screenshot_989dcd42.png";
import minecraftImg from "@assets/generated_images/Minecraft_build_screenshot_f14d4176.png";
import stardewImg from "@assets/generated_images/Stardew_Valley_screenshot_0c7afda0.png";
import hollowKnightImg from "@assets/generated_images/Hollow_Knight_screenshot_29121956.png";

export default function GamesGrid() {
  const games = [
    {
      title: "薩爾達傳說：曠野之息",
      platform: "Nintendo Switch",
      playtime: "120 小時",
      progress: 85,
      lastPlayed: "2024-11-05",
      screenshot: zeldaImg,
    },
    {
      title: "艾爾登法環",
      platform: "PC",
      playtime: "95 小時",
      progress: 72,
      lastPlayed: "2024-11-03",
      screenshot: eldenRingImg,
    },
    {
      title: "電馭叛客 2077",
      platform: "PC",
      playtime: "68 小時",
      progress: 55,
      lastPlayed: "2024-10-28",
      screenshot: cyberpunkImg,
    },
    {
      title: "Minecraft",
      platform: "PC",
      playtime: "200 小時",
      progress: 100,
      lastPlayed: "2024-11-01",
      screenshot: minecraftImg,
    },
    {
      title: "星露谷物語",
      platform: "PC",
      playtime: "145 小時",
      progress: 90,
      lastPlayed: "2024-10-25",
      screenshot: stardewImg,
    },
    {
      title: "空洞騎士",
      platform: "Nintendo Switch",
      playtime: "42 小時",
      progress: 65,
      lastPlayed: "2024-10-20",
      screenshot: hollowKnightImg,
    },
  ];

  return (
    <section id="games-section" className="py-16 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-games-heading">
            遊戲存檔
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent mb-6" />
          <p className="text-lg text-muted-foreground" data-testid="text-games-subtitle">
            我的遊戲收藏與進度記錄
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map((game) => (
            <GameCard key={game.title} {...game} />
          ))}
        </div>
      </div>
    </section>
  );
}
