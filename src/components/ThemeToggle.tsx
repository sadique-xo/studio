"use client"

import * as React from "react"
import { AnimatedThemeToggle } from "@/components/ui/animated-theme-toggler"

export function ThemeToggle() {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="size-10" /> // Placeholder to prevent hydration mismatch
  }

  return <AnimatedThemeToggle />
}
