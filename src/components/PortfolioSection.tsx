import { Card, CardContent } from "@/components/ui/card"
import { Trophy } from "lucide-react"

const achievements = [
  {
    title: "Топ-1 по онлайну",
    category: "Достижение сервера",
    image: "/placeholder.jpg",
    description:
      "CityRP занял первое место в рейтинге SAMP серверов по СНГ с пиковым онлайном более 1500 игроков одновременно.",
    tags: ["#1 в СНГ", "1500+ онлайн", "2024"],
  },
  {
    title: "Кастомная карта города",
    category: "Разработка",
    image: "/placeholder.jpg",
    description:
      "Полностью переработанная карта с 200+ уникальными интерьерами, новыми районами и кастомными объектами — сделано нашей командой.",
    tags: ["200+ интерьеров", "Кастом", "Маппинг"],
  },
  {
    title: "Система бизнеса",
    category: "Геймплей",
    image: "/placeholder.jpg",
    description:
      "Уникальная экономическая система с более чем 500 бизнес-объектами, биржей акций и реалистичным рынком недвижимости.",
    tags: ["500+ бизнесов", "Биржа", "Недвижимость"],
  },
  {
    title: "Ролевые ивенты",
    category: "Комьюнити",
    image: "/placeholder.jpg",
    description:
      "Более 300 живых ивентов за историю сервера: выборы, войны фракций, детективные расследования и сюжетные арки.",
    tags: ["300+ ивентов", "Живая игра", "Комьюнити"],
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">Наши достижения</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            За годы работы мы создали уникальный игровой мир, которым гордится каждый участник нашего комьюнити.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((item, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-video bg-gradient-to-br from-primary/20 to-muted flex items-center justify-center">
                <Trophy className="h-24 w-24 text-primary/40 group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <CardContent className="p-6">
                <p className="text-sm text-primary font-semibold mb-2">{item.category}</p>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
