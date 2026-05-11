export function Footer() {
  return (
    <footer className="border-t border-primary/10 bg-black/50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3
              className="text-xl font-black tracking-widest mb-4"
              style={{ fontFamily: 'Oswald, sans-serif' }}
            >
              <span className="text-foreground">CITY</span>
              <span className="text-primary">RP</span>
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed tracking-wide">
              © 2025 CityRP. Все права защищены.<br />
              Лучший CRMP сервер в СНГ.
            </p>
          </div>

          <div>
            <h4
              className="text-xs font-semibold mb-4 tracking-widest uppercase text-muted-foreground"
              style={{ fontFamily: 'Oswald, sans-serif' }}
            >
              Навигация
            </h4>
            <ul className="space-y-2">
              {[
                { href: "#about", label: "О проекте" },
                { href: "#services", label: "Возможности" },
                { href: "#portfolio", label: "Достижения" },
                { href: "#pricing", label: "Донат" },
                { href: "#contact", label: "Контакты" },
              ].map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-xs text-muted-foreground hover:text-primary transition-colors tracking-widest uppercase"
                    style={{ fontFamily: 'Oswald, sans-serif' }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              className="text-xs font-semibold mb-4 tracking-widest uppercase text-muted-foreground"
              style={{ fontFamily: 'Oswald, sans-serif' }}
            >
              Сообщество
            </h4>
            <div className="flex flex-col gap-2">
              {[
                { label: "Discord", href: "#" },
                { label: "VKontakte", href: "#" },
                { label: "Telegram", href: "#" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="text-xs text-muted-foreground hover:text-primary transition-colors tracking-widest uppercase"
                  style={{ fontFamily: 'Oswald, sans-serif' }}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 text-center">
          <p className="text-xs text-muted-foreground/50 tracking-widest uppercase">
            GTA San Andreas Multiplayer — Roleplay
          </p>
        </div>
      </div>
    </footer>
  )
}
