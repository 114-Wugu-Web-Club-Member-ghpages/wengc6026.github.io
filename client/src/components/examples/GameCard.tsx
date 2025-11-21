import GameCard from '../GameCard';
import screenshot from '@assets/generated_images/Zelda_game_screenshot_94d59746.png';

export default function GameCardExample() {
  return (
    <div className="p-8 bg-background">
      <GameCard
        title="薩爾達傳說：曠野之息"
        platform="Nintendo Switch"
        playtime="120 小時"
        progress={85}
        lastPlayed="2024-11-05"
        screenshot={screenshot}
      />
    </div>
  );
}
