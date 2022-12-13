import React from 'react';

const Contact = () => {
  return (
    <section className='contact-form flex flex-col justify-center items-center m-4 p-3' id='contact'>
      <h2 className='text-center text-lg text-blue-500'>Get In Touch</h2>
      <h3>It would really feel great if you reached out. Want to say hello or got a proposal?</h3>
      <form action="" method='post' className='flex flex-col items-center p-4 m-4'>
        <label htmlFor="name">Name:</label>
        <input type="text" id='name' name='name' placeholder='Your name'/>
        <label htmlFor="email">Email Address:</label>
        <input type="email" id='email' name='email' placeholder='Your email address'/>
        <label htmlFor="message">Message:</label>
        <textarea name="message" id="message" className='p-4' placeholder='Hello John, can we hop on a call and discuss the project?'></textarea>
        <input type="submit" value="Submit" className='p-2 m-2 btn'/>
      </form> 
    </section>
  )
}

export default Contact;