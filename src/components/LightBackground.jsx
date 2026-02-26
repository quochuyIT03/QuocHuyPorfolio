import React from 'react'

export const LightBackground = () => {
  return (
    <div className='fixed inset-0 overflow-hidden pointer-events-none z-0'>
        <div className="fixed inset-0 -z-10 overflow-hidden dark:hidden">
      
      <div className="absolute inset-0 light-sky" />

      <div className="light-blob w-125 h-125 bg-blue-300 -top-25 -left-25" />
    
      <div
        className="light-blob w-150 h-150 bg-purple-300 -bottom-37.5 -right-37.5"
        style={{ animationDelay: "4s" }}
      />

      <div
        className="light-blob w-100 h-100 bg-pink-300 top-[40%] left-[30%]"
        style={{ animationDelay: "8s" }}
      />
    </div>
    </div>
    
    
  )
}
