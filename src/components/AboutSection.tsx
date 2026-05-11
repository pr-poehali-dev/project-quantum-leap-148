import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

const values = [
  { title: "Честная игра", description: "Мы боремся с читерами и нечестными игроками — каждый получает то, что заслужил" },
  { title: "Активная администрация", description: "Команда онлайн 24/7, быстро решает все спорные ситуации" },
  { title: "Регулярные обновления", description: "Новый контент каждую неделю — миссии, локации, события" },
  { title: "Живое комьюнити", description: "Тысячи игроков, Discord-сервер и форум для общения" },
  { title: "Нет pay-to-win", description: "Донат только для удобства — победить можно и бесплатно" },
  { title: "Стабильные сервера", description: "Аптайм 99.9%, мощное железо и защита от DDoS-атак" },
]

const stats = [
  { number: "500+", label: "Игроков онлайн" },
  { number: "20+", label: "Фракций" },
  { number: "300+", label: "Ивентов" },
  { number: "3+", label: "Года работы" },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] blur-[120px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(180,0,0,0.08) 0%, transparent 70%)' }}
      />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="mb-16">
          <p className="text-xs text-primary tracking-[0.3em] uppercase mb-3" style={{ fontFamily: 'Oswald, sans-serif' }}>
            // О проекте
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-balance">
            Почему выбирают <span className="text-primary">нас</span>
          </h2>
          <div className="h-px w-24 bg-primary mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
          {values.map((value, index) => (
            <Card
              key={index}
              className="border border-border/50 bg-card/50 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 rounded-none group"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3
                      className="font-bold text-base mb-1 tracking-wide group-hover:text-primary transition-colors"
                      style={{ fontFamily: 'Oswald, sans-serif' }}
                    >
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed font-light">{value.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="border-t border-b border-border/30 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group cursor-default">
                <div
                  className="text-5xl md:text-6xl font-black text-primary text-glow-red mb-2"
                  style={{ fontFamily: 'Oswald, sans-serif' }}
                >
                  {stat.number}
                </div>
                <div className="text-xs text-muted-foreground tracking-widest uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
