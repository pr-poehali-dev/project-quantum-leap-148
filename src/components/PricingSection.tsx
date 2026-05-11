import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import { QuoteFormDialog } from "@/components/QuoteFormDialog"

const pricingTiers = [
  {
    name: "Новичок",
    price: "Бесплатно",
    description: "Для всех желающих",
    features: [
      "Доступ к серверу",
      "Стартовый набор предметов",
      "Участие в публичных ивентах",
      "Доступ к форуму и Discord",
      "Базовая поддержка",
    ],
    highlighted: false,
    btnText: "Начать играть",
  },
  {
    name: "VIP",
    price: "299",
    description: "Самый популярный статус",
    features: [
      "Уникальный VIP-скин",
      "x2 к заработку в городе",
      "Приоритетный вход на сервер",
      "Доступ к VIP-зонам",
      "Кастомный номер машины",
      "Поддержка 24/7",
    ],
    highlighted: true,
    btnText: "Купить VIP",
  },
  {
    name: "Premium",
    price: "По запросу",
    description: "Для самых преданных",
    features: [
      "Все привилегии VIP",
      "Уникальный ник-тег",
      "Личный дом в городе",
      "Персональный менеджер",
      "Участие в закрытых ивентах",
    ],
    highlighted: false,
    btnText: "Связаться с нами",
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] blur-[100px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(180,0,0,0.08) 0%, transparent 70%)' }}
      />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="mb-16">
          <p className="text-xs text-primary tracking-[0.3em] uppercase mb-3" style={{ fontFamily: 'Oswald, sans-serif' }}>
            // Донат-магазин
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-balance">
            Выбери свой <span className="text-primary">статус</span>
          </h2>
          <div className="h-px w-24 bg-primary mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
          {pricingTiers.map((tier, index) => (
            <Card
              key={index}
              className={`relative rounded-none border-0 transition-all duration-300 ${
                tier.highlighted
                  ? "bg-primary/10 ring-1 ring-primary"
                  : "bg-card hover:bg-primary/5"
              }`}
            >
              {tier.highlighted && (
                <div
                  className="absolute -top-px left-0 right-0 h-0.5 bg-primary"
                />
              )}
              <CardHeader className="border-b border-border/30 pb-6">
                {tier.highlighted && (
                  <span className="text-xs text-primary tracking-widest uppercase font-bold mb-2 block" style={{ fontFamily: 'Oswald, sans-serif' }}>
                    ★ Популярный
                  </span>
                )}
                <CardTitle
                  className="text-2xl tracking-widest"
                  style={{ fontFamily: 'Oswald, sans-serif' }}
                >
                  {tier.name}
                </CardTitle>
                <p className="text-xs text-muted-foreground tracking-wide">{tier.description}</p>
                <div className="mt-4">
                  {tier.price === "Бесплатно" || tier.price === "По запросу" ? (
                    <span className="text-3xl font-black text-foreground" style={{ fontFamily: 'Oswald, sans-serif' }}>{tier.price}</span>
                  ) : (
                    <div>
                      <span className="text-4xl font-black text-primary text-glow-red" style={{ fontFamily: 'Oswald, sans-serif' }}>{tier.price}</span>
                      <span className="text-muted-foreground text-sm ml-1">₽ / мес</span>
                    </div>
                  )}
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground leading-relaxed font-light">{feature}</span>
                    </li>
                  ))}
                </ul>
                <QuoteFormDialog
                  packageName={tier.name}
                  variant={tier.highlighted ? "default" : "outline"}
                  className={`w-full rounded-none tracking-widest uppercase font-bold ${
                    tier.highlighted
                      ? "bg-primary hover:bg-primary/80 glow-red border-0"
                      : "border-border/50 hover:border-primary/50 hover:bg-primary/5"
                  }`}
                  style={{ fontFamily: 'Oswald, sans-serif' }}
                >
                  {tier.btnText}
                </QuoteFormDialog>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
