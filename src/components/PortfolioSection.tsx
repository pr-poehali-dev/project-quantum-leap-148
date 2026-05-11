import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Star, Zap, Crown } from "lucide-react"

const achievements = [
  {
    icon: Star,
    title: "Топ-1 по онлайну",
    category: "Достижение",
    description:
      "CityRP занял первое место в рейтинге SAMP серверов по СНГ с пиковым онлайном более 1500 игроков одновременно.",
    tags: ["#1 в СНГ", "1500+ онлайн", "2024"],
  },
  {
    icon: Zap,
    title: "Кастомная карта",
    category: "Разработка",
    description:
      "Полностью переработанная карта с 200+ уникальными интерьерами, новыми районами и кастомными объектами.",
    tags: ["200+ интерьеров", "Кастом маппинг"],
  },
  {
    icon: Trophy,
    title: "Система бизнеса",
    category: "Геймплей",
    description:
      "Уникальная экономика с 500+ бизнес-объектами, биржей акций и реалистичным рынком недвижимости.",
    tags: ["500+ бизнесов", "Биржа акций"],
  },
  {
    icon: Crown,
    title: "300+ живых ивентов",
    category: "Комьюнити",
    description:
      "Выборы, войны фракций, детективные расследования и сюжетные арки — за всю историю сервера.",
    tags: ["300+ ивентов", "Живая игра"],
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24 px-4 sm:px-6 lg:px-8 bg-black/20">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-16">
          <p className="text-xs text-primary tracking-[0.3em] uppercase mb-3" style={{ fontFamily: 'Oswald, sans-serif' }}>
            // История сервера
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-balance">
            Наши <span className="text-primary">достижения</span>
          </h2>
          <div className="h-px w-24 bg-primary mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          {achievements.map((item, index) => (
            <Card
              key={index}
              className="group rounded-none border-0 bg-card hover:bg-primary/5 transition-all duration-300"
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-5">
                  <div className="p-4 border border-primary/20 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 flex-shrink-0">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-primary tracking-widest uppercase mb-1 font-medium">{item.category}</p>
                    <h3
                      className="text-xl font-black tracking-wide mb-2 group-hover:text-primary transition-colors"
                      style={{ fontFamily: 'Oswald, sans-serif' }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed font-light mb-4">{item.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="text-xs px-3 py-1 border border-border/50 text-muted-foreground tracking-wide"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
