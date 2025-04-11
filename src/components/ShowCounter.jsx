import React, { useContext } from 'react'
import { CounterContext } from '../providers/CounterProvider'

export default function ShowCounter() {
    const {counter} = useContext(CounterContext)
    return (
        <div className='bg-black w-full p-2 text-white'>
            <p>{counter}</p>
        </div>
    )
}
