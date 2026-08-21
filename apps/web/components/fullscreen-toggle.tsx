"use client"

import { MaximizeIcon, MinimizeIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function FullscreenToggle({
  isFullscreen,
  onToggle,
}: {
  isFullscreen: boolean
  onToggle: () => void
}) {
  const label = isFullscreen ? "Exit full screen" : "Enter full screen"

  return (
    <div className="ml-auto flex items-center gap-1 pr-2">
      <Tooltip>
        <TooltipTrigger
          render={
            <Button
              variant="ghost"
              size="icon-sm"
              aria-label={label}
              aria-pressed={isFullscreen}
              onClick={onToggle}
            />
          }
        >
          {isFullscreen ? <MinimizeIcon /> : <MaximizeIcon />}
        </TooltipTrigger>
        <TooltipContent side="bottom">{label}</TooltipContent>
      </Tooltip>
    </div>
  )
}
