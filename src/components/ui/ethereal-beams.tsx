'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

interface Beam {
  x: number
  y: number
  width: number
  duration: number
  delay: number
  opacity: number
  angle: number
}

function generateBeams(count: number): Beam[] {
  return Array.from({ length: count }, (_, i) => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    width: 1.5 + Math.random() * 3,
    duration: 4 + Math.random() * 6,
    delay: Math.random() * 4,
    opacity: 0.08 + Math.random() * 0.18,
    angle: -30 + Math.random() * 60,
  }))
}

const beams = generateBeams(18)

export function EtherealBeamsHero({ children }: { children?: React.ReactNode }) {
  return (
    <div className="relative w-full overflow-hidden bg-[#0a1828]" style={{ minHeight: '680px' }}>
      {/* Beams layer */}
      <div className="absolute inset-0 pointer-events-none">
        {beams.map((beam, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${beam.x}%`,
              top: '-20%',
              width: `${beam.width}px`,
              height: '140%',
              background: `linear-gradient(180deg, transparent 0%, rgba(201,162,39,${beam.opacity}) 30%, rgba(201,162,39,${beam.opacity * 1.5}) 50%, rgba(201,162,39,${beam.opacity}) 70%, transparent 100%)`,
              transform: `rotate(${beam.angle}deg)`,
              transformOrigin: 'top center',
              filter: 'blur(1.5px)',
            }}
            animate={{
              opacity: [0, 1, 0.6, 1, 0],
              scaleY: [0.8, 1.1, 0.9, 1, 0.8],
            }}
            transition={{
              duration: beam.duration,
              delay: beam.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Radial glow center */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% 60%, rgba(201,162,39,0.07) 0%, transparent 70%)',
        }}
      />

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '128px 128px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full">{children}</div>
    </div>
  )
}
