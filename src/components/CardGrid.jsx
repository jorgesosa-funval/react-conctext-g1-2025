import React, { useContext } from 'react'
import { CounterContext } from '../providers/CounterProvider'

export default function CardGrid() {
    const array = [ 1, 2, 3, 4, 5, 5, 6, 6, 7, 8, 9, 1, 23, 4, 5, 56, 6 ]
     const {counter} = useContext(CounterContext)
    return (
        <>
            {array.slice(0, counter).map((item, i) => (
                <div key={i} className='w-60 h-80 bg-red-400'>
                    {item}
                </div>
            ))}

        </>
    )
}
