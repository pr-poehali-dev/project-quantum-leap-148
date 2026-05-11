import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Gamepad2 } from "lucide-react"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-background">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/8 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        <div
          className="absolute w-[600px] h-[600px] rounded-full blur-[120px] transition-all duration-[1500ms] ease-out"
          style={{
            background: 'radial-gradient(circle, rgba(180,0,0,0.12) 0%, transparent 70%)',
            left: `${mousePosition.x - 300}px`,
            top: `${mousePosition.y - 300}px`,
          }}
        />
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full blur-[100px]"
          style={{ background: 'radial-gradient(circle, rgba(180,0,0,0.15) 0%, transparent 70%)' }}
        />
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <Gamepad2
          className="absolute text-primary/20 animate-float"
          style={{ top: "15%", left: "8%", animationDelay: "0s" }}
          size={48}
        />
        <Users
          className="absolute text-primary/15 animate-float"
          style={{ top: "20%", right: "10%", animationDelay: "2s" }}
          size={40}
        />
      </div>

      <div className="container mx-auto text-center max-w-5xl relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 border border-primary/30 bg-primary/5 animate-fade-in-up">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          <span className="text-xs font-medium text-primary tracking-[0.2em] uppercase">Сервер онлайн — 500+ игроков</span>
        </div>

        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight mb-4 animate-fade-in-up glitch leading-none">
          <span className="text-foreground">REALMY </span>
          <span className="text-primary text-glow-red">RP</span>
        </h1>

        <div className="mb-4 max-w-2xl mx-auto animate-fade-in-up animate-delay-100 text-left">
          <p className="text-lg sm:text-xl text-muted-foreground/80 leading-relaxed font-light mb-4" style={{ fontFamily: 'Roboto, sans-serif', textTransform: 'none', letterSpacing: 'normal', fontWeight: 300 }}>
            REALMY RP — это новый игровой проект, вдохновлённый атмосферой и механиками CRMP. Игроки начинают свой путь с базовыми ресурсами: 10 000 игровой валюты, без доната и на четвертом уровне. Такой старт позволяет каждому развиваться с нуля, полагаясь только на свои силы и умения.
          </p>
          <p className="text-xs text-primary tracking-widest uppercase mb-2 font-bold" style={{ fontFamily: 'Oswald, sans-serif' }}>Преимущества старта:</p>
          <ul className="space-y-1">
            {["Честная конкуренция с другими игроками.", "Возможность самостоятельно выбрать путь развития.", "Полное погружение в ролевую атмосферу с первого дня."].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground/80 font-light" style={{ fontFamily: 'Roboto, sans-serif' }}>
                <span className="text-primary mt-0.5">—</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-center gap-4 mb-10 animate-fade-in-up animate-delay-100">
          <div className="h-px w-16 bg-primary/50" />
          <span className="text-xs text-muted-foreground tracking-[0.3em] uppercase">Стань легендой.</span>
          <div className="h-px w-16 bg-primary/50" />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animate-delay-200 mb-16">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/80 text-primary-foreground font-bold px-10 py-6 text-base tracking-widest uppercase rounded-none glow-red border-0 transition-all"
            style={{ fontFamily: 'Oswald, sans-serif' }}
            asChild
          >
            <a href="https://t.me/skachatissulky" target="_blank" rel="noopener noreferrer">
              Начать играть
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>

        </div>


      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
    </section>
  )
}