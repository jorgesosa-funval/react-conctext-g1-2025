import React from 'react'

export default function ShowCounter({counter}) {
    return (
        <div className='bg-black w-full p-2 text-white'>
            <p>{counter}</p>
        </div>
    )
}
