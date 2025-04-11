import   { useContext } from 'react'
import {CounterContext} from '../providers/CounterProvider';

export default function Contador() {
    const {counter, decrement, increment} = useContext(CounterContext);
    return (
        <div className='flex justify-center py-8 items-center gap-4'>
            <button className='bg-blue-900 cursor-pointer px-4 py-2 text-white rounded-md' onClick={decrement} >
                -
            </button>
            <span>
                {counter}
            </span>
            <button className='bg-blue-900 cursor-pointer px-4 py-2 text-white rounded-md'  onClick={increment}>
                +
            </button>
        </div>
    )
}
