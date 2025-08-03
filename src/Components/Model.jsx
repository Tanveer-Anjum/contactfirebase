import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { createPortal } from 'react-dom'
import React from 'react'

function Model ({onClose,isOpen,children}) {
  return createPortal(
    <>
      {isOpen && (
        <>
        <div className="fixed inset-5 backdrop-blur-sm bg-opacity-60 flex justify-center items-center md:top-1/2 md:left-1/2  md:transform md:-translate-x-1/2 md:-translate-y-1/2">
          <div className="bg-white p-4 rounded-lg">
            <button onClick={onClose} className=" text-2xl absolute top-2 right-2">
              <FontAwesomeIcon icon={faCircleXmark} className='md:text-3xl ' />
            </button>
            {children}
          </div>
        </div>
        </>
      )}
    </>,
    document.getElementById('modal-root')
  )
}

export default Model