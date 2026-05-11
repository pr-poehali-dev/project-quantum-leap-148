import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MessageCircle, Send } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] blur-[120px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(180,0,0,0.08) 0%, transparent 70%)' }}
      />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="mb-16">
          <p className="text-xs text-primary tracking-[0.3em] uppercase mb-3" style={{ fontFamily: 'Oswald, sans-serif' }}>
            // Связаться с нами
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-balance">
            Вступай в <span className="text-primary">игру</span>
          </h2>
          <div className="h-px w-24 bg-primary mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="rounded-none border border-border/50 bg-card/50">
              <CardHeader className="border-b border-border/30">
                <CardTitle
                  className="text-lg tracking-widest"
                  style={{ fontFamily: 'Oswald, sans-serif' }}
                >
                  Написать администрации
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-xs font-medium tracking-widest uppercase text-muted-foreground">
                        Ник *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Ваш игровой ник"
                        required
                        className="rounded-none border-border/50 bg-background/50 focus:border-primary transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-xs font-medium tracking-widest uppercase text-muted-foreground">
                        E-mail *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.ru"
                        required
                        className="rounded-none border-border/50 bg-background/50 focus:border-primary transition-colors"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs font-medium tracking-widest uppercase text-muted-foreground">
                      Сообщение *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Опишите ваш вопрос или предложение..."
                      rows={6}
                      required
                      className="rounded-none border-border/50 bg-background/50 focus:border-primary transition-colors resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="bg-primary hover:bg-primary/80 text-primary-foreground font-bold px-8 tracking-widest uppercase rounded-none glow-red group"
                    style={{ fontFamily: 'Oswald, sans-serif' }}
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Отправить
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4">
            {[
              {
                icon: Mail,
                title: "E-mail",
                value: "admin@cityrp.ru",
              },
              {
                icon: MessageCircle,
                title: "Discord",
                value: "discord.gg/realmyrp",
              },
            ].map((item, i) => (
              <Card key={i} className="rounded-none border border-border/50 bg-card/50 hover:border-primary/30 transition-colors group">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 border border-primary/20 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3
                        className="font-bold text-sm tracking-widest mb-1"
                        style={{ fontFamily: 'Oswald, sans-serif' }}
                      >
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground font-light">{item.value}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            <Card className="rounded-none border border-primary/20 bg-primary/5">
              <CardContent className="p-6">
                <p
                  className="text-xs tracking-widest uppercase text-primary mb-2 font-bold"
                  style={{ fontFamily: 'Oswald, sans-serif' }}
                >
                  IP Сервера
                </p>
                <p className="text-foreground font-mono text-lg font-bold">play.realmyrp.ru</p>
                <p className="text-muted-foreground text-xs mt-1">Порт: 7777</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}