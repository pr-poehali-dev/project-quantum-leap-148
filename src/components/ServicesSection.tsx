import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Briefcase, Shield, Map, Swords, Car } from "lucide-react"

const services = [
  {
    icon: Users,
    title: "Фракции",
    description:
      "Вступай в полицию, мафию, армию или медицину. Каждая фракция — живая структура со своей иерархией и заданиями.",
  },
  {
    icon: Briefcase,
    title: "Бизнес",
    description:
      "Открывай магазины, казино и рестораны. Реалистичная экономика с биржей и недвижимостью — строй свою империю.",
  },
  {
    icon: Shield,
    title: "Закон и порядок",
    description:
      "Полноценная система законов, штрафов и тюрьмы. Играй за стражей порядка или нарушай закон — последствия реальны.",
  },
  {
    icon: Map,
    title: "Открытый мир",
    description:
      "Кастомная карта с уникальными локациями и интерьерами. Каждый район живёт своей жизнью.",
  },
  {
    icon: Swords,
    title: "Ивенты",
    description:
      "Регулярные сюжетные события, войны фракций и выборы мэра. Администрация проводит живые ивенты каждую неделю.",
  },
  {
    icon: Car,
    title: "Транспорт",
    description:
      "Сотни уникальных авто, тюнинг и гаражи. Персонализируй персонажа — внешность, одежда и стиль жизни.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="mb-16">
          <p className="text-xs text-primary tracking-[0.3em] uppercase mb-3" style={{ fontFamily: 'Oswald, sans-serif' }}>
            // Возможности сервера
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-balance">
            Что тебя <span className="text-primary">ждёт</span>
          </h2>
          <div className="h-px w-24 bg-primary mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group rounded-none border-0 bg-card hover:bg-primary/5 transition-all duration-300"
            >
              <CardHeader className="pb-3">
                <div className="mb-4 inline-flex p-3 border border-primary/20 text-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300">
                  <service.icon className="h-5 w-5" />
                </div>
                <CardTitle
                  className="text-lg tracking-widest group-hover:text-primary transition-colors"
                  style={{ fontFamily: 'Oswald, sans-serif' }}
                >
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed font-light">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
