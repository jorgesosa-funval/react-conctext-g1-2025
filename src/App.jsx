import React, { useState } from 'react'
import Modal from './components/Modal'
import ShowCounter from './components/ShowCounter'
import CardGrid from './components/CardGrid'

export default function App() {

  const [ open, setOpen ] = useState(false)
  function toggleModal(e) {
    if (e.target.role === "modal" || e.target.role === "open-modal") {
      setOpen(!open)
    }
  }

  return (
    <div className='w-full h-screen flex gap-4 flex-wrap'>
      <div className='bg-cyan-400 p-4 w-full'>

        <button className='bg-blue-900 cursor-pointer px-4 py-2 text-white rounded-md' onClick={toggleModal} role='open-modal'>
          Open Modal
        </button>

      </div>

      <ShowCounter />

      <CardGrid />

      {
        open &&
        <Modal
          onClose={toggleModal}
        />
      }

    </div>
  )
}
