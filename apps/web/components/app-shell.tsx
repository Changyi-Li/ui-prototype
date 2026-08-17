"use client"

import type { ReactNode } from "react"

import { AppSidebar } from "@/components/app-sidebar"
import { Toaster } from "@/components/ui/sonner"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-14 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          {/* Mobile-only: the sidebar is an off-screen sheet below md, so it needs an opener. */}
          <SidebarTrigger className="ml-2 md:hidden" />
        </header>
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              {children}
            </div>
          </div>
        </div>
        <Toaster />
      </SidebarInset>
    </SidebarProvider>
  )
}
