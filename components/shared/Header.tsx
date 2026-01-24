"use client"

import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Bell, Search, AlertCircle, Loader2, Command } from "lucide-react";
import ProfileAvater from "../auth/ProfileAvater";
import ToggleTheme from "./toggleTheme";
import { authClient } from "@/lib/auth-client";
import SearchBar from "./SearchBar";
import Link from "next/link";
import { cn } from "@/lib/utils";
import SwitchToBlogBtn from "./SwitchToBlogBtn";
import { useParams, usePathname } from "next/navigation";

export default function Header() {
  const { 
    data: session, 
    isPending, 
    error 
  } = authClient.useSession();

  const currentPath = usePathname()
  const isSideTrgiggerShow =   currentPath.includes("/dashboard") || currentPath.includes("/admin/dashboard")

  return (
    <header className="w-full h-16 border-b border-zinc-200 dark:border-zinc-800 bg-[#fbfbfb]/80 dark:bg-zinc-800/50 backdrop-blur-md px-4 flex items-center justify-between sticky top-0 z-50">
      
      {/* Left Side: Sidebar Toggle & Logo */}
      <div className="flex items-center gap-4">

{

    isSideTrgiggerShow && <SidebarTrigger className="text-zinc-600 cursor-pointer dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors rounded-xl" />
  
       

}        
        <Link href="/feed">
        <div className="flex items-center gap-2 group">
            <Command className="w-6 h-6 text-indigo-600 group-hover:rotate-180 transition-transform duration-500" />
            <span className="text-xl font-black tracking-tighter">Synapse</span>
          </div>
        </Link>
      </div>

      {/* Center: Search Bar */}
      <div className="flex-1 max-w-md mx-8 hidden md:block">
        <SearchBar />
      </div>

      {/* Right Side Actions */}
      <div className="flex items-center gap-1.5 sm:gap-3">
        
      

        <div className="flex items-center  px-2 sm:px-4 gap-1 sm:gap-2">
          <Button variant="ghost" size="icon" className="md:hidden text-zinc-600 dark:text-zinc-400 rounded-xl">
            <Search className="h-5 w-5" />
          </Button>

          <ToggleTheme />

         
        </div>


<SwitchToBlogBtn/>

        {/* Auth State Management */}
        <div className="pl-1 sm:pl-2 min-w-[40px] flex justify-center">
          {isPending ? (
            <div className="h-9 w-9 rounded-full  animate-pulse flex items-center justify-center border border-zinc-200 dark:border-zinc-800">
              <Loader2 className="w-4 h-4 text-zinc-400 animate-spin" />
            </div>
          ) : (
            <div className={cn("transition-all duration-300", error ? "opacity-50 grayscale" : "opacity-100")}>
              <ProfileAvater user={session?.user} />
            </div>
          )}
        </div>
      </div>
    </header>
  );
}