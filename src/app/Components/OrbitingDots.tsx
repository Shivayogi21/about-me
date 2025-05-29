'use client'

import { useEffect, useRef } from 'react'

export default function OrbitingDots() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return

    canvas.width = 320
    canvas.height = 320

    const totalDots = 40
    const radius = 140
    const dotSize = 3
    const speed = 0.01 // consistent speed for all dots

    // Initialize dots with equal spacing
    const dots = Array.from({ length: totalDots }).map((_, i) => ({
      angle: (2 * Math.PI * i) / totalDots,
    }))

    const pinkColor = '#ec4899' // Tailwind 'text-pink-500' hex code

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      dots.forEach(dot => {
        // Calculate x, y positions for each dot on the circle
        const x = canvas.width / 2 + radius * Math.cos(dot.angle)
        const y = canvas.height / 2 + radius * Math.sin(dot.angle)

        // Draw each dot with pink color
        ctx.beginPath()
        ctx.arc(x, y, dotSize, 0, 2 * Math.PI)
        ctx.fillStyle = pinkColor
        ctx.shadowColor = pinkColor
        ctx.shadowBlur = 8
        ctx.fill()

        // Update angle for next frame - consistent speed
        dot.angle += speed
        if (dot.angle > 2 * Math.PI) dot.angle -= 2 * Math.PI
      })

      requestAnimationFrame(draw)
    }

    draw()
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  )
}
