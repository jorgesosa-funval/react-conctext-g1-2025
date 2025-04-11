import { createContext, useState } from 'react'

export const CounterContext = createContext();
export default function CounterProvider({ children }) {
    const [ counter, setCounter ] = useState(3)
    
    function decrement() {
        setCounter(counter - 1)
    }

    function increment() {
        setCounter(counter + 1)
    }


    return (
        <CounterContext.Provider value={{
            counter,
            decrement,
            increment
        }}>
            {children}
        </CounterContext.Provider>
    )
}


