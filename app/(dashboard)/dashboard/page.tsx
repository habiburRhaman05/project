import { authServices } from '@/services/auth/authService';
import React from 'react'

const page = async() => {
      const user = await authServices.getUserSession();
    
        
 
      if(user?.role === "USER"){
        return <div>user overview</div>
      }
      if(user?.role === "ADMIN"){
        return <div>admin overview</div>
      }
      return null
 
}

export default page