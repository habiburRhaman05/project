import React from 'react'

const layout = ({children,latestPosts}:{
    children:React.ReactNode
    latestPosts:React.ReactNode
}) => {
  return (
    <div>
        {children}
        <div className="flex gap-8">
        
        {latestPosts}
        </div>
    </div>
  )
}

export default layout