
import { AdminDashboardSidebar } from "@/components/pages/admin-dashboard/SideBar";
import { UserDashboardSidebar } from "@/components/pages/user-dashboard/SideBar"
import Header from "@/components/shared/Header"
import { authServices } from "@/services/auth/authService"
import { redirect } from "next/navigation";

export default async function UserDashboardLayout({ children }: {
    children: React.ReactNode


}) {

    const user = await authServices.getUserSession();
console.log(user);

    if(!user){
        redirect("/sign-in")
    }

    return <div className="min-w-full">
        <Header />
      
        <div className="flex w-full items-center ">
            {
                user?.role === "USER" ? <UserDashboardSidebar /> : <AdminDashboardSidebar />
            }
            <div className="w-full">
                {children}
            </div>
        </div>
    </div>
}