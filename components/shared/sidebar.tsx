"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  FileText,
  PenSquare,
  User,
  Settings,
  LogOut,
  Users,
  Shield,
  UserCircle,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"


const role: "admin" | "user" = "admin"

const userProfile = {
  name: "Habib",
  email: "habib@email.com",
  avatar: "/avatar.png",
}

const userItems = [
  { title: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { title: "My Posts", href: "/dashboard/posts", icon: FileText },
  { title: "Create Post", href: "/dashboard/create", icon: PenSquare },
]

const adminItems = [
  { title: "Admin Dashboard", href: "/admin", icon: Shield },
  { title: "Manage Users", href: "/admin/users", icon: Users },
]

const commonItems = [
  { title: "Profile", href: "/profile", icon: UserCircle },
  { title: "Settings", href: "/dashboard/settings", icon: Settings },
]

/* ------------------------------------------------------------------ */

export function AppSidebar() {
  const pathname = usePathname()

  const isActive = (href: string) =>
    href === "/dashboard"
      ? pathname === "/dashboard"
      : pathname.startsWith(href)

  const handleLogout = () => {
    // toast({
    //   title: "Logged out",
    //   description: "You have been logged out successfully.",
    // })
  }

  return (
    <Sidebar
      collapsible="offcanvas"
      className="top-16 hidden h-[calc(100vh-64px)] border-r border-border lg:block"
    >
      <SidebarContent className="bg-background text-foreground">
  
        <SidebarGroup className="px-4 py-2">
          <SidebarGroupLabel className="mb-3 px-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
            Dashboard
          </SidebarGroupLabel>

          <SidebarMenu className="gap-1.5">
            {userItems.map((item) => {
              const active = isActive(item.href)

              return (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton
                    asChild
                    isActive={active}
                    className={cn(
                      "relative flex items-center gap-3 rounded-md px-3 py-5 transition-all",
                      "hover:bg-muted hover:text-foreground",
                      active &&
                        "bg-muted text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
                    )}
                  >
                    <Link href={item.href}>
                      {active && (
                        <span className="absolute left-0 h-5 w-1 rounded-full bg-primary" />
                      )}
                      <item.icon className="h-[18px] w-[18px]" />
                      <span className="text-sm font-medium">
                        {item.title}
                      </span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              )
            })}
          </SidebarMenu>
        </SidebarGroup>

        {/* ---------------------------------------------------- */}
        {/* Admin Section */}
        {/* ---------------------------------------------------- */}
        {/* {role === "admin" && (
          <SidebarGroup className="px-4 pb-6">
            <SidebarGroupLabel className="mb-3 px-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
              Admin
            </SidebarGroupLabel>

            <SidebarMenu className="gap-1.5">
              {adminItems.map((item) => {
                const active = isActive(item.href)

                return (
                  <SidebarMenuItem key={item.href}>
                    <SidebarMenuButton
                      asChild
                      isActive={active}
                      className={cn(
                        "relative flex items-center gap-3 rounded-xl px-3 py-2.5 transition-all",
                        "hover:bg-muted hover:text-foreground",
                        active && "bg-muted text-foreground"
                      )}
                    >
                      <Link href={item.href}>
                        {active && (
                          <span className="absolute left-0 h-5 w-1 rounded-full bg-primary" />
                        )}
                        <item.icon className="h-[18px] w-[18px]" />
                        <span className="text-sm font-medium">
                          {item.title}
                        </span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroup>
        )} */}

        {/* ---------------------------------------------------- */}
        {/* Settings Section */}
        {/* ---------------------------------------------------- */}
        <SidebarGroup className="px-4">
          <SidebarGroupLabel className="mb-3 px-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
            Settings
          </SidebarGroupLabel>

          <SidebarMenu className="gap-1.5">
            {commonItems.map((item) => {
              const active = isActive(item.href)

              return (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton
                    asChild
                    isActive={active}
                    className={cn(
                      "flex items-center gap-3 rounded-md px-3 py-5 transition-all",
                      "hover:bg-muted hover:text-foreground",
                      active && "bg-muted text-foreground"
                    )}
                  >
                    <Link href={item.href}>
                      <item.icon className="h-[18px] w-[18px]" />
                      <span className="text-sm font-medium">
                        {item.title}
                      </span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              )
            })}
          </SidebarMenu>
        </SidebarGroup>

        {/* ---------------------------------------------------- */}
        {/* Logout */}
        {/* ---------------------------------------------------- */}
        <div className="mt-auto border-t border-border p-4">
          <Button
            variant="ghost"
            className="w-full justify-start gap-3 text-muted-foreground hover:text-destructive"
            onClick={handleLogout}
          >
            <LogOut className="h-5 w-5" />
            Logout
          </Button>
        </div>
      </SidebarContent>
    </Sidebar>
  )
}
