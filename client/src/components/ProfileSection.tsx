import { Card } from "@/components/ui/card";
import { Gamepad2, Trophy, Clock, Star } from "lucide-react";

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

function StatCard({ icon, label, value }: StatCardProps) {
  return (
    <Card className="p-6 text-center hover-elevate">
      <div className="flex justify-center mb-3">{icon}</div>
      <div className="text-3xl font-bold mb-1 bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent" data-testid={`stat-value-${label}`}>
        {value}
      </div>
      <div className="text-sm text-muted-foreground" data-testid={`stat-label-${label}`}>{label}</div>
    </Card>
  );
}

export default function ProfileSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-profile-heading">
            關於我
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-profile-bio">
            熱愛遊戲的玩家，享受探索虛擬世界的每一刻。從動作冒險到角色扮演，記錄著每個難忘的遊戲旅程。
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <StatCard
            icon={<Gamepad2 className="w-8 h-8 text-primary" />}
            label="遊戲總數"
            value="12"
          />
          <StatCard
            icon={<Clock className="w-8 h-8 text-chart-2" />}
            label="遊玩時間"
            value="850h"
          />
          <StatCard
            icon={<Trophy className="w-8 h-8 text-chart-3" />}
            label="成就數量"
            value="156"
          />
          <StatCard
            icon={<Star className="w-8 h-8 text-chart-5" />}
            label="完成度"
            value="78%"
          />
        </div>
      </div>
    </section>
  );
}
