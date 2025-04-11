import React from 'react'

export default function Contador({onIncrement, onDecrement, counter}) {
    return (
        <div className='flex justify-center py-8 items-center gap-4'>
            <button className='bg-blue-900 cursor-pointer px-4 py-2 text-white rounded-md' onClick={onDecrement} >
                -
            </button>
            <span>
                {counter}
            </span>
            <button className='bg-blue-900 cursor-pointer px-4 py-2 text-white rounded-md'  onClick={onIncrement}>
                +
            </button>
        </div>
    )
}
