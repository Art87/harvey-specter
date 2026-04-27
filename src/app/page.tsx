export default function Home() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black">
      {/* Subtle radial glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.12)_0%,_transparent_70%)]" />

      {/* Thin gold horizontal rule */}
      <div className="absolute left-1/2 top-1/2 h-px w-48 -translate-x-1/2 -translate-y-16 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-60" />

      <div className="relative flex flex-col items-center gap-4 px-8 text-center">
        <h1 className="text-6xl font-bold tracking-tight text-white sm:text-8xl">
          Harvey Specter
        </h1>
      </div>

      {/* Bottom thin rule */}
      <div className="absolute bottom-10 left-1/2 h-px w-24 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-40" />
    </div>
  );
}
