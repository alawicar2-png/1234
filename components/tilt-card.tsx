"use client"

import { useRef, useState, ReactNode } from "react"

interface TiltCardProps {
  children: ReactNode
  className?: string
  glare?: boolean
}

export function TiltCard({ children, className = "", glare = true }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [transform, setTransform] = useState("")
  const [glareStyle, setGlareStyle] = useState({ opacity: 0, background: "" })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    
    const card = cardRef.current
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    
    const rotateX = (y - centerY) / 10
    const rotateY = (centerX - x) / 10
    
    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`)
    
    if (glare) {
      const glareX = (x / rect.width) * 100
      const glareY = (y / rect.height) * 100
      setGlareStyle({
        opacity: 0.15,
        background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(212, 175, 55, 0.3), transparent 50%)`,
      })
    }
  }

  const handleMouseLeave = () => {
    setTransform("")
    setGlareStyle({ opacity: 0, background: "" })
  }

  return (
    <div
      ref={cardRef}
      className={`transition-transform duration-200 ease-out ${className}`}
      style={{ transform }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {glare && (
        <div
          className="absolute inset-0 rounded-lg pointer-events-none transition-opacity duration-200"
          style={{ opacity: glareStyle.opacity, background: glareStyle.background }}
        />
      )}
    </div>
  )
}
