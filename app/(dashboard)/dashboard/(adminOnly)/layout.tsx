import { authServices } from '@/services/auth/authService';
import { redirect } from 'next/navigation';
import React from 'react'

const AdminLayout = async({
    children
}:{
    children:React.ReactNode
}) => {
        const user = await authServices.getUserSession();

        if(user?.role !== "ADMIN"){
            redirect("/dashboard")
        }
    
  return (
    <div>
        {children}
    </div>
  )
}

export default AdminLayout