import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote: "Играю уже 2 года и не могу остановиться. Самый живой RP в СНГ — здесь реально всё решают игроки, а не боты.",
    name: "Ваня_Крест",
    role: "Игрок, 2 года на сервере",
  },
  {
    quote: "Дослужился до главы ЛСПД за полгода. Такой глубины в полицейском отыгрыше я не встречал нигде больше.",
    name: "Officer_Prikol",
    role: "Глава полиции",
  },
  {
    quote: "Открыл собственный бизнес внутри игры и он реально приносит доход в игровой валюте. Экономика на высоте.",
    name: "BigBoss_228",
    role: "Бизнесмен",
  },
  {
    quote: "Присоединился месяц назад — уже в ОПГ и участвую в криминальных войнах. Скучать не приходится.",
    name: "Dark_Rider",
    role: "Новый игрок",
  },
]

export function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationFrameId: number
    let scrollPosition = 0
    const scrollSpeed = 0.4

    const scroll = () => {
      scrollPosition += scrollSpeed
      if (scrollContainer.scrollWidth && scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0
      }
      scrollContainer.scrollLeft = scrollPosition
      animationFrameId = requestAnimationFrame(scroll)
    }

    animationFrameId = requestAnimationFrame(scroll)
    return () => cancelAnimationFrame(animationFrameId)
  }, [])

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-black/30">
      <div className="container mx-auto max-w-7xl mb-16">
        <p className="text-xs text-primary tracking-[0.3em] uppercase mb-3" style={{ fontFamily: 'Oswald, sans-serif' }}>
          // Отзывы игроков
        </p>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-balance">
          Что говорит <span className="text-primary">комьюнити</span>
        </h2>
        <div className="h-px w-24 bg-primary mt-4" />
      </div>

      <div className="relative">
        <div ref={scrollRef} className="flex gap-4 overflow-x-hidden" style={{ scrollBehavior: "auto" }}>
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <Card key={index} className="flex-shrink-0 w-[90vw] sm:w-[420px] rounded-none border border-border/50 bg-card/80 hover:border-primary/30 transition-colors">
              <CardContent className="p-8">
                <Quote className="h-6 w-6 text-primary mb-4 opacity-60" />
                <p className="text-sm mb-6 leading-relaxed text-muted-foreground font-light min-h-[80px]">
                  {testimonial.quote}
                </p>
                <div className="border-t border-border/30 pt-4">
                  <p className="font-bold text-sm tracking-widest" style={{ fontFamily: 'Oswald, sans-serif' }}>{testimonial.name}</p>
                  <p className="text-muted-foreground text-xs tracking-wide mt-0.5">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
