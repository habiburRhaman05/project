import { authServices } from '@/services/auth/authService';
import { redirect } from 'next/navigation';
import React from 'react'

const UserLayout = async({
    children
}:{
    children:React.ReactNode
}) => {
        const user = await authServices.getUserSession();

        if(user?.role !== "USER"){
            redirect("/dashboard")
        }
    
  return (
    <div>
        {children}
    </div>
  )
}

export default UserLayout