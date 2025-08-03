
  import React from 'react';
import Navbar from './Components/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import { collection, getDocs, onSnapshot } from 'firebase/firestore'
import { db } from './Config/firebase'
import Contact from './Components/Contact'
import Model from './Components/Model'
import AddCreate from './Components/AddCreate'
import useDisclose from './hooks/useDisclose'

import { ToastContainer, toast } from 'react-toastify';

function App() {

  const [contacts, setContacts] = useState([])
  const { isOpen, onClose, onOpen } = useDisclose();

  useEffect(() => {
    const getContacts = async () => {

      try {
        const contactRef = collection(db, "contects");
        // const contactSnapshot = await getDocs(contactRef);

        onSnapshot(contactRef, (snapshot) => {

          const contactList = snapshot.docs.map((doc) => {
            return { ...doc.data(), id: doc.id }
          })
         
          setContacts(contactList)
          return contactList;

        })
      }

      catch (error) {
        console.log(error);
      }
    }

    getContacts()

  }, [])
  return (
    <>
      <div className="max-w-[370px] mx-auto md:max-w-[600px] lg:max-w-[800px] xl:max-w-[1000px] 2xl:max-w-[1200px]">
        <Navbar />

        <div className='flex justify-center items-center '>
          <div className=" w-full flex items-center rounded-lg overflow-hidden my-3 relative align-center">
            <FontAwesomeIcon icon={faMagnifyingGlass} className=" text-gray-500 absolute left-2" />
            <input type="text" placeholder="Enter your name" className=" w-full p-2 pl-10 rounded-lg border border-gray-300 bg-white " />

          </div>
          <FontAwesomeIcon onClick={onOpen} icon={faCirclePlus} className="p-2 text-white text-2xl hover:text-gray-500 ease-in-out duration-200" />
        </div>
        <div className='flex gap-2 flex-col'>
          {contacts.map((app) => (

            <Contact key={app.id} app={app} />


          )


          )}
        </div>
      </div>
      <AddCreate
        onClose={onClose}
        isOpen={isOpen}

      />
      <ToastContainer  position='bottom-right'/>
    </>
  )
}

export default App