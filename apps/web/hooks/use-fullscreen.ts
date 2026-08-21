"use client"

import * as React from "react"

// Mirrors fullscreen state as data-fullscreen on <html>, which globals.css
// uses to hide the sidebar.

export function useFullscreen() {
  const [isFullscreen, setIsFullscreen] = React.useState(false)

  React.useEffect(() => {
    const onChange = () => {
      const fullscreen = Boolean(document.fullscreenElement)
      setIsFullscreen(fullscreen)
      document.documentElement.toggleAttribute("data-fullscreen", fullscreen)
    }
    document.addEventListener("fullscreenchange", onChange)
    return () => document.removeEventListener("fullscreenchange", onChange)
  }, [])

  const toggle = React.useCallback(() => {
    if (document.fullscreenElement) {
      void document.exitFullscreen()
    } else {
      void document.documentElement.requestFullscreen().catch(() => {
        // Denied (iframe without allow-fullscreen, etc.) — stay windowed.
      })
    }
  }, [])

  return { isFullscreen, toggle }
}
