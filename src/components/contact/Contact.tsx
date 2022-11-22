import React from 'react';

const Contact = () => {
  return (
    <section className='contact-form flex flex-col justify-center items-center m-4 p-3' id='contact'>
      <h2 className='text-center text-lg'>Contact Me</h2>
      <h3>Got any project that you need consulting with? Get in touch now. I'm happy to collaborate with you.</h3>
      <form action="" method='post' className='flex flex-col items-center p-4 m-4'>
        <label htmlFor="name">Name:</label>
        <input type="text" id='name' name='name'/>
        <label htmlFor="email">Email Address:</label>
        <input type="email" id='email' name='email'/>
        <label htmlFor="message">Message:</label>
        <textarea name="message" id="message"></textarea>
        <input type="submit" value="Submit" className='p-2 m-2'/>
      </form> 
    </section>
  )
}

export default Contact;
