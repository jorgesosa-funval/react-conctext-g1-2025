import React from 'react' 
import Contador from './Contador'
export default function Modal({ onClose, onIncrement, onDecrement, counter }) {

    return (
        <div className='w-full h-screen fixed bg-black/40'
            role='modal' onClick={onClose}>
            <div role='modal-content' className='w-full h-1/2 bg-white'>
                <p className='text-center text-2xl'>Soy el modal</p>

                <Contador
                    onIncrement ={onIncrement}
                    onDecrement ={onDecrement} 
                    counter={counter}
                />
                
            </div>
        </div>
    )
}
