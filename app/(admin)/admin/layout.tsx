
import { AdminDashboardSidebar } from "@/components/pages/admin-dashboard/SideBar";
import Header from "@/components/shared/Header";
import { authServices } from "@/services/auth/authService";
import { redirect } from "next/navigation";

export default async function AdminDashboardLayout({children}:{
    children:React.ReactNode

}){

    const user = await authServices.getUserSession();

    if(user?.role !== "ADMIN"){
        redirect("/dashboard")
    }
 
    return <div className="min-w-full">
        <Header/>
         <div className="flex w-full items-center ">

    <AdminDashboardSidebar/>
       <div className="w-full">
 
         {children}
    
       </div>
    </div>
    </div>
}