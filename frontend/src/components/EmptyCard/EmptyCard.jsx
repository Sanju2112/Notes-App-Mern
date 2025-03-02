import React from 'react'

const EmptyCard = ({message}) => {
  return (
    <div>
        <div className="w-full h-96 flex items-center justify-center">
            <p className="text-lg text-slate-800">{message}</p>
        </div>
    </div>
  )
}

export default EmptyCard