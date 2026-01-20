
import Header from "@/components/shared/Header"
import {AppSidebar} from "@/components/shared/sidebar"
import { LayoutDashboard, Settings, Shield, Users } from "lucide-react"

export default function AdminDashboardLayout({children}:{
    children:React.ReactNode

}){
 
    return <div className="min-w-full">
        <Header/>
         <div className="flex w-full items-center gap-5">
<AppSidebar

/>
    
       <div className="w-full">
         {children}
    
       </div>
    </div>
    </div>
}