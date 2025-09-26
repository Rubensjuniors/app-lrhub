import { useEffect,useState } from 'react'


export function Loader() {
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 1) % 360)
    }, 20)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background z-50">
      <div className="relative">
        {/* Logo centralizada com efeito de sombra */}
        <div className="flex items-center justify-center overflow-hidden">
          <div className="relative">
            <img src="/icons/logo.svg" alt="Logo" className="w-15 h-15 z-10 relative" />
          </div>
        </div>

        {/* Bordas animadas sincronizadas */}
        <div className="absolute inset-0 -m-8">
          <div
            className="w-full h-full rounded-full border-2 border-primary opacity-60"
            style={{
              transform: `scale(${0.8 + Math.sin(rotation * 0.05) * 0.2})`,
              transition: 'transform 0.1s ease-out',
            }}
          />
        </div>

        <div className="absolute inset-0 -m-12">
          <div
            className="w-full h-full rounded-full border-2 border-primary/50 opacity-40"
            style={{
              transform: `scale(${0.8 + Math.sin(rotation * 0.05 + 1) * 0.2})`,
              transition: 'transform 0.1s ease-out',
            }}
          />
        </div>

        <div className="absolute inset-0 -m-16">
          <div
            className="w-full h-full rounded-full border-2 border-primary/30 opacity-20"
            style={{
              transform: `scale(${0.8 + Math.sin(rotation * 0.05 + 2) * 0.2})`,
              transition: 'transform 0.1s ease-out',
            }}
          />
        </div>
      </div>
    </div>
  )
}
