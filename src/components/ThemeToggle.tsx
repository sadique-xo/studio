"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { useToast } from "@/hooks/use-toast"

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  const { toast } = useToast()

  // Prevent hydration mismatch by only showing UI after mount
  React.useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = React.useCallback(() => {
    // Use resolvedTheme to determine current state and toggle accordingly
    if (resolvedTheme === 'dark') {
      setTheme('light')
      toast({
        title: "Theme Changed",
        description: "Switched to light mode",
        duration: 2000,
      })
    } else {
      setTheme('dark')
      toast({
        title: "Theme Changed",
        description: "Switched to dark mode",
        duration: 2000,
      })
    }
  }, [resolvedTheme, setTheme, toast])

  // Use resolvedTheme to get the actual theme being applied (handles system theme)
  const isDark = resolvedTheme === 'dark'

  if (!mounted) {
    return (
      <div className="relative inline-flex items-center bg-muted/50 rounded-full p-1">
        <Sun className="h-4 w-4 text-muted-foreground" />
        <span className="sr-only">Toggle theme</span>
      </div>
    )
  }

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
          animate={{ 
            x: isDark ? 24 : 0 
          }}
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
