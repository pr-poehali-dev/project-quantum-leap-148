export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="flex items-center gap-1">
        <span
          className="text-xl font-black tracking-widest"
          style={{ fontFamily: 'Oswald, sans-serif' }}
        >
          <span className="text-foreground">REALMY</span>
          <span className="text-primary">RP</span>
        </span>
      </div>
    </div>
  )
}