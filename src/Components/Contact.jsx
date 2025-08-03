import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleUser, faTrash, faMarker } from '@fortawesome/free-solid-svg-icons'
import { collection, deleteDoc, doc } from 'firebase/firestore'
import { db } from '../Config/firebase'
import AddCreate from "./AddCreate"
import { useState } from "react"
import useDisclose from "../hooks/useDisclose"
import { toast } from "react-toastify"




function Contact({ app }) {
  const { isOpen, onClose, onOpen } = useDisclose();

  const handleDelete = async (id) => {
    try {
      const contactRef = collection(db, "contects");
      await deleteDoc(doc(contactRef, id));
      toast.error("Contact deleted successfully");

     onClose(); // Close the modal after deleting the contact
     

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div key={app.id} className='bg-yellow-200 rounded-lg p-2 '>
      <div className='flex items-center gap-3'>
        <FontAwesomeIcon icon={faCircleUser} className=' text-yellow-500 text-3xl' />
        <div className=''>
          <h2 className='font-bold'>{app.name}</h2>
          <p className='text-sm'>{app.email}</p>
        </div>
        <div className=' flex justify-center items-center gap-3 ml-auto mr-2 text-lg'>
          <FontAwesomeIcon onClick={() => handleDelete(app.id)} icon={faTrash} className='text-orange-400 cursor-pointer' />
          <div>
            <FontAwesomeIcon onClick={onOpen} icon={faMarker} className="cursor-pointer" />
          </div>
        </div>
      </div>
      <AddCreate app ={app} isUpdate isOpen={isOpen}  onClose={onClose}></AddCreate>


    </div>
  )
}

export default Contact