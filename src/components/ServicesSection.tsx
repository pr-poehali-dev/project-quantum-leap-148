import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Briefcase, Shield, Map, Swords, Car } from "lucide-react"

const services = [
  {
    icon: Users,
    title: "Фракции и организации",
    description:
      "Вступай в полицию, мафию, армию, медицину или создай собственную банду. Каждая фракция — живая структура со своей иерархией, уставом и заданиями.",
  },
  {
    icon: Briefcase,
    title: "Бизнес и экономика",
    description:
      "Открывай магазины, заправки, казино и рестораны. Реалистичная экономика с биржей, недвижимостью и инвестициями позволяет строить настоящую империю.",
  },
  {
    icon: Shield,
    title: "Правоохранительная система",
    description:
      "Полноценная система законов, штрафов и тюрьмы. Играй за стражей порядка или нарушай закон — выбор за тобой, но последствия реальны.",
  },
  {
    icon: Map,
    title: "Живой открытый мир",
    description:
      "Кастомная карта с уникальными локациями, интерьерами и ивентами. Каждый район города живёт своей жизнью — от трущоб до деловых кварталов.",
  },
  {
    icon: Swords,
    title: "Ивенты и события",
    description:
      "Регулярные сюжетные события, войны фракций, выборы мэра и криминальные разборки. Администрация проводит живые ивенты каждую неделю.",
  },
  {
    icon: Car,
    title: "Транспорт и кастомизация",
    description:
      "Сотни уникальных автомобилей, тюнинг и гаражи. Персонализируй своего персонажа — внешность, одежда, татуировки и стиль жизни.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 animate-pulse" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mx-auto block w-fit">
          Возможности сервера
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
          Что тебя <span className="text-primary">ждёт</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed text-lg">
          CityRP — это не просто сервер. Это живой город с тысячами возможностей, где каждый выбирает свой путь.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-background/50 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
