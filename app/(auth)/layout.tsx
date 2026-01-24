import { redirect } from "next/navigation";

export default async function AuthLayout({ children }: { children: React.ReactNode }) {
 
//  const userData = await {
// 		name:"habib",
// 		role:"ADMIN"
// 	}

//   if(!userData){
//     redirect(userData.role === "ADMIN" ? "/admin/dashboard" : "/dashboard")
//   }

  return (
    <main className="min-w-full">
      
        {children}
     
    </main>
  );
}