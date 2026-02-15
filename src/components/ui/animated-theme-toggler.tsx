"use client"

import { useCallback } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { cn } from "@/lib/utils"

export function AnimatedThemeToggle({
  className,
  ...props
}: React.ComponentProps<"button">) {
  const { theme, setTheme, resolvedTheme } = useTheme()

  const toggleTheme = useCallback(
    async (event: React.MouseEvent<HTMLButtonElement>) => {
      const isDark = resolvedTheme === "dark"
      const newTheme = isDark ? "light" : "dark"

      // @ts-ignore
      if (!document.startViewTransition) {
        setTheme(newTheme)
        return
      }

      const button = event.currentTarget
      const { top, left, width, height } = button.getBoundingClientRect()
      const x = left + width / 2
      const y = top + height / 2
      const maxRadius = Math.hypot(
        Math.max(left, window.innerWidth - left),
        Math.max(top, window.innerHeight - top)
      )

      // @ts-ignore
      const transition = document.startViewTransition(async () => {
        setTheme(newTheme)
      })

      await transition.ready

      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${maxRadius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 500,
          easing: "ease-in-out",
          pseudoElement: "::view-transition-new(root)",
        }
      )
    },
    [resolvedTheme, setTheme]
  )

  return (
    <button
      onClick={toggleTheme}
      className={cn("relative flex items-center justify-center size-10 rounded-full hover:bg-muted transition-colors", className)}
      {...props}
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 absolute" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}
