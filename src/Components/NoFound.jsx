import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'

function NoFound() {
  return (
    <div className=' overflow-hidden flex flex-col items-center justify-center h-[400px] gap-4 text-white'>
        <FontAwesomeIcon icon={faCircleUser} className=' text-yellow-500 text-9xl' />
      <div>No Contact</div>
    </div>
  )
}

export default NoFound