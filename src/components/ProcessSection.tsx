import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { UserPlus, Gamepad2, Trophy } from "lucide-react"
import { Fragment } from "react"

const steps = [
  {
    icon: UserPlus,
    title: "Регистрация",
    description:
      "Зарегистрируй аккаунт на нашем форуме, пройди вступительный тест и получи доступ к серверу — это занимает 5 минут.",
    number: "01",
  },
  {
    icon: Gamepad2,
    title: "Создай персонажа",
    description:
      "Придумай биографию, выбери внешность и начни свою историю в городе. Стань кем угодно — от бомжа до олигарха.",
    number: "02",
  },
  {
    icon: Trophy,
    title: "Стань легендой",
    description:
      "Вступай в фракции, строй бизнес, участвуй в ивентах. Твоя история зависит только от тебя — мир открыт.",
    number: "03",
  },
]

export function ProcessSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="mb-16">
          <p className="text-xs text-primary tracking-[0.3em] uppercase mb-3" style={{ fontFamily: 'Oswald, sans-serif' }}>
            // Как начать
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-balance">
            Три шага до <span className="text-primary">игры</span>
          </h2>
          <div className="h-px w-24 bg-primary mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border relative">
          {steps.map((step, index) => (
            <Fragment key={index}>
              <Card className="relative overflow-hidden group rounded-none border-0 bg-card hover:bg-primary/5 transition-all duration-300">
                <div
                  className="absolute top-4 right-4 text-[100px] font-black leading-none pointer-events-none select-none"
                  style={{ fontFamily: 'Oswald, sans-serif', color: 'rgba(220,38,38,0.06)' }}
                >
                  {step.number}
                </div>
                <CardHeader className="relative z-10">
                  <div className="mb-4 inline-flex p-3 border border-primary/20 text-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300 w-fit">
                    <step.icon className="h-5 w-5" />
                  </div>
                  <p className="text-xs text-primary tracking-widest uppercase font-bold mb-1" style={{ fontFamily: 'Oswald, sans-serif' }}>
                    Шаг {step.number}
                  </p>
                  <CardTitle
                    className="text-xl tracking-wide group-hover:text-primary transition-colors"
                    style={{ fontFamily: 'Oswald, sans-serif' }}
                  >
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed font-light">{step.description}</p>
                </CardContent>
              </Card>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}
