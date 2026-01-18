import Header from '@/components/shared/Header'
import React from 'react'

const CommonLayout = (
    {children}:{
        children:React.ReactNode
    }
) => {
  return (
    <div className='min-w-full'>
    <Header/>
    {children}
    
    </div>
  )
}

export default CommonLayout