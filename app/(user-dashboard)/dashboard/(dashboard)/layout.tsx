import React from 'react'

const layout = ({children,posts}:{
    children:React.ReactNode
    posts:React.ReactNode
}) => {
  return (
    <div>
        {children}
        <div className="flex gap-8">
        
        {posts}
        </div>
    </div>
  )
}

export default layout