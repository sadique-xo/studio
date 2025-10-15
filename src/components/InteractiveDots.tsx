'use client'

import { useEffect, useRef, useState } from 'react'
import { useTheme } from 'next-themes'

interface Dot {
  x: number
  y: number
  originalX: number
  originalY: number
  vx: number
  vy: number
}

interface InteractiveDotsProps {
  className?: string
}

export default function InteractiveDots({ className = '' }: InteractiveDotsProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  const dotsRef = useRef<Dot[]>([])
  const mouseRef = useRef({ x: 0, y: 0 })
  const [isDesktop, setIsDesktop] = useState(true) // Enable on all devices
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const { theme } = useTheme()

  // Physics constants
  const REPULSION_RADIUS = 180
  const MAX_DISPLACEMENT = 35
  const SPRING_CONSTANT = 0.15
  const DAMPING_FACTOR = 0.85
  const DOT_SIZE = 1.5
  const GRID_SIZE = 16

  // Initialize dots in a grid pattern
  const initializeDots = (width: number, height: number): Dot[] => {
    const dots: Dot[] = []
    const cols = Math.ceil(width / GRID_SIZE) + 4
    const rows = Math.ceil(height / GRID_SIZE) + 4

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        // Add some randomness to break the perfect grid
        const x = col * GRID_SIZE + (Math.random() - 0.5) * 6
        const y = row * GRID_SIZE + (Math.random() - 0.5) * 6

        // Add dots across the entire viewport with some buffer
        if (x > -GRID_SIZE && x < width + GRID_SIZE && y > -GRID_SIZE && y < height + GRID_SIZE) {
          dots.push({
            x,
            y,
            originalX: x,
            originalY: y,
            vx: 0,
            vy: 0,
          })
        }
      }
    }

    return dots // Return all dots for full coverage
  }

  // Calculate repulsion force
  const calculateRepulsion = (dot: Dot, mouseX: number, mouseY: number) => {
    const dx = dot.x - mouseX
    const dy = dot.y - mouseY
    const distance = Math.sqrt(dx * dx + dy * dy)

    if (distance < REPULSION_RADIUS && distance > 0) {
      const force = (REPULSION_RADIUS - distance) / REPULSION_RADIUS
      const normalizedDx = dx / distance
      const normalizedDy = dy / distance

      return {
        fx: normalizedDx * force * 0.8,
        fy: normalizedDy * force * 0.8,
      }
    }

    return { fx: 0, fy: 0 }
  }

  // Animation loop
  const animate = () => {
    const canvas = canvasRef.current
    if (!canvas || !isDesktop || prefersReducedMotion) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const { width, height } = canvas
    const mouse = mouseRef.current

    // Clear canvas
    ctx.clearRect(0, 0, width, height)
    
    // Set dot color with theme-appropriate colors with extremely minimal opacity for whisper-subtlety
    if (theme === 'dark') {
      ctx.fillStyle = 'rgba(180, 180, 180, 0.1)' // Soft gray for dark theme - whisper subtle
    } else {
      ctx.fillStyle = 'rgba(120, 120, 120, 0.15)' // Medium gray for light theme - whisper subtle
    }

    // Update and draw dots
    dotsRef.current.forEach((dot) => {
      // Calculate repulsion force
      const { fx, fy } = calculateRepulsion(dot, mouse.x, mouse.y)

      // Apply spring force to return to original position
      const springX = (dot.originalX - dot.x) * SPRING_CONSTANT
      const springY = (dot.originalY - dot.y) * SPRING_CONSTANT

      // Update velocity
      dot.vx = (dot.vx + fx + springX) * DAMPING_FACTOR
      dot.vy = (dot.vy + fy + springY) * DAMPING_FACTOR

      // Update position
      dot.x += dot.vx
      dot.y += dot.vy

      // Limit displacement from original position
      const displacement = Math.sqrt(
        (dot.x - dot.originalX) ** 2 + (dot.y - dot.originalY) ** 2
      )
      if (displacement > MAX_DISPLACEMENT) {
        const ratio = MAX_DISPLACEMENT / displacement
        dot.x = dot.originalX + (dot.x - dot.originalX) * ratio
        dot.y = dot.originalY + (dot.y - dot.originalY) * ratio
      }

      // Draw dot
      ctx.beginPath()
      ctx.arc(dot.x, dot.y, DOT_SIZE, 0, Math.PI * 2)
      ctx.fill()
    })

    animationRef.current = requestAnimationFrame(animate)
  }

  // Handle mouse and touch movement
  const handlePointerMove = (e: MouseEvent | TouchEvent) => {
    if (prefersReducedMotion) return

    const canvas = canvasRef.current
    if (!canvas) return

    const rect = canvas.getBoundingClientRect()
    let clientX, clientY

    if (e instanceof MouseEvent) {
      clientX = e.clientX
      clientY = e.clientY
    } else {
      // Touch event
      if (e.touches.length > 0) {
        clientX = e.touches[0].clientX
        clientY = e.touches[0].clientY
      } else {
        return
      }
    }

    mouseRef.current = {
      x: clientX - rect.left,
      y: clientY - rect.top,
    }
  }


  // Setup canvas and event listeners
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    // Set canvas size properly
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect()
      const dpr = window.devicePixelRatio || 1
      
      // Set the actual canvas size in memory (scaled to account for extra pixel density)
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      
      // Scale the drawing context so everything will work at the higher ratio
      const ctx = canvas.getContext('2d')
      if (ctx) {
        ctx.scale(dpr, dpr)
        // Set the CSS size to match the canvas size
        canvas.style.width = rect.width + 'px'
        canvas.style.height = rect.height + 'px'
      }
    }

    resizeCanvas()

    // Initialize dots
    const rect = canvas.getBoundingClientRect()
    dotsRef.current = initializeDots(rect.width, rect.height)

    // Setup canvas context
    const ctx = canvas.getContext('2d')
    if (ctx) {
      // Use theme-appropriate colors with extremely minimal opacity for whisper-subtlety
      if (theme === 'dark') {
        ctx.fillStyle = 'rgba(180, 180, 180, 0.1)' // Soft gray for dark theme - whisper subtle
      } else {
        ctx.fillStyle = 'rgba(120, 120, 120, 0.15)' // Medium gray for light theme - whisper subtle
      }
    }

    // Add event listeners
    if (!prefersReducedMotion) {
      window.addEventListener('mousemove', handlePointerMove)
      window.addEventListener('touchmove', handlePointerMove, { passive: true })
      window.addEventListener('resize', () => {
        resizeCanvas()
        const newRect = canvas.getBoundingClientRect()
        dotsRef.current = initializeDots(newRect.width, newRect.height)
      })
      animationRef.current = requestAnimationFrame(animate)
    }

    return () => {
      window.removeEventListener('mousemove', handlePointerMove)
      window.removeEventListener('touchmove', handlePointerMove)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isDesktop, prefersReducedMotion, theme])

  // Detect reduced motion preference
  useEffect(() => {
    // Reduced motion detection
    const checkReducedMotion = () => {
      setPrefersReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
    }

    checkReducedMotion()

    // Listen for changes
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    motionQuery.addEventListener('change', checkReducedMotion)

    return () => {
      motionQuery.removeEventListener('change', checkReducedMotion)
    }
  }, [])

  // Don't render if reduced motion is preferred
  if (prefersReducedMotion) {
    return null
  }

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none -z-10 w-full h-full ${className}`}
      style={{
        willChange: 'transform',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
      }}
    />
  )
}
