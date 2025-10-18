"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  // useEffect only runs on the client, so now we can safely show the UI
  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="relative inline-flex items-center bg-muted/50 rounded-full p-1">
        <Sun className="h-4 w-4 text-muted-foreground" />
        <span className="sr-only">Toggle theme</span>
      </div>
    )
  }

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  const isDark = theme === 'dark'

  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex items-center rounded-full p-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:ring-offset-0"
      aria-label="Toggle theme"
    >
      {/* Track */}
      <div className="relative w-12 h-6 rounded-full bg-muted/50">
        {/* Thumb */}
        <motion.div
          className="absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-background flex items-center justify-center"
          animate={{ x: isDark ? 24 : 0 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        >
          {isDark ? (
            <Moon className="h-3 w-3 text-muted-foreground" />
          ) : (
            <Sun className="h-3 w-3 text-muted-foreground" />
          )}
        </motion.div>
      </div>
    </button>
  )
}
