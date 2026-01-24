"use client"

import {
    FileText,
    LayoutDashboard,
    LogOut,
    PenSquare,
    Settings,
    Shield,
    UserCircle,
    Users,
    Lock
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { Button } from "@/components/ui/button"
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"




const userItems = [
  { title: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { title: "My Posts", href: "/dashboard/posts", icon: FileText },
  { title: "Create Post", href: "/dashboard/create-post", icon: PenSquare },
]



const commonItems = [
  { title: "Profile", href: "/dashboard/account/profile", icon: UserCircle },
  { title: "Security", href: "/dashboard/account/security", icon: Lock },
  { title: "Settings", href: "/dashboard/settings", icon: Settings },
]


export function UserDashboardSidebar() {
  const pathname = usePathname()

  const isActive = (href: string) =>
    href === "/dashboard"
      ? pathname === "/dashboard"
      : pathname.startsWith(href)

  const handleLogout = () => {
// handle logout logic
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

        {/* Settings Section */}
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

        {/* Logout */}

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
