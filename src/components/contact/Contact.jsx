import './contact.css';

import React from 'react'

const Contact = () => {
  return (
      <div name='contact' className='w-full h-screen flex items-center p-4 contact'>
        <form method='POST' action="https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='font-bold inline text-center'>Contact</p>
                <p className='py-4'>You could use the form or email directly at apellajohn@gmail.com</p>
            </div>
            <input className='p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2' type="email" placeholder='Email' name='email' />
            <textarea className='p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='border-2 hover:bg-blue-600 hover:border-blue-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact