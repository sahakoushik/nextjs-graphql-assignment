import React from 'react'

const Loading = () => {
  return (
    <div className="border-3 border-blue-300 shadow-4xl rounded-md p-4 w-3/4 mx-auto bg-[#f3f5f7]">
        <div className="animate-pulse flex gap-8">
            <div>
                <div className="bg-white shadow-xl h-12 w-48 m-2"></div>
                <div className="bg-white shadow-xl h-12 w-48 m-2"></div>
                <div className="bg-white shadow-xl h-12 w-48 m-2"></div>
                <div className="bg-white shadow-xl h-12 w-48 m-2"></div>
            </div>
            
            <div className="flex-1 space-y-6 py-1">
                <div className="bg-white shadow-xl h-24 w-full m-2"></div>
                <div className="bg-white shadow-xl h-24 w-full m-2"></div>
                <div className="bg-white shadow-xl h-24 w-full m-2"></div>
            </div>
        </div>
    </div>
  )
}

export default Loading