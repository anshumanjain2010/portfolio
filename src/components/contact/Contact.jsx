import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsInstagram}  from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react'; //////////////////?
import emailjs from 'emailjs-com'

const Contact = () => {
  const form =useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_c7epfhd', 'template_d1eblke', form.current, 'Ga5IU88Yw3AolobIi')
    e.target.reset();
  };

  return (
    <section id='contact'>
      <h2> Contact Me</h2>
      <div className="container contact_container"> 
      {/* <h5> Get In Touch</h5> */}
      {/* <h2> Contact Me</h2> */}
        <div className='contact_options'>
          <article className="contact_option">
            <MdOutlineEmail className='contact_option-icon' />
            <h4> Email</h4>
            <h5> anshumanjainjain7@gmail.com</h5>
            <a href="mailto:anshumanjainjain7@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className="contact_option">
            <BsInstagram className='contact_option-icon' />
            <h4>Instagram</h4>
            <h5>_anshuman__jain_</h5>
            <a href="https://www.instagram.com/_anshuman__jain_/" target="_blank">Send a message</a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className='contact_option-icon' />
            <h4>Whatsapp</h4>
            <h5>+91 9993247299</h5>
            <a href="https://api.whatsapp.com/send?phone=+919993247299" target="_blank">Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPITONS */}
        <div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" reows="7" placeholder="Your Message" required ></textarea> 
          <button type='submit' className='btn btn-primary'> Send Message</button>
        </form>
        </div>
      </div>
    </section>
  )
}

// to open link in new tab we used target =blank 
// use of class?
export default Contact