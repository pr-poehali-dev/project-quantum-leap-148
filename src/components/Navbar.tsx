import { Logo } from "@/components/Logo"
import { MobileMenu } from "@/components/MobileMenu"
import { useState, useEffect } from "react"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-primary/10"
          : "bg-transparent border-b border-white/5"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="/" className="hover:opacity-80 transition-opacity">
            <Logo />
          </a>

          <div className="hidden md:flex items-center gap-8">
            {[
              { href: "#about", label: "О проекте" },
              { href: "#services", label: "Возможности" },
              { href: "#portfolio", label: "Достижения" },
              { href: "#pricing", label: "Донат" },
              { href: "#contact", label: "Контакты" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-xs font-medium text-muted-foreground hover:text-primary transition-colors tracking-widest uppercase"
                style={{ fontFamily: 'Oswald, sans-serif' }}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden md:inline-flex items-center px-5 py-2 text-xs font-bold tracking-widest uppercase text-primary-foreground bg-primary hover:bg-primary/80 transition-colors rounded-none glow-red"
              style={{ fontFamily: 'Oswald, sans-serif' }}
            >
              Играть
            </a>
            <MobileMenu />
          </div>
        </div>
      </div>
    </nav>
  )
}
