import emailjs from 'emailjs-com';
import { useState } from 'react';
import './contact.scss'
import img from "../../assets/shake.svg"
export default function Contact() {
  const [message, setMessage] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true)
    emailjs.sendForm('service_66a3zyd','template_ome7wup',
     e.target,
      'Lnpt0XU0DXSsZtDKU').then(res=>{
        console.log(res)
      }).catch(err=>console.log(err))
  }
  return (  
    <div className='contact' id='contact'>
      <div className="left">
      <img src={img} alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
         <input type="text" name='name' placeholder='name' />
          <input type="text" name='user-email' placeholder='Email' />
          <textarea placeholder='Message'name='message'></textarea>
          <button type='submit'>Send</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </div>
  )
}
