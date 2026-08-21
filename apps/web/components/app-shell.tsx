"use client"

import type { ReactNode } from "react"

import { AppSidebar } from "@/components/app-sidebar"
import { FullscreenToggle } from "@/components/fullscreen-toggle"
import { Toaster } from "@/components/ui/sonner"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar"
import { useFullscreen } from "@/hooks/use-fullscreen"

export function AppShell({ children }: { children: ReactNode }) {
  const { isFullscreen, toggle: toggleFullscreen } = useFullscreen()

  return (
    <SidebarProvider className="h-svh overflow-hidden">
      <ShellBody
        isFullscreen={isFullscreen}
        toggleFullscreen={toggleFullscreen}
      >
        {children}
      </ShellBody>
    </SidebarProvider>
  )
}

// Inside SidebarProvider, so it can close the mobile sidebar sheet.
function ShellBody({
  isFullscreen,
  toggleFullscreen,
  children,
}: {
  isFullscreen: boolean
  toggleFullscreen: () => void
  children: ReactNode
}) {
  const { setOpenMobile } = useSidebar()

  // Dismiss the mobile sheet so Ctrl/Cmd+B can't reopen it in fullscreen.
  const enterFullscreen = () => {
    if (!document.fullscreenElement) setOpenMobile(false)
    toggleFullscreen()
  }

  return (
    <>
      <AppSidebar />
      <SidebarInset className="min-h-0">
        <header className="flex h-14 shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          {/* No sidebar to open while fullscreen; the exit toggle remains. */}
          {!isFullscreen && (
            /* Mobile-only: the sidebar is an off-screen sheet below md, so it needs an opener. */
            <SidebarTrigger className="ml-2 md:hidden" />
          )}
          <FullscreenToggle
            isFullscreen={isFullscreen}
            onToggle={enterFullscreen}
          />
        </header>
        <div className="flex min-h-0 flex-1 flex-col">
          <div className="@container/main flex min-h-0 flex-1 flex-col gap-2 overflow-y-auto">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              {children}
            </div>
          </div>
        </div>
        <Toaster />
      </SidebarInset>
    </>
  )
}
