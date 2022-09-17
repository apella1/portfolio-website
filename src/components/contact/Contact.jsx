import './contact.css';

const Contact = () => {
  return (
    <div name='contact' className='flex flex-col justify-center items-center w-full h-screen p-5 bg-slate-500'>
        <h2 className='text-center pb-4'>Contact Form</h2>
        <form action="" className='flex flex-col w-full'>
            <label htmlFor="first-name">First Name:</label>
            <input type="text" id='first-name' placeholder='First name'/>
            <label htmlFor="last-name">Last Name</label>
            <input type="text" id='last-name' placeholder='Last name'/>
            <label htmlFor="email">Email:</label>
            <input type="email" id='email' placeholder='Email Address'/>
            <label htmlFor="message">Message:</label>
            <textarea name="message" id="message" cols="30" rows="10" placeholder='Type your message here..'></textarea>
            <input type="submit" value="Submit" className='p-2 bg-blue-800 text-center flex justify-center'/>
        </form>
    </div>
  )
}

export default Contact