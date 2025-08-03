import React from 'react'
import Model from './Model'
import { Formik, Form, Field } from 'formik'
import { addDoc,collection, doc, updateDoc } from 'firebase/firestore';
import { db } from '../Config/firebase';
import { toast } from 'react-toastify';





function AddCreate({ onClose, isOpen,isUpdate,app }) {
    const AddContact = async(contact) => 
{
    try{
        const contactRef = collection(db, "contects");
await addDoc(contactRef,contact)
 toast.success("Contact added successfully");
        onClose(); // Close the modal after adding the contact
    }
    catch(error){
        console.log(error);
    }
}
    const updateContact = async(contact,id) => 
{
    try{
        const contactRef = doc(db, "contects",id);
await updateDoc(contactRef,contact)
 toast.success("Contact updated successfully");
        onClose(); // Close the modal after updating the contact
    }
    catch(error){
        console.log(error);
    }

    
}
    return (
        <div>
            <Model onClose={onClose} isOpen={isOpen}>
                <Formik
                    initialValues={isUpdate ?{
                        name: app.name,
                        email: app.email,
                    } : {
                        name: '',
                        email: '',
                    }}
                    onSubmit={(values)=> {
                        console.log(values);
                        // if(isUpdate){
                        //     updateContact({
                        //         name: values.name,
                        //         email: values.email,
                        //     }, app.id);
                        // }
                        // else

                            isUpdate ? updateContact(values,app.id):
                        AddContact(values);
                      
                    
                    }}
                >
                    <Form className='flex flex-col gap-1'>
                        <div className='' >
                            <label htmlFor='name'>Name</label> {/* ✅ HTML label */}
                            <Field name='name' id='name' className='border p-2 rounded h-10 w-full' />
                        </div>
                        <div className='mt-3'>
                            <label htmlFor='email'>Email</label> {/* ✅ HTML label */}
                            <Field type='email' name='email' className='border p-2 rounded h-10 w-full' />
                        </div>
                        <button className='bg-orange-400 border px-4 py-2 mt-2 rounded self-end'>{isUpdate ? "Update" :"Add"} Contact</button>
                    </Form>
                </Formik>
            </Model>
        </div>
    )
}

export default AddCreate
