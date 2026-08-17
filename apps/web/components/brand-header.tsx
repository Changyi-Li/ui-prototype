"use client"

import Link from "next/link"
import { PanelLeftCloseIcon, PanelLeftOpenIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { SidebarHeader, useSidebar } from "@/components/ui/sidebar"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

// Sidebar brand header — validated design (prototype verdict):
// - bar look: border-b border-sidebar-border
// - h-14 header, matched h-14 page bar in app-shell
// - logo-sm + "Monitor ERP" wordmark in brand blue (--brand / text-brand), links to "/"
// - toggle inside the header (PanelLeftCloseIcon); collapsed: logo swaps to
//   PanelLeftOpenIcon on hover. No badge, no team switcher.

export function BrandHeader() {
  const { state, isMobile, toggleSidebar } = useSidebar()
  // On mobile the sidebar is a full-width sheet; the desktop collapsed state
  // doesn't apply there, so always show the expanded header (its toggle closes
  // the sheet, per design decision Q4).
  const collapsed = state === "collapsed" && !isMobile

  if (collapsed) {
    return (
      <SidebarHeader className="flex items-center border-b border-sidebar-border">
        <Tooltip>
          <TooltipTrigger
            render={
              <button
                type="button"
                aria-label="Expand sidebar"
                onClick={toggleSidebar}
                className="group relative flex size-8 items-center justify-center rounded-md transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              />
            }
          >
            <img
              src="/logo-sm.png"
              alt="Monitor ERP"
              className="size-6 transition-opacity duration-200 group-hover:opacity-0"
            />
            <PanelLeftOpenIcon className="absolute size-4 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
          </TooltipTrigger>
          <TooltipContent side="right">Expand sidebar</TooltipContent>
        </Tooltip>
      </SidebarHeader>
    )
  }

  return (
    <SidebarHeader className="flex h-14 flex-row items-center gap-2 border-b border-sidebar-border">
      <Link
        href="/"
        aria-label="Monitor ERP — go to dashboard"
        className="flex min-w-0 items-center gap-2 rounded-md px-1.5 py-1 transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
      >
        <img src="/logo-sm.png" alt="" className="size-6 shrink-0" />
        <span className="truncate text-sm font-semibold text-brand">
          Monitor ERP
        </span>
      </Link>
      <div className="ml-auto">
        <Tooltip>
          <TooltipTrigger
            render={
              <Button
                variant="ghost"
                size="icon-sm"
                aria-label="Collapse sidebar"
                onClick={toggleSidebar}
              />
            }
          >
            <PanelLeftCloseIcon />
          </TooltipTrigger>
          <TooltipContent side="bottom">Collapse sidebar</TooltipContent>
        </Tooltip>
      </div>
    </SidebarHeader>
  )
}
